import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Button, FileInput, Select, TextInput, Alert } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

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
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError(null);
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  // Strip HTML tags from ReactQuill content for `content`
  const handleContentChange = (value) => {
    const cleanText = DOMPurify.sanitize(value, { ALLOWED_TAGS: [] });
    setFormData({ ...formData, content: cleanText });
  };

  // Strip HTML tags from ReactQuill content for `blogContent`
  const handleBlogContentChange = (value) => {
    const cleanText = DOMPurify.sanitize(value, { ALLOWED_TAGS: [] });
    setFormData({ ...formData, blogContent: cleanText });
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
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
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
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
            <option value="Yayin-Süreli-Sergi">Yayin-Süreli-Sergi</option>
            <option value="Yayin-Dersim-Vakfi">Yayin-Dersim-Vakfi</option>
            <option value="Yayin-Sempozyum">Yayin-Sempozyum</option>
            <option value="Yayin-Küçük-Kitaplar-Dizisi">
              Yayin-Küçük-Kitaplar-Dizisi
            </option>
            <option value="Yayin-Koleksiyon-Sergi">
              Yayin-Koleksiyon-Sergi
            </option>
            <option value="Eğitim-Programlar">Eğitim-Programlar</option>
            <option value="Eğitim-2023">Eğitim-2023</option>
            <option value="Eğiitm-2024">Eğiitm-2024</option>
            <option value="Dijital-Güncel">Dijital-Güncel</option>
            <option value="Dijital-2023">Dijital-2023</option>
            <option value="Dijital-2024">Dijital-2024</option>
            <option value="Dijital-Tüm-Sergi">Dijital-Tüm-Sergi</option>
            <option value="Yayin-Dijital">Yayin-Dijital</option>
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
            <option value="Cagdas-Tarih">Cagdas-Tarih</option>
            <option value="Cagdas-Tarih-En-Yeniler">
              Cagdas-Tarih-En-Yeniler
            </option>
            <option value="Cagdas-Tarih-İlginizi-Çekebilir">
              Cagdas-Tarih-İlginizi-Çekebilir
            </option>

            <option value="Çağdaş-Ana-Yazı">Çağdaş-Ana-Yazı</option>
            <option value="Çağdaş-Yan-Yazı-1">Çağdaş-Yan-Yazı-1</option>
            <option value="Çağdaş-Yan-Yazı-2">Çağdaş-Yan-Yazı-2</option>
            <option value="Çağdaş">Çağdaş</option>
            <option value="Çağdaş-En-Yeniler">Çağdaş-En-Yeniler</option>
            <option value="Çağdaş-Alt-Yazı">Çağdaş-Alt-Yazı</option>
            <option value="Çağdaş-İlginizi-Çekebilir">
              Kültür-İlginizi-Çekebilir
            </option>

            <option value="Kültür-Ana-Yazı">Kültür-Ana-Yazı</option>
            <option value="Kültür-Yan-Yazı-1">Kültür-Yan-Yazı-1</option>
            <option value="Kültür-Yan-Yazı-2">Kültür-Yan-Yazı-2</option>
            <option value="Kültür">Kültür</option>
            <option value="Kültür-En-Yeniler">Kültür-En-Yeniler</option>
            <option value="Kültür-Alt-Yazı">Kültür-Alt-Yazı</option>
            <option value="Kültür-İlginizi-Çekebilir">
              Kültür-İlginizi-Çekebilir
            </option>

            <option value="Göç-Ana-Yazı">Göç-Ana-Yazı</option>
            <option value="Göç-Yan-Yazı-1">Göç-Yan-Yazı-1</option>
            <option value="Göç-Yan-Yazı-2">Göç-Yan-Yazı-2</option>
            <option value="Göç">Göç</option>
            <option value="Göç-En-Yeniler">Göç-En-Yeniler</option>
            <option value="Göç-Alt-Yazı">Göç-Alt-Yazı</option>
            <option value="Göç-İlginizi-Çekebilir">
              Göç-İlginizi-Çekebilir
            </option>

            <option value="Tarih-Ana-Yazı">Tarih-Ana-Yazı</option>
            <option value="Tarih-Yan-Yazı-1">Tarih-Yan-Yazı-1</option>
            <option value="Tarih-Yan-Yazı-2">Tarih-Yan-Yazı-2</option>
            <option value="Tarih-Yan-Yazı-2">Tarihsel-Kisilikler</option>
            <option value="Tarih-En-Yeniler">
              Tarihsel-Kisilikler-En-Yeniler
            </option>
            <option value="Tarih-Alt-Yazı">Tarihsel-Kisilikler-Alt-Yazı</option>
            <option value="Tarih-İlginizi-Çekebilir">
              Tarihsel-Kisilikler-İlginizi-Çekebilir
            </option>

            <option value="Tarihsel-Kisilikler-Ana-Yazı">
              Tarihsel-Kisilikler-Ana-Yazı
            </option>
            <option value="Tarihsel-Kisilikler-Yan-Yazı-1">
              Tarihsel-Kisilikler-Yan-Yazı-1
            </option>
            <option value="Tarihsel-Kisilikler-Yan-Yazı-2">
              Tarihsel-Kisilikler-Yan-Yazı-2
            </option>
            <option value="Tarihsel-Kisilikler-Yan-Yazı-2">
              Tarihsel-Kisilikler
            </option>
            <option value="Tarihsel-Kisilikler-En-Yeniler">
              Tarihsel-Kisilikler-En-Yeniler
            </option>
            <option value="Tarihsel-Kisilikler-Alt-Yazı">
              Tarihsel-Kisilikler-Alt-Yazı
            </option>
            <option value="Tarihsel-Kisilikler-İlginizi-Çekebilir">
              Tarihsel-Kisilikler-İlginizi-Çekebilir
            </option>

            <option value="Soykırım-Ana-Yazı">Soykırım-Ana-Yazı</option>
            <option value="Soykırım">Soykırım</option>
            <option value="Soykırım-En-Yeniler">Soykırım-En-Yeniler</option>
            <option value="Soykırım-Alt-Yazı">Soykırım-Alt-Yazı</option>
            <option value="Soykırım-Yan-Yazı-1">Soykırım-Yan-Yazı-1</option>
            <option value="Soykırım-Yan-Yazı-2">Soykırım-Yan-Yazı-2</option>
            <option value="Soykırım-İlginizi-Çekebilir">
              Soykırım-İlginizi-Çekebilir
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
          placeholder="Write caption..."
          className="h-72 mb-12"
          required
          onChange={handleContentChange}
        />
        <ReactQuill
          theme="snow"
          placeholder="Write blog content..."
          className="h-72 mb-12"
          required
          onChange={handleBlogContentChange}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
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
