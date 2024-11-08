// import React from "react";
// import "../css/General/bootstrap.min.css";
// import "../css/General/font-awesome.min.css";
// import "../css/General/Hamburgers.css";
// import "../css/General/owl.carousel.css";
// import "../css/General/owl.theme.default.css";
// import "../css/General/plyr.css";
// import "../css/General/tema.css";

// const Nav = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row ptnew">
//           <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
//             <a className="navbar-brand" href="/" title="Home">
//               <div>
//                 <img
//                   className="pera-logo component state2 state1-to-state2"
//                   src="/images/Home/PM-2023logo-tr.svg"
//                   alt="Pera Müzesi Logo"
//                 />
//               </div>
//             </a>
//           </div>
//           {/*header rightside*/}
//           <div className="col-lg-4 col-md-5 d-none d-md-block align-self-center">
//             <div className="float-right ">
//               <div className="searchbar float-left">
//                 <input
//                   className="search_input txtSrch1"
//                   id="srchBox"
//                   type="text"
//                   name="txtSrch1"
//                   placeholder="Arama..."
//                 />
//                 <a href="#" id="btnSrchDesktop" className="search_icon btnSrch">
//                   <img
//                     src="/images/Home/iconSearch.png"
//                     style={{ width: 25 }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="ml-auto mb-3 navbar navbar-expand-lg navbar-light  border-top border-bottom border-dark sticky-top navbarheight ptnew-0">
//           <div
//             className="container m-0 p-0   d-lg-none"
//             style={{ width: "85%" }}
//             id="mobilMenuTopRow"
//           >
//             <a
//               className="navbar-brand  d-lg-none font-weight-bolder mobileSearchHideField"
//               style={{ width: "40%" }}
//               href="#"
//             >
//               MENÜ
//             </a>
//             <div
//               className="mobileSearchField input-group d-none"
//               style={{ width: "60%" }}
//             >
//               <input
//                 type="text"
//                 name="txtSrch2"
//                 id="srchBoxMobile"
//                 className="form-control border border-secondary border-right-0 txtSrch2"
//                 placeholder="Arama ..."
//               />
//               <div className="input-group-append">
//                 <span className="input-group-text  border border-secondary border-left-0">
//                   <i className="fa fa-angle-right fa-lg" />
//                 </span>
//               </div>
//             </div>
//             <div
//               className="pull-right mr-0 pr-4 d-md-none  border-right border-dark"
//               id="mobile-search-language"
//             >
//               <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
//                 <img src="/images/Home/search.svg" alt="" className="imgnew" />
//               </a>
//             </div>
//           </div>
//           <div
//             className="navbar-toggler hamburger hamburger--elastic-r ml-auto"
//             id="mobilMenuButton"
//             data-toggle="collapse"
//             data-target="#navbarsExample09"
//             aria-controls="navbarsExample09"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="hamburger-box">
//               <span className="hamburger-inner" />
//             </span>
//           </div>
//           <div className="collapse navbar-collapse" id="navbarsExample09">
//             <ul className="navbar-nav mr-auto justify-content-between w-100 text-uppercase">
//               <li className="nav-item dropdown position-static">
//                 <a
//                   className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
//                   href="#"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   data-bc={1}
//                 >
//                   ZİYARET
//                   <img
//                     style={{ display: "none" }}
//                     className="d-lg-none d-md-none topImg"
//                     src="/images/Home/leftArrow.svg"
//                     alt="sol"
//                   />
//                 </a>
//                 <div className="dropdown-menu">
//                   <hr className="mt-0 pt-0 d-md-none d-sm-block" />
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/ziyaret"
//                   >
//                     ZİYARETİNİZİ PLANLAYIN
//                   </a>
//                   {/*<a class="dropdown-item dropdown-menuitem" href="#">PERA MÜZESİ DOSTLUK PROGRAMI</a>*/}
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/pera-muzesi-hakkinda"
//                   >
//                     HAKKIMIZDA
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="https://artshop.peramuzesi.org.tr"
//                     target="_out"
//                   >
//                     ARTSHOP
//                   </a>
//                   <img
//                     className="d-none d-lg-none subImg float-right mb-3"
//                     style={{ marginTop: "-40px" }}
//                     src="/images/Home/xButton.svg"
//                     alt="kapat"
//                   />
//                   <div className="w-100new" />
//                 </div>
//               </li>
//               <li className="nav-item dropdown  position-static">
//                 <a
//                   className="nav-link font-weight-bolder nav-link22 nav-linkbolder"
//                   href="/Ajanda"
//                 >
//                   AJANDA
//                 </a>
//               </li>
//               <li className="nav-item dropdown  position-static menuDropdownTopli menuDropdownTopli">
//                 <a
//                   className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
//                   href="#"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   data-bc={2}
//                 >
//                   SANAT
//                   <img
//                     style={{ display: "none" }}
//                     className="d-lg-none d-md-none topImg"
//                     src="/images/Home/leftArrow.svg"
//                     alt="sol"
//                   />
//                 </a>
//                 <div className="dropdown-menu">
//                   <hr className="mt-0 pt-0 d-md-none d-sm-block" />
//                   <a className="dropdown-item dropdown-menuitem" href="/sergi">
//                     GÜNCEL SERGİLER
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/koleksiyon"
//                   >
//                     KOLEKSİYONLAR
//                   </a>
//                   <a
//                     id="Projects"
//                     className="dropdown-item dropdown-menuitem"
//                     href="/projeler/1"
//                   >
//                     PROJELER
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/sergi/dijital-sergiler"
//                   >
//                     DİJİTAL SERGİLER
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/sergi/gecmis-yillar"
//                   >
//                     GEÇMİŞ SERGİLER
//                   </a>
//                   <img
//                     className="d-none d-lg-none subImg float-right mb-3"
//                     style={{ marginTop: "-40px" }}
//                     src="/images/Home/xButton.svg"
//                     alt="kapat"
//                   />
//                   <div className="w-100new" />
//                 </div>
//               </li>
//               <span className="bol d-none d-lg-block  bg-dark" />
//               <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
//                 <a
//                   className="nav-link dropdown-toggle nav-linklighter"
//                   href="#"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   data-bc={3}
//                 >
//                   PERA ÖĞRENME
//                   <img
//                     style={{ display: "none" }}
//                     className="d-lg-none d-md-none topImg"
//                     src="/images/Home/leftArrow.svg"
//                     alt="sol"
//                   />
//                 </a>
//                 <div className="dropdown-menu">
//                   <hr className="mt-0 pt-0 d-md-none d-sm-block" />
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/pera-ogrenme"
//                   >
//                     GÜNCEL PROGRAMLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/pera-ogrenme/gecmis-programlar"
//                   >
//                     GEÇMİŞ PROGRAMLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/pera-ogrenme-hakkinda"
//                   >
//                     PERA ÖĞRENME HAKKINDA
//                   </a>
//                   <img
//                     className="d-none d-lg-none subImg float-right mb-3"
//                     style={{ marginTop: "-40px" }}
//                     src="/images/Home/xButton.svg"
//                     alt="kapat"
//                   />
//                   <div className="w-100new" />
//                 </div>
//               </li>
//               <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
//                 <a
//                   className="nav-link dropdown-toggle nav-linklighter"
//                   href="#"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   data-bc={4}
//                 >
//                   PERA FİLM
//                   <img
//                     style={{ display: "none" }}
//                     className="d-lg-none d-md-none topImg"
//                     src="/images/Home/leftArrow.svg"
//                     alt="sol"
//                   />
//                 </a>
//                 <div className="dropdown-menu">
//                   <hr className="mt-0 pt-0 d-md-none d-sm-block" />
//                   <a className="dropdown-item dropdown-menuitem" href="/film">
//                     GÜNCEL PROGRAMLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/film/gecmis-programlar"
//                   >
//                     GEÇMİŞ PROGRAMLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/pera-film-hakkinda"
//                   >
//                     PERA FİLM HAKKINDA
//                   </a>
//                   <img
//                     className="d-none d-lg-none subImg float-right mb-3"
//                     style={{ marginTop: "-40px" }}
//                     src="/images/Home/xButton.svg"
//                     alt="kapat"
//                   />
//                   <div className="w-100new" />
//                 </div>
//               </li>
//               <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
//                 <a
//                   className="nav-link dropdown-toggle nav-linklighter"
//                   href="/yayinlar"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   data-bc={5}
//                 >
//                   YAYINLAR
//                   <img
//                     style={{ display: "none" }}
//                     className="d-lg-none d-md-none topImg"
//                     src="/images/Home/leftArrow.svg"
//                     alt="sol"
//                   />
//                 </a>
//                 <div className="dropdown-menu">
//                   <hr className="mt-0 pt-0 d-md-none d-sm-block" />
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar"
//                   >
//                     TÜM YAYINLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/2"
//                   >
//                     SÜRELİ SERGİ KATALOGLARI
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/3"
//                   >
//                     KOLEKSİYON KATALOGLARI
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/14"
//                   >
//                     SEMPOZYUM DİZİSİ
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/15"
//                   >
//                     KÜÇÜK KİTAPLAR DİZİSİ
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/13"
//                   >
//                     DİJİTAL YAYINLAR
//                   </a>
//                   <a
//                     className="dropdown-item dropdown-menuitem"
//                     href="/yayinlar/20"
//                   >
//                     SUNA VE İNAN KIRAÇ VAKFI YAYINLARI
//                   </a>
//                   <img
//                     className="d-none d-lg-none subImg float-right ml-auto mb-3"
//                     style={{ marginTop: "-40px" }}
//                     src="/images/Home/xButton.svg"
//                     alt="kapat"
//                   />
//                   <div className="w-100new" />
//                 </div>
//               </li>
//               <li className="nav-item  position-static nav-linkmedium">
//                 <a className="nav-link nav-linklighter" href="/Blog">
//                   KEŞFET!
//                 </a>
//               </li>
//               <span className="bol  d-none d-lg-block bg-dark" />
//             </ul>
//             <div
//               className="topMenuRight text-right"
//               style={{ margin: "0 -16px 0 0" }}
//             >
//               <a
//                 className="pl-2 menu-logo-not-scrolled"
//                 href="/"
//                 title="Anasayfa"
//               >
//                 <img
//                   className="img-fluid2"
//                   src="/images/Home/PM-2023logo-tr.svg"
//                   alt="Pera Müzesi Logo"
//                 />
//               </a>

//               <p className="menu-dates-not-scrolled">
//                 <span className="todaydate">8 Kasım Cuma</span>
//                 <br />
//                 <span className="todaynote">
//                   Ziyaret Saatleri: 10.00 - 22.00 <br /> Bugün 18.00'den sonra
//                   ücretsiz.{" "}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Nav;
