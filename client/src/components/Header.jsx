import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState, useRef } from "react";
import "../../src/css/bootstrap.min.css";
import "../../src/css/font-awesome.min.css";
// import "../../src/css/Hamburgers.css";
import "../../src/css/owl.carousel.css";
import "../../src/css/owl.theme.default.css";
import "../../src/css/plyr.css";
import "../../src/css/tema.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import CarouselComp from "./CarouselComp";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dropdown'ı sayfa değiştiğinde kapatmak için
  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]); // Sayfa değiştiğinde çalışır

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  const handleIconClick = (e) => {
    e.preventDefault(); // Prevent link navigation
    handleSubmit(e); // Trigger form submission logic
  };

  // Bugünün tarihini al
  const today = new Date();

  // Tarihi Türkçe formatında yaz
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("tr-TR", options);

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <img
            src="/images/Home/DERSIM STIFTUNG.png"
            alt="logo"
            className="w-[360px] h-auto" // Genişlik ve yükseklik otomatik ayarlanır
          />
        </Link>

        {/* <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button> */}
        <div class="flex gap-2 items-center md:order-2 max-[426px]:hidden max-[974px]:hidden">
          {/* <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button> */}
          {/* <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form> */}

          <form onSubmit={handleSubmit}>
            <div className="searchbar flex items-center justify-center">
              <input
                className="search_input txtSrch1"
                id="srchBox"
                type="text"
                name="txtSrch1"
                placeholder="Arama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <a
                href="#"
                id="btnSrchDesktop"
                className="search_icon btnSrch"
                onClick={handleIconClick}
              >
                <img
                  className="desktop-search"
                  src="/images/Home/iconSearch.png"
                  style={{ width: "25px" }}
                  alt="Search Icon"
                />
              </a>
            </div>
          </form>

          <img
            className="desktop-lang"
            src="/images/Home/iconLang.png"
            style={{ width: 25, height: 25 }}
          />

          {/* <div
            className="mobileSearchField input-group lg:hidden"
            style={{ width: "60%" }}
          >
            <input
              type="text"
              name="txtSrch2"
              id="srchBoxMobile"
              className="form-control border border-secondary border-right-0 txtSrch2 h-[45px]"
              placeholder="Arama ..."
            />

            <div className="input-group-append">
              <span className="input-group-text  border border-secondary border-left-0">
                <i className="fa fa-angle-right fa-lg" />
              </span>
            </div>
          </div> */}

          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button
                gradientDuoTone="Red"
                outline
                className="bg-red-500 border-transparent hover:bg-red-600 focus:ring-0 focus:border-transparent"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </Navbar>

      <nav className="ml-auto mb-3 navbar navbar-expand-lg navbar-light border-top border-bottom border-dark sticky-top navbarheight ptnew-0">
        <div
          className="container m-0 p-0 d-lg-none"
          style={{ width: "85%" }}
          id="mobilMenuTopRow"
        >
          {!isSearchVisible && (
            <a
              className="navbar-brand d-lg-none font-weight-bolder mobileSearchHideField"
              style={{ width: "40%" }}
              href="#"
            >
              MENÜ
            </a>
          )}

          {/* Arama çubuğu */}
          {isSearchVisible && (
            <form style={{ width: "60%" }} onSubmit={handleSubmit}>
              <div className="input-group" style={{ width: "60%" }}>
                <input
                  type="text"
                  name="txtSrch2"
                  id="srchBoxMobile"
                  className="form-control border border-secondary border-right-0 txtSrch2"
                  placeholder="Arama ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="input-group-append">
                  <span
                    onClick={handleIconClick}
                    className="input-group-text bg-white border border-secondary border-left-0"
                  >
                    <i className="fa fa-angle-right fa-lg" />
                  </span>
                </div>
              </div>
            </form>
          )}

          <div
            className="pull-right mr-0 pr-4 d-md-none  border-right border-dark"
            id="mobile-search-language"
          >
            <a
              className="mobileSearchHideField"
              href="https://www.peramuseum.org/"
            >
              <img src="images/en_img.svg" alt="" className="imgnew" />
            </a>

            <a
              className="linkSearch btnSrch"
              id="btnSrchMobile"
              href="#"
              onClick={toggleSearch}
            >
              <img
                src="/images/Home/iconSearch.png"
                alt="Search Icon"
                style={{ width: 25, marginRight: 10 }}
              />
            </a>

            <img
              src="/images/Home/iconLang.png"
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="user" img={currentUser.profilePicture} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">@{currentUser.username}</span>
                  <span className="block text-sm font-medium truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to={"/dashboard?tab=profile"}>
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign-in">
                <Button
                  gradientDuoTone="Red"
                  outline
                  className="bg-red-500 border-transparent hover:bg-red-600 focus:ring-0 focus:border-transparent"
                >
                  Sign In
                </Button>
              </Link>
            )}
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
            <img
              src="/images/Home/hamburger.png"
              alt=""
              className="hamburger"
            />
          </span>
        </div>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto justify-content-between w-100 text-uppercase">
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={1}
              >
                ZİYARET
                <img
                  style={{ display: "none" }}
                  className="d-lg-none d-md-none topImg"
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="dropdown-menu">
                <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item dropdown-menuitem" href="/ziyaret">
                  ZİYARETİNİZİ PLANLAYIN
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/pera-muzesi-hakkinda"
                >
                  HAKKIMIZDA
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="https://artshop.peramuzesi.org.tr"
                  target="_out"
                >
                  ARTSHOP
                </a>

                <img
                  className="d-none d-lg-none subImg float-right mb-3"
                  style={{ marginTop: "-40px" }}
                  src="images/xButton.svg"
                  alt="kapat"
                />
              </div>
            </li>
            <li className="nav-item dropdown  position-static">
              <a
                className="nav-link font-weight-bolder nav-link22 nav-linkbolder"
                href="/Ajanda"
              >
                AJANDA
              </a>
            </li>
            <li className="nav-item dropdown  position-static menuDropdownTopli menuDropdownTopli">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={2}
              >
                SANAT
                <img
                  style={{ display: "none" }}
                  className="d-lg-none d-md-none topImg"
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="dropdown-menu">
                <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item dropdown-menuitem" href="/sergi">
                  GÜNCEL SERGİLER
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/koleksiyon"
                >
                  KOLEKSİYONLAR
                </a>
                <a
                  id="Projects"
                  className="dropdown-item dropdown-menuitem"
                  href="/projeler/1"
                >
                  PROJELER
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/sergi/dijital-sergiler"
                >
                  DİJİTAL SERGİLER
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
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
            <span className="bol d-none d-lg-block  bg-dark" />
            <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
              <a
                className="nav-link dropdown-toggle nav-linklighter"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={3}
              >
                DERSİM ÖĞRENME
                <img
                  style={{ display: "none" }}
                  className="d-lg-none d-md-none topImg"
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="dropdown-menu">
                <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/pera-ogrenme"
                >
                  GÜNCEL PROGRAMLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/pera-ogrenme/gecmis-programlar"
                >
                  GEÇMİŞ PROGRAMLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/pera-ogrenme-hakkinda"
                >
                  DERSİM ÖĞRENME HAKKINDA
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
            <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
              <a
                className="nav-link dropdown-toggle nav-linklighter"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bc={4}
              >
                DERSİM FİLM
                <img
                  style={{ display: "none" }}
                  className="d-lg-none d-md-none topImg"
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="dropdown-menu">
                <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item dropdown-menuitem" href="/film">
                  GÜNCEL PROGRAMLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/film/gecmis-programlar"
                >
                  GEÇMİŞ PROGRAMLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/pera-film-hakkinda"
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
            <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
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
                  style={{ display: "none" }}
                  className="d-lg-none d-md-none topImg"
                  src="images/leftArrow.svg"
                  alt="sol"
                />
              </a>
              <div className="dropdown-menu">
                <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                <a className="dropdown-item dropdown-menuitem" href="/yayinlar">
                  TÜM YAYINLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/2"
                >
                  SÜRELİ SERGİ KATALOGLARI
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/3"
                >
                  KOLEKSİYON KATALOGLARI
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/14"
                >
                  SEMPOZYUM DİZİSİ
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/15"
                >
                  KÜÇÜK KİTAPLAR DİZİSİ
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/13"
                >
                  DİJİTAL YAYINLAR
                </a>
                <a
                  className="dropdown-item dropdown-menuitem"
                  href="/yayinlar/20"
                >
                  SUNA VE İNAN KIRAÇ VAKFI YAYINLARI
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
            <li className="nav-item  position-static nav-linkmedium">
              <a className="nav-link nav-linklighter" href="/Blog">
                KEŞFET!
              </a>
            </li>
            <span className="bol  d-none d-lg-block bg-dark" />
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
                className="img-fluid2"
                src="images/PM-2023logo-tr.svg"
                alt="Pera Müzesi Logo"
              />
            </a>

            {/*@todo: replace with company social media details*/}
            <p className="menu-dates-not-scrolled">
              <span className="todaydate">{formattedDate}</span>
              <br />
              <span className="todaynote">Ziyaret Saatleri: 10.00 - 19.00</span>
            </p>
          </div>
        </div>
      </nav>

      <nav
        className="flex justify-center ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark navbarheight ptnew-0 h-[80]"
        style={{ zIndex: 3, maxWidth: 1100, margin: "auto" }}
      >
        <div id="navbarsExample09" ref={dropdownRef}>
          <ul className="navbar-nav gap-4 mr-auto justify-content-between w-100 text-uppercase">
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("ZİYARET")}
              >
                ZİYARET
              </a>
              {openDropdown === "ZİYARET" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/ziyaret"
                    onClick={handleLinkClick}
                  >
                    ZİYARETİNİZİ PLANLAYIN
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/dersim-muzesi-hakkinda"
                    onClick={handleLinkClick}
                  >
                    HAKKIMIZDA
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={handleLinkClick}
                  >
                    ARTSHOP
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link font-weight-bolder nav-link22"
                href="/Ajanda"
              >
                AJANDA
              </a>
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("SANAT")}
              >
                SANAT
              </a>

              {openDropdown === "SANAT" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/sergi"
                    onClick={handleLinkClick}
                  >
                    GÜNCEL SERGİLER
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/koleksiyon"
                    onClick={handleLinkClick}
                  >
                    KOLEKSİYONLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projeler"
                    onClick={handleLinkClick}
                  >
                    PROJELER
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/sergi/dijital-sergiler"
                    onClick={handleLinkClick}
                  >
                    DERSİM FİLM SERGİLER
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/sergi/gecmis-yillar"
                    onClick={handleLinkClick}
                  >
                    GEÇMİŞ SERGİLER
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>

            <span className="bol d-none d-lg-block  bg-dark" />

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle  nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("DERSİM ÖĞRENME")}
              >
                EĞİTİM
              </a>

              {openDropdown === "DERSİM ÖĞRENME" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/dersim-ogrenme"
                    onClick={handleLinkClick}
                  >
                    GÜNCEL PROGRAMLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/dersim-ogrenme/gecmis-programlar"
                    onClick={handleLinkClick}
                  >
                    GEÇMİŞ PROGRAMLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/dersim-ogrenme-hakkinda"
                    onClick={handleLinkClick}
                  >
                    DERSİM EĞİTİM HAKKINDA
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle  nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("DERSİM FİLM")}
              >
                DİJİTAL
              </a>

              {openDropdown === "DERSİM FİLM" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/film"
                    onClick={handleLinkClick}
                  >
                    GÜNCEL PROGRAMLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/film/gecmis-programlar"
                    onClick={handleLinkClick}
                  >
                    GEÇMİŞ PROGRAMLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/dersim-film-hakkinda"
                    onClick={handleLinkClick}
                  >
                    DERSİM FİLM HAKKINDA
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle  nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("YAYINLAR")}
              >
                KÜTÜPHANE
              </a>

              {openDropdown === "YAYINLAR" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/yayinlar"
                    onClick={handleLinkClick}
                  >
                    TÜM YAYINLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/2"
                    onClick={handleLinkClick}
                  >
                    SÜRELİ SERGİ KATALOGLARI
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/3"
                    onClick={handleLinkClick}
                  >
                    KOLEKSİYON KATALOGLARI
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/14"
                    onClick={handleLinkClick}
                  >
                    SEMPOZYUM DİZİSİ
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/15"
                    onClick={handleLinkClick}
                  >
                    KÜÇÜK KİTAPLAR DİZİSİ
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/13"
                    onClick={handleLinkClick}
                  >
                    DERSİM FİLM YAYINLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/yayinlar/20"
                    onClick={handleLinkClick}
                  >
                    DERSİM VAKFI YAYINLARI
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>

            {/* <li className="nav-item">
              <a
                className="nav-link font-weight-bolder nav-link22"
                href="/Blog"
              >
                KEŞFET!
              </a>
            </li> */}

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle  nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("KEŞFET")}
              >
                BLOG
              </a>

              {openDropdown === "KEŞFET" && (
                <div className="dropdown-menu show">
                  <Link
                    className="dropdown-item"
                    to="/cagdas-tarih"
                    onClick={handleLinkClick}
                  >
                    ÇAĞDAŞ TARİH
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/kultur"
                    onClick={handleLinkClick}
                  >
                    KÜLTÜR / SANAT / MÜZİK
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/goc-hareketleri"
                    onClick={handleLinkClick}
                  >
                    GÖÇ VE GÖÇ HAREKETLERİ
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/tarih"
                    onClick={handleLinkClick}
                  >
                    TARİH
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/tarihsel-kisilikler"
                    onClick={handleLinkClick}
                  >
                    TARİHSEL VE ÇAĞDAŞ KİŞİLİKLER
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/soykirim-arastirma"
                    onClick={handleLinkClick}
                  >
                    SOYKIRIM VE SOYKIRIM ARAŞTIRMALARI
                  </Link>
                  <div className="w-100new" />
                </div>
              )}
            </li>
            <span className="bol d-none d-lg-block  bg-dark" />
          </ul>
          <div className="topMenuRight text-right">
            <a
              className="pl-2 menu-logo-not-scrolled"
              href="/"
              title="Anasayfa"
            >
              <img src="images/PM-2023logo-tr.svg" alt="Pera Müzesi Logo" />
            </a>
            <p className="menu-dates-not-scrolled flex items-center gap-2">
              <span className="todaydate">{formattedDate}</span>

              <span className="todaynote">Ziyaret Saatleri: 10.00 - 19.00</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
