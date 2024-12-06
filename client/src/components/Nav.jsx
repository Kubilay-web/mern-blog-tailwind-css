import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark sticky-top navbarheight ptnew-0">
        <div
          className="container m-0 p-0 d-lg-none"
          style={{ width: "85%" }}
          id="mobilMenuTopRow"
        >
          <a
            className="navbar-brand d-lg-none font-weight-bolder mobileSearchHideField"
            style={{ width: "40%" }}
            href="#"
          >
            MENÜ
          </a>
          <div
            className="mobileSearchField input-group d-none"
            style={{ width: "60%" }}
          >
            <input
              type="text"
              name="txtSrch2"
              id="srchBoxMobile"
              className="form-control border border-secondary border-right-0 txtSrch2"
              placeholder="Arama ..."
            />
            <div className="input-group-append">
              <span className="input-group-text bg-white border border-secondary border-left-0 fa fa-angle-right fa-lg"></span>
            </div>
          </div>
          <div
            className="pull-right mr-0 pr-4 d-md-none border-right border-dark"
            id="mobile-search-language"
          >
            <a
              href="https://www.peramuseum.org"
              className="mobilesearchhidefield imgnew"
            >
              <img src="images/en_img.svg" alt="English" />
            </a>
            <a
              id="btnSrchMobile"
              href="#"
              className="linksearch btnsrch imgnew"
            >
              <img src="images/search.svg" alt="Search" />
            </a>
          </div>
        </div>
        <div
          className="navbar-toggler hamburger hamburger--elastic-r ml-auto"
          id="mobilMenuButton"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto justify-content-between w-100 text-uppercase">
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder text-xl nav-linkbolder"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={1}
              >
                ZİYARET
                <img
                  className="d-lg-none d-md-none topImg"
                  style={{ display: "none" }}
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="top-11/12 rounded-none">
                <hr className=" mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item text-xl" href="/ziyaret">
                  ZİYARETİNİZİ PLANLAYIN
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/dersim-muzesi-hakkinda"
                >
                  HAKKIMIZDA
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/homecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ARTSHOP
                </a>
                <img
                  className="d-none d-lg-none subImg float-right mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
                <div className="w-100new" />
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link font-weight-bolder text-xl nav-linkbolder"
                href="/Ajanda"
              >
                AJANDA
              </a>
            </li>
            <li className="nav-item dropdown position-static menuDropdownTopli menuDropdownTopli">
              <a
                className="nav-link dropdown-toggle font-weight-bolder text-xl nav-linkbolder"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={2}
              >
                SANAT
                <img
                  className="d-lg-none d-md-none topImg"
                  style={{ display: "none" }}
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="top-11/12 rounded-none">
                <hr className=" mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item text-xl" href="/sergi">
                  GÜNCEL SERGİLER
                </a>
                <a className="dropdown-item text-xl" href="/koleksiyon">
                  KOLEKSİYONLAR
                </a>
                <a
                  id="Projects"
                  className="dropdown-item text-xl"
                  href="/projeler/1"
                >
                  PROJELER
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/sergi/dijital-sergiler"
                >
                  DERSİM FİLM SERGİLER
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/sergi/gecmis-yillar"
                >
                  GEÇMİŞ SERGİLER
                </a>
                <img
                  className="d-none d-lg-none subImg float-right mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
                <div className="w-100new" />
              </div>
            </li>
            <span className="w-0 h-11 right-0 d-none d-lg-block bg-dark" />
            <li className="nav-item dropdown position-static menuDropdownTopli font-medium">
              <a
                className="nav-link dropdown-toggle nav-linklighter"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={3}
              >
                PERA ÖĞRENME
                <img
                  className="d-lg-none d-md-none topImg"
                  style={{ display: "none" }}
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="top-11/12 rounded-none">
                <hr className=" mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item text-xl" href="/dersim-ogrenme">
                  GÜNCEL PROGRAMLAR
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/dersim-ogrenme/gecmis-programlar"
                >
                  GEÇMİŞ PROGRAMLAR
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/dersim-ogrenme-hakkinda"
                >
                  DERSİM EĞİTİM HAKKINDA
                </a>
                <img
                  className="d-none d-lg-none subImg float-right mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
                <div className="w-100new" />
              </div>
            </li>
            <li className="nav-item dropdown position-static menuDropdownTopli font-medium">
              <a
                className="nav-link dropdown-toggle nav-linklighter"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={4}
              >
                PERA FİLM
                <img
                  className="d-lg-none d-md-none topImg"
                  style={{ display: "none" }}
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="top-11/12 rounded-none">
                <hr className=" mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item text-xl" href="/film">
                  GÜNCEL PROGRAMLAR
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/film/gecmis-programlar"
                >
                  GEÇMİŞ PROGRAMLAR
                </a>
                <a
                  className="dropdown-item text-xl"
                  href="/dersim-film-hakkinda"
                >
                  DERSİM FİLM HAKKINDA
                </a>
                <img
                  className="d-none d-lg-none subImg float-right mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
                <div className="w-100new" />
              </div>
            </li>
            <li className="nav-item dropdown position-static menuDropdownTopli font-medium">
              <a
                className="nav-link dropdown-toggle nav-linklighter"
                href="/yayinlar"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={5}
              >
                YAYINLAR
                <img
                  className="d-lg-none d-md-none topImg"
                  style={{ display: "none" }}
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="top-11/12 rounded-none">
                <hr className=" mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item text-xl" href="/yayinlar">
                  TÜM YAYINLAR
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/2">
                  SÜRELİ SERGİ KATALOGLARI
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/3">
                  KOLEKSİYON KATALOGLARI
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/14">
                  SEMPOZYUM DİZİSİ
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/15">
                  KÜÇÜK KİTAPLAR DİZİSİ
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/13">
                  PERA FİLM YAYINLAR
                </a>
                <a className="dropdown-item text-xl" href="/yayinlar/20">
                  DERSİM VAKFI YAYINLARI
                </a>
                <img
                  className="d-none d-lg-none subImg float-right ml-auto mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
                <div className="w-100new" />
              </div>
            </li>
            <li className="nav-item position-static font-medium">
              <a className="nav-link nav-linklighter" href="/Blog">
                KEŞFET!
              </a>
            </li>
            <span className="w-0 h-11 right-0 d-none d-lg-block bg-dark" />
          </ul>
          <div
            className="topMenuRight text-right"
            style={{ margin: "0 -16px 0 0" }}
          >
            <a
              className="pl-2 menu-logo-not-scrolled"
              href="/"
              title="Anasayfa"
            >
              <img
                className="h-auto"
                src="images/PM-2023logo-tr.svg"
                alt="Pera Müzesi Logo"
              />
            </a>
            <p className="menu-dates-not-scrolled">
              <span className="todaydate">9 Kasım Cumartesi</span>
              <br />
              <span className="todaynote">Ziyaret Saatleri: 10.00 - 19.00</span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
