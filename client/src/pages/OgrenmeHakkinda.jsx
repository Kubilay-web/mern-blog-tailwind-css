import React from "react";

export default function OgrenmeHakkinda() {
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
                  src="/images/OgrenmeHakkinda/PM-2023logo-tr.svg"
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
        media="screen and (max-width:461px)"
        dangerouslySetInnerHTML={{
          __html:
            " \n    .text-justify\n    {\n        text-align: left !important;\n    }\n    \n",
        }}
      />
      <div className="container first-row">
        <div className="row">
          <div className="col-md-12">
            <img
              className="img-fluid"
              src="/images/OgrenmeHakkinda/pera-ogrenme-hakkinda.jpg"
              title="Pera Öğrenme Hakkında"
            />
          </div>
          <div className="col-12 text-justify" style={{ margin: "20px 0 0 0" }}>
            <h1 className="fs-40" style={{ "font-family": "'Raleway'" }}>
              Dersim Eğitim Hakkında
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12  text-justify fs-20"
            style={{ "font-family": "'Raleway'" }}
          >
            <p>
              Dersim Müzesi’nde öğrenme, çocuklar, gençler ve yetişkinleri
              sanatla buluşturmak, bir müze bilinci oluşturmak, sanatı
              ulaşılabilir kılmak ve izleyiciyle sergilenen eserler arasında
              iletişim kurmak amacıyla yapılan çalışmaları kapsıyor. Yorum ve
              yaratıcılığa dayanan bu etkinliklerde, eserler üzerinde
              değerlendirmeler yapılırken yaratıcılık da destekleniyor. Atölyede
              uygulamalı çalışmalarla pekiştirilen öğrenme programı, müzeyi
              sosyal hayatın bir parçası kılmayı da amaçlıyor. Bu amaç
              doğrultusunda oluşturulan Dersim eğitim programları, koleksiyon
              sergilerinin yanı sıra, süreli sergiler için de, farklı yaş
              gruplarına ve özel eğitim öğrencilerine hazırlanan birbirinden
              renkli ve yaratıcı etkinlikleriyle yıl boyunca sürdürülüyor.
            </p>

            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="cookie-bar">
        <img
          src="/images/OgrenmeHakkinda/close2.png"
          className="cookie-close"
        />
        Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
        için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
        inceleyebilirsiniz.
      </div>
    </div>
  );
}
