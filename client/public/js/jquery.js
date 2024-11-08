$(".home-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  navText: [
    '<img class="left_arrow" src="/assetsv2/img/left-arrow.png" aria-hidden="true" alt="sol">',
    '<img class="right_arrow" src="/assetsv2/img/right-arrow.png" aria-hidden="true" alt="sağ">',
  ],
  smartSpeed: 1000,
});

// Wait for window load
$(window).on("load", function (e) {
  $(".se-pre-con").fadeOut("slow");
  if ($(window).width() > 991) {
    $("nav").removeClass("ptnew-0").addClass("ptnew-1");
  }

  /*
            var cookieName = "PeraMuzesiCookie"
            if (localStorage.getItem(cookieName) === null) {
                setTimeout(() => {
                    $(".cookie-bar").addClass("show");
                }, 1500);
            }; */
});

$(function () {
  $(window).scroll(function () {
    if ($(window).width() >= 1600 && $(this).scrollTop() > 113) {
      $(".topMenuRight a")
        .removeClass("menu-logo-not-scrolled")
        .addClass("menu-logo-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-not-scrolled")
        .addClass("menu-dates-scrolled");
      // $('.topMenuRight a').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight p').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("sticky-top")
        .addClass("fixed-top3")
        .addClass("fixed-top2")
        .css("width", $(".container").width())
        .css("margin", "0 auto")
        .removeClass("ptnew-0")
        .addClass("ptnew-1"); //.css('margin', '0 8.15%');
      $(".nav-zemin").removeClass("d-none").addClass("d-block");
      $(".nav-zemin").css("height", $(".nav").height() + 2);
      $(".container").addClass("movedown40");
      // $('nav').removeClass('border-bottom');
    }
    if ($(window).width() >= 1600 && $(this).scrollTop() < 113) {
      $(".topMenuRight a")
        .removeClass("menu-logo-scrolled")
        .addClass("menu-logo-not-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-scrolled")
        .addClass("menu-dates-not-scrolled");
      // $('.topMenuRight p').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight a').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("fixed-top3")
        .removeClass("fixed-top2")
        .addClass("sticky-top")
        .removeClass("ptnew-0")
        .addClass("ptnew-1");
      // $('nav').addClass('border-bottom');
      $(".nav-zemin").removeClass("d-block").addClass("d-none");
      $(".container").removeClass("movedown40");
    }

    if (
      $(window).width() > 991 &&
      $(window).width() < 1600 &&
      $(this).scrollTop() > 97
    ) {
      $(".topMenuRight a")
        .removeClass("menu-logo-not-scrolled")
        .addClass("menu-logo-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-not-scrolled")
        .addClass("menu-dates-scrolled");
      // $('.topMenuRight a').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight p').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("sticky-top")
        .addClass("fixed-top3")
        .addClass("fixed-top2")
        .css("width", $(".container").width())
        .css("margin", "0 auto")
        .removeClass("ptnew-0")
        .addClass("ptnew-1"); //.css('margin', '0 8.15%');
      $(".nav-zemin").removeClass("d-none").addClass("d-block");
      $(".nav-zemin").css("height", $(".nav").height() + 2);
      $(".container").addClass("movedown40");
      // $('nav').removeClass('border-bottom');
    }

    if (
      $(window).width() > 991 &&
      $(window).width() < 1600 &&
      $(this).scrollTop() <= 97
    ) {
      $(".topMenuRight a")
        .removeClass("menu-logo-scrolled")
        .addClass("menu-logo-not-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-scrolled")
        .addClass("menu-dates-not-scrolled");
      // $('.topMenuRight p').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight a').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("fixed-top3")
        .removeClass("fixed-top2")
        .addClass("sticky-top")
        .removeClass("ptnew-0")
        .addClass("ptnew-1");
      // $('nav').addClass('border-bottom');
      $(".nav-zemin").removeClass("d-block").addClass("d-none");
      $(".container").removeClass("movedown40");
    }

    if ($(window).width() <= 991 && $(this).scrollTop() > 75) {
      $(".topMenuRight a")
        .removeClass("menu-logo-not-scrolled")
        .addClass("menu-logo-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-not-scrolled")
        .addClass("menu-dates-scrolled");
      // $('.topMenuRight a').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight p').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("sticky-top")
        .addClass("fixed-top3")
        .addClass("fixed-top2")
        .css("width", "99.5%")
        .css("left", "0")
        .css("margin", "0 auto")
        .removeClass("ptnew-0")
        .addClass("ptnew-1"); //.css('margin', '0 8.15%');
      $(".nav-zemin").removeClass("d-none").addClass("d-block");
      $(".nav-zemin").css("height", $(".nav").height() + 2);
      $(".container").addClass("movedown40");
      $(".first-row").addClass("set-margin-top-58");
      // $('nav').removeClass('border-bottom');

      $("#mobile-search-language").removeClass("d-block").addClass("d-none");
      $("#mobilMenuButton").css("right", "6.5%");
    }
    if ($(window).width() <= 991 && $(this).scrollTop() <= 75) {
      $(".topMenuRight a")
        .removeClass("menu-logo-scrolled")
        .addClass("menu-logo-not-scrolled");
      $(".topMenuRight p")
        .removeClass("menu-dates-scrolled")
        .addClass("menu-dates-not-scrolled");
      // $('.topMenuRight p').removeClass('d-none').addClass('d-block');
      // $('.topMenuRight a').removeClass('d-block').addClass('d-none');
      $("nav")
        .removeClass("fixed-top3")
        .removeClass("fixed-top2")
        .addClass("sticky-top")
        .css("left", "0")
        .removeClass("ptnew-1")
        .addClass("ptnew-0");

      // $('nav').addClass('border-bottom');
      $(".nav-zemin").removeClass("d-block").addClass("d-none");
      $(".container").removeClass("movedown40");
      $(".first-row").removeClass("set-margin-top-58");

      $("#mobile-search-language").removeClass("d-none").addClass("d-block");
      $("#mobilMenuButton").css("right", "3%");
    }
  });
});
/*BU JavaScript kodu menu scrol hareketine göre logo değişimi için kodlandı*/

