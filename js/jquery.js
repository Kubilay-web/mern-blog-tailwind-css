$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Bir seferde tek resim
    loop: true, // Sonsuz döngü
    margin: 10, // Resimler arasındaki mesafe
    nav: true, // Navigasyon oklarını göster
    dots: true, // Noktaları göster
    autoplay: true, // Otomatik oynatma
    autoplayTimeout: 3000, // 3 saniyede bir geçiş
  });
});
