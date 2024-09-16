document.addEventListener('DOMContentLoaded', function() {
    const opciones = document.querySelectorAll('.opcion-regalo');
    const popupImg = document.getElementById('popup-img');
    const popupContent = document.getElementById('popup-img-content');

    opciones.forEach(opcion => {
        opcion.addEventListener('mouseenter', function(e) {
            const imgSrc = this.getAttribute('data-img');
            popupContent.src = imgSrc;
            popupImg.style.display = 'block';
            popupImg.style.top = e.pageY + 'px';
            popupImg.style.left = e.pageX + 'px';
        });

        opcion.addEventListener('mouseleave', function() {
            popupImg.style.display = 'none';
        });
    });
});
