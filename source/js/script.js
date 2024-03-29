class App {
  init() {
    this.initMobileMenu();
    this.onFaqBlockClick();
  }

  constructor() {
    this.faqBlocks = document.querySelectorAll(".faq-block");
  }

  initMobileMenu() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');
    const navButtonText = document.querySelector('.main-nav__open-btn-text');

    const initJS = () => {
      navMain.classList.remove('main-nav--nojs');
    }

    const closeOpen = () => {
      navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
          navButtonText.classList.remove('visually-hidden');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });
    }

    const linksClick = () => {
      const mainNav = document.querySelector('.main-nav');
      const links = mainNav.querySelectorAll('a');

      const navLinckHandleClick = () => {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }

      links.forEach(link => {
        link.addEventListener('click', navLinckHandleClick)
      })
    }

    initJS();
    closeOpen();
    linksClick();
  }

  onFaqBlockClick() {
    this.faqBlocks.forEach(function (element) {
      element.addEventListener("click", function () {
        const wasActive = element.classList.contains("active");
        element.classList.toggle("active");
        if (wasActive) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
}

const app = new App();
document.addEventListener("DOMContentLoaded", app.init());
