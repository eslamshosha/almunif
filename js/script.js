let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-dispaly").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-dispaly").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
      }
    });
    $(".overlay-box").click(function () {
      $(".cats-dispaly").slideToggle(400);
    });
    $(".top-header .add-chevron").addClass("chevron-down");
  }
  if ($(window).width() >= 991) {
    //fixed nav
    $stickyNav = $(".top-header");
    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $stickyNav.addClass("fixed-nav", 500);
      } else {
        $stickyNav.removeClass("fixed-nav", 500);
      }
      if (scroll == 0) {
        $stickyNav.removeClass("fixed-nav", 500);
      }
    });
    var $stickyheader = $("header");
    lastScroll = 0;
    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
        $stickyheader.addClass("fixed-header", { duration: 1000 });
      } else {
        $stickyheader.removeClass("fixed-header", { duration: 500 });
      }
      lastScroll = scroll;
      if (scroll == 0) {
        $stickyheader.removeClass("fixed-header", { duration: 500 });
      }
    });
  }
  if ($(window).width() <= 991) {
    $stickyNav = $(".fixed-side");
    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        $stickyNav.addClass("fixed-sm-side", 500);
      } else {
        $stickyNav.removeClass("fixed-sm-side", 500);
      }
      if (scroll == 0) {
        $stickyNav.removeClass("fixed-sm-side", 500);
      }
    });
    var $stickyaside = $("aside");
    lastScroll = 0;
    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
        $stickyaside.addClass("fixed-header", { duration: 1000 });
      } else {
        $stickyaside.removeClass("fixed-header", { duration: 500 });
      }
      lastScroll = scroll;
      if (scroll == 0) {
        $stickyaside.removeClass("fixed-header", { duration: 500 });
      }
    });
  }
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  //file input
  $(".custom-file-upload .upload-change").change(function () {
    let file_val;
    if ($(this).val() == "") {
      file_val = $(".file-txt").data("title");
    } else {
      file_val = $(this).prop("files")[0].name;
    }
    $(".file-txt").html(file_val);
  });
});
