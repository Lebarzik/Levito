const slides = document.querySelector('.testimonial-slides');
const radioButtons = document.querySelectorAll('input[name="slide"]');

radioButtons.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    slides.style.transform = `translateX(-${index * 27}%)`; // Перемещает слайды по одному
  });
});
