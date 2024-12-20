

// Reviews slider

var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  // autoplay: true,
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



document.addEventListener('DOMContentLoaded', function () {
  // Бургер-меню
  const burgerButton = document.querySelector('.burger-btn');
  const closeButton = document.querySelector('.burger-button-close');
  const menu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');
  const menuLinks = document.querySelectorAll('.burger-menu-list-item');

  function openMenu() {
    menu.classList.remove('is-closing');
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    menu.classList.add('is-closing'); 
  }

  burgerButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Корзина и остальные функции
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.querySelector('.total-price');
  const vegetableItems = document.querySelectorAll('.vegetables-item');
  const shoppingCart = document.querySelector('.shopping-cart');
  const continueShoppingButtons = document.querySelectorAll('.continue-shopping');
  const checkoutButton = document.querySelector('.checkout-button');
  const headerButton = document.querySelector('.header-btn');
  const burgerSubmitButton = document.querySelector('.burger-submit-button');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const yourOrderSection = document.querySelector('.your_order');
  const vegetablesSection = document.getElementById('vegetables');
  let cartItems = [];
  let total = 0;

  shoppingCart.classList.add('hidden');

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    total = 0;

    cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'cart-item';
      listItem.innerHTML = `
        <div class="cart-item-details">
          <span class="cart-item-name">${item.name}</span>
          <img src="${item.image}" alt="${item.name}" width="50" height="50">
        </div>
        <div class="cart-quantity-controls">
          <button class="cart-decrease-quantity" data-index="${index}">-</button>
          <input type="text" class="cart-item-quantity" value="${item.quantity}" readonly>
          <button class="cart-increase-quantity" data-index="${index}">+</button>
        </div>
        <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} USD</span>
      `;
      cartItemsContainer.appendChild(listItem);

      listItem.querySelector('.cart-decrease-quantity').addEventListener('click', () => {
        changeQuantity(index, -1);
      });

      listItem.querySelector('.cart-increase-quantity').addEventListener('click', () => {
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
      shoppingCart.classList.remove('visible');
      closeMenu();
      setTimeout(() => {
        shoppingCart.classList.add('hidden');
        header.style.display = 'block';
        main.style.display = 'block';
        footer.style.display = 'block';
        if (vegetablesSection) {
          vegetablesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    });
  });

  function toggleCartVisibility() {
    if (shoppingCart.classList.contains('hidden')) {
      shoppingCart.classList.remove('hidden');
      setTimeout(() => {
        shoppingCart.classList.add('visible');
      }, 10);
    } else {
      shoppingCart.classList.remove('visible');
      setTimeout(() => {
        shoppingCart.classList.add('hidden');
      }, 500);
    }

    const display = shoppingCart.classList.contains('hidden') ? 'block' : 'none';
    header.style.display = display;
    main.style.display = display;
    footer.style.display = display;
  }

  headerButton.addEventListener('click', toggleCartVisibility);
  burgerSubmitButton.addEventListener('click', () => {
    toggleCartVisibility();
    closeMenu();
  });

  // Обработчик для кнопки checkout
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      shoppingCart.classList.remove('visible');
      closeMenu();
      setTimeout(() => {
        shoppingCart.classList.add('hidden');
        header.style.display = 'block';
        main.style.display = 'block';
        footer.style.display = 'block';
        if (yourOrderSection) {
          yourOrderSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    });
  }
});
