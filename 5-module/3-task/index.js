function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  let slideIndex = 0;
  arrowLeft.style.display = 'none';
  let sliderTransform = 0;

  function checkDisplay() {
    if (slideIndex === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (slideIndex === 3) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

  arrowLeft.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    sliderTransform = sliderTransform + width;
    carouselInner.style.transform = `translateX(${sliderTransform}px)`;
    slideIndex--;
    checkDisplay();
  });

  arrowRight.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    sliderTransform = sliderTransform - width;
    carouselInner.style.transform = `translateX(${sliderTransform}px)`;
    slideIndex++;
    checkDisplay();
  });
}
