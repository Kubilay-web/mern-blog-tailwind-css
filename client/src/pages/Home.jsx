"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../css/tema.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Home({ data }) {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const images = [
    "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
  ];

  return (
    <div>
      <div className="box">
        <Carousel
          useKeyboardArrows={true}
          className="carousel"
          style={{
            maxWidth: "1070px",
            height: "420px",
            margin: "0 auto",
          }}
          showThumbs={false} // Thumbnail resimleri gizle
          swipeable={true} // Kaydırma desteği
          draggable={true} // Fare ile sürükleme desteği
          infiniteLoop={true} // Sonsuz döngü
          autoPlay={false} // Otomatik oynatma
          emulateTouch={true} // Fare ile sürükleme desteğini etkinleştir
        >
          {images.map((URL, index) => (
            <div key={index} style={{ height: "420px", overflow: "hidden" }}>
              <img
                alt="sample_file"
                src={URL}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
