"use strict";

!function () {
  var liTags = document.getElementsByClassName("sub_hold");

  for (var i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      var list = x.currentTarget;
      list.classList.add("active");
    };

    liTags[i].onmouseleave = function (x) {
      var list = x.currentTarget;
      list.classList.remove("active");
    };
  }
}.call();