function addToCart(productName, productImage, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    // Create a unique ID for the cart item
    const itemId = 'item-' + new Date().getTime();

    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.classList.add('cart-item');
    listItem.id = itemId;

    // Create an image element
    const img = document.createElement('img');
    img.src = productImage;
    img.alt = productName;
    img.style.width = '50px';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = productName;

    // Create a span for the product price
    const priceSpan = document.createElement('span');
    priceSpan.textContent = '₹' + productPrice;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn', 'btn-danger', 'ms-2');
    removeBtn.onclick = function() {
        removeFromCart(itemId);
    };

    // Append image, name, price, and remove button to the list item
    listItem.appendChild(img);
    listItem.appendChild(nameSpan);
    listItem.appendChild(priceSpan);
    listItem.appendChild(removeBtn);

    // Append the new item to the cart
    cartItems.appendChild(listItem);

    // Update the cart count
    updateCartCount();
}

function removeFromCart(itemId) {
    const item = document.getElementById(itemId);
    item.remove();
    updateCartCount();
}

function updateCartCount() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const itemCount = cartItems.getElementsByClassName('cart-item').length;
    cartCount.textContent = itemCount;
}
