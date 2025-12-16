// Переключатель меню (гамбургер)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Закрывать меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Обработка формы (оставляем из Урока 7)
const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

if (form && statusMessage) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        if (name) {
            statusMessage.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
            statusMessage.style.color = '#27ae60';
            form.reset();
        }
    });
}