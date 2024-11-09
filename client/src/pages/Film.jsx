import { useState, useEffect } from "react";

export default function Film() {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);

  const category = "Süreli Sergiler";
  const category2 = "Koleksiyon Sergileri";

  const fetchPosts = async (category, setPostFunc) => {
    try {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPostFunc(data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(category, setPosts);
    fetchPosts(category2, setPosts2);
  }, [category, category2]);

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
        }}
      />

      <div className="container">
        <div className="row ptnew">
          <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
            <a className="navbar-brand" href="/" title="Home">
              <div className="hidden">
                <img
                  className="pera-logo component state2 state1-to-state2"
                  src="/images/Film/PM-2023logo-tr.svg"
                  alt="Pera Müzesi Logo"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/*
      TEST
      */}
      <div
        className="nav-zemin d-none"
        style={{
          "z-index": "1029",
          "background-color": "white",
          width: "100%",
          top: "0",
          position: "fixed",
        }}
      />
      {/*
      <div class="nav-zemin2 d-none" id="uzunzemin" style="z-index: 2; background-color:white;width: 100%;top: 0;position:  fixed;"></div>
    */}
      {/* END TEST */}
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>

      <div className="container">
        <div className="row pt-7">
          {posts && posts.length > 0 ? (
            posts.slice(0, 1000).map((post, index) => {
              let colClass = "col-lg-6 col-md-6"; // Varsayılan üçlü düzen

              if (index === 0) {
                // İlk kart 4'lük (yarım genişlik)
                colClass = "col-lg-6";
              } else if (index === 1) {
                // İkinci kart 8'lik (tam genişlik)
                colClass = "col-lg-6 col-md-12";
              }

              if (index === 2) {
                // İlk kart 4'lük (yarım genişlik)
                colClass = "col-lg-6";
              } else if (index === 3) {
                // İkinci kart 8'lik (tam genişlik)
                colClass = "col-lg-6 col-md-12";
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

      <div className="container pb-3 first-row">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-md-12 fs-40" style={{}}>
                <h1 id="GnlPrg" className="BitcraftLang" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/film-program/dijital/3535">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Film/program-gorseli-dijital.jpg"
                      alt="dijital"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title listtitle">dijital</h3>
                    <h3 className="card-title listtarih">
                      22 Kasım - 22 Aralık 2024
                    </h3>
                    <p className="card-text" style={{ "font-size": "20px" }} />
                    <p>
                      Vera Molnár’ın bilgisayarla çalışmaya başladığı yıllarda
                      izleyiciyle buluşan bilimkurgu başyapıtları{" "}
                      <em>2001: Bir Uzay Macerası</em>, <em>Yalan Dünya</em> ve{" "}
                      <em>Bıçak Sırtı</em>, teknolojinin geleceğin toplumsal
                      yapıları ve bireysel kimlikleri üzerindeki etkilerine dair
                      güçlü hayaller kuruyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <p className="border-bottom border-secondary" />
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="FIAboutPeraFilm"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-film-hakkinda">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Film/pera-film-hakkinda.jpg"
                      alt="Pera Film Hakkında"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="FIPastPrograms"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/film/gecmis-programlar">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Film/perafilm-gecmisprogramlar.jpg"
                      alt="Geçmiş Pera Film Programları"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 mb-3"></div>
        </div>
      </div>
    </div>
  );
}
