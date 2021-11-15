const headingTeam = document.querySelector(".header__team");
const targetMember = document.querySelector(".member");
const targetSkill = document.querySelector(".tien");
const targetProject = document.querySelector(".project");
const targetGoodbye = document.querySelector(".lerp-wrap");

var typewriter = new Typewriter(headingTeam, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Hello,We're team 10")
  .pauseFor(300)
  .deleteChars(30)
  .typeString(`Welcome to Our <span style="color: #ff585f;"> Project </span>`)
  .pauseFor(1000)
  .start();
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 20,
  delay: 0,
  duration: 600,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  speed: 700,
  duration: 5000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// .querySelector("body")

document.querySelector(".viewmore").addEventListener("click", () => {
  scroll.scrollTo(targetMember);
});
// document.querySelector(".item-work").addEventListener("click", () => {
//   scroll.scrollTo(targetSkill);
// });
document.querySelector(".item-skill").addEventListener("click", () => {
  scroll.scrollTo(targetSkill);
});
document.querySelector(".item-project").addEventListener("click", () => {
  scroll.scrollTo(targetProject);
});
document.querySelector(".item-contact").addEventListener("click", () => {
  scroll.scrollTo(targetGoodbye);
});
document.querySelector(".item-about").addEventListener("click", () => {
  scroll.scrollTo(targetMember);
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
  repeat: true,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  },
});
