import "../../src/css/bootstrap.min.css";
import "../../src/css/font-awesome.min.css";
import "../../src/css/Hamburgers.css";
import "../../src/css/owl.carousel.css";
import "../../src/css/owl.theme.default.css";
import "../../src/css/plyr.css";
import "../../src/css/tema.css";

export default function FooterCom() {
  return (
    <div className="footer-background pb-lg-3" style={{ zIndex: -99 }}>
      <div className="container">
        <div className="row" style={{ height: 30 }} />
        <div className="row">
          <div className="col-lg-3 col-md-12" style={{ color: "#b5b5b5" }}>
            <div className="row">
              <div className="col-lg-12 mb-3 col-md-6">
                <div className="footer-left-section flex flex-col gap-3">
                  <h5 className="font-weight-bold mb-3 pt-3">
                    ZİYARET SAATLERİ
                  </h5>
                  <p>Salı - Cumartesi 10.00 - 19.00</p>
                  <p>Cuma 10.00 - 22.00</p>
                  <p>Pazar 12.00 - 18.00</p>
                  <p>Müze Pazartesi</p>
                  <p>günü kapalıdır.</p>
                  <h5 className="pt-3">Genç Çarşamba</h5>
                  <p>Çarşamba günleri öğrenciler müzeyi</p>
                  <p>ücretsiz ziyaret edebilir.</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 m-0">
                <div className="footer-left-section flex flex-col gap-3 mb-4">
                  <h5 className="font-weight-bold mb-3">GİRİŞ ÜCRETLERİ</h5>
                  <p>Tam: 200 TL</p>
                  <p>İndirimli: 100 TL</p>
                  <p>Grup: 150 TL (toplu 10 bilet ve üstü)</p>
                </div>
              </div>
              <div className="vl h-100 d-none d-lg-block bg-secondary" />
            </div>
            <hr className="d-lg-none d-block" />
          </div>
          <div
            className="col-lg-9 col-md-12 col-sm-8 col-xs-12 right-text-footer plnew"
            style={{ backgroundColor: "#eaeaea" }}
          >
            <div className="row align-items-center mt-lg-5 mt-2">
              <div className="col-md-7 col-sm-8 col-xs-12 col-lg-7  d-flex order-2 order-md-first social-margin-right">
                <ul className="social-network social-circle pt-2 plnew3">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/PeraMuzesi.Museum"
                      className="icoFacebook"
                      title="Facebook"
                      rel="noreferrer nofollow"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/PeraMuzesi"
                      className="icoTwitter"
                      title="Twitter"
                      rel="noreferrer nofollow"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/peramuzesi/"
                      className="icoInstagram"
                      title="Instagram"
                      rel="noreferrer nofollow"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/user/PeraMuzesi"
                      className="icoYoutube"
                      title="Youtube"
                      rel="noreferrer nofollow"
                    >
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://open.spotify.com/user/peram%C3%BCzesi"
                      className="icoRss"
                      title="Spotify"
                      rel="noreferrer nofollow"
                    >
                      <i className="fa fa-spotify " />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://artsandculture.google.com/partner/pera-museum?hl=tr"
                      className="icoGoogleArtsCulture"
                      title="Google Arts & Culture"
                      rel="noreferrer nofollow"
                    >
                      <i
                        className="fa fa-university"
                        style={{ margin: "0 0 0 2px" }}
                      />
                    </a>
                  </li>
                  {/* <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li> */}
                </ul>
              </div>
              <div className="col-md-5 col-sm-4 col-xs-12 col-lg-5 float-left order-1 plnew2">
                <form action="/subscribe" method="post">
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    defaultValue="3OX7wPm5pPfuHyTWFZhg37xrRqJUGnLoRsg6cPSEMFBmUYi2BV7hWaPus4c6-ggHbXcm-_Q5mtW8Dh4Q4LGYditRFcdJXrG0mGvSZB_VBpY1"
                  />{" "}
                  <h2
                    className="font-weight-bold"
                    style={{ fontSize: 14, color: "#333333" }}
                  >
                    E-BÜLTENE ÜYE OLMAK İSTİYORUM
                  </h2>
                  <div className="input-group mb-3" style={{ zIndex: 0 }}>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="E-Posta Adresiniz"
                      aria-label="E-Posta Adresiniz"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary bg-danger px-4"
                        type="submit"
                      >
                        <i className="font-weight-bold text-white fa fa-angle-right fa-lg" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <hr />
            <div className="altmenu row justify-content-between pt-sm-1 pt-lg-5 pt-md-2 mt-lg-2 mt-5">
              <div className="col-md-3 col-6">
                <h5>
                  <a href="/pera-muzesi-hakkinda">Hakkımızda</a>
                </h5>
                <h5>
                  <a href="/basin-bultenleri">Basın</a>
                </h5>
              </div>
              <div className="col-md-3 col-6">
                <h5>
                  <a href="/ziyaret">İletişim</a>
                </h5>
                <h5>
                  <a href="/icerik/engelli-ziyaretciler/1532">
                    {" "}
                    Engelli Ziyaretçiler
                  </a>
                </h5>
              </div>
              <div className="col-md-3 col-6">
                <h5>
                  <a href="/icerik/acik-pozisyonlar/1531"> Açık Pozisyonlar</a>
                </h5>
                <h5>
                  <a href="/faq"> Sıkça Sorulan Sorular</a>
                </h5>
              </div>
              <div className="col-md-3 col-6">
                <h5>
                  <a href="/mekan-kiralama">Mekan Kiralama</a>
                </h5>
                <h5>
                  <a href="/kvkk">KVKK</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row pt-lg-2">
          <div
            className="col-lg-3 col-12"
            style={{ marginTop: 40, marginBottom: 40 }}
          >
            <a
              href="https://www.sunaveinankiracvakfi.org.tr/"
              className="text-dark"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="float-left pr-2"
                src="https://www.peramuzesi.org.tr/assetsv2/img/logos/svikv-tr-logo.svg"
                height={40}
                alt="Suna ve İnan Kıraç Vakfı Logo"
              />
            </a>
            {/*<div class="vl h-100 d-none d-lg-block bg-secondary"></div>*/}
          </div>
          <div
            className="col-lg-4 col-12 plnew4"
            style={{ marginTop: 40, marginBottom: 40, paddingLeft: 60 }}
          >
            <a
              href="https://www.iae.org.tr/"
              className="text-dark"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="float-left pr-2"
                src="https://www.peramuzesi.org.tr/assetsv2/img/logos/iae-tr-logo.svg"
                height={40}
                alt="İstanbul Araştırmaları Enstitüsü Logo"
              />
            </a>
            <hr className="d-md-none d-sm-block dpn" />
          </div>
          <div
            className="col-lg-5 col-12 w-100  h-100 d-flex justify-content-md-end justify-content-first pt-2"
            style={{ marginTop: 40, marginBottom: 40 }}
          >
            <p style={{ fontSize: 13, color: "#333333", fontWeight: 500 }}>
              © 2024 Tüm Hakları Saklıdır |{" "}
              <a className="no-link" href="/kullanim-kosullari">
                Kullanım Koşulları
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
