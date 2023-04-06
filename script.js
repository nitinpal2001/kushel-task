const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const container = document.querySelector('.container');

mobileNavBtn.addEventListener('click', () => {
    container.classList.toggle('activeNav');
}
);

// For Accordian FAQ section

const accordian = document.querySelectorAll('.faq-container__box');
const faqButton = document.querySelectorAll('.faq-container__box__heading__button');

for (let i = 0; i < accordian.length; i++) {
    faqButton[i].addEventListener('click', function () {
        accordian[i].classList.toggle('activeFaq');
    });
}

// For Toggling between Address and Map

const addressButton = document.querySelector('.address-btn');
const mapButton = document.querySelectorAll('.map-btn');
const addressContainer = document.querySelector('.contactus-container__right__details');
const mapContainer = document.querySelector('.contactus-container__right__map');

addressButton.addEventListener('click', () => {
    addressContainer.classList.add('active');
    mapContainer.classList.remove('active');
});






