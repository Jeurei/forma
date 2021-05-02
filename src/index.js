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
        .children(".dropdown--inner")
        .text($(this).text());
    });

    $("main .dropdown > .list > .item").on("click", function () {
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

  const onNoveltyClickHandler = (evt) => {
    document
      .querySelectorAll(".novelty__bottom-img")
      .forEach(
        (el) =>
          el.classList.contains("novelty__bottom-img--active") &&
          el.classList.remove("novelty__bottom-img--active")
      );
    evt.target.parentNode.classList.add("novelty__bottom-img--active");
  };

  const onFilterLeftClickHandler = (evt) => {
    document
      .querySelectorAll(".button--filter")
      .forEach(
        (el) => el.classList.contains("active") && el.classList.remove("active")
      );
    evt.target.classList.add("active");
  };

  const onPaginationClickHandler = (evt) => {
    document
      .querySelectorAll(".catalog__pagination-item")
      .forEach(
        (el) => el.classList.contains("active") && el.classList.remove("active")
      );
    evt.currentTarget.classList.add("active");
  };

  document
    .querySelectorAll(".novelty__bottom-img")
    .forEach((el) => el.addEventListener("click", onNoveltyClickHandler));

  document
    .querySelectorAll(".button--filter")
    .forEach((el) => el.addEventListener("click", onFilterLeftClickHandler));

  document
    .querySelectorAll(".catalog__pagination-item")
    .forEach((el) => el.addEventListener("click", onPaginationClickHandler));

  const novelty = document.querySelector(".novelty");
  let currStep = 0;

  const onNovNextClickHandler = () => {
    if (currStep === 4) {
      currStep = 0;
      novelty.classList.remove("novelty--4");
      return;
    }

    currStep && novelty.classList.remove(`novelty--${currStep}`);
    currStep++;
    novelty.classList.add(`novelty--${currStep}`);
  };

  const onNovPrevClickHandler = () => {
    if (currStep === 0) {
      currStep = 4;
      novelty.classList.contains("novelty--1") &&
        novelty.classList.add("novelty--1");
      novelty.classList.add("novelty--4");
      return;
    }

    if (currStep == 1) {
      currStep -= 1;
      novelty.classList.remove("novelty--1");
      return;
    }
    currStep && novelty.classList.remove(`novelty--${currStep}`);
    currStep -= 1;
    novelty.classList.add(`novelty--${currStep}`);
  };

  novelty
    .querySelector("#next")
    .addEventListener("click", onNovNextClickHandler);

  novelty
    .querySelector("#prev")
    .addEventListener("click", onNovPrevClickHandler);
});
