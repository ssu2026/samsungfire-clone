const swCard = new Swiper(".sw-card", {
  // 기본값
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //  반응형

  breakpoints: {
    // window.width >=0;
    0: {
      centeredSlides: true,
      spaceBetween: 20,
    },
    768: {
      // window.width >=768;
      centeredSlides: false,
      spaceBetween: 30,
    },
    1220: {
      // window.width >=1220 (>=:이상);
      centeredSlides: false,
      spaceBetween: 30,
    },
  },
});
