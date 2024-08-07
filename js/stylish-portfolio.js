(function ($) {
  ("use strict"); // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // testimonial-slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  /* ########################################### hero parallax ############################################## */
  window.onload = function () {
    var parallaxBox = document.getElementById("parallax");
    var /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
      c2left = document.getElementById("l2").offsetLeft,
      c2top = document.getElementById("l2").offsetTop,
      c3left = document.getElementById("l3").offsetLeft,
      c3top = document.getElementById("l3").offsetTop,
      c4left = document.getElementById("l4").offsetLeft,
      c4top = document.getElementById("l4").offsetTop,
      c5left = document.getElementById("l5").offsetLeft,
      c5top = document.getElementById("l5").offsetTop,
      c6left = document.getElementById("l6").offsetLeft,
      c6top = document.getElementById("l6").offsetTop,
      c7left = document.getElementById("l7").offsetLeft,
      c7top = document.getElementById("l7").offsetTop,
      c8left = document.getElementById("l8").offsetLeft,
      c8top = document.getElementById("l8").offsetTop,
      c9left = document.getElementById("l9").offsetLeft,
      c9top = document.getElementById("l9").offsetTop;

    parallaxBox.onmousemove = function (event) {
      event = event || window.event;
      var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;

      /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
      mouseParallax("l2", c2left, c2top, x, y, 25);
      mouseParallax("l3", c3left, c3top, x, y, 20);
      mouseParallax("l4", c4left, c4top, x, y, 35);
      mouseParallax("l5", c5left, c5top, x, y, 30);
      mouseParallax("l6", c6left, c6top, x, y, 45);
      mouseParallax("l7", c7left, c7top, x, y, 30);
      mouseParallax("l8", c8left, c8top, x, y, 25);
      mouseParallax("l9", c9left, c9top, x, y, 40);
    };
  };

  function mouseParallax(id, left, top, mouseX, mouseY, speed) {
    var obj = document.getElementById(id);
    var parentObj = obj.parentNode,
      containerWidth = parseInt(parentObj.offsetWidth),
      containerHeight = parseInt(parentObj.offsetHeight);
    obj.style.left =
      left -
      ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
        speed +
      "px";
    obj.style.top =
      top -
      ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
        speed +
      "px";
  }
  /* ########################################### /hero parallax ############################################## */

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 1400) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
})(jQuery); // End of use strict

window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("div[id]").forEach((div) => {
    observer.observe(div);
  });
});

/*
$(".links li a").click(function () {
  $(".links li a").removeClass("active");
  $(this).toggleClass("active");
}); */
