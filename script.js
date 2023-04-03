const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const container = document.querySelector('.container');

mobileNavBtn.addEventListener('click', () => {
    container.classList.toggle('active');
}
);

