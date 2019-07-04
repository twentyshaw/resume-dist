"use strict";

!function () {
  var view = document.querySelector('#mySwiper');
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    init: function init(view) {
      this.view = view;
      this.initSwiper();
    },
    initSwiper: function initSwiper() {
      this.swiper = new Swiper(this.view, this.swiperOptions);
    }
  };
  controller.init(view);
}.call();