/*Bu JavaScript kodu arama alanına gelince dil logosunun kaybolması için kodlandı*/
$(".searchbar").hover(
  function () {
    $(".langField").addClass("d-none");
  },
  function () {
    $(".langField").removeClass("d-none");
  }
);
/*Bu JavaScript kodu arama alanına gelince dil logosunun kaybolması için kodlandı*/

/*Bu JavaScript kodu MOBİLDE arama alanına gelince dil logosunun kaybolması için kodlandı*/

$(".linkSearch").click(function () {
  if ($(".mobileSearchHideField").hasClass("d-none")) {
    $(".mobileSearchField").addClass("d-none");
    $(".mobileSearchHideField").removeClass("d-none");
  } else {
    $(".mobileSearchField").removeClass("d-none");
    $(".mobileSearchHideField").addClass("d-none");
  }
});
/*Bu JavaScript kodu MOBİLDE arama alanına gelince dil logosunun kaybolması için kodlandı*/

$(".input-group-append").click(function () {
  $(".btnSrch").click();
});

/*
 $(".cookie-close").click(function () {

     var cookieName = "PeraMuzesiCookie"
     localStorage.setItem(cookieName, true);
     $(".cookie-bar").removeClass("show");

  }); */

$(".btnSrch").click(function () {
  var text = "";
  if ($(window).width() > 768) {
    text = $(".txtSrch1").val().replace(/\./g, "-[dot]-");
  } else {
    text = $(".txtSrch2").val().replace(/\./g, "-[dot]-");
  }
  if (text.trim().length > 0) {
    window.location.replace("/arama/" + text);
  }
});

//Arama alanında enter tuşuna basılırsa arama yapması için;
$(function () {
  // Execute a function when the user releases a key on the keyboard
  if ($(window).width() > 768) {
    $(".txtSrch1").keyup(function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        $("#btnSrchDesktop").click();
      }
    });
  } else {
    $(".txtSrch2").bind("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        $("#btnSrchDesktop").click();
      }
    });

    /*
            $('#srchBoxMobile').on('touchend', ':text', function (event) {
                alert("OK2");
                // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    $("#btnSrchDesktop").click();
                }
            });
            */
  }

  /*

        */
});

