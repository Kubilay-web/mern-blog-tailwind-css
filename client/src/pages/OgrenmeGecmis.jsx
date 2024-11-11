import React from "react";

export default function OgrenmeGecmis() {
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
                  src="/images/OgrenmeGecmis/PM-2023logo-tr.svg"
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
              <div className="col-md-12 fs-40" style={{}}>
                <h1 id="PastTrainings" className="BitcraftLang" />
              </div>
            </div>
          </div>
          <div className="col-md-12  mt-3">
            <div className="row">
              {/* p4 kaldırdık */}
              {/*<div class="col-lg-6 mt-3  col-md-6">*/}
              <div
                className="col-lg-6 mt-3 col-md-6 text-white text-center"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/OgrenmeGecmis/2024-ogrenme.jpg"
                    alt="2024 yılı öğrenme programları"
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <div
                    className="card-img-overlay d-flex align-items-center"
                    onclick="javascript:window.location = '/dersim-ogrenme/yillar/2024' ;"
                  >
                    <a
                      href="/dersim-ogrenme/yillar/2024"
                      style={{
                        color: "white",
                        "font-size": "40px",
                        "font-family": "'Raleway'",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        margin: "0 auto",
                        "font-weight": "600",
                      }}
                    >
                      2024
                    </a>
                  </div>
                </div>
              </div>
              {/*<div class="col-lg-6 mt-3  col-md-6">*/}
              <div
                className="col-lg-6 mt-3 col-md-6 text-white text-center"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/OgrenmeGecmis/2023-ogrenme.jpg"
                    alt="2023 yılı öğrenme programları"
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <div
                    className="card-img-overlay d-flex align-items-center"
                    onclick="javascript:window.location = '/dersim-ogrenme/yillar/2023' ;"
                  >
                    <a
                      href="/dersim-ogrenme/yillar/2023"
                      style={{
                        color: "white",
                        "font-size": "40px",
                        "font-family": "'Raleway'",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        margin: "0 auto",
                        "font-weight": "600",
                      }}
                    >
                      2023
                    </a>
                  </div>
                </div>
              </div>
              {/*<div class="col-lg-6 mt-3  col-md-6">*/}
              <div
                className="col-lg-6 mt-3 col-md-6 text-white text-center"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/OgrenmeGecmis/2022-ogrenme.jpg"
                    alt="2022 yılı öğrenme programları"
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <div
                    className="card-img-overlay d-flex align-items-center"
                    onclick="javascript:window.location = '/dersim-ogrenme/yillar/2022' ;"
                  >
                    <a
                      href="/dersim-ogrenme/yillar/2022"
                      style={{
                        color: "white",
                        "font-size": "40px",
                        "font-family": "'Raleway'",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        margin: "0 auto",
                        "font-weight": "600",
                      }}
                    >
                      2022
                    </a>
                  </div>
                </div>
              </div>
              {/*<div class="col-lg-6 mt-3  col-md-6">*/}
              <div
                className="col-lg-6 mt-3 col-md-6 text-white text-center"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/OgrenmeGecmis/2021.jpg"
                    alt="2021 yılı öğrenme programları"
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <div
                    className="card-img-overlay d-flex align-items-center"
                    onclick="javascript:window.location = '/dersim-ogrenme/yillar/2021' ;"
                  >
                    <a
                      href="/dersim-ogrenme/yillar/2021"
                      style={{
                        color: "white",
                        "font-size": "40px",
                        "font-family": "'Raleway'",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        margin: "0 auto",
                        "font-weight": "600",
                      }}
                    >
                      2021
                    </a>
                  </div>
                </div>
              </div>
              {/*<div class="col-lg-6 mt-3  col-md-6">*/}
              <div
                className="col-lg-6 mt-3 col-md-6 text-white text-center"
                style={{ margin: "0 0 30px 0" }}
              >
                <div className="card mb-0 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100%"
                    src="/images/OgrenmeGecmis/2020.jpg"
                    alt="2020 yılı öğrenme programları"
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <div
                    className="card-img-overlay d-flex align-items-center"
                    onclick="javascript:window.location = '/dersim-ogrenme/yillar/2020' ;"
                  >
                    <a
                      href="/dersim-ogrenme/yillar/2020"
                      style={{
                        color: "white",
                        "font-size": "40px",
                        "font-family": "'Raleway'",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        margin: "0 auto",
                        "font-weight": "600",
                      }}
                    >
                      2020
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <p className="border-bottom border-secondary" />
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="FIAboutPeraLearning"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/dersim-ogrenme-hakkinda">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGecmis/dersim-ogrenme-hakkinda.jpg"
                      alt="Pera Öğrenme Hakkında"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="Archive"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/dersim-ogrenme/arsiv">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/OgrenmeGecmis/dersim-ogrenme-arsiv.jpg"
                      alt="Pera Öğrenme Arşiv"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 mb-3"></div>
        </div>
      </div>
      <div className="cookie-bar">
        <img src="/images/OgrenmeGecmis/close2.png" className="cookie-close" />
        Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
        için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
        inceleyebilirsiniz.
      </div>
    </div>
  );
}
