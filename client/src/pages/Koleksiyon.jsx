import React, { useEffect, useState } from "react";

export default function Koleksiyon() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const category = "Koleksiyon";

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
  }, [category]);

  return (
    <div>
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
                    src="/images/Koleksiyon/PM-2023logo-tr.svg"
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
        <div className="container pb-3 first-row">
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="row">
                <div
                  className="col-md-12 fs-40"
                  style={{ fontFamily: '"Raleway"' }}
                >
                  <h1 id="Collections" className="BitcraftLang">
                    Koleksiyonlar
                  </h1>
                </div>
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
                                <small className="text-muted">
                                  {post.author}
                                </small>
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

            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-md-6 mb-4" style={{}}>
                  <b id="CIKolSer" className="BitcraftLang fs-40">
                    Koleksiyon Sergileri
                  </b>

                  <a href="/sergi/liste/2">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      src="/images/Koleksiyon/kapak-KoleksiyonSergileri.jpg"
                      alt="Koleksiyon Sergileri"
                    />
                  </a>
                </div>
                <div className="col-md-6 mb-4" style={{}}>
                  <b id="CIGecKolSer" class="BitcraftLang fs-40">
                    Geçmiş Koleksiyon Sergileri
                  </b>
                  <a href="/sergi/gecmis-koleksiyon-sergileri/1">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      src="/images/Koleksiyon/gecmis_koleksiyon_sergileri.jpg"
                      alt="Geçmiş Koleksiyon Sergileri"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
