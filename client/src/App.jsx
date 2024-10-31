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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
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
