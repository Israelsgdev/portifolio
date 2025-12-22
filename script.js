console.log("Portfólio carregado com sucesso!");


// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Check on load and scroll
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Form submission (demo)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela mensagem! Em breve entrarei em contato. (Esta é uma demonstração - em um site real, esta função enviaria um email)');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

(function () {
    // Data inicial: Junho de 2020 (mês começa em 0)
    const inicio = new Date(2020, 9, 23);
    const hoje = new Date();

    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();

    // Ajuste se o mês atual for menor que o mês inicial
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Texto final
    let texto = '';

    if (anos > 0) {
        texto += `${anos} ano${anos > 1 ? 's' : ''}`;
    }

    if (meses > 0) {
        texto += `${anos > 0 ? ' e ' : ''}${meses} mes${meses > 1 ? 'es' : ''}`;
    }

    document.getElementById('tempo-experiencia').textContent = texto;
})();

