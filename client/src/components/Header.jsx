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
import "../../src/css/Hamburgers.css";
import "../../src/css/owl.carousel.css";
import "../../src/css/owl.theme.default.css";
import "../../src/css/plyr.css";
import "../../src/css/tema.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

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

  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <img
            src="https://www.peramuzesi.org.tr/assetsv2/img/logos/PM-2023logo-tr.svg"
            alt="logo"
            className="w-[360px] h-auto" // Genişlik ve yükseklik otomatik ayarlanır
          />
        </Link>

        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          {/* <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button> */}
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
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
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
      </Navbar>

      <nav
        className="flex justify-center ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark sticky-top navbarheight ptnew-0"
        style={{ zIndex: 1 }}
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
                  <Link className="dropdown-item" to="/ziyaret">
                    ZİYARETİNİZİ PLANLAYIN
                  </Link>
                  <Link className="dropdown-item" to="/pera-muzesi-hakkinda">
                    HAKKIMIZDA
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://artshop.peramuzesi.org.tr/"
                  >
                    ARTSHOP
                  </Link>
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
                  <Link className="dropdown-item" to="/sergi">
                    GÜNCEL SERGİLER
                  </Link>
                  <Link className="dropdown-item" to="/koleksiyon">
                    KOLEKSİYONLAR
                  </Link>
                  <Link className="dropdown-item" to="/projeler">
                    PROJELER
                  </Link>
                  <Link className="dropdown-item" to="/sergi/dijital-sergiler">
                    DİJİTAL SERGİLER
                  </Link>
                  <Link className="dropdown-item" to="/sergi/gecmis-yillar">
                    GEÇMİŞ SERGİLER
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("PERA ÖĞRENME")}
              >
                PERA ÖĞRENME
              </a>

              {openDropdown === "PERA ÖĞRENME" && (
                <div className="dropdown-menu show">
                  <Link className="dropdown-item" to="/pera-ogrenme">
                    GÜNCEL PROGRAMLAR
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/pera-ogrenme/gecmis-programlar"
                  >
                    GEÇMİŞ PROGRAMLAR
                  </Link>
                  <Link className="dropdown-item" to="/pera-ogrenme-hakkinda">
                    PERA ÖĞRENME HAKKINDA
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("PERA FİLM")}
              >
                PERA FİLM
              </a>

              {openDropdown === "PERA FİLM" && (
                <div className="dropdown-menu show">
                  <Link className="dropdown-item" to="/film">
                    GÜNCEL PROGRAMLAR
                  </Link>
                  <Link className="dropdown-item" to="/film/gecmis-programlar">
                    GEÇMİŞ PROGRAMLAR
                  </Link>
                  <Link className="dropdown-item" to="/pera-film-hakkinda">
                    PERA FİLM HAKKINDA
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle font-weight-bolder nav-link22"
                href="#"
                onClick={() => handleDropdownToggle("YAYINLAR")}
              >
                YAYINLAR
              </a>

              {openDropdown === "YAYINLAR" && (
                <div className="dropdown-menu show">
                  <Link className="dropdown-item" to="/yayinlar">
                    TÜM YAYINLAR
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/2">
                    SÜRELİ SERGİ KATALOGLARI
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/3">
                    KOLEKSİYON KATALOGLARI
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/14">
                    SEMPOZYUM DİZİSİ
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/15">
                    KÜÇÜK KİTAPLAR DİZİSİ
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/13">
                    DİJİTAL YAYINLAR
                  </Link>
                  <Link className="dropdown-item" to="/yayinlar/20">
                    SUNA VE İNAN KIRAÇ VAKFI YAYINLARI
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a
                className="nav-link font-weight-bolder nav-link22"
                href="/Blog"
              >
                KEŞFET!
              </a>
            </li>
          </ul>
          <div className="topMenuRight text-right">
            <a
              className="pl-2 menu-logo-not-scrolled"
              href="/"
              title="Anasayfa"
            >
              <img src="images/PM-2023logo-tr.svg" alt="Pera Müzesi Logo" />
            </a>
            <p className="menu-dates-not-scrolled">
              <span className="todaydate">30 Ekim Çarşamba</span>
              <span className="todaynote">Ziyaret Saatleri: 10.00 - 19.00</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
