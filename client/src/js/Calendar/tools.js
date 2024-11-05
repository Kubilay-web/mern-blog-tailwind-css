console.log('tools');
function CombineDateAndTime(date, time) {

    const dateTime = moment(`${date} ${time}`, 'DD-MM-YYYY HH:mm').format();

    return dateTime;
}

function getBoolOnOff(param) {
    // if (param == "on" || param == "On" || param == "ON")
    if (param != null)
        if (param.prop('checked')) {
            return true;
        }             
        else return false; 
    return false;
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function validate(object) {
    var snc = object.checkValidity();
    if (!snc) {

        object.value = object.value.slice(0, object.value.length - 1);
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@@"]+(\.[^<>()\[\]\\.,;:\s@@"]+)*)|(".+"))@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var language;

function getLanguage() {
    //setLanguage('tr');
    //(localStorage.getItem('language') == null) ? setLanguage('tr') : false;
    //$.ajax({
    //    url: '../Language/' + localStorage.getItem('language') + '.json',
    //    scriptCharset: "utf-8",
    //    async: false,
    //    contentType: 'application/json; charset=UTF-8',
    //    success: function (lang) {

    //        language = lang
          
    //    }
    //}); 

    //$.getJSON('../Language/tr.json', function (data) {

    //    language = data;


    //});
  
    language =   {
  "NameSurname": "Kat\u0131l\u0131mc\u0131n\u0131n Ad\u0131 Soyad\u0131",
  "ParentNameSurname": "Velinin Ad\u0131 Soyad\u0131",
  "Tel": "Cep Telefonu",
  "Email": "E-Posta",
  "Newsletter": " E-posta ile Pera M\u00fczesi hakk\u0131nda bilgilendirilece\u011fim \u00fccretsiz Pera M\u00fczesi e-b\u00fcltenine abone olmak istiyorum. Genel h\u00fck\u00fcmler ve ko\u015fullar, Bilgi G\u00fcvenli\u011fi ve Ki\u015fisel Verilerin Korunmas\u0131 Kanunu y\u00f6nergelerini okudum ve kabul ediyorum.",
  "BtnSend": "G\u00f6nder",
  "lblWsInfo": "Etkinliğine Rezervasyon Yapt\u0131r\u0131yorsunuz.",
  "SeansOption": "Seans Se\u00e7iniz",
  "ReadDigital": "Online Oku",
  "Buy": "Sat\u0131n Al",
  "Content": "\u0130\u00e7indekiler",
  "PastExhibitions": "Ge\u00e7mi\u015f Sergiler",
  "DigitalExhibitions": "Dijital Sergiler",
  "ExhibitionCatalog": "Sergi Kataloğu",
  "ExhibitionCatalogLink": "Katalog hakkında daha fazla bilgi için tıklayınız.",
  "ExhibitionEvents": "Etkinlikler",
  "PeraFilm": "Pera Film",
  "FilmMoreInfoLink": "Daha fazla bilgi almak için tıklayınız.",
  "FilmMoreInfoLink1": "Daha fazla bilgi almak için tıklayınız.",
  "FilmMoreInfoLink2": "Daha fazla bilgi almak için tıklayınız.",
  "TpMoreInfoLink2": "Daha fazla bilgi almak için tıklayınız.",
  "TpMoreInfoLink1": "Daha fazla bilgi almak için tıklayınız.",
  "TpMoreInfoLink": "Daha fazla bilgi almak için tıklayınız.",
  "PeraTraining": "Pera Öğrenme",
  "Gallery": "Galeri",
  "ShowAll": "Tümünü Gör",
  "Explore": "Keşfet",
  "YoutubeLink": "YouTube kanalımızı ziyaret etmek için tıklayınız.",
  "DigitalExhibitions": "Dijital Sergiler",
  "Activities": "Etkinlikler",
  "FDSureliSergi": "Süreli Sergi",
  "FDFilms": "Filmler",
  "FDfragman": "Program Fragmanı",
  "FDFilmfragman": "Fragman",
  "PastFilms": "Geçmiş Filmler",
  "buyTicket": "Bilet Al",
  "FFFilms": "Diğer Filmler",
  "GnlPrg": "Güncel Programlar",
  "TITrainingPrograms": "Öğrenme Programları",
  "FDWorkshops": "Atölyeler",
  "ExhibitionLink": "Sergi hakkında daha fazla bilgi için tıklayınız.",
  "Video": "Video",
  "PastTrainings": "Geçmiş Öğrenme Programları",
  "ORK": "Öğretmen Rehber Kitapçıkları",
  "EnYeniler": "En Yeniler",
  "TrainingPrograms": "Öğrenme Programları - ",
  "Archive": "Arşiv",
  "4_12_yas": "( 4-12 Yaş )",
  "FIAboutPeraLearning": "Pera Öğrenme Hakkında",
  "FIAboutPeraFilm": "Pera Film Hakkında",
  "FIPastPrograms": "Geçmiş Programlar", 
  "FilmProgramlari": "Film Programları - ",   
  "Close": "X Kapat",
  "Collections": "Koleksiyonlar",
  "publications": "Yayınlar",
  "maybeInterestedIn": "İlginizi Çekebilir",  
  "GspArsiv": "Koleksiyonlar", //değişti sonradan
        "Exhibitions": "Sergiler",
        "CIGecKolSer": "Geçmiş Koleksiyon Sergileri",
        "CIKolSer": "Koleksiyon Sergileri",
        "futureExhibitions": "Gelecek Programlar",
        "twitter": "#PeraMüzesi'ni Tweetle",
        "facebook": "Facebook Etkinliğine Katıl",
        "spotify": "Spotify Listesini Dinle",
        "ActualArtProjects": "Güncel Sanat Projeleri",
        "ActualProjects": "Güncel Projeler",
        "Secki": "Seçki",
        "Blog": "Blog",
        "aylar": "<select id=\"slcDateHeader1\" class=\"text-uppercase\" style=\"border:none;font-weight:bold;font-family: Raleway;\"><option value=\"01\">OCAK</option><option value=\"02\">ŞUBAT</option><option value=\"03\">MART</option><option value=\"04\">NİSAN</option><option value=\"05\">MAYIS</option><option value=\"06\">HAZİRAN</option><option value=\"07\">TEMMUZ</option><option value=\"08\">AĞUSTOS</option><option value=\"09\">EYLÜL</option><option value=\"10\">EKİM</option><option value=\"11\">KASIM</option><option value=\"12\">ARALIK</option></select>",
        "contents": "İçindekiler",
        "ShowAllVideos": "Tümünü Gör",
        "CloseVideos": "X Kapat", 
        "DECoffeBreak": "Kahve Molası",
        "DEDuslerinKenti": "Düşlerin Kenti: İstanbul",
        "DEImpPortre": "İmparatorluktan Portreler",
        "DEDuvDil": "Duvarların Dili", 
        "DEYaz": "Yaz Yaz Yaz",
        "DEYaz18": "Yaz Yaz Yaz'18",
        "PopupDetail": "Detay", 
        "PopupBuyticket": "Bilet Al",
        "TDPeraEngelsiz": "Pera Engelsiz atölyelerine rezervasyon yaptırmak için buraya tıklayın!", 
        "TDWorkshopDetail": "Atölye Detayları İçin",  
        "TDClick": "İşaretine Basınız.",
        "TDSchoolGroupReservation": "Serbest Gezi ve Okul Grupları atölyelerine rezervasyon yaptırmak için tıklayın!",  
        "PeraCocuk": "Pera Çocuk",
        "412Yas": "(4-12 yaş)",
        "Butun": "Bütün", 
        "TDWorkshops": "Atölyelerini",
        "Show": "Göster",
        "PeraGenc": "Pera Genç",
        "1317yas": "(13-17 yaş)",
        "PeraYetiskin": "Pera Yetişkin",
        "PeraEngelsiz": "Pera Engelsiz",
        "PeraOgretmenler": "Öğretmenler",
        "IlginiziCekebilir": "İlginizi Çekebilir",
        "googlearts": "Dijital Sergiyi Gezin",







    };
}




function setLanguage(lang) {
    localStorage.setItem('language', lang);
}

function setLabelsAuto() {
    var ids = document.getElementsByClassName('BitcraftLang');
    for (var i = 0; i < ids.length; i++) {
        $(ids[i]).text(language["" + ids[i].id]);
    }    
}



