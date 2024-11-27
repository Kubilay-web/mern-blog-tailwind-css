"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../css/tema.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
export default function Home({ data }) {
  const [posts, setPosts] = useState([]);
  const [carosuels, setCarousels] = useState([]); // Resimlerin state'i
  const [index, setIndex] = useState(0);
  const category = "Genel"; // Buraya istediğiniz kategoriyi yazın.
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPosts(data.posts);
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/carousel/getAllImage");
        setCarousels(response.data);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchPosts();
    fetchImages();
  }, [category]);

  // const images = [
  //   "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  //   "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  //   "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
  // ];

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : carosuels.length - 1
    );
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < carosuels.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <div className=" max-w-[1200px] m-auto flex align-middle gap-1">
        {/* Sol ok butonu */}
        <button
          type="button"
          role="presentation"
          className="owl-prev"
          onClick={handlePrevClick}
        >
          <img
            className="left_arrow"
            src="https://www.peramuzesi.org.tr/assetsv2/img/left-arrow.png"
            aria-hidden="true"
            alt="sol"
          />
        </button>

        {/* Carousel bileşeni */}
        <Carousel
          selectedItem={selectedIndex} // Seçili öğeyi kontrol et
          onChange={setSelectedIndex} // Değişiklik olduğunda seçili öğeyi güncelle
          useKeyboardArrows={true}
          className="carousel"
          style={{
            maxWidth: "1070px",
            height: "420px",
            margin: "0 auto",
          }}
          showThumbs={false}
          swipeable={true}
          draggable={true}
          infiniteLoop={true}
          autoPlay={false}
          emulateTouch={true}
        >
          {carosuels.map((carouselItem, index) => (
            <div
              key={index}
              style={{ height: "420px", width: "100%", overflow: "hidden" }}
            >
              <img
                alt={`carousel_image_${index}`} // Alternatif metin
                src={carouselItem.imageURL}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.5s ease-in-out", // Görsel geçişi için
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* Sağ ok butonu */}
        <button
          type="button"
          role="presentation"
          className="owl-next"
          onClick={handleNextClick}
        >
          <img
            className="right_arrow"
            src="https://www.peramuzesi.org.tr/assetsv2/img/right-arrow.png"
            aria-hidden="true"
            alt="sağ"
          />
        </button>
      </div>

      <div className="container">
        <div className="row tw-mt-10 pt-7">
          {posts && posts.length > 0 ? (
            posts.slice(0, 1000).map((post, index) => {
              let colClass = "col-lg-4 col-md-6"; // Varsayılan üçlü düzen

              if (index === 0) {
                // İlk kart 4'lük (yarım genişlik)
                colClass = "col-lg-4";
              } else if (index === 1) {
                // İkinci kart 8'lik (tam genişlik)
                colClass = "col-lg-4 col-md-12";
              }

              if (index === 2) {
                // İlk kart 4'lük (yarım genişlik)
                colClass = "col-lg-4";
              } else if (index === 3) {
                // İkinci kart 8'lik (tam genişlik)
                colClass = "col-lg-4 col-md-12";
              }

              return (
                <div key={post._id} className={`${colClass} mb-4`}>
                  <a
                    href={`/post/${post.slug}`}
                    target="_self"
                    className="no-link"
                  >
                    <div className="card mb-4 border-0">
                      <img
                        style={{ height: "200px" }}
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        src={post.image}
                        alt={post.altText}
                      />
                      <div className="card-body">
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-text">{post.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">{post.author}</small>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>

      {/* <div className="flex justify-center mt-3 flex-wrap">
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-3 gap-3 flex-wrap">
            <div className="flex justify-center mt-3 gap-3 flex-wrap">
              {posts.slice(9, 12).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div> */}

      {/* <div className="flex justify-center mt-3 flex-wrap">
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-3 gap-3 flex-wrap">
            <div className="flex justify-center mt-3 gap-3 flex-wrap">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div> */}

      <div class="col-lg-12 col-md-6 mb-4">
        <div className="card-body flex items-center justify-center w-full">
          <h3 id="ters-yuz-pera" className="card-title">
            Dersim 360 Panoramik
          </h3>
          <p className="card-text" />
        </div>
      </div>

      <div class="col-lg-12 col-md-6 mb-4">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maxWidth: "100vw",
            marginTop: 10,
            height: "100vh",
          }}
          id="ta-reviews"
        >
          <iframe
            style={{
              border: 0,
              width: "75vw",
              height: "75vh",
              margin: "auto",
              overflow: "hidden",
            }}
            allowFullScreen=""
            src="https://www.google.com/maps/embed?pb=!4v1693050723186!6m8!1m7!1sJesj_mVAwp0AAARiXGL73A!2m2!1d39.1045651!2d39.5473264!3f239.89!4f-0.11!5f0.7820865974627469"
          ></iframe>
        </div>
      </div>

      {/* <div className="flex justify-center mt-3 flex-wrap">
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-3 gap-3 flex-wrap">
            <div className="flex justify-center mt-3 gap-3 flex-wrap">
              {posts.slice(6, 8).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div> */}

      {/* <div class="col-lg-12 col-md-6 mt-4">
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
      </div> */}
    </div>
  );
}
