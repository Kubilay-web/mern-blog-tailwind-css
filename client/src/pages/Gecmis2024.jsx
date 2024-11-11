import { useEffect, useState } from "react";

const Gecmis2024 = () => {
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
                    src="images/PM-2023logo-tr.svg"
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
            <div className="col-md-12 mt-1">
              <div className="row">
                <div
                  className="col-md-8 col-7 fs-40"
                  style={{ color: "#1E1E1E" }}
                >
                  <h1 id="PastExhibitions" className="BitcraftLang">
                    Geçmiş Sergiler
                  </h1>
                </div>
                <div className="col-md-4 col-5" aria-label="...">
                  <ul
                    className="pagination justify-content-end"
                    style={{ "font-size": "30px" }}
                  >
                    <li className="page-item">
                      <a
                        className="page-link  border-0 px-1 text-dark"
                        href={2023}
                      >
                        <img
                          src="/images/Home/left2.png"
                          style={{ height: "30px" }}
                        />
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link border-0 px-1 text-dark font-bold"
                        style={{ fontSize: "20px" }}
                      >
                        2024
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-md-12 mt-3 ">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-0 border-0">
                  
                    <a href="/sergi/ters-yuz-pǝrɐ/1302">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="images/ters-yuz-1.jpg"
                        alt="Ters Yüz PƎRⱯ"
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
                        Ters Yüz PƎRⱯ
                      </span>{" "}
                      <br />
                      <div
                        className="divSummary listtitle"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        {" "}
                        Mekânlar ve Metinlerde Denemeler{" "}
                      </div>
                      <span
                        className="listtarih"
                        style={{ "font-family": "'Raleway'" }}
                      >
                        23 Mayıs - 18 Ağustos 2024{" "}
                      </span>
                      <br />
                      <br />
                      <div className="listdetail">
                        {" "}
                        <p>
                          Pera Müzesi, Bauhaus Üniversitesi Weimar'dan Prof.
                          Mona Mahall ve Yelta Köm yürütücülüğündeki "Temsil
                          Pratikleri ve Politikaları" bölümü ve Bremen Sanat
                          Üniversitesi’nden Prof. Aslı Serbest yürütücülüğündeki
                          "Geçici Mekânlar” bölümü iş birliğiyle&nbsp;
                          <em>Ters Yüz P</em>
                          <em>Ǝ</em>
                          <em>R</em>
                          <em>Ɐ</em>&nbsp;sergisini gerçekleştiriyor. Suna ve
                          İnan Kıraç Vakfı Oryantalist Resim Koleksiyonu'ndaki
                          iki resimden yola çıkan sergi, küresel kapitalist
                          ilişkileri ve yerelleşmiş kültürel pratikleri
                          araştırıyor. Ayrıca, mimarinin, kurumların kentsel
                          çevreleriyle ilişkilerinde hem kurucu hem de açığa
                          çıkarıcı bir rol oynayarak bu kurumların belirli bir
                          yer ve zamanda nasıl aracılık ettiğini ve işlediğini
                          inceliyor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gecmis2024;
