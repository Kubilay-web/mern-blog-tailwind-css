import { useState, useEffect } from "react";

const Yayin2 = () => {
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
                  src="/images/Yayın2/PM-2023logo-tr.svg"
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
                <h1>Süreli Sergi Katalogları</h1>
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
                  <a href="/yayin/hesaplar-ve-tesadufler/3276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/1-Bişi.jpg"
                      alt="Bişi"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Bişi</h3>
                    <p className="card-text">Bişi</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/ters-yuz-pǝrɐ/1276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/2-Dövme Çorba.jpg"
                      alt="Ters Yüz PƎRⱯ"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dövme Çorba</h3>
                    <p className="card-text">Dövme Çorba</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gelecek-hatiralari/1273">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/3-Dövme Pilav.jpg"
                      alt="Dövme Pilav"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dövme Pilav</h3>
                    <p className="card-text">Dövme Pilav</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/tam-yerinden-/1272">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/4-Dut Tatlısı.jpg"
                      alt="Tam Yerinden "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Dut Tatlısı </h3>
                    <p className="card-text">Dut Tatlısı</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/isabel-munoz-yeni-bir-hikaye/1271">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/5-Gulik.jpeg"
                      alt="Isabel Muñoz: Yeni Bir Hikâye"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Gulik</h3>
                    <p className="card-text">Gulik</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/zamane-istanbullari/1267">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın2/6-Halbur Hurması Tatlısı.jpg"
                      alt="Zamane İstanbulları"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Halbur Hurması Tatlısı</h3>
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

export default Yayin2;
