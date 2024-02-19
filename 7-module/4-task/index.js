export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.insertAdjacentHTML('afterbegin', `
    <div class="slider__thumb">
      <span class="slider__value"></span>
    </div>

    <div class="slider__progress"></div>

    <div class="slider__steps">
    </div>
    `);

    this.sliderSteps = this.elem.querySelector('.slider__steps');
    this.sliderValue = this.elem.querySelector('.slider__value');

    for(let i = 0; i < this.steps; i++) {
      const span = document.createElement('span');
      span.setAttribute('data-id', i);
      if(i === this.value) {
        span.classList.add('slider__step-active');
      }
      this.sliderSteps.append(span);
    }

    this.spanStepsArr = this.sliderSteps.querySelectorAll('span');
    this.sliderThumb = this.elem.querySelector('.slider__thumb');
    this.sliderProgress = this.elem.querySelector('.slider__progress');

    this.initDragAndDrop = this.initDragAndDrop.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);

    this.initStepSlider();
    this.initDragAndDrop();

  }

  initStepSlider() {
    this.elem.addEventListener('click', (e) => {

      const left = e.clientX - this.elem.getBoundingClientRect().left;
      const leftRelative = left / this.elem.offsetWidth;
      const approximateValue = leftRelative * (this.steps - 1);
      this.value = Math.round(approximateValue);
      const valuePercents = this.value / (this.steps - 1) * 100;
      
      this.sliderValue.innerHTML = this.value;

      const activeStep = this.elem.querySelector('.slider__step-active');

      if(activeStep.dataset.id !== this.value) {
        activeStep.classList.remove('slider__step-active');
        this.spanStepsArr[this.value].classList.add('slider__step-active');
      }

      this.sliderThumb.style.left = `${valuePercents}%`;
      this.sliderProgress.style.width = `${valuePercents}%`;

      const customEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true,
      });

      this.elem.dispatchEvent(customEvent);
    });
  }

  initDragAndDrop() {
    this.sliderThumb.ondragstart = () => false;

    this.sliderThumb.addEventListener('pointerdown', (e) => {
      e.preventDefault();

      this.shiftX = e.clientX - this.sliderThumb.getBoundingClientRect().left;

      document.addEventListener('pointermove', this.onPointerMove);

      document.onpointerup = (e) => {
        e.preventDefault();
        this.elem.classList.remove('slider_dragging');
        document.removeEventListener('pointermove', this.onPointerMove);
        this.sliderThumb.onpointerup = null;

        const customEvent = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true,
        });
    
        this.elem.dispatchEvent(customEvent);
      };
    });
  }

  onPointerMove(e) {
    e.preventDefault();

    this.elem.classList.add('slider_dragging');

    const left = e.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;

    if(leftRelative > 1) {
      leftRelative = 1;
    }
    if(leftRelative < 0) {
      leftRelative = 0;
    }
    const approximateValue = leftRelative * (this.steps - 1);
    this.value = Math.round(approximateValue);
    const valuePercents = approximateValue / (this.steps - 1) * 100;
    
    this.sliderValue.innerHTML = this.value;

    const activeStep = this.elem.querySelector('.slider__step-active');

    if(activeStep.dataset.id !== this.value) {
      activeStep.classList.remove('slider__step-active');
      this.spanStepsArr[this.value].classList.add('slider__step-active');
    }

    this.sliderThumb.style.left = `${valuePercents}%`;
    this.sliderProgress.style.width = `${valuePercents}%`;
  }


}
