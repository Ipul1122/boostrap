document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  document.querySelector('.prev').addEventListener('click', function () {
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    slides[currentSlide].classList.add('active');
  });
});
