import React, { useState } from "react";
import axios from "axios";

export default function Hakkimizda() {
  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState(""); // 'success' or 'fail'

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

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
        }}
      />

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
      <div
        className="container fontum first-row"
        style={{ "margin-bottom": "50px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <img
              className="img-fluid"
              src="/images/Hakkımızda/pera-muzesi-hakkimizda.jpg"
              title="Hakkımızda"
              alt="Pera Müzesi Ön Cephe"
            />
          </div>
          <div className="col-12 text-justify">
            <p />
            <p>
              Kapılarını 2005 Haziran ayı başlarında açan Pera Müzesi, Suna ve
              İnan Kıraç Vakfı’nın, kentin bu seçkin noktasında kültür-sanat
              hizmeti vermek amacıyla hayata geçirdiği geniş kapsamlı bir kültür
              girişiminin ilk adımıdır. Bu projede bir ‘müze-kültür merkezi’
              işlevini üstlenen Pera Müzesi için, 1893 yılında mimar Achille
              Manoussos’un İstanbul’un gözde semti Tepebaşı’nda inşa ettiği
              yapı, Mimar M. Sinan Genim tarafından tümüyle elden geçirilerek
              çağdaş donanımlı bir müzeye dönüştürülmüş ve hizmete sunulmuştur.
              <br />
              <br />
              Suna ve İnan Kıraç Vakfı’na ait “Oryantalist Resim”, “Anadolu
              Ağırlık ve Ölçüleri” ve “Kütahya Çini ve Seramikleri”
              koleksiyonlarını ve bu koleksiyonların temsil ettiği değerleri;
              sergiler, yayıncılık ürünleri, sözlü etkinlikler, film
              gösterimleri, öğrenme programları ve bilimsel çalışmalar
              aracılığıyla kamuyla paylaşan, gelecek kuşaklara aktarmayı
              amaçlayan Pera Müzesi, süreli sergileriyle de dünya sanatının
              önemli isimlerini ağırlamaktadır.
              <br />
              <br />
              Aralarında Tate Britain, Victoria ve Albert Müzesi, St. Petersburg
              Rus Devlet Müzesi, JP Morgan Chase Koleksiyonu, New York School of
              Visual Arts, Maeght Vakfı gibi dünyanın önde gelen müze,
              koleksiyon ve vakıflarıyla ortak projeler üreten Pera Müzesi,
              düzenlediği dönemli sergilerle, Jean Dubuffet, Henri
              Cartier-Bresson, Rembrandt, Niko Pirosmani, Josef Koudelka, Joan
              Miró, Akira Kurosawa, Marc Chagall, Pablo Picasso, Fernando
              Botero, Frida Kahlo, Diego Rivera, Goya, Manolo Valdés, Andy
              Warhol, Cecil Beaton, Alberto Giacometti, Giorgio de Chirico,
              Sergey Parajanov gibi dünyanın usta sanatçılarının yapıtlarını
              ülkemiz sanatseverleriyle buluşturmuştur. Açıldığından bugüne her
              yıl ulusal ve uluslararası eğitim ve sanat kurumlarıyla işbirliği
              yaparak genç sanatçıları destekleyen sergiler de düzenleyen Pera
              Müzesi, tüm sergilerini kitaplar, sözel etkinlikler ve öğrenme
              programlarıyla da zenginleştirmektedir. Dönemsel programları ve
              etkinlikleriyle dikkat çeken Pera Film ise ziyaretçilere ve sinema
              meraklılarına, klasiklerden bağımsız filmlere, animasyon ve
              belgesellere uzanan, kimi zaman sergilere paralel kapsamlı
              gösterimler düzenlemektedir.
              <br />
              <br />
              Kuruluşundan günümüze gerçekleştirdiği etkinliklerle Türkiye’nin
              en nitelikli, öncü ve sevilen müzelerinden biri haline gelen Pera
              Müzesi kentin bu çok canlı bölgesinde kapsamlı ve çağdaş bir
              müze-kültür merkezi olarak hizmet vermektedir.
            </p>
            <p />
          </div>
        </div>
        <hr style={{ "margin-top": "40px" }} />
        <div className="row">
          <div className="col-md-12">
            <h4
              className="fs-40"
              style={{ "font-weight": "600", "margin-top": "40px" }}
            >
              Bina Tarihçesi
            </h4>
          </div>
          <div className="col-md-12">
            <img
              className="img-fluid"
              src="/images/Hakkımızda/202201-bina-tarihcesi.jpg"
              title="About Us"
              alt="Binanın Tarihçesi"
            />
          </div>
          <div className="col-md-12  text-justify">
            <span className="staticcontentbody">
              <p>
                <br />
                Mimar Achille Manoussos’un, dönemin genel mimari karakterine
                uygun olarak tasarladığı ve Ermeni Katolik Patrikhanesi’nin
                mülkü olan Bristol Oteli’nin inşası 1893 yılında tamamlanır.
              </p>
              <p>
                Şehrin önemli otelleri arasında sayılan ve üst düzey yabancı
                konukları misafir eden Bristol Oteli, 1980’li yılların başına
                kadar hizmette kalır.
              </p>
              <p>
                Tuğla malzeme ile kâgir sistemde inşa edilen ve neoklasik
                özellikler taşıyan Bristol Oteli’nin geniş bir lobisi, mermer
                merdivenleri, asansörü, rahat süitleri, salonları ve müstakil
                masa düzenine sahip ferah bir yemek salonu vardır.
              </p>
              <p>
                Bristol Oteli’nin yıllar içinde Logothetti, Adamapoulos, Ciras
                ve Hacara gibi meşhur işletmecileri olur, bölgenin değişen
                demografik yapısını yansıtır biçimde 1930’ların başında binayı
                satın alan Ömer Lütfi Bengü, oteli işletmeye 1980’lere kadar
                devam eder.
              </p>
              <p>
                Bristol Oteli 1980’li yıllarda yeni otellerle rekabet edemez
                hale gelir. Otelin son sahibi Ömer Lütfi Bengü’nün 1983’teki
                vefatından sonra, mirasçılarının satışa çıkardığı binayı önce
                Yıldız Lastikçilik, ardından Esbank satın alır.
              </p>
              <p>
                Bristol Oteli’ni Esbank’ın genel müdürlük binasına dönüştürmek
                üzere, mimar Doğan Hasol yapıyı yeniler. Otel ile hemen
                yanındaki beş katlı konut binasının Meşrutiyet Caddesi’ne bakan
                cepheleri korunur ve iki parsel birleştirilir.
              </p>
              <p>
                Bina 2002 yılına kadar Esbank Genel Müdürlüğü olarak hizmet
                verir. Manoussos’un orijinal cephesi ve Hasol’un birleştirdiği
                parseller korunarak, mimar Sinan Genim’in hazırladığı proje
                doğrultusunda çağdaş ve donanımlı bir müze olarak yeniden
                tasarlanır.
              </p>
            </span>
          </div>
        </div>
        <hr style={{ "margin-top": "40px" }} />
        <div className="row">
          <div className="col-md-12 text-justify">
            <h4
              className="fs-40"
              style={{ "font-weight": "600", "margin-top": "40px" }}
            >
              Suna ve İnan Kıraç Vakfı
            </h4>
            <span className="staticcontentbody">
              <p>
                Suna ve İnan Kıraç Vakfı; Suna Kıraç, İnan Kıraç ve İpek Kıraç
                tarafindan 27 Ekim 2003 tarihinde, Türk toplumuna yararlı ve
                yurtsever vatandaşlar yetiştirilmesi için, kişi ve kurumlara
                maddi ve manevi imkanlar sağlamak, toplumsal hayata katkıda
                bulunmak ve bu dogrultuda eğitim, kültür, sanat ve sağlık
                alanlarında faaliyetlerde bulunmak amacıyla kurulmuştur.
              </p>
              <p>
                Vakıf, eğitim alanındaki hedeflerini gerçekleştirmek üzere;
                yardıma ihtiyacı olan yetenekli öğrenciler ile eğitim ve öğretim
                kurumlarına gerekli görülecek her türlü yardımı yapmakta, burs
                eğitim ve araştırma gibi imkanlar sağlayarak destek vermektedir.
              </p>
              <p>
                Vakıf, kültür ve sanat alanında; tarih, sanat, kültür ve bilim
                müzeleri ile her türlü sergi mekanları, araştırma ve uygulama
                merkezleri, kütüphaneler ve enstitüler açmaya ve işletmeye,
                koleksiyonlar oluşturmaya ve bunları sergilemeye yönelik
                faaliyetlerde bulunmaktadır. Vakıf’ın bu alandaki faaliyetleri
                arasında inceleme, araştırma ve kamuoyu yoklamaları yapmak veya
                yaptırmak, dünyadaki çeşitli müzeler, vakıflar, sergi
                merkezleri, araştırma ve uygulama merkezleri, kütüphaneler,
                enstitü ve kuruluşlarla iş birligi yapmak da yer almaktadır.
              </p>
              <p>
                <b>
                  <a href="http://sunaveinankiracvakfi.org.tr" target="_out">
                    sunaveinankiracvakfi.org.tr
                  </a>
                </b>
              </p>
            </span>
          </div>
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
      <div className="cookie-bar">
        <img src="/images/Hakkımızda/close2.png" className="cookie-close" />
        Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
        için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
        inceleyebilirsiniz.
      </div>
    </div>
  );
}
