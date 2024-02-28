// MENU

class App {
  init() {
    this.initMobileMenu();
    this.initSlider();
    this.afterVideoPlay();
    this.onButtonPlay();
    this.reviewsVideoPlay()
    this.onFaqBtnClick();
  }

  constructor() {
    this.iframe = document.querySelector("iframe");
    this.player = new Vimeo.Player(this.iframe);
    this.btnPlay = document.querySelector("#button-play");
    this.promoVideoContainer = document.querySelector(
      ".promo__video-container"
    );
    this.reviewsVideos = document.querySelectorAll(".review__video");
    this.faqBtns = document.querySelectorAll(".faq-btn");
  }

  initMobileMenu() {
    const navMain = document.querySelector(".main-nav");
    const navToggle = document.querySelector(".main-nav__toggle");
    const navButtonText = document.querySelector(".main-nav__open-btn-text");

    const initJS = () => {
      navMain.classList.remove("main-nav--nojs");
    };

    const closeOpen = () => {
      navToggle.addEventListener("click", function () {
        if (navMain.classList.contains("main-nav--closed")) {
          navMain.classList.remove("main-nav--closed");
          navMain.classList.add("main-nav--opened");
          navButtonText.textContent = "Close";
        } else {
          navMain.classList.add("main-nav--closed");
          navMain.classList.remove("main-nav--opened");
          navButtonText.textContent = "Меню";
        }
      });
    };

    const linksClick = () => {
      const mainNav = document.querySelector(".main-nav");
      const links = mainNav.querySelectorAll("a");

      const navLinckHandleClick = () => {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
      };

      links.forEach((link) => {
        link.addEventListener("click", navLinckHandleClick);
      });
    };

    initJS();
    closeOpen();
    linksClick();
  }

  initSlider() {
    $(function () {
      $(".slider").slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
            },
          },
        ],
      });

      $(".slider-about").slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "380px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              autoplay: true,
              autoplaySpeed: 3000,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 3000,
            },
          },
        ],
      });
    });
  }

  afterVideoPlay() {
    const videoWrapper = document.querySelector(".promo__video");

    const onPlay = () => {
      videoWrapper.style.borderRadius = "unset";
      this.btnPlay.style.display = "none";
    };

    this.player.on("play", onPlay);
  }

  onButtonPlay() {
    const playVideo = () => {
      this.player.play();
      this.btnPlay.style.display = "none";
      this.promoVideoContainer.classList.add("active");
    };

    this.btnPlay.addEventListener("click", playVideo);
  }

  reviewsVideoPlay() {
    const handlePlay = (wrapper) =>{
      const btnPlay = wrapper.querySelector('.btn-play')
      const iframe = wrapper.querySelector("iframe");
      const player = new Vimeo.Player(iframe);

      const play = () => {
        player.play()
        btnPlay.style.display = "none";
      }

      btnPlay.addEventListener('click', play)
    }

    this.reviewsVideos.forEach((rv)=>handlePlay(rv))
  }

  onFaqBtnClick() {
    this.faqBtns.forEach(function (element) {
      element.addEventListener("click", function (e) {
        const faqBlock = e.target.closest(".faq-block");
        faqBlock.classList.toggle("active");

        $(faqBlock).find(".faq-block__body").slideToggle();
      });
    });
  }
}

const app = new App();
document.addEventListener("DOMContentLoaded", app.init());
