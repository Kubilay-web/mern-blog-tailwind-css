import React from "react";

export default function Ziyaret() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
        }}
      />

      {/* END TEST */}
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n     .fontum2 h1 {\n        font-family: Raleway; \n    } \n    \n",
        }}
      />
      <div className="container fontum fontum2 first-row">
        <div className="row mb-md-5 mb-3">
          <div className="col-12 mt-4 mb-4">
            <h1 className="fs-40 font-weight-bold">NASIL GELEBİLİRİM?</h1>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11695.76810137832!2d28.97656638287721!3d41.0335665077011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd94762797dd716c9!2sPera+Museum!5e0!3m2!1sen!2sus!4v1470124543562"
              width="100%"
              height={337}
              frameBorder={0}
              style={{ border: "0" }}
              allowFullScreen
            />
            <p>
              Meşrutiyet Caddesi No:65&nbsp;34430 <br />
              Tepebaşı - Beyoğlu - İstanbul
            </p>
            <p>
              T: +90 212 334 99 00
              <br />
              <a href="mailto:info@peramuzesi.org.tr">info@peramuzesi.org.tr</a>
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-10 col-6 fs-30 h3">Metro</div>
              <div className="col-md-2 col-6 text-right">
                <a
                  className
                  data-toggle="collapse"
                  href="#collapseOne"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <img
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Metro Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                <p className="fs-22 collapseTitle">
                  Yenikapı - Hacıosman (M2) hattında, Şişhane durağında...
                </p>
              </div>
              <div className="collapse" id="collapseOne">
                <div className="col-md-12 staticcontentbody">
                  Yenikapı - Hacıosman (M2) hattında, Şişhane durağında inin.
                  Şişhane çıkışını kullanın ve Meşrutiyet Caddesi üzerinde
                  ilerleyin. Pera Müzesi 10 dakika yürüme mesafesinde.
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-10 col-6 fs-30 h3">Otobüs</div>
              <div className="col-md-2 col-6 text-right">
                <a
                  className
                  data-toggle="collapse"
                  href="#collapseTwo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Otobüs Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                <p className="fs-20 collapseTitle">
                  Tarlabaşı Bulvarı, İngiltere Başkonsolosluğu önündeki...
                </p>
              </div>
              <div className="collapse" id="collapseTwo">
                <div className="col-md-12 staticcontentbody">
                  Tarlabaşı Bulvarı, İngiltere Başkonsolosluğu önündeki
                  Tepebaşı-Beyoğlu otobüs durağında inin. Pera Müzesi 5 dakika
                  yürüme mesafesinde.
                  <br />
                  <br />
                  Bu duraktan geçen otobüs hatlarını{" "}
                  <a href="https://www.iett.istanbul/tr/main/duraklar/117471/TARLABA%C5%9EI-%C4%B0ETT-Duraktan-Ge%C3%A7en-Hatlar-Durak-Bilgileri-Hatt%C4%B1n-Duraktan-Ge%C3%A7i%C5%9F-Saatleri">
                    görmek için linke tıklayınız
                  </a>
                  .
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-10 col-6 fs-30 h3">
                Yakındaki Otoparklar
              </div>
              <div className="col-md-2 col-6 text-right">
                <a
                  className
                  data-toggle="collapse"
                  href="#collapseThree"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <img
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Otopark Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                <p className="fs-20 collapseTitle">
                  Pera Müzesi’ne aracınızla geliyorsanız...
                </p>
              </div>
              <div className="collapse" id="collapseThree">
                <div className="col-md-12 staticcontentbody">
                  Pera Müzesi’ne aracınızla geliyorsanız, Beyoğlu Tepebaşı
                  İSPARK’ı kullanabilirsiniz.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 ">
            <p className="border-bottom border-secondary" />
          </div>
        </div>
        <div className="row mb-md-5 mb-5">
          <div className="col-12 staticcontentbody">
            <div className="row">
              <div className="col-md-6">
                <h1 className="mb-3">Ziyaret Saatleri</h1>
                <p className="fs-22">
                  Salı - Cumartesi&nbsp; 10.00-19.00
                  <br /> Cuma 10.00 - 22.00
                  <br />
                  Pazar 12.00-18.00 <br />
                  Müze, pazartesi günleri kapalıdır.
                </p>
                <p className="fs-22">
                  <strong>
                    Özel Günler
                    <br />
                  </strong>
                  Müze, Ramazan (Şeker) ve Kurban bayramlarının birinci günü ve
                  her yıl 1 Ocak’ta kapalıdır.
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="mb-3">Giriş Ücretleri</h1>
                <div className="colAlt2 floatRight">
                  <p>
                    Tam: 200 TL
                    <br />
                    İndirimli: 100 TL
                    <br />
                    (12 yaş üstü öğrenciler, öğretim görevlileri, 60 yaş ve
                    üstü)
                    <br />
                    Grup: 150 TL (tek seferde 10 bilet ve üstü)
                  </p>
                  <p>
                    <strong>Ücretsiz:</strong>
                    <strong>&nbsp;</strong>Pera Müzesi Dostları, gaziler, şehit
                    ve gazilerin eşleri ve çocukları, engelliler ve her
                    engelliye refakat eden bir kişi, 12 yaş ve altı çocuklar,
                    ICOM kart sahipleri, MMKD üyeleri ve basın mensupları,
                    çarşamba günleri öğrenciler, cuma günleri saat 18.00'dan
                    sonra herkes Pera Müzesi’ni ücretsiz ziyaret edebilir.
                  </p>
                  <p>
                    <strong>
                      Uzun Cuma
                      <br />
                    </strong>
                    Pera Müzesi her cuma 18.00-22.00 saatleri arasında ücretsiz
                    olarak ziyaret edilebilir.
                  </p>
                  <p>
                    <strong>
                      Genç Çarşamba
                      <br />
                    </strong>
                    Pera Müzesi ziyareti ve Pera Film gösterimleri çarşamba
                    günleri tüm öğrencilere ücretsiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 ">
            <p className="border-bottom border-secondary" />
          </div>
        </div>
        <div className="row  mb-md-5 mb-3">
          <div className="col-md-6">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/pera-cafe.jpg"
              alt="Pera Café"
            />
            <p></p>
            <h2 className="fs-40">Pera Café</h2>
            <p />
            <p className="staticcontentbody"></p>
            <div className="colAlt1 floatLeft fs-22">
              <p className="fs-22">
                Pera Müzesi’nin, 1893 yılında inşa edilen Hotel Bristol
                geçmişine ve 1900'lerin Pera'sına gönderme yapan,{" "}
                <em>art deco</em> bir yaklaşımın ağırlıkta olduğu Pera Café,
                ziyaretçiler için özel bir dinlenme ve&nbsp;sosyalleşme mekânı.
                Salatalar, sandviçler, özel makarna çeşitleri ve pastacılık
                ürünlerinin sunulduğu Café, sergilere paralel olarak hazırlanan
                farklı dünya mutfağı temalı özel mönüler de hazırlıyor.
              </p>
              <div className="c-message_kit__gutter">
                <div className="c-message_kit__gutter__right">
                  <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
                    <div className="c-message__message_blocks c-message__message_blocks--rich_text">
                      <div className="p-block_kit_renderer">
                        <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
                          <div className="p-rich_text_block">
                            <div className="p-rich_text_section">
                              <a
                                href="https://www.peramuzesi.org.tr//images/Ziyaret/pera%20cafe/menu-tr-05-07-24.pdf"
                                target="_blank"
                              >
                                Menüyü incelemek için tıklayın.
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/artshop.jpg"
              alt="Artshop"
            />
            <p></p>
            <h2 className="fs-40">Artshop</h2>
            <p />
            <p className="staticcontentbody"></p>
            <div className="colAlt1 floatLeft fs-22">
              <p>
                Pera Müzesi’nin, açılışından bu yana hizmet veren Müze mağazası,
                ziyaretçilerin Müze'yi, sergileri, katıldıkları etkinlikleri
                anımsayacakları, özel olarak tasarlanan geniş yelpazedeki
                ürünleri ve yayınları sunuyor.&nbsp;
              </p>
              Artshop salı – cumartesi günleri&nbsp;
              <strong>10.00 – 19.00</strong>&nbsp;arası, pazar günleri{" "}
              <strong>12.00 - 18.00</strong> arası açıktır.
              <br />
              Pazartesi günleri kapalıdır.&nbsp;
            </div>
            <p />
          </div>
          <div className="col-md-12 mt-3 ">
            <p className="border-bottom border-secondary" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/sesli-rehber.jpg"
              alt="Ücretsiz Sesli Rehber"
            />
            <p></p>
            <h2 className="fs-40">Ücretsiz Sesli Rehber</h2>
            <p />
            <p className="staticcontentbody"></p>
            <div className="colAlt1 floatLeft fs-22">
              <p>
                Koleksiyon sergilerimizi Meltem Cumbul, Yekta Kopan ve Mert
                Fırat seslendiriyor.&nbsp;Sesli rehberimiz Suna ve İnan Kıraç
                Vakfı Pera Müzesi'nin koleksiyonlarından derlenen “Kesişen
                Dünyalar: Elçiler ve Ressamlar”, “Osman Hamdi Bey”, “Kahve
                Molası: Kütahya Çini ve Seramikleri” ve “Anadolu Ağırlık ve
                Ölçüleri” sergilerini anlatıyor.
              </p>
              <p>
                Mert Fırat tarafından seslendirilen yetişkinlere yönelik sesli
                rehberin yanı sıra, Türkiye’de ilk defa çocuklara özel olarak
                hazırlanmış sesli rehber de ziyaretçileri bekliyor. Bu sesli
                rehberle çocuklar koleksiyonları eğlenceli bir hikâye eşliğinde
                keşfedebiliyor, zamanda yolculuk yapan bir elçiyle Türk
                hareminden bir maymunun koleksiyonlarımızdan ilham alan
                hikayesini Meltem Cumbul ile Yekta Kopan’ın sesinden dinliyor.
              </p>
            </div>
            <p />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/engelli-ziyaretciler.jpg"
              alt="Engelli Ziyaretçiler"
            />
            <p></p>
            <h2 className="fs-40">Engelli Ziyaretçiler</h2>
            <p />
            <p className="staticcontentbody"></p>
            <p>
              Pera Müzesi ziyaretçilerinin farklı ihtiyaçları için de çeşitli
              servisler sunuyor.
            </p>
            <p>
              Müze girişi, tekerlekli sandalye kullanan veya merdiven
              kullanamayan ziyaretçiler için uygun. Tüm katlara asansörle
              ulaşılabiliyor. Tuvaletler engelli ziyaretçilerin kullanımına
              uygun biçimde tasarlanmış. Ayrıca engelli ziyaretçilerden ve
              onlara eşlik eden bir kişiden giriş ücreti alınmıyor.
            </p>
            <p />
          </div>
          <div className="col-md-6 mt-4">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/osmanhamdibeyvr.jpg"
              alt="Osman Hamdi Bey’in<br> Dünyasına Yolculuk<br>Sanal Gerçeklik Deneyimi"
            />
            <p></p>
            <h2 className="fs-40">
              Osman Hamdi Bey’in
              <br /> Dünyasına Yolculuk
              <br />
              Sanal Gerçeklik Deneyimi
            </h2>
            <p />
            <p className="staticcontentbody"></p>
            <p>
              Osman Hamdi Bey’i yüz binlerce sanatseverle buluşturan Pera
              Müzesi, ziyaretçilere bu kez de onun kurgusal çalışma ortamını ve
              çok sevilen tablosu Kaplumbağa Terbiyecisi’ni sanal gerçeklik
              teknolojisi aracılığıyla deneyimleme fırsatı veriyor.
            </p>
            <p />
          </div>
          <div className="col-md-6 mt-4">
            <img
              className="img-fluid w-100"
              src="/images/Ziyaret/okul-gruplari-2.jpg"
              alt="Okul Grupları"
            />
            <p></p>
            <h2 className="fs-40">Okul Grupları</h2>
            <p />
            <p className="staticcontentbody"></p>
            <p>
              Okul gruplarının müze ziyareti için serbest gezi günleri salı,
              çarşamba, perşembe, cumadır. Ziyaretler, en fazla 30 öğrencinin 2
              öğretmen eşliğinde katılımına uygundur. Rezervasyon gereklidir.
            </p>
            <p>
              <a href="https://www.peramuzesi.org.tr/rezervasyon/serbestgrup">
                <strong>
                  Serbest gezi rezervasyonu yaptırmak için tıklayın!
                </strong>
              </a>
            </p>
            <p>
              Sergilere yönelik rehberli tur ve atölyelere rezervasyon yaptırmak
              için lütfen etkinlik sayfasındaki rezervasyon formunu doldurunuz.
            </p>
            <p>
              Sıkça sorulan sorulara ulaşmak için&nbsp;
              <a href="https://www.peramuzesi.org.tr/faq">tıklayınız</a>.
            </p>
            <p />
          </div>
          <div className="col-md-6">&nbsp;</div>
        </div>
      </div>
      {/*captcha için*/}
      {/*captcha için*/}
      <div
        className="container-fluid first-row"
        style={{ "background-color": "#FBEFEF" }}
      >
        <div className="row">
          <div className="container">
            <div
              className="row "
              style={{ "margin-top": "40px", "margin-bottom": "40px" }}
            >
              <div className="col-md-12 mb-4">
                <h1 className="h1 text-uppercase">BİZE ULAŞIN</h1>
              </div>
              <div className="col-md-6 col-sm-12">
                <h5>İletişim Bilgileri</h5>
                <p />
                <p>
                  Meşrutiyet Caddesi No:65&nbsp;34430 <br />
                  Tepebaşı - Beyoğlu - İstanbul
                </p>
                <p>
                  T: +90 212 334 99 00
                  <br />
                  <a href="mailto:info@peramuzesi.org.tr">
                    info@peramuzesi.org.tr
                  </a>
                </p>
                <p />
              </div>
              <div className="col-md-6 col-sm-12 pb-2">
                <form
                  action="/pera-muzesi-hakkinda"
                  className="form"
                  method="post"
                >
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    defaultValue="wSkVL7qwKRL2YLOtywO8Fwj79-IoWHcLsscWLyIRPKB8seF2g_dAD7XFvmgVdzn8EklUqBT9mAmPJcOIvya7rRZDOCs_nfiJO5r91UTFTXw1"
                  />{" "}
                  <h5>İletişim Formu</h5>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="NameSurname"
                      name="NameSurname"
                      placeholder="Adınız Soyadınız"
                      required="required"
                      type="text"
                      defaultValue
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="Email"
                      name="Email"
                      placeholder="E-Posta Adresiniz"
                      required="required"
                      type="email"
                      defaultValue
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      cols={20}
                      id="Message"
                      name="Message"
                      placeholder="Mesajınız"
                      required="required"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center justify-content-between">
                      <div
                        className="g-recaptcha"
                        data-theme="light"
                        data-sitekey="6LfllQkUAAAAAKkDXPBkhn6XqB3o1_wV_Q1m9OhL"
                      />
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="IsCaptchaValid"
                        data-valmsg-replace="true"
                      />
                      <button
                        type="submit"
                        className="btn btn-outline-secondary px-4 ml-auto"
                        style={{ "border-radius": "40px" }}
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                </form>{" "}
                <div style={{ "font-size": "10px", "padding-top": "10px" }}>
                  <p>
                    Bize iletmiş olduğunuz bilgilerde aşağıda sıralanan özel
                    nitelikli kişisel verilerin yer almadığından emin olmanızı
                    rica ederiz: Irk, etnik köken, siyasi düşünce, felsefi
                    inanç, din, mezhep veya diğer inançlar, kılık ve kıyafet,
                    dernek, vakıf ya da sendika üyeliği, sağlık, cinsel hayata
                    ilişkin veriler, ceza mahkûmiyeti ve güvenlik tedbirleriyle
                    ilgili veriler, biyometrik ve genetik veriler.
                  </p>
                  <p>
                    Talep, şikayet, öneri ve isteklerinizi bizimle paylaşmanız
                    dolayısıyla elde ettiğimiz kişisel verilerinizin işlenmesi
                    hakkındaki{" "}
                    <a href="/kvkk#aydinlatmametni">
                      SVİKV İletişim Süreci Kişisel Verilerin İşlenmesi
                      Aydınlatma Metni için lütfen tıklayınız
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
