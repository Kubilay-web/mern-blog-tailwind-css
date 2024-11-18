import { useState, useEffect } from "react";

const Yayin = () => {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [posts3, setPosts3] = useState([]);
  const [posts4, setPosts4] = useState([]);
  const [posts5, setPosts5] = useState([]);
  const [posts6, setPosts6] = useState([]);

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
    const category1 = "Yayin-Süreli-Sergi";
    const category2 = "Yayin-Koleksiyon-Sergi";
    const category3 = "Yayin-Dersim-Vakfi";
    const category4 = "Yayin-Sempozyum";
    const category5 = "Yayin-Küçük-Kitaplar-Dizisi";
    const category6 = "Yayin-Dijital";

    // İlk kategori için postları çek
    fetchPosts(category1, setPosts);

    // İkinci kategori için postları çek
    fetchPosts(category2, setPosts2);
    fetchPosts(category3, setPosts3);
    fetchPosts(category4, setPosts4);
    fetchPosts(category5, setPosts5);
    fetchPosts(category6, setPosts6);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row ptnew">
          <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
            <a className="navbar-brand" href="/" title="Home">
              <div className="hidden">
                <img
                  className="pera-logo component state2 state1-to-state2"
                  src="/images/Yayınlar/PM-2023logo-tr.svg"
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
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .card-title {\n            margin-bottom: 0px !important;\n        }\n    ",
        }}
      />
      <style
        media="screen and (max-width:545px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .mobile-spacing {\n            margin-bottom: 20px;\n        }\n    ",
        }}
      />
      <style
        media="screen and (max-width:768px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .dontshowonmobile {\n            display: none;\n        }\n    ",
        }}
      />

      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 mt-1">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Süreli Sergi Katalogları</p>
              </div>

              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/2"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts && posts.length > 0 ? (
                posts.slice(0, 6).map((post, index) => (
                  <div key={post._id} className="col-lg-2 col-md-4 mb-4">
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
                ))
              ) : (
                <p>No posts available</p>
              )}
            </div>
          </div>

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/hesaplar-ve-tesadufler/3276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/1-Bişi.jpg"
                      alt="Hesaplar ve Tesadüfler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Bişi</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Bişi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
         
                  <a href="/yayin/ters-yuz-pǝrɐ/1276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/2-Dövme Çorba.jpg"
                      alt="Ters Yüz PƎRⱯ"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dövme Çorba</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dövme Çorba
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
          
                  <a href="/yayin/gelecek-hatiralari/1273">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/3-Dövme Pilav.jpg"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dövme Pilav</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dövme Pilav
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
           
                  <a href="/yayin/tam-yerinden-/1272">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/4-Dut Tatlısı.jpg"
                      alt="Tam Yerinden "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dut Tatlısı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dut Tatlısı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/isabel-munoz-yeni-bir-hikaye/1271">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/5-Gulik.jpeg"
                      alt="Isabel Muñoz: Yeni Bir Hikâye"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Gulik</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Gulik
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/zamane-istanbullari/1267">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/6-Halbur Hurması Tatlısı.jpg"
                      alt="Zamane İstanbulları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Halbur Hurması Tatlısı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Halbur Hurması Tatlısı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Koleksiyon Sergi Katalogları</p>
              </div>

              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/3"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts2 && posts2.length > 0 ? (
                posts2.slice(0, 1000).map((post2) => (
                  <div key={post2._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post2.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post2.image}
                          alt={post2.altText || "Post image"}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post2.title}</h3>
                          <p className="card-text">{post2.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post2.author}</small>
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
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/agirlik-ve-olcu-sanati-/1264">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/7-Haşıl.jpg"
                      alt="Ağırlık ve Ölçü Sanatı "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Haşıl</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Haşıl
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/8-Mantar Yemeği.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Mantar Yemeği</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Mantar Yemeği
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/anadolu-agirlik-ve-olculeri/130">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/9-İmam Çorbası.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İmam Çorbası</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İmam Çorbası
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/duslerin-kenti-istanbul/131">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/10-Mumbar Dolması.jpg"
                      alt="Düşlerin Kenti: İstanbul"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Mumbar Dolması</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Mumbar Dolması
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/imparatorluktan-portreler/132">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/11-Pekmez Helvası.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Pekmez Helvası</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Pekmez Helvası
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  <a href="/yayin/kutahya-cini-ve-seramikleri/133">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/12-Kabak Dolması.jpg"
                      alt="Kütahya Çini ve Seramikleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kabak Dolması</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kabak Dolması
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Dersim Vakfı Yayınları</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/20"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts3 && posts3.length > 0 ? (
                posts3.slice(0, 1000).map((post3) => (
                  <div key={post3._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post3.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post3.image}
                          alt={post3.altText || "Post image"}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post3.title}</h3>
                          <p className="card-text">{post3.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post3.author}</small>
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

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
         
                  <a href="/yayin/ataturk’un-ziraat-muhendisi-ali-numan-kirac/2276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/13-Soğan Aşı.jpg"
                      alt="Atatürk’ün Ziraat Mühendisi<br> Ali Numan Kıraç"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Soğan Aşı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Soğan Aşı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/fotograflarla-ataturk-/214">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/14-Şir.jpg"
                      alt="Fotoğraflarla Atatürk "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Şir </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Şir
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
  
                  <a href="/yayin/idealler-gerceklesirken…/204">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/15-Rafting.webp"
                      alt="İdealler Gerçekleşirken…"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Rafting</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Rafting
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
      
                  <a href="/yayin/omrumden-uzun-ideallerim-var/189">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/16-Kaya Tırmanışı.jpg"
                      alt="Ömrümden Uzun İdeallerim Var"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kaya Tırmanışı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kaya Tırmanışı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/konstantiniyyeden-istanbula-/142">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/17-Kampçılık.jfif"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kampçılık</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kampçılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
              
                  <a href="/yayin/konstantiniyyeden-istanbula-/141">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/18-Zipline.jpg"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Zipline</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Zipline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Sempozyum Dizisi</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/14"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts4 && posts4.length > 0 ? (
                posts4.slice(0, 1000).map((post4) => (
                  <div key={post4._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post4.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post4.image}
                          alt={post4.altText || "Post image"}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post4.title}</h3>
                          <p className="card-text">{post4.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post4.author}</small>
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

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/mekanin-poetikasi-mekanin-politikasi/134">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/19-Kış Sporları.jpg"
                      alt="Mekanın Poetikası, Mekanın Politikası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kış Sporları</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kış Sporları
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Küçük Kitaplar Dizisi</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/15"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts5 && posts5.length > 0 ? (
                posts5.slice(0, 1000).map((post5) => (
                  <div key={post5._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post5.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post5.image}
                          alt={post5.altText || "Post image"}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post5.title}</h3>
                          <p className="card-text">{post5.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post5.author}</small>
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

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/osman-hamdi-bey-/234">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/20-Dağcılık.webp"
                      alt="Osman Hamdi Bey "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dağcılık </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dağcılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/kahve-molasi/159">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/21-Sosyal.webp"
                      alt="Kahve Molası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Sosyal</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Sosyal
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/elgar-turkiye’de/157">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/22-Kültür.jpg"
                      alt="Elgar Türkiye’de"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kültür</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kültür
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/yusuf-agah-efendi-/143">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/23-Pir Sultan.jpg"
                      alt="Yusuf Agâh Efendi "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Pir Sultan </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Pir Sultan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Dijital Yayınlar</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/13"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts6 && posts6.length > 0 ? (
                posts6.slice(0, 1000).map((post6) => (
                  <div key={post6._id} className="col-lg-2 col-md-4 mb-4">
                    <a
                      href={`/post/${post6.slug}`}
                      target="_self"
                      className="no-link"
                    >
                      <div className="card mb-4 border-0">
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          src={post6.image}
                          alt={post6.altText || "Post image"}
                        />
                        <div className="card-body">
                          <h3 className="card-title">{post6.title}</h3>
                          <p className="card-text">{post6.content}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{post6.author}</small>
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

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
        
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/24-Çocuk Sokağı.webp"
                      alt="Bu Bir Aşk Şarkısı Değil "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Çocuk Sokağı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Çocuk Sokağı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/uryan-ciplak-nu/179">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/25-Seyit Rıza.webp"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Seyit Rıza</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Seyit Rıza
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                 
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/26-Kütüphane Durağı.jpeg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kütüphane Durağı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kütüphane Durağı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
            
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/28-Dokumacılık.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dokumacılık </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dokumacılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                 
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/29-Çanak Çömlek.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Çanak Çömlek</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Çanak Çömlek
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
               
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Ahşap.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Ahşap</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Ahşap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
              
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Cacım Sanatı.jpg"
                      alt="Bu Bir Aşk Şarkısı Değil "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Cacım Sanatı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Cacım Sanatı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/uryan-ciplak-nu/179">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Dericilik.jpg"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dericilik</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dericilik
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
              
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/31-Saz ve Bağlama.jpg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Saz ve Bağlama</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Saz ve Bağlama
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
               
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/32-İnanç ve Gelenek.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Gelenek </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Gelenek
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
               
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/32-İnancımız.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnancımız</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnancımız
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/33-İnanç ve Toplum.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Toplum</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Toplum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
        
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/34-Cemevi.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Cemevi</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Cemevi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                 
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/34-İnanç ve Kültür.jfif"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Kültür</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Kültür
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
             
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/35-İnanç ve Hayat.webp"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Hayat</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Hayat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 30px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Yayin;
