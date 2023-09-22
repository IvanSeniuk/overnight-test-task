"use strict";

//document.addEventListener("DOMContentLoaded", function () {
//	document.body.classList.add("ready");
//});
//Burger
var burgerBtn = document.querySelector(".burger__button");
var burgerMenu = document.querySelector(".header__menu");
var header = document.querySelector(".header");
burgerBtn.addEventListener("click", function () {
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active-burger");
    header.classList.remove("active-burger");
  } else {
    burgerBtn.classList.add("active");
    burgerMenu.classList.add("active-burger");
    header.classList.add("active-burger");
  }
}); // Header Scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (scrollPosition > 14) {
    header.classList.add("active-height");
  } else {
    header.classList.remove("active-height");
  }
}); 

$(".drop-arrow").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active").closest("a").next("ul").removeClass("active").slideUp(300);
  } else {
    $(this).addClass("active").closest("a").next("ul").addClass("active").slideDown(150);
  }
});
$(".header__menu ul li").mouseenter(function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    $(this).find(".drop-arrow").addClass("active").closest("a").next("ul").addClass("active").slideDown(150);
  }
});
$(".header__menu ul li").mouseleave(function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    $(this).find(".drop-arrow").removeClass("active").closest("a").next("ul").removeClass("active").slideUp(150);
  }
});


var titles = document.querySelectorAll(".section__title");
  titles.forEach(function (title) {
    var titleItemsTl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        toggleActions: "play none none none",
        start: "top+=120 bottom"
      }
    });
    titleItemsTl.to(title, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      stagger: 0.5
    }).to(title, {
      duration: 0.5,
      stagger: 0.25
    });
  });
 const educationItemsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".education__items",
      toggleActions: "play none none none"
    }
  });
  educationItemsTl.to(".item", {
	  scale:1,
    duration: 0.35,
    opacity: 1,
    stagger: 0.2
  }); 

const heroTitleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__content",
      toggleActions: "play none none none"
    }
  });
  heroTitleTl.to("h1", {
    y: 0,
    x: 0,
    duration: 0.75,
    opacity: 1,
    stagger: 0.2
  });

const heroMarkersTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__content",
      toggleActions: "play none none none"
    }
  });
  heroTitleTl.to(".markers", {
    y: 0,
    x: 0,
    duration: 0.95,
    opacity: 1,
    stagger: 0.2
  });


const heroBenefitsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__content",
      toggleActions: "play none none none"
    }
  });
  heroTitleTl.to(".benefits", {
    y: 0,
    x: 0,
    duration: .9,
    opacity: 1,
    stagger: 0.25
  });

const heroBottomTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__content",
      toggleActions: "play none none none"
    }
  });
  heroTitleTl.to(".hero__bottom", {
    y: 0,
    x: 0,
    duration: .85,
    opacity: 1,
    stagger: 0.35
  });

const bgElementsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      toggleActions: "play none none none"
    }
  });
  bgElementsTl.to(".hero__bg-elements div", {
	  x:0,
	  y:0,
	 scale:1,
    duration: 0.6,
    opacity: 1,
    stagger: 0.3
  }); 
