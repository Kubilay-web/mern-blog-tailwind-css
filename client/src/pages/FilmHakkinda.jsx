import React from "react";

const FilmHakkinda = () => {
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
                  className="Dersim-logo component state2 state1-to-state2"
                  src="/images/FilmHakkında/PM-2023logo-tr.svg"
                  alt="Dersim Müzesi Logo"
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
            "\n    .text-justify {\n        text-align: left !important;\n    }\n",
        }}
      />
      <div className="container first-row">
        <div className="row">
          <div className="col-md-12 mb-2">
            <img
              className="img-fluid"
              src="/images/FilmHakkında/pera-film-hakkinda-large.jpg"
              title="Hakkımızda"
              alt="Hakkımızda"
            />
          </div>
          <div className="col-12 mb-2">
            <h1 className="fs-40" style={{ "font-family": "'Raleway'" }}>
              Dersim Film Hakkında
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12  text-justify fs-20"
            style={{ "font-family": "'Raleway'" }}
          >
            <p>
              Etkinliklerine Ocak 2025'de başlayan Dersim Müzesi Film ve Video
              Bölümü, Dersim Film, aylık dönemler halinde düzenlenen, sinema
              klasiklerinden deneysel film-video örneklerine, animasyon,
              belgesel ve kısa film türlerine kadar uzanan kapsamlı bir
              programdır.
            </p>
            <p>
              Dersim Müzesi'nde açılan sergilere paralel programlar da sunan
              Dersim Film, sinemanın önemini ve çeşitliliğini vurgulayan
              etkinlikleriyle, Dersim Müzesi ziyaretçilerine ve sinema
              meraklılarına farklı bir deneyim sunmayı amaçlamaktadır.
            </p>
            <p>
              <strong>Yer:</strong>&nbsp; Dersim Müzesi Oditoryumu
            </p>
            <p>
              <strong>Ücret:</strong>&nbsp;Dersim Film ücretli gösterimleri
              indirimli müze giriş biletiyle izlenebilir.&nbsp;
              <br />
              Ücretsiz gösterimler için de resepsiyondan bilet alınması
              gerekmektedir.
              <br />
              Dersim Müzesi ziyareti ve Dersim Film gösterimleri çarşamba
              günleri tüm öğrencilere ücretsizdir.
            </p>
            <p>
              <em>Filmler Türkçe altyazılıdır.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmHakkinda;
