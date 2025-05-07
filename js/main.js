document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Carrusel para la sección Héroe
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);

    // Efecto de volteo en servicios para dispositivos táctiles
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.toggle('flipped');
        });
    });

    // Efecto de rebote en la imagen de "Acerca de mí" para dispositivos táctiles
    const aboutImage = document.querySelector('.about-image img');
    aboutImage.addEventListener('touchstart', () => {
        aboutImage.style.animation = 'none'; // Reinicia la animación
        void aboutImage.offsetWidth; // Forzar el reinicio
        aboutImage.style.animation = 'bounce 1s ease'; // Reaplicar la animación
    });
});