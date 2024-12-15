document.querySelector('.burger-btn').addEventListener('click', function() {
  const menu = document.querySelector('.burger-menu');
  menu.classList.remove('is-closing'); // Убираем класс закрытия
  menu.classList.add('is-open'); // Добавляем класс открытия
});

document.querySelector('.burger-button-close').addEventListener('click', function() {
  const menu = document.querySelector('.burger-menu');
  menu.classList.remove('is-open'); // Убираем класс открытия
  menu.classList.add('is-closing'); // Добавляем класс закрытия
});


