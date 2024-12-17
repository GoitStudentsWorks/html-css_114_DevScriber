document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.burger-btn');
  const closeButton = document.querySelector('.burger-button-close');
  const menu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');
  const menuLinks = document.querySelectorAll('.burger-menu-list-item');

  burgerButton.addEventListener('click', function () {
    menu.classList.remove('is-closing'); // Убираем класс закрытия
    menu.classList.add('is-open'); // Добавляем класс открытия
    overlay.classList.add('is-open'); // Показать overlay
  });

  closeButton.addEventListener('click', function () {
    menu.classList.remove('is-open'); // Убираем класс открытия
    menu.classList.add('is-closing'); // Добавляем класс закрытия
    overlay.classList.remove('is-open'); // Скрыть overlay
  });

  overlay.addEventListener('click', function () {
    menu.classList.remove('is-open'); // Убираем класс открытия
    menu.classList.add('is-closing'); // Добавляем класс закрытия
    overlay.classList.remove('is-open'); // Скрыть overlay
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open'); // Убираем класс открытия
      menu.classList.add('is-closing'); // Добавляем класс закрытия
      overlay.classList.remove('is-open'); // Скрыть overlay
    });
  });
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
