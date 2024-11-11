import { useState, useEffect } from "react";

const Yayin = () => {
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
                  src="/images/Yayınlar/PM-2023logo-tr.svg"
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
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .card-title {\n            margin-bottom: 0px !important;\n        }\n    ",
        }}
      />
      <style
        media="screen and (max-width:545px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .mobile-spacing {\n            margin-bottom: 20px;\n        }\n    ",
        }}
      />
      <style
        media="screen and (max-width:768px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        .dontshowonmobile {\n            display: none;\n        }\n    ",
        }}
      />

      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 mt-1">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Süreli Sergi Katalogları</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/2"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/hesaplar-ve-tesadufler/3276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/1-Bişi.jpg"
                      alt="Hesaplar ve Tesadüfler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Bişi</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Bişi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/ters-yuz-pǝrɐ/1276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/2-Dövme Çorba.jpg"
                      alt="Ters Yüz PƎRⱯ"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dövme Çorba</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dövme Çorba
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gelecek-hatiralari/1273">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/3-Dövme Pilav.jpg"
                      alt="Gelecek Hatıraları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dövme Pilav</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dövme Pilav
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/tam-yerinden-/1272">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/4-Dut Tatlısı.jpg"
                      alt="Tam Yerinden "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dut Tatlısı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dut Tatlısı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/isabel-munoz-yeni-bir-hikaye/1271">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/5-Gulik.jpeg"
                      alt="Isabel Muñoz: Yeni Bir Hikâye"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Gulik</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Gulik
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/zamane-istanbullari/1267">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/6-Halbur Hurması Tatlısı.jpg"
                      alt="Zamane İstanbulları"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Halbur Hurması Tatlısı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Halbur Hurması Tatlısı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Koleksiyon Sergi Katalogları</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/3"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/agirlik-ve-olcu-sanati-/1264">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/7-Haşıl.jpg"
                      alt="Ağırlık ve Ölçü Sanatı "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Haşıl</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Haşıl
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/8-Mantar Yemeği.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Mantar Yemeği</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Mantar Yemeği
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/anadolu-agirlik-ve-olculeri/130">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/9-İmam Çorbası.jpg"
                      alt="Anadolu Ağırlık ve Ölçüleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İmam Çorbası</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İmam Çorbası
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/duslerin-kenti-istanbul/131">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/10-Mumbar Dolması.jpg"
                      alt="Düşlerin Kenti: İstanbul"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Mumbar Dolması</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Mumbar Dolması
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/imparatorluktan-portreler/132">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/11-Pekmez Helvası.jpg"
                      alt="İmparatorluktan Portreler"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Pekmez Helvası</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Pekmez Helvası
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kutahya-cini-ve-seramikleri/133">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/12-Kabak Dolması.jpg"
                      alt="Kütahya Çini ve Seramikleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kabak Dolması</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kabak Dolması
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Suna ve İnan Kıraç Vakfı Yayınları</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/20"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/ataturk’un-ziraat-muhendisi-ali-numan-kirac/2276">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/13-Soğan Aşı.jpg"
                      alt="Atatürk’ün Ziraat Mühendisi<br> Ali Numan Kıraç"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Soğan Aşı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Soğan Aşı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/fotograflarla-ataturk-/214">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/14-Şir.jpg"
                      alt="Fotoğraflarla Atatürk "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Şir </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Şir
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/idealler-gerceklesirken…/204">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/15-Rafting.webp"
                      alt="İdealler Gerçekleşirken…"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Rafting</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Rafting
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/omrumden-uzun-ideallerim-var/189">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/16-Kaya Tırmanışı.jpg"
                      alt="Ömrümden Uzun İdeallerim Var"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kaya Tırmanışı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kaya Tırmanışı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/konstantiniyyeden-istanbula-/142">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/17-Kampçılık.jfif"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kampçılık</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kampçılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/konstantiniyyeden-istanbula-/141">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/18-Zipline.jpg"
                      alt="Konstantiniyye'den İstanbul'a "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Zipline</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Zipline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Sempozyum Dizisi</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/14"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/mekanin-poetikasi-mekanin-politikasi/134">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/19-Kış Sporları.jpg"
                      alt="Mekanın Poetikası, Mekanın Politikası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kış Sporları</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kış Sporları
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Küçük Kitaplar Dizisi</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/15"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/osman-hamdi-bey-/234">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/20-Dağcılık.webp"
                      alt="Osman Hamdi Bey "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dağcılık </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dağcılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kahve-molasi/159">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/21-Sosyal.webp"
                      alt="Kahve Molası"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Sosyal</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Sosyal
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/elgar-turkiye’de/157">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/22-Kültür.jpg"
                      alt="Elgar Türkiye’de"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kültür</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kültür
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/yusuf-agah-efendi-/143">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/23-Pir Sultan.jpg"
                      alt="Yusuf Agâh Efendi "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Pir Sultan </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Pir Sultan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row justify-content-center align-items-center">
              <div
                className="col-md-10 fs-40"
                style={{ "font-family": "'Raleway'" }}
              >
                <p>Dijital Yayınlar</p>
              </div>
              <div className="col-md-2 dontshowonmobile">
                <a
                  className="text-dark"
                  href="/yayinlar/13"
                  style={{
                    color: "#404040",
                    "font-size": "20px",
                    "font-family": "'Raleway'",
                    float: "right",
                  }}
                >
                  {" "}
                  <b id="ShowAll" className="BitcraftLang">
                    {" "}
                  </b>
                </a>
              </div>
              <div className="col-md-12">
                <p className="border-bottom border-secondary" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/24-Çocuk Sokağı.webp"
                      alt="Bu Bir Aşk Şarkısı Değil "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Çocuk Sokağı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Çocuk Sokağı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/uryan-ciplak-nu/179">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/25-Seyit Rıza.webp"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Seyit Rıza</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Seyit Rıza
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/26-Kütüphane Durağı.jpeg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Kütüphane Durağı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Kütüphane Durağı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/28-Dokumacılık.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dokumacılık </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dokumacılık
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/29-Çanak Çömlek.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Çanak Çömlek</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Çanak Çömlek
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Ahşap.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Ahşap</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Ahşap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ///////////////////////// */}
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/bu-bir-ask-sarkisi-degil-/180">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Cacım Sanatı.jpg"
                      alt="Bu Bir Aşk Şarkısı Değil "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Cacım Sanatı</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Cacım Sanatı
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/uryan-ciplak-nu/179">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/30-Dericilik.jpg"
                      alt="Üryan, Çıplak, Nü"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Dericilik</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Dericilik
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/gunumuz-imgeleri/177">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/31-Saz ve Bağlama.jpg"
                      alt="Günümüz İmgeleri"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Saz ve Bağlama</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Saz ve Bağlama
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/32-İnanç ve Gelenek.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Gelenek </h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Gelenek
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/32-İnancımız.jpg"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnancımız</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnancımız
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/33-İnanç ve Toplum.jpg"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Toplum</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Toplum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/kesisen-dunyalar-/165">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/34-Cemevi.jpg"
                      alt="Kesişen Dünyalar "
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">Cemevi</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      Cemevi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/col-ve-deniz-arasinda/18">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/34-İnanç ve Kültür.jfif"
                      alt="Çöl ve Deniz Arasında"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Kültür</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Kültür
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mobile-spacing">
                <div className="card mb-0 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/yayin/deneyimin-otesi/21">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Yayınlar/35-İnanç ve Hayat.webp"
                      alt="Deneyimin Ötesi"
                    />
                  </a>
                  <div className="card-body" align="center">
                    <h3 className="card-title">İnanç ve Hayat</h3>
                    <p
                      className="card-text"
                      style={{ "font-size": "18px !important" }}
                    >
                      İnanç ve Hayat
                    </p>
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

export default Yayin;
