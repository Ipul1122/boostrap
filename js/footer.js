document.addEventListener('DOMContentLoaded', function () {
    fetch('component/footer.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('footerContainer').innerHTML = data;
      })
      .catch((error) => console.error('Error loading the footer:', error));
  });   