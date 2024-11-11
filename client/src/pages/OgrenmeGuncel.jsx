import { useState, useEffect } from "react";

export default function OgrenmeGuncel() {
  const [posts, setPosts] = useState([]);

  const category = "Eğitim-Güncel";

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
                  src="/images/OgrenmeGuncel/PM-2023logo-tr.svg"
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
            posts.slice(0, 4).map((post, index) => {
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

      <div className="container">
        <div className="row pt-7">
          {posts && posts.length > 0 ? (
            posts.slice(4, 1000).map((post, index) => {
              let colClass = "col-lg-4 col-md-12"; // Varsayılan üçlü düzen

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
              <div className="col-md-12 bold_text fs-40" style={{}}>
                <h1
                  id="GnlPrg"
                  className="BitcraftLang border-bottom border-secondary"
                  style={{ "font-weight": "600" }}
                />
              </div>
            </div>
          </div>
          {/* <div className="col-md-12 mt-3 ">
            <div className="row">
              <div
                className="col-lg-6 mt-3  col-md-6"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                 
                  <a href="/pera-ogrenme/program/ara-tatil-atolyeleri/4399">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/OgrenmeGuncel/program-gorseli-ara-tatil.jpg"
                      alt="Ara Tatil Atölyeleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title listtitle">
                      Ara Tatil Atölyeleri
                    </h3>
                    <h3
                      className="card-title listtarih"
                      style={{ "font-weight": "400" }}
                    >
                      12 - 16 Kasım 2024
                    </h3>
                    <p className="listdetail" />
                    <p>
                      Öğrenci ve öğretmenlerin keyifli bir ara tatil geçirmeleri
                      için sanat, bilim ve eğlenceyi bir araya getiren
                      atölyelere katılın!
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-3  col-md-6"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <a href="/pera-ogrenme/program/tahayyulden-olasiliga/4397">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/OgrenmeGuncel/program-gorseli-1.jpg"
                      alt="Tahayyülden Olasılığa"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title listtitle">
                      Tahayyülden Olasılığa
                    </h3>
                    <h3
                      className="card-title listtarih"
                      style={{ "font-weight": "400" }}
                    >
                      11 Ekim - 22 Kasım 2024
                    </h3>
                    <p className="listdetail" />
                    <p>
                      Program geometrik tekrarlar, bilgisayar kodlamaları, renk
                      kombinasyonları ve rastlantısal tasarımlar aracılığı ile{" "}
                      <em>Hesaplar ve Tesadüfler</em> sergisinin algoritma ve
                      matematiği sanatla birleştiren içeriğini deneyimlemek
                      isteyen yetişkinlere çevrimiçi ve yüz yüze atölyeler
                      sunuyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-3  col-md-6"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">

                  <a href="/pera-ogrenme/program/rastlantinin-duzeni/4395">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/OgrenmeGuncel/rastlantinin-duzeni.jpg"
                      alt="Rastlantının Düzeni"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title listtitle">
                      Rastlantının Düzeni
                    </h3>
                    <h3
                      className="card-title listtarih"
                      style={{ "font-weight": "400" }}
                    >
                      26 Eylül 2024 - 26 Ocak 2025
                    </h3>
                    <p className="listdetail" />
                    <p>
                      Sanatla buluşturan, farklı yaş gruplarına yönelik hem
                      çevrimiçi hem yüz yüze gerçekleşen, eğlenceli ve ilham
                      dolu sergi turları ve atölyeler sunuyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-3  col-md-6"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
              
                  <a href="/pera-ogrenme/program/koleksiyon-ogrenme-programlari/1273">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/OgrenmeGuncel/koleksiyonogrenme2.jpeg"
                      alt="Koleksiyon Öğrenme Programları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title listtitle">
                      Koleksiyon Öğrenme Programları
                    </h3>
                    <h3
                      className="card-title listtarih"
                      style={{ "font-weight": "400" }}
                    ></h3>
                    <p className="listdetail" />
                    <p>
                      Pera Müzesi Öğrenme Programları, Suna ve İnan Kıraç Vakfı
                      koleksiyon sergilerine paralel, okul öncesi
                      eğitim,�&nbsp;temel eğitim ve lise öğrencilerine yönelik,
                      yaratıcı ve eğlenceli öğrenme programları düzenliyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-md-12 bold_text fs-40" style={{}}>
                <p
                  id="TITrainingPrograms"
                  className="BitcraftLang border-bottom border-secondary"
                  style={{ "font-weight": "600" }}
                >
                  {" "}
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/okul-gruplari/5">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/peraokulgruplari.jpg"
                      alt="Okul Grupları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Okul Grupları</h3>
                    <p className="card-text">
                      Öğrenciler, rehber eşliğinde yapılan sergi turundan sonra
                      sergiye yönelik atölye çalışmaları gerçekleştiriyor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/ogretmenler/4">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/peraogretmenler.jpg"
                      alt="Öğretmenler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Öğretmenler</h3>
                    <p className="card-text">
                      Rehberli tur ve atölyelere katılan öğretmenler, koleksiyon
                      sergileri ve süreli sergiler ile müzeyi yakından tanırken
                      öğrencilerine aktarabilecekleri bilgi ve deneyimi
                      ediniyor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/pera-engelsiz/6">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/engelsiz.jpg"
                      alt="Pera Engelsiz"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dersim Engelsiz</h3>
                    <p className="card-text">
                      {" "}
                      Özel gereksinimli bireylerin ihtiyaçlarına yönelik
                      hazırlanan atölyelerde, katılımcı gruplar, eğitmen
                      eşliğinde yapılan sergi turundan sonra, sergiye yönelik
                      atölye çalışmaları gerçekleştiriyorlar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/pera-cocuk/1">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/cocuk.jpg"
                      alt="Pera Çocuk"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dersim Çocuk</h3>
                    <p className="card-text">
                      {" "}
                      Sergilerimizden ilhamla tasarlanan çevrimiçi ve yüz yüze
                      atölyelerde, çocuklar sergileri interaktif bir şekilde
                      deneyimleyerek keşfediyor, yaratıcılıklarını ortaya
                      koyarak kendi çalışmalarını üretiyorlar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/pera-genc/2">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/genc.jpg"
                      alt="Pera Genç"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dersim Genç</h3>
                    <p className="card-text">
                      {" "}
                      13–17 yaşlarındakilere yönelik sergi turları ve
                      atölyelerde gençler; sanatı farklı disiplinlerle birlikte
                      deneyimliyor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3  col-md-4">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-ogrenme/grup/pera-yetiskin/3">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGuncel/yetiskin.jpg"
                      alt="Pera Yetişkin"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dersim Yetişkin</h3>
                    <p className="card-text">
                      18 yaş ve üzerindeki herkesin katılabildiği atölyelerde
                      katılımcılar, farklı konularda uzmanlaşmış eğitmenler
                      eşliğinde Dersim Müzesi'nin koleksiyon ve süreli
                      sergilerinden ilhamla yaratıcılıklarını ortaya çıkarıyor.
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
}
