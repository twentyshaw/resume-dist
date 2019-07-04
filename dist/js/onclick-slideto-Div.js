"use strict";

!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    scrollToElements: function scrollToElements(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY;
      var targetTop = top - 100;
      var coords = {
        y: currentTop
      }; // Start at (0, 0)

      var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
      .to({
        y: targetTop
      }, 500) // Move to (300, 200) in 1 second.
      .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
      .onUpdate(function () {
        // Called after tween.js updates 'coords'.
        // Move 'box' to the position described by 'coords' with a CSS translation.
        window.scrollTo(0, coords.y); //当onUpdate里面的函数被调用时，coords.y已经不是原来的值了，它会被函数更新
      }).start();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll("nav > ul.navigation > li > a");

      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          //注意这里一定要改成箭头函数！不然下面的this指向错误
          x.preventDefault();
          var a = x.currentTarget;
          var href = a.getAttribute("href");
          var element = document.querySelector(href);

          _this.scrollToElements(element);
        };
      }
    }
  };
  controller.init(view);
}.call();