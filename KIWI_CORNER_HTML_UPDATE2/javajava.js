document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const checkoutBtn = document.querySelector('.checkout-btn');
  
    let cart = [];
  
    // Load cart items from local storage
    if(localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
      displayCartItems();
    }
  
    // Add to cart button event listener
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
  
        addToCart(name, price);
        displayCartItems();
      });
    });
  
    // Add item to cart
    function addToCart(name, price) {
      cart.push({name, price});
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    // Display cart items
    function displayCartItems() {
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = ${item.name} - $${item.price.toFixed(2)};
        cartItems.appendChild(li);
        total += item.price;
      });
      cartTotal.innerText = $${total.toFixed(2)};
    }
  
    // Checkout button event listener
    checkoutBtn.addEventListener('click', function() {
      alert('Checkout - Total: ' + cartTotal.innerText);
      // You can add further logic for checkout process here
    });
  });