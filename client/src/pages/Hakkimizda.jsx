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
          {/* <div className="col-md-12">
            <img
              className="img-fluid"
              src="/images/Hakkımızda/pera-muzesi-hakkimizda.jpg"
              title="Hakkımızda"
              alt="Pera Müzesi Ön Cephe"
            />
          </div> */}

          <div className="col-12 text-justify mb-4 mt-4">
            <h3>
              <b
                id="DigitalExhibitions"
                className="BitcraftLang fs-30 mb-2"
                style={{ fontFamily: "Raleway" }}
              >
                Sürgünde
                <br />
                Dersim Etnografya ve Tarih Müzesi
              </b>
            </h3>
          </div>

          <div className="col-12 text-justify">
            <p />
            <p>
              Dersim, politik ve kültürel birikimiyle hemen her zaman bir tür
              “üniversite” şehri olmuştur. Her yaş grubundan insanlarının
              okumaya, anlamaya, tartışmaya, öğrenmeye meraklı olduğu bu şehir,
              sadece Türkiye’de değil, dünyada da büyük ölçüde bu özelliğiyle
              bilinmektedir.
              <br />
              <br />
              Bunun yanısıra Türkiye genelinde de ençok göç veren bölge yine
              Dersim olmuştur. Günümüz Tunceli ilinin tamamı ve tarihi Dersim
              Coğrafyası‘ndan Almanya’ya göç edenlerin aile bireyleriyle
              birlikte sayısı 460 binin üzerindedir. <br />
              <br />
              Yaklaşık onbeş yıldan beri Türkiye’de başlayan Dersim’li
              akademisyenlerin bir araya gelme girişimi, biz Avrupa’da yaşayan
              ve çalışan akademisyenleri de kapsayarak, iş insanlarının ve
              kültür emekçilerinin katkılarıyla 2014 yılında akademik bir Vakfın
              kurulmasıyla sonuçlanmıştır. <br />
              <br />
              Avrupa’da ve Federal Almanya’da Dersim kökenli akademik bir
              potansiyele sahip olduğumuz gibi çok büyük bir oranda da kültür
              emekçileri ve iş insanı potansiyeline sahibiz. <br />
              <br />
              Bu durum hem Türkiye’de hem de Türkiye dışında birçok alanda
              mevcut olan akademik birikimin yanısıra iş ve kültür dünyasını da
              kapsayan bir örgütlenmenin kalıcı bir kurumsallaşmaya yönelik
              arayışlarını da beraberinde getirmiştir. <br />
              <br />
              Yaptığımız araştırmalar Avrupa’da en uygun ve kalıcı bir
              kurumsallaşmanın Müze çalışmasıyla sağlanabileceğini
              göstermektedir. <br />
              <br />
              Bu bağlamda kamuoyuna bir grup girişimci (akademisyenler, kültür
              emekçileri, iş insanları) olarak Almanya’da, sürgünde ilk etapta
              dijital bir Ennografya ve Tarih Müzesi kurmak için çalışmalara
              başladığımızı duyuruyoruz. <br />
              <br />
              Bu çağrıyla “Sürgünde Dersim Etnografya ve Tarih Müzesi” kuruluş
              çalışmalarını kamuoyuna duyurarak sadece Dersim’li
              akademisyenlerden, kültür emekçilerinden ve iş insanlarından
              değil, aynı zamanda Dersim dostlarından ve çok kültürlülüğü
              önemseyen kesimlerden de ciddi bir destek bekliyoruz. <br />
              <br />
              Bizler, Türkiye dışında değişik ülkelerde yaşayan Dersimliler
              olarak, insan potansiyelimiz, kültürel-sosyal yaşamdaki
              birikimlerimizle müze gibi daha kalıcı bir kurumu inşa etmek,
              istiyoruz. Böylece Dersim’in tarihi kültürel ve sosyal yaşamını
              dijital ortamda da olsa gelecek kuşaklara miras bırakarak
              tarihimizin tümden kaybolmasının önüne geçebileceğimize
              inanıyoruz.
              <br />
              <br />
              Kuracağımız müzede sergilerin yanı sıra tarihi ve güncel belgeleri
              (fotoğraflar, objeler, metinler, vb.) toplayarak dijital ortamda
              korumaya alacağız. Müzede, birçok kültür ve inancın bir arada
              yaşadığı Dersim Bölgesi’nin tarihi ile yaşatılan soykırımları
              bilim dünyasının sunarak, öncelikle akademik ortamda işlenmesi ve
              korunmasını amaçlıyoruz. <br />
              <br />
              Bunun yanısıra Tarihi Dersim Bölgesi’nden göç ve göçün tarihi de
              müzede yerini alacaktır. Bulunduğumuz Federal Almanya’da Dersim
              coğrafyasından gelen birinci kuşak göçmenlerin tarihi tüm
              yönleriyle işlenip kamuoyuna sunulacaktır.
              <br />
              <br />
              İlk etapta dijital olarak kurulacak olan Müze aktif bir web
              platformu, bir dizi film ve kitap belgeselinin yanı sıra gezici
              bir sergiyle de desteklenecektir. Dijital ortamda korunmaya
              alınacak tarihi ve çağdaş eserler halka sunulacaktır.
              <br />
              <br />
              Müze aynı zamanda bir eğitim kurumu işlevi de görecektir. Web
              sunumu aracılığıyla Dersim Bölgesi’nden Almanya’ya göçün tarihini
              temel alan bir eğitim programı, fotoğraflar, video sekansları,
              animasyonlar ve metinlerle desteklenerek sanal bir kütüphanenin
              oluşturulması sağlanarak, akademilerin,bilim insanlarının,
              öğrencilerin ve gençlerin kullanımına sunulacktır. <br />
              <br />
              Metinler ve objeler dijital müzede Kırmanci-Zazaki ve
              Kırdaski-Kürtçe’den Türkçe, Almanca ve İngilizceye transkript
              edilip çevrilecek ve dijitalleştirilerek daha ileri düzeyde
              işlenip yeniden değerlendirilebilmesi için araştırmacıların ve
              diğer kurumların kullanımına sunulacaktır. <br />
              <br />
              Böylece 1960’lı yıllarda Almanya’ya göçmen işçi olarak gelen ve
              bugün dördüncü nesille ulaşmış bulunan Dersimlilerin farklı ve çok
              yönlü tarihi görünür ve elle tutulur kılınacaktır. <br />
              <br />
              Bulunduğumuz Federal Almanya’da çok kültürlü yaşamı evrensel
              değerlerle, proje ve etkinlikler bazında destekleyip, din ve inanç
              topluluklarının ortak değerlerde buluşması için çaba harcıyacağız.{" "}
              <br />
              <br />
              Tarihimizin bir parçası olun. <br />
              <br />
              Bize vereceğiniz destekle, Almanya gibi demokratik bir hukuk
              devletinde, bir bölgenin tarihine hayat vererek kaybolup gitmesini
              önleyecek, demokrasinin güçlenmesine katkıda bulunacaksınız.
              “Sürgünde Dersim Müzesi” projesine araştırmacılar ve sponsorlar
              eşlik etmekte ve destek vermektedir. “Sürgündeki Dersim Müzesi”, ”
              Perspektive Vielfalt gGmbH – Kültürlerarası Araştırma ve Sosyal
              Hizmet Enstitüsü” tarafından kurulmaktadır. Projenin daha da
              geliştirilmesi için bağımsız olarak çalışan, özgürce karar veren
              bir koordinasyon ve planlama ekibi olacaktır. <br />
              <br />
              Bağışlar, objeler, belgeler, resimler, kitaplar vb. ile bize
              destek olmak isterseniz, lütfen bizimle iletişime geçin. <br />
              <br />
              Bütün bunlara paralel olarak NRW’de (Kuzey Ren-Vestfalya Eyaleti)
              müzeye uygun bir bina bulmaya çalışıyoruz. <br />
              <br />
              Fikir <br />
              <br />
              Sizin hikayeniz bizim hikayemiz oldu, bizim ki de sizin hikayeniz
              olacak. Şimdi hep birlikte geleceği yazacağız.
              <br />
              <br />
              Hıdır Eren Çelik <br />
              <br />
              Iletişim Adresi: info@dersim-museum.de
              <br />
              <br />
              Perspektive Vielfalt gGmbH –Institut für transkulturelle Forschung
              und Soziale Arbeit <br />
              <br />
              Kalker Hauptstraße 165 | 51103 Köln | Mail:
              <br />
              info@perspektive-vielfalt.com Internet:
              <br />
              www.perspektive-veilfalt.com <br />
              Handelsregister Amtsgericht Köln HRB
              <br />
              108207 | USt.-IdNr. DE <br />
              Bankverbindung: Sparkasse KölnBonn IBAN:
              <br />
              DE18 3705 0198 1936 0389 99
              <br />
              <br />
              BIC: COLSDE33XXX <br />
              <br />
              Bağışlar için hesap nr.: <br />
              Perspektive -Vielfalt
              <br />
              Sparkasse KölnBonn <br />
              IBAN: DE18 3705 0198 1936 0389 99
              <br />
              BIC: COLSDE33XXX <br />
              Stichwort: Dersimmuseum
            </p>
            <p />
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
