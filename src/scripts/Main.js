import Carousel from './Carousel';

class Main {
  constructor() {
    this.init();
    this.ouvrirMenu();

    this.hamburger;
    this.menuMobile;
  }

  init() {
    this.hamburger = document.querySelector('.menu-hamburger');
    this.menuMobile = document.querySelector('.mobileModal');

    const components = document.querySelectorAll('[data-component="Carousel"]');

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Carousel(component);
    }

    this.hamburger.addEventListener('click', this.ouvrirMenu.bind(this));
  }

  ouvrirMenu(evt) {
    if (this.hamburger.classList.contains('open')) {
      this.hamburger.classList.remove('open');
      this.menuMobile.classList.remove('open');
    } else {
      this.hamburger.classList.add('open');
      this.menuMobile.classList.add('open');
    }
  }
}

new Main();
