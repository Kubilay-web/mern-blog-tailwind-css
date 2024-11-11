export default function Film() {
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
                  src="/images/Film/PM-2023logo-tr.svg"
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
                <h1 id="GnlPrg" className="BitcraftLang" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  {/* <a href="/film-program/dijital/3535">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Film/program-gorseli-dijital.jpg"
                      alt="dijital"
                    />
                  </a> */}

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
                    <h3 className="card-title listtitle">
                      Dersim Müzesi 360 Panoramik
                    </h3>

                    <p />
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
                    id="FIAboutPeraFilm"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ fontFamily: '"Raleway"' }}
                  >
                    Pera Film Hakkında
                  </b>

                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/pera-film-hakkinda">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Film/pera-film-hakkinda.jpg"
                      alt="Pera Film Hakkında"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="FIPastPrograms"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ fontFamily: '"Raleway"' }}
                  >
                    Geçmiş Programlar
                  </b>

                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/film/gecmis-programlar">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Film/perafilm-gecmisprogramlar.jpg"
                      alt="Geçmiş Pera Film Programları"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 mb-3"></div>
        </div>
      </div>
    </div>
  );
}
