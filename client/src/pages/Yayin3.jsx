import { useState, useEffect } from "react";

const Yayin3 = () => {
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
                  src="/images/Yayın3/PM-2023logo-tr.svg"
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
                <h1>Koleksiyon Sergi Katalogları</h1>
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
                  <a href="/yayin/agirlik-ve-olcu-sanati-/1264">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/7-Haşıl.jpg"
                      alt="Ağırlık ve Ölçü Sanatı "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Haşıl </h3>
                    <p className="card-text">Haşıl</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/8-Mantar Yemeği.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Mantar Yemeği</h3>
                    <p className="card-text">Mantar Yemeği</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/anadolu-agirlik-ve-olculeri/130">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/9-İmam Çorbası.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">İmam Çorbası</h3>
                    <p className="card-text">İmam Çorbası</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/duslerin-kenti-istanbul/131">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/10-Mumbar Dolması.jpg"
                      alt="Düşlerin Kenti: İstanbul"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Mumbar Dolması</h3>
                    <p className="card-text">Mumbar Dolması</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/imparatorluktan-portreler/132">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/11-Pekmez Helvası.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Pekmez Helvası</h3>
                    <p className="card-text">Pekmez Helvası</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-6 mr10 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/pierre-willemart-sikke-koleksiyonu/212">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayın3/12-Kabak Dolması.jpg"
                      alt="Pierre Willemart Sikke Koleksiyonu"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kabak Dolması</h3>
                    <p className="card-text">Kabak Dolması</p>
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

export default Yayin3;
