// Ensure the script runs after it's loaded
const textElement = document.getElementById('animated-text');
if (textElement) {
  const text = textElement.textContent;
  const letters = text.split('');
  textElement.innerHTML = '';
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    textElement.appendChild(span);
  });
}
