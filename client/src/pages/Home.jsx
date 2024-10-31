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

      <div className="flex justify-center mt-3 flex-wrap">
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-3 gap-3 flex-wrap">
            <div className="flex justify-center mt-3 gap-3 flex-wrap">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div class="col-lg-12 col-md-6">
        <a
          href="https://www.peramuzesi.org.tr/etkinlik/324-constantinus%E2%80%99un-secimi-ve-yeni-roma%E2%80%99nin-kurulusu/6451"
          target="_self"
          class="no-link"
        >
          <div class="card mb-4 border-0 flex justify-center align-items-center">
            <img
              class="bd-placeholder-img card-img-top"
              width="1070px"
              height="auto"
              src="/images/Home/324-banner-tr.jpg"
              alt="Constantinus’un Seçimi ve Yeni Roma’nın Kuruluşu"
            />
          </div>
        </a>
      </div>

      <div className="flex justify-center mt-3 flex-wrap">
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-3 gap-3 flex-wrap">
            <div className="flex justify-center mt-3 gap-3 flex-wrap">
              {posts.slice(6, 8).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div class="col-lg-12 col-md-6">
        <a
          href="https://www.peramuzesi.org.tr/etkinlik/324-constantinus%E2%80%99un-secimi-ve-yeni-roma%E2%80%99nin-kurulusu/6451"
          target="_self"
          class="no-link"
        >
          <div class="card mb-4 border-0 flex justify-center align-items-center">
            <img
              class="bd-placeholder-img card-img-top"
              width="1070px"
              height="auto"
              src="/images/Home/0000724_artshop-05.jpeg"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
