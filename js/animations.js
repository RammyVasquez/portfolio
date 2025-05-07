document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); // Retraso escalonado
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hero-content, .service-item, .portfolio-item, .about-content, .contact-form, .verse-content').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });
});