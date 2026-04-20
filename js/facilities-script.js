
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



// for facilities
var swiper = new Swiper(".facilities-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});


