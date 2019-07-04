"use strict";

!function () {
  var specialTags = document.querySelectorAll("[data-x]");

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("lower");
  }

  setTimeout(scroll, 2000);
  window.addEventListener('scroll', function () {
    scroll();
  });

  function scroll() {
    var specialTags = document.querySelectorAll("[data-x]");
    var minIndex = 0;

    for (var i = 0; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i;
      }
    }

    specialTags[minIndex].classList.remove("lower");
    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '" ]');
    var li = a.parentNode;
    var brothers = li.parentNode.children;

    for (var i = 0; i < brothers.length; i++) {
      brothers[i].classList.remove("highlight");
    }

    li.classList.add("highlight");
  }
}.call();