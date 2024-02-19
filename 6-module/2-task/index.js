import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.elem.classList.add('card');

    const innerCard = `
    <div class="card__top">
      <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
      <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    `;

    this.elem.insertAdjacentHTML('afterbegin', innerCard);

    const button = this.elem.querySelector('.card__button');

    const addingProductEvent = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    button.addEventListener('click', () => {
      this.elem.dispatchEvent(addingProductEvent);
    });
  }
}
