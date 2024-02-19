import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.elem.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
        </h3>
      </div>

      <div class="modal__body">
      </div>
    </div>
    `);

    this.modalBody = this.elem.querySelector('.modal__body');
    this.modalClose = this.elem.querySelector('.modal__close');

    this.initModalClose();
    this.keydownClose = this.keydownClose.bind(this);
  }

  keydownClose(e) {
    if (e.code === 'Escape') {
      this.close();
    }
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    document.addEventListener('keydown', this.keydownClose);
  }

  setTitle(title) {
    const modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(modalBodyInner) {
    this.modalBody.append(modalBodyInner);
  }

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');

    document.removeEventListener('keydown', this.keydownClose);
  }

  initModalClose() {
    this.modalClose.addEventListener('click', () => {
      this.close();
    });
  }
}
