import Carousel from './Carousel';

class Main {
  constructor() {
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component="Carousel"]');

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Carousel(component);
    }
  }
}

new Main();
