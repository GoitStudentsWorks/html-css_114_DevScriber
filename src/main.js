document.querySelector('.burger-btn').addEventListener('click', function () {
  const menu = document.querySelector('.burger-menu');
  menu.classList.remove('is-closing'); // Убираем класс закрытия
  menu.classList.add('is-open'); // Добавляем класс открытия
});

document
  .querySelector('.burger-button-close')
  .addEventListener('click', function () {
    const menu = document.querySelector('.burger-menu');
    menu.classList.remove('is-open'); // Убираем класс открытия
    menu.classList.add('is-closing'); // Добавляем класс закрытия
  });

var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      enabled: false,
      slidesPerView: 3,
    },
  },
});
