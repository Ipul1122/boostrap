document.addEventListener('DOMContentLoaded', function () {
  fetch('component/caraousel.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('carouselContainer').innerHTML = data;
      // Apply the animation logic after the content is loaded
      const textElement = document.getElementById('animated-text');
      if (textElement) {
        const text = textElement.textContent;
        const letters = text.split('');
        textElement.innerHTML = '';
        letters.forEach((letter, index) => {
          const span = document.createElement('span');
          span.textContent = letter;
          span.style.animationDelay = `${index * 0.1}s`;
          textElement.appendChild(span);
        });
      }
    })
    .catch((error) => console.error('Error loading the carousel:', error));
});
