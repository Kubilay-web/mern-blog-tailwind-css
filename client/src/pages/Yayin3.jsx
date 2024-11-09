import { useState, useEffect } from "react";

const Yayin3 = () => {
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
                  src="/images/Yayın3/PM-2023logo-tr.svg"
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
      <style
        media="screen and (max-width:545px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n    .mobile-spacing {\n        margin-bottom: 20px;\n    }\n",
        }}
      />

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

      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 ">
            <div className="row mt-3">
              <div
                className="col-md-12 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1>Koleksiyon Sergi Katalogları</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="border-bottom border-secondary" />
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/agirlik-ve-olcu-sanati-/1264">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/simdi-iyi-haberler-cover.jpg"
                      alt="Ağırlık ve Ölçü Sanatı "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Ağırlık ve Ölçü Sanatı </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/kesisen-dunyalar.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kesişen Dünyalar </h3>
                    <p className="card-text">Elçiler ve Ressamlar</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/anadolu-agirlik-ve-olculeri/130">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/aavo-kapak.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Anadolu Ağırlık ve Ölçüleri</h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/duslerin-kenti-istanbul/131">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/duslerin-kenti-istanbul.jpg"
                      alt="Düşlerin Kenti: İstanbul"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Düşlerin Kenti: İstanbul</h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/imparatorluktan-portreler/132">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/imparatorluktan-portreler.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İmparatorluktan Portreler</h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kutahya-cini-ve-seramikleri/133">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/kutahya-cini-ve-seramikleri.jpg"
                      alt="Kütahya Çini ve Seramikleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kütahya Çini ve Seramikleri</h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kutahya-cini-ve-seramikleri-2/183">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/kutahya-ceramics-tr.jpg"
                      alt="Kütahya Çini ve Seramikleri 2"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">
                      Kütahya Çini ve Seramikleri 2
                    </h3>
                    <p className="card-text">
                      Suna ve İnan Kıraç Vakfı Koleksiyon Kataloğu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/corpus-ponderum-antiquorum-et-islamicorum-suna-and-inan-kirac-foundation-collection-in-the-pera-museum/151">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/corpus-i.jpg"
                      alt="Corpus Ponderum Antiquorum et Islamicorum <br/>Suna and İnan Kıraç Foundation Collection in the Pera Museum"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">
                      Corpus Ponderum Antiquorum et Islamicorum <br />
                      Suna and İnan Kıraç Foundation Collection in the Pera
                      Museum
                    </h3>
                    <p className="card-text">Part 1 - Greek and Roman Weight</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/corpus-ponderum-antiquorum-et-islamicorum-suna-and-inan-kirac-foundation-collection-in-the-pera-museum/202">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/corpus-ii.jpg"
                      alt="Corpus Ponderum Antiquorum et Islamicorum <br/>Suna and İnan Kıraç Foundation Collection in the Pera Museum"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">
                      Corpus Ponderum Antiquorum et Islamicorum <br />
                      Suna and İnan Kıraç Foundation Collection in the Pera
                      Museum
                    </h3>
                    <p className="card-text">
                      Part 2 - Late Roman and Byzantine Weights
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/pierre-willemart-sikke-koleksiyonu/212">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/pierre-willemart-sikke-koleksiyonu.jpg"
                      alt="Pierre Willemart Sikke Koleksiyonu"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">
                      Pierre Willemart Sikke Koleksiyonu
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 40px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Yayin3;
