document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let sliderWidth = 0;
    let currentSlide = 0;

    // Función para ajustar el ancho del slider y sus slides
    function setSliderWidth() {
        const slides = document.querySelectorAll('.slide');
        sliderWidth = slides.length * 100; // Ancho total del slider
        slider.style.width = `${sliderWidth}%`; // Establece el ancho del slider
        slides.forEach(slide => {
            slide.style.width = `${100 / slides.length}%`; // Establece el ancho de cada slide
        });
    }

    // Función para mostrar el slide actual
    function showSlide() {
        const offset = -(currentSlide * 100);
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Función para cambiar al siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slider.children.length;
        showSlide();
    }

    // Función para cambiar al slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
        showSlide();
    }

    // Inicialización del slider
    setSliderWidth();
    showSlide();

    // Event listeners para los botones de navegación
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    document.getElementById('next-btn').addEventListener('click', nextSlide);
});
