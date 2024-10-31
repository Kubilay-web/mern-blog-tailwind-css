import { useEffect, useState } from "react";

export default function Sergi() {
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
                  src="/images/Sergi/PM-2023logo-tr.svg"
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
      <div className="container pb-3 first-row">
        <div className="row">
          <div className="col-md-12 mt-2">
            <div className="row">
              <div
                className="col-md-12 fs-40 mb-2"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1>Süreli Sergiler</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/hesaplar-ve-tesadufler/1304">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/vera-1.jpg"
                      alt="Hesaplar ve Tesadüfler"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Hesaplar ve Tesadüfler</h3>
                    <p className="card-text">
                      Dóra Maurer, Vera Molnár, Gizella Rákóczy <br />{" "}
                      Macaristan Ulusal Bankası Koleksiyonu'ndan Algoritma
                      Sanatı
                    </p>
                    <p className="card-text">19 Eylül 2024 - 26 Ocak 2025 </p>
                    <p className="card-text" />
                    <p>
                      <em>Hesaplar ve Tesadüfler,</em> algoritma sanatının öncü
                      isimlerinden Vera Molnár, Dóra Maurer ve Gizella
                      Rákóczy'nin Macaristan Ulusal Bankası Koleksiyonu'nda yer
                      alan eserlerini bir araya getiriyor. Sergi, Molnár’ın
                      bilgisayar sanatı üzerindeki önemli etkisine odaklanırken,
                      Maurer ve Rákóczy'nin sanatsal pratiklerinin algoritma ve
                      matematiğin entegrasyonu ile soyutlamanın sınırlarını
                      genişletmesinin de izini sürüyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/vera-molnar’in-izinde/1306">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/vera-molnarin-izinde-1.jpg"
                      alt="Vera Molnár’ın İzinde"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Vera Molnár’ın İzinde</h3>
                    <p className="card-text" />
                    <p className="card-text">19 Eylül 2024 - 26 Ocak 2025 </p>
                    <p className="card-text" />
                    <p>
                      <em>Vera Molnár’ın İzinde</em>, bilgisayar sanatının
                      öncüleri arasında yer alan sanatçı Vera Molnár’ın
                      pratiğine yakından bir bakış sunuyor, onun üretimlerinden
                      esinlenen güncel sanatçıların yapıtlarını bir araya
                      getiriyor.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-1">
            <p className="border-bottom border-secondary" />
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div
                className="col-md-12 fs-40 mb-2"
                style={{ "font-family": "'Raleway'" }}
              >
                <h1>Koleksiyon Sergileri</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/kesisen-dunyalar/77">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/kesisen-dunyalar-5.jpeg"
                      alt="Kesişen Dünyalar"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kesişen Dünyalar</h3>
                    <p className="card-text">Elçiler ve Ressamlar</p>
                    <p className="card-text"></p>
                    <p className="card-text" />
                    <p>
                      Osmanlı, erken dönemlerinden itibaren Avrupa devletleriyle
                      yoğun ilişkiler kurmuş, Batılılar için kimi zaman korkuyla
                      karışık bir merakla yanı başlarındaki bu büyük askeri
                      gücün ve siyasi otoritenin kaynağı olan devleti daha
                      yakından tanıma ve anlama çabası politik bir gereklilik
                      olarak ortaya çıkmıştır. Farklı kültürlerin bu
                      karşılaşması kuşkusuz en kalıcı ürünlerini sanat alanında
                      vermiştir.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/kahve-molasi/160">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/kahve-molasi-1.jpg"
                      alt="Kahve Molası"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Kahve Molası</h3>
                    <p className="card-text">
                      Kütahya Çini ve Seramiklerinde Kahvenin Serüveni
                    </p>
                    <p className="card-text"></p>
                    <p className="card-text" />
                    <p>
                      “Sihirli Meyve” olarak Etiyopya’da keşfedilen ve 15.
                      yüzyılda Yemen’den Osmanlı topraklarına ulaşan kahve, kısa
                      zamanda yaygınlaşmış, itibarlı bir içecek olarak sarayda
                      ve zengin evlerinde yerini almış, etrafında ritüeller
                      şekillenmeye başlamış ve sosyal hayatın gelişmesinde
                      önemli bir rol oynamıştır.�&nbsp;
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/osman-hamdi-bey/194">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/osman-hamdi-bey-kaplumbaga-terbiyecisi-ust.jpg"
                      alt="Osman Hamdi Bey"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Osman Hamdi Bey</h3>
                    <p className="card-text">
                      Suna ve İnan Kıraç Vakfı Koleksiyonu'ndan yapıtlarıyla
                      yaşamı ve sanatı
                    </p>
                    <p className="card-text"></p>
                    <p className="card-text" />
                    <p>
                      Osman Hamdi Bey, Tanzimat Dönemi’nin yetiştirdiği bir
                      Osmanlı aydını; resim, arkeoloji, müzecilik, sanat eğitimi
                      gibi kültür-sanat yaşamının farklı alanlarında, bir ömre
                      ancak sığdırılabilecek zenginlikte ve çeşitlilikte
                      katkıları olmuş bir kişilik.
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="card mb-1 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/agirlik-ve-olcu-sanati/1271">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="100%"
                      src="/images/Sergi/aavo-new-03.jpg"
                      alt="Ağırlık ve Ölçü Sanatı"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Ağırlık ve Ölçü Sanatı</h3>
                    <p className="card-text">
                      Suna ve İnan Kıraç Vakfı Anadolu Ağırlık ve Ölçüleri
                      Koleksiyonu{" "}
                    </p>
                    <p className="card-text"></p>
                    <p className="card-text" />
                    <p>
                      Dünyayı bir avuç birimle�&nbsp;ölçmeye çalışmak onu zihnen
                      inşa edebilmeyi de beraberinde getirdi. Keşfin ölçüsü
                      mitlere karıştıkça, ölçmek ve tartmak fiziksel bir
                      deneyimin ötesinde bilimin, kâinatın ve bilinenin ötesini
                      merak eden insanın, kendini ifade etme becerisinin önemli
                      bir aracı oldu.�&nbsp;
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-1">
            <p className="border-bottom border-secondary" />
          </div>
          <div className="col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="DigitalExhibitions"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/dijital-sergiler">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Sergi/pera-dijital-sergiler.jpg"
                      alt="Dijital Sergiler"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card mb-0 border-0">
                  <b
                    id="PastExhibitions"
                    className="BitcraftLang fs-40 mb-2"
                    style={{ "font-family": "'Raleway'" }}
                  />
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <a href="/sergi/gecmis-yillar">
                    <img
                      className="bd-placeholder-img card-img-top"
                      src="/images/Sergi/pera-gecmis-sergiler.jpg"
                      alt="Geçmiş Sergiler"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
