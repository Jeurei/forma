import Swiper from "swiper";
import SwiperCore, { Navigation } from "swiper/core";
import "./style.css";
import "swiper/swiper-bundle.css";
import $ from "jquery";

SwiperCore.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  new Mmenu("#menu", {
    navbar: {
      title: "Меню",
    },
    extensions: ["pagedim-black", "theme-dark"],
    searchfield: {
      placeholder: "Поиск по каталогу",
    },
    navbars: [
      {
        position: "top",
        content: ["searchfield"],
      },
      {
        position: "top",
        type: "tabs",
        content: [
          "<a href='#panel-menu'>En</a>",
          "<a href='#panel-language'>Ru</a>",
        ],
      },
      {
        position: "bottom",
        content: [
          "<a class='mmenu__soc-link mmenu__soc-link--vk' href='#/'></a>",
          "<a class='mmenu__soc-link mmenu__soc-link--yt' href='#/'></a>",
          "<a class='mmenu__soc-link mmenu__soc-link--inst' href='#/'></a>",
          "<a class='mmenu__soc-link mmenu__soc-link--fb' href='#/'></a>",
        ],
      },
    ],
  });
  new Mmenu("#filter", {
    navbar: {
      title: "Меню сортировки",
    },
    slidingSubmenus: false,
    extensions: [
      "pagedim-black",
      "theme-dark",
      "position-back",
      "position-right",
    ],
  });
  const swiper = new Swiper("#sort", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(function () {
    $(".dropdown > .caption").on("click", function () {
      $(this).parent().toggleClass("open");
    });

    $(".dropdown > .list > .item").on("click", function () {
      $(".dropdown > .list > .item").removeClass("selected");
      $(this)
        .addClass("selected")
        .parent()
        .parent()
        .removeClass("open")
        .children(".caption")
        .text($(this).text());
    });

    $(document).on("keyup", function (evt) {
      if ((evt.keyCode || evt.which) === 27) {
        $(".dropdown").removeClass("open");
      }
    });

    $(document).on("click", function (evt) {
      if ($(evt.target).closest(".dropdown > .caption").length === 0) {
        $(".dropdown").removeClass("open");
      }
    });
  });
});
