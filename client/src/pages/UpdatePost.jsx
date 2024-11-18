import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify"; // Ensure DOMPurify is imported

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { postId } = useParams();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPost();
  }, [postId]);

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
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sanitize the content to allow only <br> tags for spacing
      const sanitizedContent = DOMPurify.sanitize(formData.content, {
        ALLOWED_TAGS: ["br"], // Allow only <br> tags for spacing
      });
      const sanitizedBlogContent = DOMPurify.sanitize(formData.blogContent, {
        ALLOWED_TAGS: ["br", "p"], // Allow only <br> tags for spacing
      });

      const res = await fetch(
        `/api/post/updatepost/${postId}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            content: sanitizedContent, // Use sanitized content
            blogContent: sanitizedBlogContent, // Use sanitized blog content
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
            <option value="uncategorized">Select a category</option>
            <option value="Genel">Genel</option>
            <option value="Hakkımızda">Hakkımızda</option>
            <option value="Güncel-Süreli">Güncel-Süreli</option>
            <option value="Güncel-Koleksiyon">Güncel-Koleksiyon</option>
            <option value="Koleksiyon">Koleksiyon</option>
            <option value="Projeler">Projeler</option>
            <option value="Sergi-2023">Sergi-2023</option>
            <option value="Sergi-2024"> Sergi-2024</option>
            <option value="Eğitim-Güncel">Eğitim-Güncel</option>
            <option value="Eğitim-Güncel-Ogrenme">Eğitim-Güncel-Ogrenme</option>
            <option value="Eğitim-Programlar">Eğitim-Programlar</option>
            <option value="Eğitim-2023">Eğitim-2023</option>
            <option value="Eğiitm-2024">Eğiitm-2024</option>
            <option value="Dijital-Güncel">Dijital-Güncel</option>
            <option value="Dijital-2023">Dijital-2023</option>
            <option value="Dijital-2024">Dijital-2024</option>
            <option value="Dijital-Tüm-Sergi">Dijital-Tüm-Sergi</option>
            <option value="Dijital-Tüm-Koleksiyon">
              Dijital-Tüm-Koleksiyon
            </option>
            <option value="Dijital-Tüm-Sempozyum">Dijital-Tüm-Sempozyum</option>
            <option value="Dijital-Tüm-Küçük Kitaplar">
              Dijital-Tüm-Küçük Kitaplar
            </option>
            <option value="Dijital-Tüm-Dijital Yayınlar">
              Dijital-Tüm-Dijital Yayınlar
            </option>
            <option value="Çağdaş Tarih">Çağdaş Tarih</option>
            <option value="Kültür-Sanat-Müzik">Kültür-Sanat-Müzik</option>

            <option value="Göç ve Göç Hareketleri">
              Göç ve Göç Hareketleri
            </option>
            <option value="Tarih">Tarih</option>
            <option value="Tarihsel ve Çağdaş Kişilikler">
              Tarihsel ve Çağdaş Kişilikler
            </option>
            <option value="Soykırım ve Soykırım Araştırmaları">
              Soykırım ve Soykırım Araştırmaları
            </option>
          </Select>
        </div>
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
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          value={formData.content}
          placeholder="Write caption..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        <ReactQuill
          theme="snow"
          value={formData.blogContent}
          placeholder="Write blogContent..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, blogContent: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update post
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
