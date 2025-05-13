document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) {
        console.error('Error: .menu-toggle or .nav-links not found in the DOM');
        return;
    }

    menuToggle.addEventListener('click', () => {
        console.log('Hamburger clicked, toggling .open');
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Link clicked, closing menu');
            menuToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Animación para hero-content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 200);
    }

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
        aboutImage.style.animation = 'none';
        void aboutImage.offsetWidth;
        aboutImage.style.animation = 'bounce 1s ease';
    });

    // Animación de fade-in para herramientas
    const toolItems = document.querySelectorAll('.tool-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    toolItems.forEach(item => observer.observe(item));

    // Inicializar Particles.js para cada sección
    function initParticles(sectionId) {
        particlesJS(`${sectionId}-particles`, {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: '#00aaff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00aaff',
                    opacity: 0.4,
                    width: 1
                },
                move: { enable: true, speed: 2, direction: 'none', random: true }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 0.7 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    ['services', 'portfolio', 'about', 'tools', 'contact', 'verse'].forEach(section => {
        if (document.getElementById(`${section}-particles`)) {
            initParticles(section);
        }
    });
});