/* Переключение фонов */
const play_background = document.querySelector('.main-slider__play_1'),
  play_background2 = document.querySelector('.main-slider__play_2'),
  background_v = document.querySelector('.section-first__background-video'),
  background_img = document.querySelector('.section-first__background-video-2');

play_background.addEventListener('click', () => {
  background_v.classList.add('section-first__background-video_active');
  background_img.classList.remove('section-first__background-video-2_active');
});

play_background2.addEventListener('click', () => {
  background_img.classList.add('section-first__background-video-2_active');
  background_v.classList.remove('section-first__background-video_active');
});

/* Меню */
const burger = document.querySelector('.burger'),
  menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});

menu.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});

/*Слайдер-1*/
const swiper1 = document.querySelector('.swiper-container-1');
let swiperSlider2 = new Swiper(swiper1, {
  centeredSlides: true,
  allowTouchMove: false,
  effect: 'fade',
  navigation: {
    nextEl: '.main-slider__btn-right',
    prevEl: '.main-slider__btn-left',
  },
});

/*Слайдер-1 текст*/
const swiper_text = document.querySelector('.swiper-container-text');
let swiperSlider3 = new Swiper(swiper_text, {
  centeredSlides: true,
  allowTouchMove: false,
  effect: 'fade',
  navigation: {
    nextEl: '.main-slider__btn-right',
    prevEl: '.main-slider__btn-left',
  },
});

/*Слайдер-2*/
const swiper2 = document.querySelector('.slide-container');
let swiperSlider1 = new Swiper(swiper2, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 108,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

AOS.init();
