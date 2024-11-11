import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import Ziyaret from "./pages/Ziyaret";
import Hakkimizda from "./pages/Hakkimizda";
import Artshop from "./pages/Artshop";
import Ajanda from "./pages/Ajanda";
import Sergi from "./pages/Sergi";
import Koleksiyon from "./pages/Koleksiyon";
import Projeler from "./pages/Projeler";
import DijitalSergi from "./pages/DijitalSergi";
import GecmisSergi from "./pages/GecmisSergi";
import OgrenmeGuncel from "./pages/OgrenmeGuncel";
import OgrenmeGecmis from "./pages/OgrenmeGecmis";
import OgrenmeHakkinda from "./pages/OgrenmeHakkinda";
import Film from "./pages/Film";
import FilmGecmis from "./pages/FilmGecmis";
import FilmHakkinda from "./pages/FilmHakkinda";
import Yayin from "./pages/Yayin";
import Yayin2 from "./pages/Yayin2";
import Yayin3 from "./pages/Yayin3";
import Yayin14 from "./pages/Yayin14";
import Yayin15 from "./pages/Yayin15";
import Yayin13 from "./pages/Yayin13";
import Yayin20 from "./pages/Yayin20";
import Blog from "./pages/Blog";
import Gecmis2024 from "./pages/Gecmis2024";
import Gecmis2023 from "./pages/Gecmis2023";
import Cagdas from "./pages/Cagdas";
import Kultur from "./pages/Kultur";
import Goc from "./pages/Goc";
import Tarih from "./pages/Tarih";
import TarihselKisilikler from "./pages/TarihselKisilikler";
import Soykirim from "./pages/Soykirim";
// import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/ziyaret" element={<Ziyaret />} />
        <Route path="/artshop" element={<Artshop />} />
        <Route path="/koleksiyon" element={<Koleksiyon />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/sergi/dijital-sergiler" element={<DijitalSergi />} />
        <Route path="/sergi/gecmis-yillar" element={<GecmisSergi />} />
        <Route path="/pera-ogrenme" element={<OgrenmeGuncel />} />
        <Route
          path="/pera-ogrenme/gecmis-programlar"
          element={<OgrenmeGecmis />}
        />
        <Route path="/pera-ogrenme-hakkinda" element={<OgrenmeHakkinda />} />

        <Route path="/film" element={<Film />} />
        <Route path="/film/gecmis-programlar" element={<FilmGecmis />} />
        <Route path="/pera-film-hakkinda" element={<FilmHakkinda />} />

        <Route path="/yayinlar" element={<Yayin />} />
        <Route path="/yayinlar/2" element={<Yayin2 />} />
        <Route path="/yayinlar/3" element={<Yayin3 />} />
        <Route path="/yayinlar/13" element={<Yayin13 />} />
        <Route path="/yayinlar/14" element={<Yayin14 />} />
        <Route path="/yayinlar/15" element={<Yayin15 />} />
        <Route path="/yayinlar/20" element={<Yayin20 />} />
        <Route path="/Blog" element={<Blog />} />

        <Route path="/cagdas-tarih" element={<Cagdas />} />
        <Route path="/kultur" element={<Kultur />} />
        <Route path="/goc-hareketleri" element={<Goc />} />
        <Route path="/tarih" element={<Tarih />} />
        <Route path="/tarihsel-kisilikler" element={<TarihselKisilikler />} />
        <Route path="/soykirim-arastirma" element={<Soykirim />} />

        <Route path="/sergi/gecmis-yillar/2024" element={<Gecmis2024 />} />

        <Route path="/sergi/gecmis-yillar/2023" element={<Gecmis2023 />} />

        <Route path="/sergi" element={<Sergi />} />
        <Route path="/Ajanda" element={<Ajanda />} />
        <Route path="/pera-muzesi-hakkinda" element={<Hakkimizda />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>

        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
