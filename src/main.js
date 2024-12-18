// Burger menu

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

// Reviews slider

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

// bascket


document.addEventListener('DOMContentLoaded', function () {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.querySelector('.total-price');
  const vegetableItems = document.querySelectorAll('.vegetables-item');
  const shoppingCart = document.querySelector('.shopping-cart');
  const continueShoppingButtons = document.querySelectorAll('.continue-shopping');
  let cartItems = [];
  let total = 0;

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    total = 0;

    cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'cart-item';
      listItem.innerHTML = `
        <div class="cart-item-details">
          <span class="item-name">${item.name}</span>
          <img src="${item.image}" alt="${item.name}" width="120" height="120">
        </div>
        <div class="quantity-controls">
          <button class="decrease-quantity" data-index="${index}">-</button>
          <input type="text" class="item-quantity" value="${item.quantity}" readonly>
          <button class="increase-quantity" data-index="${index}">+</button>
        </div>
        <span class="item-price">${(item.price * item.quantity).toFixed(2)} USD</span>
      `;
      cartItemsContainer.appendChild(listItem);

      listItem.querySelector('.decrease-quantity').addEventListener('click', () => {
        changeQuantity(index, -1);
      });

      listItem.querySelector('.increase-quantity').addEventListener('click', () => {
        changeQuantity(index, 1);
      });

      total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `${total.toFixed(2)} USD`;
  }

  function changeQuantity(index, delta) {
    cartItems[index].quantity += delta;
    if (cartItems[index].quantity === 0) {
      cartItems.splice(index, 1);
    }
    updateCart();
  }

  vegetableItems.forEach(vegetableItem => {
    vegetableItem.addEventListener('click', function () {
      const name = vegetableItem.querySelector('.vegetables-item-titel').textContent;
      const priceText = vegetableItem.querySelector('.vegetables-item-price').textContent;
      const price = parseFloat(priceText.replace(' USD / kg', ''));
      const image = vegetableItem.querySelector('img').src;

      const existingItem = cartItems.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1, image });
      }

      updateCart();
    });
  });

  continueShoppingButtons.forEach(button => {
    button.addEventListener('click', () => {
      shoppingCart.classList.toggle('hidden');
    });
  });
});
