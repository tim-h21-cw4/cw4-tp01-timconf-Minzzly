import Carousel from './Carousel';

class Main {
  constructor() {
    this.init();
    this.ouvrirMenu();
  }

  init() {
    const components = document.querySelectorAll('[data-component="Carousel"]');

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Carousel(component);
    }

    const hamburger = document.querySelector('.menu-hamburger');

    hamburger.addEventListener('click', this.ouvrirMenu.bind(this));
  }

  ouvrirMenu(evt) {
    const menuMobile = document.querySelector('.mobileModal');

    evt.preventDefault();

    const cible = evt.currentTarget;
    if (cible.classList.contains('open')) {
      cible.classList.remove('open');
      menuMobile.classList.remove('open');
    } else {
      cible.classList.add('open');
      menuMobile.classList.add('open');
    }
  }
}

new Main();
