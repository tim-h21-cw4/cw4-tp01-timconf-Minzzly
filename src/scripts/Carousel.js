import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(component) {
    this.component = component;
    this.defaultConfig = {
      spaceBetween: 20,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    };
    this.init();
  }

  init() {
    let config = this.defaultConfig;
    if (this.component.dataset.carousel == 'split') {
      config = {
        ...this.defaultConfig,
        ...{
          breakpoints: {
            769: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    new Swiper(this.component, config);
  }
}
