//управление и отображение category__slider
const categorySlider = new Swiper(".category__slider", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 26,
  speed: 450,
  autoHeight: false,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".category__slider-btn--next",
    prevEl: ".category__slider-btn--prev",
  },
  breakpoints: {
    1200: {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 26,
    },

    980: {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
    },

    768: {
      autoplay: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: false,
      slidesPerView: 3,
      spaceBetween: 35,
      slidesPerGroup: 1,
    },

    586: {
      autoplay: false,
      loop: false,
      slidesPerGroup: 1,
      slidesPerView: 4,
      spaceBetween: 35,
      slidesPerColumn: 2,
    },

    496: {
      autoplay: false,
      loop: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 40,
      slidesPerColumn: 2,
    },

    0: {
      autoplay: false,
      loop: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      slidesPerColumn: 2,
      spaceBetween: 10,
    },
  },
});

//управление и отображение unreleased__slider
const unreleasedSlider = new Swiper(".unreleased__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  speed: 350,
  autoHeight: false,
  navigation: {
    nextEl: ".unreleased__slider-btn--next",
    prevEl: ".unreleased__slider-btn--prev",
  },
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 5,
    },

    980: {
      slidesPerView: 4,
    },

    768: {
      spaceBetween: 45,
      slidesPerView: 3,
    },
    586: {
      slidesPerView: 2,
      spaceBetween: 80,
    },

    480: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    280: {
      slidesPerView: 1,
    },
  },
});

// скрипты для воспроизведения ютуб роликов
function videoPlay(event) {
  event.target.playVideo();
}
let player1;
$(".authorstory__play1").on("click", function onYouTubeIframeAPIReady() {
  player1 = new YT.Player("player1", {
    height: "1005",
    width: "100%",
    videoId: "yxvb3To7wu0",
    events: {
      onReady: videoPlay,
    },
  });

  $(".authorstory__preview1").hide();
  $(".authorstory__play1").hide();
});

let player2;
$(".authorstory__play2").on("click", function onYouTubeIframeAPIReady() {
  player2 = new YT.Player("player2", {
    height: "200",
    width: "100%",
    videoId: "DfA2BKPOhCA",
    events: {
      onReady: videoPlay,
    },
  });

  $(".authorstory__preview2").hide();
  $(".authorstory__play2").hide();
});

$(".authorstory__play3").on("click", function onYouTubeIframeAPIReady() {
  player3 = new YT.Player("player3", {
    height: "200",
    width: "100%",
    videoId: "y_QVhswyKro",
    events: {
      onReady: videoPlay,
    },
  });
  $(".authorstory__preview3").hide();
  $(".authorstory__play3").hide();
});

$(".authorstory__play4").on("click", function onYouTubeIframeAPIReady() {
  player4 = new YT.Player("player4", {
    height: "200",
    width: "100%",
    videoId: "BjX3FHW-7EQ",
    events: {
      onReady: videoPlay,
    },
  });
  $(".authorstory__preview4").hide();
  $(".authorstory__play4").hide();
});

//скрипт для открытия/закрытия моб. меню
const mobileBtn = $(".header__menu");
const anyLink = $(".header__mobile-link");
function openClose() {
  $(".header__menu").toggleClass("header__menu--mobile");
  $(".header__mobile").toggleClass("left0");
  $(".header__menu-line").toggleClass("header__menu-line--mobile");
  $("body").toggleClass("lock");
}
mobileBtn.on("click", function () {
  openClose();
});
anyLink.on("click", function () {
  openClose();
});
