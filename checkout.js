import {cart, removeFromCart} from './data/cart.js';
import {produse, getProduct} from './data/products.js';
import {formatCurrency} from './data/utils/money.js';
import {renderPaymentSummary} from './data/checkout/paymentSummary.js';

let cartSummmaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    cartSummmaryHTML += `
        <div class="cos-articol-container js-cart-item-container-${matchingProduct.id}">

            <div class="detalii-cos-articol">
                <img class="imagine-articol" src="${matchingProduct.image}">

                <div class="detalii-articol">
                    <div class="nume-articol">
                        ${matchingProduct.name}
                    </div>

                    <div class="pret-articol">
                        Pret: ${formatCurrency(matchingProduct.priceCents)} RON
                    </div>

                    <div class="cantitate-articol">
                        <span class="tabel-cantitate">
                            Cantitate: ${cartItem.quantity}
                        </span>
                        <span class="adauga-cantitate cart-link-adauga">
                            Adauga
                        </span>
                        <span class="sterge-cantitate cart-link-sterge js-delete-link" data-product-id="${matchingProduct.id}">
                            Sterge
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-cart-summary').innerHTML = cartSummmaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
       const productId = link.dataset.productId;

       removeFromCart(productId);

       const container =document.querySelector(`.js-cart-item-container-${productId}`);
       container.remove();
    });
});

renderPaymentSummary();
