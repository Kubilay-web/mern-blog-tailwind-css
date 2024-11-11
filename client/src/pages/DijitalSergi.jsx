import { useState, useEffect } from "react";

export default function DijitalSergi() {
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
                className="col-md-12 fs-40 mb-2"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1 id="DigitalExhibitions" className="BitcraftLang" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-5">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}

                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: "100vw",
                      marginTop: 10,
                      height: "100vh",
                    }}
                    id="ta-reviews"
                  >
                    <iframe
                      style={{
                        border: 0,
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                      }}
                      allowFullScreen=""
                      src="https://www.google.com/maps/embed?pb=!4v1693050723186!6m8!1m7!1sJesj_mVAwp0AAARiXGL73A!2m2!1d39.1045651!2d39.5473264!3f239.89!4f-0.11!5f0.7820865974627469"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h3 id="ters-yuz-pera" className="card-title">
                      Dersim 360 Panoramik
                    </h3>
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
