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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavbarCommerce from "./components/NavbarCommerce";
import CartCommerce from "./components/CartCommerce";
import HomeCommerce from "./components/HomeCommerce";
import NotFound from "./components/NotFound";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <Header />
              <SignIn />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/ziyaret"
          element={
            <>
              <Header />
              <Ziyaret />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/artshop"
          element={
            <>
              <Header />
              <Artshop />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/koleksiyon"
          element={
            <>
              <Header />
              <Koleksiyon />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/projeler"
          element={
            <>
              <Header />
              <Projeler />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sergi/dijital-sergiler"
          element={
            <>
              <Header />
              <DijitalSergi />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sergi/gecmis-yillar"
          element={
            <>
              <Header />
              <GecmisSergi />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/dersim-ogrenme"
          element={
            <>
              <Header />
              <OgrenmeGuncel />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/dersim-ogrenme/gecmis-programlar"
          element={
            <>
              <Header />
              <OgrenmeGecmis />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/dersim-ogrenme-hakkinda"
          element={
            <>
              <Header />
              <OgrenmeHakkinda />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/film"
          element={
            <>
              <Header />
              <Film />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/film/gecmis-programlar"
          element={
            <>
              <Header />
              <FilmGecmis />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/dersim-film-hakkinda"
          element={
            <>
              <Header />
              <FilmHakkinda />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar"
          element={
            <>
              <Header />
              <Yayin />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/2"
          element={
            <>
              <Header />
              <Yayin2 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/3"
          element={
            <>
              <Header />
              <Yayin3 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/13"
          element={
            <>
              <Header />
              <Yayin13 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/14"
          element={
            <>
              <Header />
              <Yayin14 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/15"
          element={
            <>
              <Header />
              <Yayin15 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/yayinlar/20"
          element={
            <>
              <Header />
              <Yayin20 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/Blog"
          element={
            <>
              <Header />
              <Blog />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/cagdas-tarih"
          element={
            <>
              <Header />
              <Cagdas />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/kultur"
          element={
            <>
              <Header />
              <Kultur />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/goc-hareketleri"
          element={
            <>
              <Header />
              <Goc />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/tarih"
          element={
            <>
              <Header />
              <Tarih />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/tarihsel-kisilikler"
          element={
            <>
              <Header />
              <TarihselKisilikler />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/soykirim-arastirma"
          element={
            <>
              <Header />
              <Soykirim />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sergi/gecmis-yillar/2024"
          element={
            <>
              <Header />
              <Gecmis2024 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sergi/gecmis-yillar/2023"
          element={
            <>
              <Header />
              <Gecmis2023 />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sergi"
          element={
            <>
              <Header />
              <Sergi />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/Ajanda"
          element={
            <>
              <Header />
              <Ajanda />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/dersim-muzesi-hakkinda"
          element={
            <>
              <Header />
              <Hakkimizda />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Header />
              <SignUp />
              <FooterCom />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Header />
              <Search />
              <FooterCom />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFound />
              <FooterCom />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <NavbarCommerce />
              <CartCommerce />
            </>
          }
        />

        <Route
          path="/cart/:id"
          element={
            <>
              <NavbarCommerce />
              <CartCommerce />
            </>
          }
        />

        <Route
          path="/homecommerce"
          element={
            <>
              <NavbarCommerce />
              <HomeCommerce />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
            </>
          }
        />

        <Route
          path="/checkout-success"
          element={
            <>
              <CheckoutSuccess />
            </>
          }
        />

        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Dashboard />
                <FooterCom />
              </>
            }
          />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route
            path="/create-post"
            element={
              <>
                <Header />
                <CreatePost />
                <FooterCom />
              </>
            }
          />
          <Route
            path="/update-post/:postId"
            element={
              <>
                <Header />
                <UpdatePost />
                <FooterCom />
              </>
            }
          />
        </Route>
        <Route
          path="/post/:postSlug"
          element={
            <>
              <Header />
              <PostPage />
              <FooterCom />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
