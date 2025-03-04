document.getElementById('kampanyeCarousel').addEventListener('slid.bs.carousel', function (event) {
    var activeItem = event.relatedTarget;
    var newBg = activeItem.getAttribute('data-bg');
    document.getElementById('kampanyeBody').style.backgroundImage = 'url(./image/kampanye/' + newBg + ')';
});