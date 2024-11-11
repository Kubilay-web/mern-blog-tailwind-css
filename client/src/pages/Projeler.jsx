import { useState, useEffect } from "react";

export default function Projeler() {
  const [posts, setPosts] = useState([]);

  const category = "Projeler";

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
                        src="/images/Projeler/1731162190451-Eğitim Güncel-2.webp"
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
                        Hozat
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      ></div>
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          Hozat'ın; 10. yüzyıl Bizans kaynaklarına göre Murat
                          Nehri (Arsanias) ve Kamacha Nehri arasında yer alan,
                          Arap kaynaklarında da Ermeni theması olarak
                          adlandırılan Chozanon (Χόζανον) theması olduğu
                          düşünülmektedir. 16. yüzyıl Osmanlı kayıtlarında
                          yerleşim sadece Gayrimüslimlerin yaşadığı bir köy
                          olarak görülmektedir. 1847 yılında kurulan Dersim
                          Sancağını sırasıyla Harput Eyaleti, Dersim Vilayeti ve
                          Ma‘mûretü'l-Azîz Vilayetine bağlı olurken, Hozat'ta
                          (kısa süreli Kemah ve Ovacık'ın sancak merkezi olması
                          haricinde) bu sancağın merkez kasabası olmuştur. 1922
                          yılında sancağın lağvedilmesinin ardından kaza olarak
                          Elazığ'a bağlanmış, 25 Aralık 1935 yılında çıkarılan
                          2884 sayılı Tunceli Kanunu ile Hozat Tunceli’ye bağlı
                          ilçe durumuna getirilmiştir. Balkanları
                          Müslümanlaştırma faaliyetlerinde bulunan Bektaşî
                          dervişi Sarı Saltuk'un türbesi bu ilçede
                          bulunmaktadır.
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
                        src="/images/Projeler/1731161909414-Eğitim Güncel-1.jpg"
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
                        Çemişgezek
                      </span>
                      <br />
                      <br />
                      <span
                        className="listdetail"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        <p>
                          İlçenin adı Ermeni kökenli general ve sonrasında
                          Bizans İmparatoru olan I. İoannis Çimiskes'den geldiği
                          görüşü bulunmaktadır. İmparatorun Tzimiskes (Çimiskes)
                          lakabının Ermenice "Kırmızı çizme" anlamına gelen
                          Chmushkik kelimesinden ya da Ermenice "Kısa boylu"
                          anlamına gelen bir kelimeden türediği yönünde görüşler
                          bulunmaktadır. Ermenice olarak (Չմշկածագ) Čmškacag
                          olan ilçenin Osmanlıca'daki kullanımı ise (چمشکزک)
                          idi.Edessalı Mateos, Çimiskes'i Sophene bölgesinden
                          olduğunu belirtmektedir.
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
                      style={{ fontFamily: '"Raleway"' }}
                    >
                      Koleksiyonlar
                    </b>

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
                      id="GspArsiv"
                      className="BitcraftLang fs-40 mb-2"
                      style={{ fontFamily: '"Raleway"' }}
                    >
                      Sergiler
                    </b>
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
