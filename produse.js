import {cart, addToCart} from './data/cart.js';
import {produse} from './data/products.js';
import {formatCurrency} from './data/utils/money.js';

let produseHTML = '';

produse.forEach((cards) => {
    produseHTML += `
        <div class="card">
            <img src="${cards.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cards.name}</h5>
                <p class="card-text">Pret: ${formatCurrency(cards.priceCents)} RON</p>
                <button class="add-to-cart-button btn-primary js-add-to-cart" data-product-id="${cards.id}">Adauga in cos</button>
            </div>
        </div>
    `;
});

document.querySelector('.js-product-card').innerHTML = produseHTML;

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        addToCart(productId);

        updateCartQuantity();
    });
});
