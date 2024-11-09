import { useState, useEffect } from "react";

export default function DijitalSergi() {
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
                  src="/images/DijitalSergi/PM-2023logo-tr.svg"
                  alt="Pera Müzesi Logo"
                />
              </div>
            </a>
          </div>
          {/*header rightside*/}
          <div className="col-lg-4 col-md-5 d-none d-md-block align-self-center">
            <div className="float-right ">
              <a
                className="float-left langField"
                href="https://www.peramuseum.org/"
                style={{ margin: "2px 0 0 0" }}
              >
                <img
                  src="/images/DijitalSergi/iconLang.png"
                  style={{ width: "25px", margin: "4px 0 0 0" }}
                />
              </a>
              <div className="searchbar float-left">
                <input
                  className="search_input txtSrch1"
                  id="srchBox"
                  type="text"
                  name="txtSrch1"
                  placeholder="Arama..."
                />
                <a href="#" id="btnSrchDesktop" className="search_icon btnSrch">
                  <img
                    src="/images/DijitalSergi/iconSearch.png"
                    style={{ width: "25px" }}
                  />
                </a>
              </div>
            </div>
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
          <div className="col-md-12 mt-1">
            <div className="row">
              <div
                className="col-md-12 fs-40 mb-2"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1 id="DigitalExhibitions" className="BitcraftLang" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/ters-yuz-pera/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202406-3d-ters-yuz.jpg"
                      alt="Ters Yüz PƎRⱯ"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="ters-yuz-pera" className="card-title">
                      Ters Yüz PƎRⱯ
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/tam-yerinden/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202312-3d-tam-yerinden.jpg"
                      alt="Tam Yerinden"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="isabeltam-yerinden" className="card-title">
                      Tam Yerinden
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/gelecek-hatiralari/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202312-3d-gelecek-hatiralari.jpg"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="gelecek-hatiralari" className="card-title">
                      Gelecek Hatıraları
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/isabel-munoz/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202308-3d-isabel-munoz.jpg"
                      alt="Isabel Muñoz"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="isabel-munoz" className="card-title">
                      Isabel Muñoz: Yeni Bir Hikaye
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/zamane-istanbullari/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202302-zamana-istanbul.jpg"
                      alt="Zamana İstanbul"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="zamana-istanbul" className="card-title">
                      Zamane İstanbulları
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/paula-rego/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202302-paulo-rego.jpg"
                      alt="Paula Rego"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="paula-rego" className="card-title">
                      Paula Rego
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/ve-simdi-iyi-haberler/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202205-vesimdiiyihaberler.jpg"
                      alt="Ve Şimdi İyi Haberler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="ve-simdi-iyi-haberler" className="card-title">
                      Ve Şimdi İyi Haberler
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="/3b-tur/istanbulda-bu-ne-bizantinizm/"
                    target="_blank"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202203-istanbulda-bu-ne-bizantinizm.jpg"
                      alt="İstanbul'dan Bizans'a"
                    />
                  </a>
                  <div className="card-body">
                    <h3
                      id="istanbuldan-bu-ne-bizantinizm"
                      className="card-title"
                    >
                      İstanbul'da Bu Ne Bizantinizm
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/istanbuldan-bizansa/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202202-istanbuldan-bizansa-digital.jpg"
                      alt="İstanbul'dan Bizans'a"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="istanbuldan-bizansa" className="card-title">
                      İstanbul'dan Bizans'a
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/yarina-notlar/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/202201-yarina-notlar-digital.jpg"
                      alt="Yarına Notlar"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="yarina-notlar" className="card-title">
                      Yarına Notlar
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/yuzlesme/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/yuzlesme-digital.jpg"
                      alt="Yüzleşme"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="yuzlesme" className="card-title">
                      Yüzleşme
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="/3b-tur/etel-adnan-imkansiz-eve-donus/"
                    target="_blank"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/etel-adnan-cover-dijital-sergi.jpg"
                      alt="Etel Adnan"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="Etel Adnan" className="card-title">
                      Etel Adnan
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/zevk-meselesi/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/zevk-meselesi-dijital-sergi.jpg"
                      alt="Zevk Meselesi"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="ZevkMeselesi" className="card-title">
                      Zevk Meselesi
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/kristal-berrakligi/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/cc-dijital-sergi.jpg"
                      alt="Kristal Berraklığı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Kristal Berraklığı
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/minyatur-2-0/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-minyatur.jpg"
                      alt="Minyatür 2.0"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Minyatür 2.0
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/bir-ruyanin-insasi/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-bir-ruyanin.jpg"
                      alt="Bir Rüyanın İnşası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Bir Rüyanın İnşası
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="/3b-tur/kesisen-dunyalar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-kesisen-dunyalar.jpg"
                      alt="Kesişen Dünyalar"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Kesişen Dünyalar
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="/3b-tur/osman-hamdi-bey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/osman-hamdi-bey-dijital-sergi.jpg"
                      alt="Osman Hamdi Bey"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Osman Hamdi Bey
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="/3b-tur/anadolu-agirlik-ve-olculeri/"
                    target="_blank"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/anadolu-agirlik-ve-olculeri-dijital-sergi.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Anadolu Ağırlık ve Ölçüleri
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/agirlik-ve-olcu-sanati/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-aavo-new-03.jpg"
                      alt="Ağırlık ve Ölçü Sanatı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="AgirlikveOlcuSanati" className="card-title">
                      Ağırlık ve Ölçü Sanatı
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/3b-tur/kahve-molasi/" target="_blank">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/kahve-molasi-dijital-sergi.jpg"
                      alt="Kahve Molası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Kahve Molası
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/AQwj3NNs?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-duvarlarin-dili.jpg"
                      alt="Duvarların Dili"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEDuvDil" className="card-title BitcraftLang" />
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/AQzMlBN4?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-imparatorluktan-portreler.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEImpPortre" className="card-title BitcraftLang" />
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/bgKC_XdOhBgDLA?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-duslerin-kenti.jpg"
                      alt="Düşlerin Kenti"
                    />
                  </a>
                  <div className="card-body">
                    <h3
                      id="DEDuslerinKenti"
                      className="card-title BitcraftLang"
                    />
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/streetview/pera-museum/tQFm9DHXI0yFqQ?sv_lng=28.97518629211666&sv_lat=41.0318130740566&sv_h=287.627527978527&sv_p=-9.594172163298538&sv_pid=tG06WaqNWMLU8iV1fpwqJA&sv_z=0.5646302787257532"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-anadolu-agirlik.jpg"
                      alt="Suna ve İnan Kıraç Vakfı Anadolu Ağırlık ve Ölçüleri Koleksiyonu"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Suna ve İnan Kıraç Vakfı Anadolu Ağırlık ve Ölçüleri
                      Koleksiyonu
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/streetview/pera-museum/tQFm9DHXI0yFqQ?sv_lng=28.97528368706196&sv_lat=41.03178122194538&sv_h=63.197694259489964&sv_p=-4.259769286083383&sv_pid=qrp4bNfrdtbK_Rlv19zQQg&sv_z=0.42983350068704285"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-kutahya-cini.jpg"
                      alt="Kütahya Çini ve Seramikleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEKesienDunyalar" className="card-title">
                      Kütahya Çini ve Seramikleri
                    </h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/GQLS3n78OV0QLA?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-yaz-yaz-yaz-2019.jpg"
                      alt="Yaz Yaz Yaz 2019"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title BitcraftLang">Yaz Yaz Yaz '19</h3>
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/RwKCpOwUwYpSIA?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-yaz-yaz-yaz-2018.jpg"
                      alt="Yaz Yaz Yaz 2018"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEYaz18" className="card-title BitcraftLang" />
                    <p className="card-text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a
                    href="https://artsandculture.google.com/exhibit/RALSc9N91qXgJA?hl=tr"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/DijitalSergi/digital-yaz-yaz-yaz-2017.jpg"
                      alt="Yaz Yaz Yaz 2017"
                    />
                  </a>
                  <div className="card-body">
                    <h3 id="DEYaz" className="card-title BitcraftLang" />
                    <p className="card-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
