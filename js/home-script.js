
// for button
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");



// for click
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};



// for scroll
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};



// for home
var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





