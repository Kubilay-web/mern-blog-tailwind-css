import { useState, useEffect } from "react";

const Yayin13 = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (category, setPostFunc) => {
    try {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPostFunc(data.posts); // Doğru veriyi ayarlamak için `data.posts` kullanılır
    } catch (error) {
      console.error(`Failed to fetch posts for category ${category}:`, error);
    }
  };

  useEffect(() => {
    const category1 = "Yayin-Dijital";

    // İlk kategori için postları çek
    fetchPosts(category1, setPosts);
  }, []);
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
                  src="/images/Yayın13/PM-2023logo-tr.svg"
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

      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 ">
            <div className="row mt-3">
              <div
                className="col-md-12 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1>Dijital Yayınlar</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="border-bottom border-secondary" />
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts && posts.length > 0 ? (
                posts.slice(0, 1000).map((post, index) => (
                  <div key={post._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          style={{ height: "105px" }}
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
                ))
              ) : (
                <p>No posts available</p>
              )}
            </div>
          </div>

          {/* 
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/24-Çocuk Sokağı.webp"
                      alt="Çocuk Sokağı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Çocuk Sokağı </h3>
                    <p className="card-text">Çocuk Sokağı</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                
                  <a href="/">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/25-Seyit Rıza.webp"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Seyit Rıza</h3>
                    <p className="card-text">Seyit Rıza</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                 
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/26-Kütüphane Durağı.jpeg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kütüphane Durağı</h3>
                    <p className="card-text">Kütüphane Durağı</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
       
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/28-Dokumacılık.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dokumacılık </h3>
                    <p className="card-text">Dokumacılık</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
          
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/29-Çanak Çömlek.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Çanak Çömlek</h3>
                    <p className="card-text">Çanak Çömlek</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
         
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/30-Ahşap.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Ahşap</h3>
                    <p className="card-text">Ahşap</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
            
                  <a href="/yayin/temelde-insan/31">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/30-Cacım Sanatı.jpg"
                      alt="Temelde İnsan"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Cacım Sanatı</h3>
                    <p className="card-text">Cacım Sanatı</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/ihsan-cemal-karaburcak/28">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/30-Dericilik.jpg"
                      alt="İhsan Cemal Karaburçak"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dericilik</h3>
                    <p className="card-text">Dericilik</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/csontvary-/32">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/31-Saz ve Bağlama.jpg"
                      alt="Csontváry "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Saz ve Bağlama </h3>
                    <p className="card-text">Saz ve Bağlama</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
            
                  <a href="/yayin/osmanli-donanmasinin-seyir-defteri/43">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/32-İnanç ve Gelenek.jpg"
                      alt="Osmanlı Donanmasının Seyir Defteri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İnanç ve Gelenek</h3>
                    <p className="card-text">İnanç ve Gelenek</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
          
                  <a href="/yayin/isleyen-mekan/113">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/32-İnancımız.jpg"
                      alt="İşleyen Mekân"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İnancımız</h3>
                    <p className="card-text">İnancımız</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/pirosmani/114">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/33-İnanç ve Toplum.jpg"
                      alt="Pirosmani"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İnanç ve Toplum</h3>
                    <p className="card-text">İnanç ve Toplum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
               
                  <a href="/yayin/el-le/124">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/34-Cemevi.jpg"
                      alt="EL/LE"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Cemevi</h3>
                    <p className="card-text">Cemevi</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
        
                  <a href="/yayin/avci-mehmed’in-alay-i-humayunu/126">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/34-İnanç ve Kültür.jfif"
                      alt="İnanç ve Kültür"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İnanç ve Kültür</h3>
                    <p className="card-text">İnanç ve Kültür</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
           
                  <a href="/yayin/kadinlar-resimler-oykuler/122">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın13/35-İnanç ve Hayat.webp"
                      alt="Kadınlar Resimler Öyküler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İnanç ve Hayat</h3>
                    <p className="card-text">İnanç ve Hayat</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 40px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Yayin13;
