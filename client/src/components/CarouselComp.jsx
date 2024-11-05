import React, { useState, useEffect } from "react";
import { Button, FileInput, Alert, Modal } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import axios from "axios";

export default function CarouselComp() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [images, setImages] = useState([]);
  const [editImageModalOpen, setEditImageModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [newImageURL, setNewImageURL] = useState("");

  // Resimleri getirmek için useEffect
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/carousel/getAllImage");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };
    fetchImages();
  }, []);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUploadProgress(null);
          setImageUploadError(null);

          // Resmi sunucuya yükle
          const response = await axios.post("/api/carousel/upload", {
            imageURL: downloadURL,
          });
          // Resimleri tekrar getir
          setImages((prevImages) => [...prevImages, response.data]);
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.error(error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`/api/carousel/${id}`);
      const response = await axios.get("/api/carousel/getAllImage");
      setImages(response.data);
    } catch (error) {
      console.error("Error deleting image", error);
    }
  };

  const handleEditImage = async () => {
    if (!file) {
      setImageUploadError("Please select an image to upload");
      return;
    }
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await axios.put(`/api/carousel/${selectedImageId}`, {
            imageURL: downloadURL,
          });

          // Resimleri tekrar getir
          const response = await axios.get("/api/carousel/getAllImage");
          setImages(response.data);
          setEditImageModalOpen(false);
          setNewImageURL("");
          setFile(null); // Clear the file after uploading
          setImageUploadProgress(null); // Reset progress
        }
      );
    } catch (error) {
      setImageUploadError("Error updating image");
      console.error(error);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Upload an Image
      </h1>
      <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
        <FileInput
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button
          type="button"
          gradientDuoTone="purpleToBlue"
          size="sm"
          outline
          onClick={handleUploadImage}
          disabled={imageUploadProgress}
        >
          {imageUploadProgress ? (
            <div className="w-16 h-16">
              <CircularProgressbar
                value={imageUploadProgress}
                text={`${imageUploadProgress || 0}%`}
              />
            </div>
          ) : (
            "Upload Image"
          )}
        </Button>
      </div>
      {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}

      {/* Yüklenen resimleri listele */}
      <h2 className="text-2xl my-4">Uploaded Images</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="relative">
            <img
              src={image.imageURL}
              alt="Uploaded"
              className="w-full h-40 object-cover"
            />
            <div className="absolute bottom-1 left-1 flex gap-2">
              <Button
                onClick={() => {
                  setSelectedImageId(image._id);
                  setEditImageModalOpen(true);
                }}
                color="info"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteImage(image._id)}
                color="failure"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        show={editImageModalOpen}
        onClose={() => setEditImageModalOpen(false)}
      >
        <Modal.Header>Edit Image</Modal.Header>
        <Modal.Body>
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {imageUploadProgress && (
            <div className="w-16 h-16">
              <CircularProgressbar
                value={imageUploadProgress}
                text={`${imageUploadProgress || 0}%`}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEditImage} color="green">
            Update
          </Button>
          <Button onClick={() => setEditImageModalOpen(false)} color="gray">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
