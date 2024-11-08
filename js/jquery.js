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

$(document).ready(function () {
  $(".bg-zinc-800 text-center-max-w-xl text-left .title").on(
    "click",
    function () {
      var n = window,
        t = "inner",
        i;
      "innerWidth" in window ||
        ((t = "client"), (n = document.documentElement || document.body));
      i = {
        width: n[t + "Width"],
        height: n[t + "Height"],
      };
      i.width < 769 && $(this).siblings(".list").slideToggle("slow");
    }
  );
});

$(document).ready(function () {
  $(".max-w-xl text-left .title").on("click", function () {
    var n = window,
      t = "inner",
      i;
    "innerWidth" in window ||
      ((t = "client"), (n = document.documentElement || document.body));
    i = {
      width: n[t + "Width"],
      height: n[t + "Height"],
    };
    i.width < 1001 && $(this).siblings(".listbox").slideToggle("slow");
  });
});

$(document).ready(function () {
  $("#float-left h-9 bg-orange-400 p-3.5 text-center text-white uppercase").on(
    "click",
    function () {
      newsletter_subscribe("true");
    }
  );

  $("#inline-max-w-xl text-left overflow-hidden").on("keydown", function (n) {
    if (n.keyCode == 13)
      return (
        $(
          "#float-left h-9 bg-orange-400 p-3.5 text-center text-white uppercase"
        ).trigger("click"),
        !1
      );
  });
});
