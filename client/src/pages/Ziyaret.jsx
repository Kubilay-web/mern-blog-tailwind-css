import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/tema.css";

export default function Ziyaret() {
  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState(""); // 'success' or 'fail'

  const [posts, setPosts] = useState([]);

  const category = "Hakkımızda";

  const fetchPosts = async (category, setPostFunc) => {
    try {
      const res = await fetch(
        `/api/post/getposts/category?category=${category}`
      );
      const data = await res.json();
      setPostFunc(data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(category, setPosts);
  }, [category]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/form/contact", {
        NameSurname: nameSurname,
        Email: email,
        Message: message,
      });

      setFeedbackMessage(response.data.message);
      setFeedbackType("success");

      // Clear input fields
      setNameSurname("");
      setEmail("");
      setMessage("");

      // Hide message after 3 seconds
      setTimeout(() => {
        setFeedbackMessage("");
        setFeedbackType("");
      }, 3000);
    } catch (error) {
      setFeedbackMessage("Failed to send. Please try again.");
      setFeedbackType("fail");

      // Hide message after 3 seconds
      setTimeout(() => {
        setFeedbackMessage("");
        setFeedbackType("");
      }, 3000);
    }
  };

  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [isTitleVisible2, setIsTitleVisible2] = useState(true);
  const [isTitleVisible3, setIsTitleVisible3] = useState(true);

  const titleHandler = () => {
    setIsTitleVisible((prevState) => !prevState);
  };

  const titleHandler2 = () => {
    setIsTitleVisible2((prevState) => !prevState);
  };

  const titleHandler3 = () => {
    setIsTitleVisible3((prevState) => !prevState);
  };

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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10655.091263705178!2d7.0989074!3d50.7343637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b204466e4f0d07%3A0x67dffb9b2422907c!2sBr%C3%BCdergasse+16-18%2C+53111+Bonn%2C+Germany!5e0!3m2!1sen!2sus!4v1699654547105"
              width="100%"
              height={337}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />

            <p>
              Brüdergasse 16-18 53111 <br /> Bonn/Deutschland{" "}
            </p>
            <p>
              T: 0049/228-69749
              <br />
              <a href="mailto:info@dersim-stiftung.de">
                info@dersim-stiftung.de
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <div className="row mb-3">
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
                    onClick={titleHandler}
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Metro Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                {isTitleVisible && (
                  <p className="fs-22 collapseTitle">
                    Berlin - Münih (B2) hattında, Bonn durağında...
                  </p>
                )}
              </div>
              <div className="collapse" id="collapseOne">
                <div className="col-md-12 staticcontentbody">
                  Berlin - Münih (B2) hattında, Bonn durağında inin. Frankfurt
                  çıkışını kullanın ve Dresden Caddesi üzerinde ilerleyin.
                  Dersim Müzesi 10 dakika yürüme mesafesinde.
                </div>
              </div>
            </div>
            <hr />
            <div className="row mt-3 mb-3">
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
                    onClick={titleHandler2}
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Otobüs Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                {isTitleVisible2 && (
                  <p className="fs-20 collapseTitle">
                    Essen Bulvarı, Türkiye Başkonsolosluğu önündeki...
                  </p>
                )}
              </div>
              <div className="collapse" id="collapseTwo">
                <div className="col-md-12 staticcontentbody">
                  Essen Bulvarı, Türkiye Başkonsolosluğu önündeki Münih-İstanbul
                  otobüs durağında inin. Dersim Müzesi 5 dakika yürüme
                  mesafesinde.
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
            <div className="row mt-3">
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
                    onClick={titleHandler3}
                    src="/images/Ziyaret/plusIcon.png"
                    style={{ width: "40px" }}
                    alt="Otopark Alanını Genişlet"
                  />
                </a>
              </div>
              <div className="col-md-12">
                {isTitleVisible3 && (
                  <p className="fs-20 collapseTitle">
                    Dersim Müzesi’ne aracınızla geliyorsanız...
                  </p>
                )}
              </div>
              <div className="collapse" id="collapseThree">
                <div className="col-md-12 staticcontentbody">
                  Dersim Müzesi’ne aracınızla geliyorsanız, Beyoğlu Tepebaşı
                  İSPARK’ı kullanabilirsiniz.
                </div>
              </div>
            </div>
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
                  Müzemiz her yıl 1 Ocak'ta kapalıdır.
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="mb-3">Giriş Ücretleri</h1>
                <div className="colAlt2 floatRight">
                  <p>
                    Tam: 5 €
                    <br />
                    İndirimli: 3 €
                    <br />
                    (12 yaş üstü öğrenciler, öğretim görevlileri, 60 yaş ve
                    üstü) Grup: 4 € (tek seferde 10 bilet ve üstü)
                    <br />
                    Grup: 150 TL (tek seferde 10 bilet ve üstü)
                  </p>
                  <p>
                    <strong>Ücretsiz:</strong>
                    <strong>&nbsp;</strong> Engelliler ve her engelliye refakat
                    eden bir kişi, 12 yaş ve altı çocuklar, basın mensupları,
                    çarşamba günleri öğrenciler, Cuma günleri saat 18.00'dan
                    sonra herkes Dersim Müzesi’ni ücretsiz ziyaret edebilir.
                  </p>
                  <p>
                    <strong>
                      Uzun Cuma
                      <br />
                    </strong>
                    Dersim Müzesi her cuma 18.00-22.00 saatleri arasında
                    ücretsiz olarak ziyaret edilebilir.
                  </p>
                  <p>
                    <strong>
                      Genç Çarşamba
                      <br />
                    </strong>
                    Dersim Müzesi ziyareti ve Dersim Film gösterimleri çarşamba
                    günleri tüm öğrencilere ücretsiz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-7">
              {posts && posts.length > 0 ? (
                posts.slice(0, 1000).map((post, index) => {
                  let colClass = "col-lg-6 col-md-6"; // Varsayılan üçlü düzen

                  if (index === 0) {
                    // İlk kart 4'lük (yarım genişlik)
                    colClass = "col-lg-6";
                  } else if (index === 1) {
                    // İkinci kart 8'lik (tam genişlik)
                    colClass = "col-lg-6 col-md-12";
                  }

                  if (index === 2) {
                    // İlk kart 4'lük (yarım genişlik)
                    colClass = "col-lg-6";
                  } else if (index === 3) {
                    // İkinci kart 8'lik (tam genişlik)
                    colClass = "col-lg-6 col-md-12";
                  }

                  return (
                    <div key={post._id} className={`${colClass} mb-4`}>
                      <a
                        href={`/post/${post.slug}`}
                        target="_self"
                        className="no-link"
                      >
                        <div className="card mb-4 border-0">
                          <img
                            className="bd-placeholder-img card-img-top"
                            width="100%"
                            src={post.image}
                            alt={post.altText}
                          />
                          <div className="card-body">
                            <h3 className="card-title">{post.title}</h3>
                            <p className="card-text">{post.content}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                {post.author}
                              </small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <p>No posts available</p>
              )}
            </div>
          </div>
        </div>
        {/* <div className="row  mb-md-5 mb-3">
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
        </div> */}
        {/* <div className="row mb-3">
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
        </div> */}
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
                  Brüdergasse 16-18 53111 <br />
                  Bonn/Deutschland
                </p>
                <p>
                  Tel.: 0049/228-69749
                  <br />
                  <a href="mailto:info@dersim-stiftung.de">
                    info@dersim-stiftung.de
                  </a>
                </p>
                <p />
              </div>
              <div className="col-md-6 col-sm-12 pb-2">
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="NameSurname"
                      name="NameSurname"
                      placeholder="Adınız Soyadınız"
                      required
                      type="text"
                      value={nameSurname}
                      onChange={(e) => setNameSurname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="Email"
                      name="Email"
                      placeholder="E-Posta Adresiniz"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="Message"
                      name="Message"
                      placeholder="Mesajınız"
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-secondary px-4 ml-auto"
                    style={{ borderRadius: "40px" }}
                  >
                    Gönder
                  </button>
                </form>
                {feedbackMessage && (
                  <div
                    className={`alert alert-${
                      feedbackType === "success" ? "success" : "danger"
                    } mt-3`}
                  >
                    {feedbackMessage}
                  </div>
                )}
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