//Mobil menu için
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
      },
      false
    );
  });
}

$("#mobilMenuButton").click(function (e) {
  $("#mobilMenuTopRow").toggle();
  if ($(window).scrollTop() > 100) {
    $("#uzunzemin").css("height", $(".navbar-collapse").height());
    $("#uzunzemin").toggle();
  }

  if ($(".mobileSearchHideField").hasClass("d-none")) {
    $(".mobileSearchHideField").addClass("d-sm-block");
    $(".mobileSearchHideField").removeClass("d-none");
  } else {
    $(".mobileSearchHideField").removeClass("d-sm-block");
    $(".mobileSearchHideField").addClass("d-none");
  }
});

var bc = 0;
$(".dropdown-toggle").click(function (e) {
  $(".navbar-nav .topImg").hide();

  var elm = $(this).find("img");

  if (bc != $(this).data("bc")) {
    elm.toggle();
    bc = $(this).data("bc");
  } else {
    bc = 0; /*$(".hamburger-box").show();*/
  }

  //if (bc == "1") $(".hamburger-box").hide();

  if ($(window).width() < 420) {
    if (!$(this).parent().hasClass("show")) {
      $(".navbar-nav >li").hide();
      $(this).parent().show();
      $("#mobilMenuButton").hide();
    } else {
      $(".navbar-nav >li").show();
      $("#mobilMenuButton").show();
    }
    // $(this).parent().addClass('mre15');
  }
});

$(".subImg").click(function (e) {
  $(".topImg").css("display", "none");
  $(".hamburger-box").show();
  bc = 0;
  if ($(window).width() < 420) {
    $(".navbar-nav >li").show();
    $(".hamburger-inner").show();
  }
});

//Mobil menu için son

if (typeof String.prototype.endsWith !== "function") {
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback /*, thisArg*/) {
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}

function addClass(object, className) {
  object.classList
    ? object.classList.add(className)
    : (object.className += " " + className);
}

function removeAllClassesButFirst(component, skipClass) {
  var classList = component.classList;
  var componentClass = classList.item(0);
  var toRemove = [];
  toArray(classList).forEach(function (className) {
    if (
      className != skipClass &&
      className != componentClass &&
      className != "component"
    ) {
      toRemove.push(className);
    }
  });
  toRemove.forEach(function (className) {
    classList.remove(className);
  });
}

function applyState(component, stateClass) {
  var componentClass = component.classList.item(0);
  component.className = componentClass;
  component.classList.add(stateClass);
}

function isCurrentState(component, state) {
  var classList = component.classList;
  var rv = false;
  toArray(classList).forEach(function (className) {
    if (className.endsWith(state)) {
      rv = true;
    }
  });
  return rv;
}

