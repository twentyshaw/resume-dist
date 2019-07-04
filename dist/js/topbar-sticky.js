"use strict";

!function () {
  var view = document.querySelector('#topNav');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var view = this.view; //这里的this就是上面initi函数中调用bindEvents传进来的this，也就是controller

      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          _this.active(); //因为箭头函数没有this，这里的this就是外面的this，即controller

        } else {
          _this.deactive();
        }
      });
    },
    active: function active() {
      this.view.classList.add("sticky");
    },
    deactive: function deactive() {
      this.view.classList.remove("sticky");
    }
  };
  controller.init(view);
}.call();