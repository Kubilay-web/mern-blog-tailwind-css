import { useState, useEffect } from "react";

const Yayin = () => {
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/hesaplar-ve-tesadufler/3276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/hesaplar-ve-tesadufler-katolog-2.jpg"
                      alt="Hesaplar ve Tesadüfler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Hesaplar ve Tesadüfler</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/ters-yuz-pǝrɐ/1276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/ters-yuz-pera-katolog.jpg"
                      alt="Ters Yüz PƎRⱯ"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Ters Yüz PƎRⱯ</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Mekânlar ve Metinlerde Denemeler{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gelecek-hatiralari/1273">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/gelecek-hatiralari-yayin-kapak-gorseli.jpg"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Gelecek Hatıraları</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/tam-yerinden-/1272">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/tam-yerinden-cover.jpg"
                      alt="Tam Yerinden "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Tam Yerinden </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İstanbul’a Panoramik Bakışın Tarihi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/isabel-munoz-yeni-bir-hikaye/1271">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/isabel-munoz-cover.jpg"
                      alt="Isabel Muñoz: Yeni Bir Hikâye"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">
                      Isabel Muñoz: Yeni Bir Hikâye
                    </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Göbeklitepe ve Çevresinden Fotoğraflar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/zamane-istanbullari/1267">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/zamane-ist-cover.jpg"
                      alt="Zamane İstanbulları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Zamane İstanbulları</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/agirlik-ve-olcu-sanati-/1264">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/simdi-iyi-haberler-cover.jpg"
                      alt="Ağırlık ve Ölçü Sanatı "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Ağırlık ve Ölçü Sanatı </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/kesisen-dunyalar.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kesişen Dünyalar </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Elçiler ve Ressamlar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/anadolu-agirlik-ve-olculeri/130">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/aavo-kapak.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Anadolu Ağırlık ve Ölçüleri</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/duslerin-kenti-istanbul/131">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/duslerin-kenti-istanbul.jpg"
                      alt="Düşlerin Kenti: İstanbul"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Düşlerin Kenti: İstanbul</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/imparatorluktan-portreler/132">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/imparatorluktan-portreler.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İmparatorluktan Portreler</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kutahya-cini-ve-seramikleri/133">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/kutahya-cini-ve-seramikleri.jpg"
                      alt="Kütahya Çini ve Seramikleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kütahya Çini ve Seramikleri</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Suna ve İnan Kıraç Vakfı Yayınları</p>
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/ataturk’un-ziraat-muhendisi-ali-numan-kirac/2276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/ali-numan-kirac.jpg"
                      alt="Atatürk’ün Ziraat Mühendisi<br> Ali Numan Kıraç"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">
                      Atatürk’ün Ziraat Mühendisi
                      <br /> Ali Numan Kıraç
                    </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Hulûsi Turgut
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/fotograflarla-ataturk-/214">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/fotograflarla-ataturk.jpg"
                      alt="Fotoğraflarla Atatürk "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Fotoğraflarla Atatürk </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/idealler-gerceklesirken…/204">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/idealler-gerceklesirken.jpg"
                      alt="İdealler Gerçekleşirken…"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İdealler Gerçekleşirken…</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Suna Kıraç’ın izinde 10 yılın öyküsü <br />
                      Rıdvan Akar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/omrumden-uzun-ideallerim-var/189">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/omrumden-uzun-ideallerim-var.jpg"
                      alt="Ömrümden Uzun İdeallerim Var"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Ömrümden Uzun İdeallerim Var</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/konstantiniyyeden-istanbula-/142">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/konstantiniyyeden-istanbula-iii-iv.jpg"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">
                      Konstantiniyye'den İstanbul'a{" "}
                    </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      XIX.Yüzyıl Ortalarından XX.Yüzyıla Boğaziçi'nin Anadolu
                      Yakası Fotoğrafları
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/konstantiniyyeden-istanbula-/141">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/konstantiniyyeden-istanbula-i-ii.jpg"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">
                      Konstantiniyye'den İstanbul'a{" "}
                    </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      XIX. Yüzyıl Ortalarından XX. Yüzyıla Boğaziçi'nin Rumeli
                      Yakası Fotoğrafları
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/mekanin-poetikasi-mekanin-politikasi/134">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/mekanin-poetikasi-mekanin-politikasi.jpg"
                      alt="Mekanın Poetikası, Mekanın Politikası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">
                      Mekanın Poetikası, Mekanın Politikası
                    </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Osmanlı İstanbulu ve Britanya Oryantalizmi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/osman-hamdi-bey-/234">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/osman-hamdi-bey-kucuk-kitap.jpg"
                      alt="Osman Hamdi Bey "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Osman Hamdi Bey </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Bir Osmanlı Aydını{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kahve-molasi/159">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/kahve-molasi.jpg"
                      alt="Kahve Molası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kahve Molası</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kütahya Çini ve Seramiklerinde Kahvenin Serüveni{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/elgar-turkiye’de/157">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/elgar-turkiyede.jpg"
                      alt="Elgar Türkiye’de"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Elgar Türkiye’de</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İngiliz Bestecinin İstanbul ve İzmir Günleri
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/yusuf-agah-efendi-/143">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/yusuf-agah-efendi.jpg"
                      alt="Yusuf Agâh Efendi "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Yusuf Agâh Efendi </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      18. Yüzyıl Londrası’nda İlk Türk Büyükelçi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/this-is-not-a-love-song.jpg"
                      alt="Bu Bir Aşk Şarkısı Değil "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Bu Bir Aşk Şarkısı Değil </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Video Sanatı ve Pop Müzik İlişkisi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/uryan-ciplak-nu/179">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/uryan-ciplak-nu.jpg"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Üryan, Çıplak, Nü</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Türk Resminde Bir Modernleşme Öyküsü
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/gunumuz-imgeleri.jpg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Günümüz İmgeleri</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Saraybosna Güzel Sanatlar Akademisi’nden Yapıtlar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/kesisen-dunyalar.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kesişen Dünyalar </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Elçiler ve Ressamlar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/col-ve-deniz-arasinda.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Çöl ve Deniz Arasında</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Ürdün Güzel Sanatlar Galerisi’nden Bir Seçki
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/deneyimin-otesi.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Deneyimin Ötesi</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dokuz Eylül Üniversitesi Güzel Sanatlar Fakültesi Öğrenci
                      Projeleri
                    </p>
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

export default Yayin;