function whichTransitionEvent() {
  var t,
    el = document.createElement("fakeelement");

  var transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();

// Javascript for component pera-logo
// Longest animation for Transition 1 is this;rectangle2
// Transition 1: From state1 to state2

function transitionperalogostate1tostate2EndedHandler(event) {
  if (
    event.target.className.trim() == "rectangle2" ||
    event.target.className.startsWith("rectangle2 ")
  ) {
    var component = document.querySelector(".pera-logo");
    component.removeEventListener(
      transitionEvent,
      transitionperalogostate1tostate2EndedHandler
    );
    //console.log('transitionperalogostate1tostate2EndedHandler()');
    // mouseenter
  }
}

// Transition peralogo state1-to-state2 Event Listeners
// This transition is a timer on enter peralogo

function resetperalogo() {
  var component = document.querySelector(".pera-logo");
  if (!component) {
    return;
  }
  component.addEventListener(
    transitionEvent,
    transitionperalogostate1tostate2EndedHandler
  );

  removeAllClassesButFirst(component, "state1-to-state2");
  addClass(component, "state2");
  addClass(component, "state1-to-state2");
}

setTimeout(function () {
  resetperalogo();
}, 0);

// Javascript for component pera-logo
// Longest animation for Transition 2 is this;flower
// Transition 2: From state2 to state3

function mouseenterperalogo2Handler(event) {
  var component = document.querySelector(".pera-logo");
  if (isCurrentState(component, "state2")) {
    try {
      //  console.log('Listener for event: mouseenter triggered. State: state2');
      setTimeout(function () {
        var component = document.querySelector(".pera-logo");
        component.addEventListener(
          transitionEvent,
          transitionperalogostate2tostate3EndedHandler
        );
        removeAllClassesButFirst(component, "state2-to-state3");
        addClass(component, "state3");
        addClass(component, "state2-to-state3");
      }, 0);
    } catch (e) {
      console.log(e);
    }
  }
}

function transitionperalogostate2tostate3EndedHandler(event) {
  if (
    event.target.className.trim() == "flower" ||
    event.target.className.startsWith("flower ")
  ) {
    var component = document.querySelector(".pera-logo");
    component.removeEventListener(
      transitionEvent,
      transitionperalogostate2tostate3EndedHandler
    );
    //console.log('transitionperalogostate2tostate3EndedHandler()');
    // mouseleave
  }
}

// Transition peralogo state2-to-state3 Event Listeners
child = document.querySelector(".pera-logo .rectangle");
if (child) {
  child.style["pointer-events"] = "auto";
  child.addEventListener("mouseenter", mouseenterperalogo2Handler);
} else {
  console.log("Could not find element at: .pera-logo .rectangle");
}

// Javascript for component pera-logo
// Longest animation for Transition 3 is this;flower
// Transition 3: From state3 to state2

function mouseleaveperalogo3Handler(event) {
  var component = document.querySelector(".pera-logo");
  if (isCurrentState(component, "state3")) {
    try {
      //  console.log('Listener for event: mouseleave triggered. State: state3');
      setTimeout(function () {
        var component = document.querySelector(".pera-logo");
        component.addEventListener(
          transitionEvent,
          transitionperalogostate3tostate2EndedHandler
        );
        removeAllClassesButFirst(component, "state3-to-state2");
        addClass(component, "state2");
        addClass(component, "state3-to-state2");
      }, 0);
    } catch (e) {
      console.log(e);
    }
  }
}

function transitionperalogostate3tostate2EndedHandler(event) {
  if (
    event.target.className.trim() == "flower" ||
    event.target.className.startsWith("flower ")
  ) {
    var component = document.querySelector(".pera-logo");
    component.removeEventListener(
      transitionEvent,
      transitionperalogostate3tostate2EndedHandler
    );
    //console.log('transitionperalogostate3tostate2EndedHandler()');
    // mouseenter
  }
}

// Transition peralogo state3-to-state2 Event Listeners
child = document.querySelector(".pera-logo .rectangle");
if (child) {
  child.style["pointer-events"] = "auto";
  child.addEventListener("mouseleave", mouseleaveperalogo3Handler);
} else {
  console.log("Could not find element at: .pera-logo .rectangle");
}

// Javascript for component flower
// Longest animation for Transition 1 is this;group
// Transition 1: From state1 to state2

function transitionflowerstate1tostate2EndedHandler(event) {
  if (
    event.target.className.trim() == "group" ||
    event.target.className.startsWith("group ")
  ) {
    var component = document.querySelector(".pera-logo .flower");
    component.removeEventListener(
      transitionEvent,
      transitionflowerstate1tostate2EndedHandler
    );
    //console.log('transitionflowerstate1tostate2EndedHandler()');
  }
}

// Transition flower state1-to-state2 Event Listeners
// This transition is a timer on enter flower

function resetflower() {
  var component = document.querySelector(".pera-logo .flower");
  if (!component) {
    return;
  }
  component.addEventListener(
    transitionEvent,
    transitionflowerstate1tostate2EndedHandler
  );

  removeAllClassesButFirst(component, "state1-to-state2");
  addClass(component, "state2");
  addClass(component, "state1-to-state2");
}

setTimeout(function () {
  resetflower();
}, 0);
