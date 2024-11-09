import { useState, useEffect } from "react";

export default function Projeler() {
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
                    src="/images/Projeler/PM-2023logo-tr.svg"
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
                <div className="col-md-8 fs-40" style={{}}>
                  <h1 id="ActualArtProjects">Projeler</h1>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 ">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/osman-hamdi-bey’in-dunyasina-yolculuk-sanal-gerceklik-deneyimi/260">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/osman-hamdi-vr-1.jpg"
                        alt="Osman Hamdi Bey’in Dünyasına Yolculuk <br>Sanal Gerçeklik Deneyimi"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Osman Hamdi Bey’in Dünyasına Yolculuk <br />
                        Sanal Gerçeklik Deneyimi
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      ></div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        22 Mayıs 2019
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Sanatçının tarihsel veriler doğrultusunda kurgulanmış
                          çalışma ortamını ziyaret edecek ve “Kaplumbağa
                          Terbiyecisi” resminin içinde etkileşimli bir gezintiye
                          çıkacaksınız!
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/voronoi-/1246">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/proje.jpg"
                        alt="Voronoi "
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Voronoi{" "}
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        oddviz{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        3 Mart 2020 - 28 Nisan 2024
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi 15. yılında, sanatçı kolektifi oddviz’in
                          Suna ve İnan Kıraç Vakfı Kütahya Çini ve Seramikleri
                          koleksiyonundan ilhamla ürettiği Voronoi başlıklı
                          videoyu sunuyor.&nbsp;
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/akustik-ufuk/1294">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/proje1-ufuk-gorsel.jpg"
                        alt="Akustik Ufuk"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Akustik Ufuk
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Özcan Ertek{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        14 Nisan - 9 Temmuz 2023
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi, Özcan Ertek'in Suna ve İnan Kıraç Vakfı
                          Oryantalist Resim Koleksiyonu'ndan esinlenerek
                          hazırladığı <em>Akustik Ufuk</em> başlıklı interaktif
                          ses yerleştirmesini sunuyor. Yerleştirme, elektronik
                          bir pusula aracılığıyla,{" "}
                          <em>Kesişen Dünyalar: Elçiler ve Ressamlar</em>{" "}
                          sergisindeki resimlerden esinlenerek üretilen ses
                          manzaralarını çalan bir enstrümana dönüşüyor.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/plastik-dusler-sahnesi/1267">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/plastik-dusler-sahnesi.jpg"
                        alt="Plastik Düşler Sahnesi"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Plastik Düşler Sahnesi
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      ></div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        12 Mart - 28 Mayıs 2021
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi,&nbsp;HYPERCORTEX [Atay Ilgun, Caner
                          Bozkurt / Kaan Işık ve Emre Öztürk'ün yardımlarıyla]
                          iş birliği ve British Council desteğiyle sanal
                          (virtual) etkinlik serisi “Plastik Düşler Sahnesi”ni
                          sunar.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/tum-zamanlara-tum-uzgun-taslara/244">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/tum-zamanlara-tum-uzgun-taslara1.jpg"
                        alt="Tüm Zamanlara, Tüm Üzgün Taşlara"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Tüm Zamanlara, Tüm Üzgün Taşlara
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Nicola Lorini{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        9 Mayıs - 24 Kasım 2019
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi, Anadolu Ağırlık ve Ölçüleri Koleksiyonu
                          sergi salonunda koleksiyondan esinlenen&nbsp;
                          <em>Tüm Zamanlara,Tüm Üzgün Taşlara</em>
                          &nbsp;başlıklı güncel bir video yerleştirme sundu.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/yeni-sesler/245">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/yenisesler-1.jpg"
                        alt="Yeni Sesler"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Yeni Sesler
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      ></div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        1 Ekim 2018 - 1 Mayıs 2019
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Müze koleksiyonlarını farklı ifade olanakları sunan
                          mecralarla yeniden keşfetmeyi amaçlayan projede,
                          çeşitli müzik türlerinde çalışmalar yapan besteci,
                          müzisyen veya sanatçılar “Oryantalist Resim”, “Anadolu
                          Ağırlık ve Ölçüeri” ve “Kütahya Çini ve Seramikleri”
                          koleksiyonlarından esinlenen üretimler gerçekleştirdi.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/bir-avuc-hak/251">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/bir-avuc-hak-ana.jpg"
                        alt="Bir Avuç Hak"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Bir Avuç Hak
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Aslı Uludağ{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        2 Mart - 1 Nisan 2018
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Suna ve İnan Kıraç Vakfı Anadolu Ağırlık ve Ölçüleri
                          Koleksiyonu’ndan esinlenerek yaratılan ve Pera
                          Müzesi’nin{" "}
                          <em>Kesişen Dünyalar: Elçiler ve Ressamlar</em> sergi
                          katında bir ay süreyle Aslı Uludağ tarafından
                          gerçekleştirilen performans, imzalanmasının 70.
                          yılında İnsan Hakları Evrensel Bildirgesi’ni mercek
                          altına aldı.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/yeniden-bak/252">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/yeniden-1.jpg"
                        alt="Yeniden Bak"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Yeniden Bak
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      ></div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        31 Mart - 2 Nisan 2017
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi, Performistanbul iş birliğiyle Suna ve
                          İnan Kıraç Vakfı koleksiyon sergilerinden ilham alan
                          “Yeniden Bak” performans programını sundu. Sanatçılar
                          İ. Ata Doğruel “Elçiler”, AslieMk “Yerinde” ve Ekin
                          Bernay “9 Taş” başlıklı performanslarıyla Pera
                          Müzesi’ndeki Oryantalist Resim, Kütahya Çini ve
                          Seramikleri ve Anadolu Ağırlık ve Ölçüleri koleksiyon
                          sergilerine yeni bir bakış sundular.&nbsp;
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/bulut-profilleri-agirliksiz-olculer/256">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/bulut-profilleri-katherine-behar1.jpg"
                        alt="Bulut Profilleri: Ağırlıksız Ölçüler"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        Bulut Profilleri: Ağırlıksız Ölçüler
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Katherine Behar{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        8 Eylül - 16 Kasım 2016
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Pera Müzesi'nin Anadolu Ağırlık ve Ölçüleri
                          Koleksiyonu'ndan ilhamla sanatçı Katherine Behar
                          tarafından hazırlanan 3 boyutlu animasyon-videolar,
                          koleksiyon sergisindeki ekranlarda gösterildi.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/gor-bak-deniz/257">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/images/Projeler/gor-bak-deniz-ana1.jpg"
                        alt="gör/bak/deniz"
                      />
                    </a>
                    <div className="card-body">
                      <span
                        className="listtitle"
                        style={{
                          "font-family": "'Raleway'",
                          "font-weight": "bold",
                        }}
                      >
                        gör/bak/deniz
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Caitlind r.c. Brown ve Wayne Garrett{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        5 Haziran 2015 - 14 Şubat 2016
                      </span>{" "}
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          2015’te 10. yılını kutlayan Pera Müzesi, uluslararası
                          platformda yaptıkları kavramsal çalışmalarla dikkat
                          çeken Kanadalı genç sanatçılar Caitlind r.c. Brown ve
                          Wayne Garrett’a Müze’nin cephesine özel bir yapıt
                          projelendirmelerini rica etti.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <p className="border-bottom border-secondary" />
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="card mb-0 border-0">
                    <b
                      id="GspArsiv"
                      className="BitcraftLang fs-40 mb-2"
                      style={{ "font-family": "'Raleway'" }}
                    />
                    <a href="/koleksiyon">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        src="/images/Projeler/cover-kutahyacinivesereamik.jpg"
                        alt="Koleksiyonlar"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="card mb-0 border-0">
                    <b
                      id="Exhibitions"
                      className="BitcraftLang fs-40 mb-2"
                      style={{ "font-family": "'Raleway'" }}
                    />
                    <a href="/sergi">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        src="/images/Projeler/kapak-ProjelerSergiler.jpg"
                        alt="Sergiler"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cookie-bar">
          <img src="/images/Projeler/close2.png" className="cookie-close" />
          Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
          için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
          inceleyebilirsiniz.
        </div>
      </div>
    </div>
  );
}
