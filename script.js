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
function showAddress() {
    document.querySelector('.contactus-container__right__Address').style.display = 'block';
    document.querySelector('.contactus-container__right__map').style.display = 'none';
}

function showMap() {
    document.querySelector('.contactus-container__right__Address').style.display = 'none';
    document.querySelector('.contactus-container__right__map').style.display = 'block';
}


// For Toggling between Detailed Benefits
const showBenefitsBtn = document.querySelectorAll('.package-card__button');
console.log(showBenefitsBtn);
const detailedBenefits = document.querySelectorAll('.package-card__benefits');

const closeBtn = document.querySelectorAll('.package-card__benefits__close');

for (let i = 0; i < 3; i++) {
    showBenefitsBtn[i].addEventListener('click', function () {
        detailedBenefits[i].style.display = 'flex';
    }
    )
    closeBtn[i].addEventListener('click', function () {
        detailedBenefits[i].style.display = 'none';
    }
    )
}






