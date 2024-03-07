import {cart} from '../cart.js';
import {getProduct} from '../products.js';
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary() {

    let productPriceCents = 0;


    cart.forEach((cartItem) => {
       const product = getProduct(cartItem.productId);
       productPriceCents += product.priceCents * cartItem.quantity
    });

    const totalBeforeTaxCents =  productPriceCents - (1.9 * productPriceCents) / 10;
    const taxCents = (productPriceCents * 1.9) / 10;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
        <div class="continutul-platii-titlu">
            Detalii Comanda
        </div>

        <div class="continutul-platii-detaliat">
            <div>Articole (3):</div>
            <div class="pret-total">${formatCurrency(productPriceCents)} RON</div>
        </div>

        <div class="continutul-platii-detaliat subtotal-detalii">
            <div>Total fara TVA:</div>
            <div class="pret-total">${formatCurrency(totalBeforeTaxCents)} RON</div>
        </div>

        <div class="continutul-platii-detaliat">
            <div>TVA (19%):</div>
            <div class="pret-total">${formatCurrency(taxCents)} RON</div>
        </div>

        <div class="continutul-platii-detaliat total-detalii">
            <div>Total comanda:</div>
            <div class="pret-total">${formatCurrency(totalCents)} RON</div>
        </div>

        <button class="continutul-platii-button button-link">
            <a href="sistem-plata.html"> Continua catre Plata </a>
        </button>

    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}