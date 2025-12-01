var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    'use strict'

const tabItem = document.querySelectorAll('.allFur__cat--header');
const tabContent = document.querySelectorAll('.allFur__ch--active');


tabItem.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabItem.forEach(function(item){
        item.classList.remove('allFur__ch--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('allFur__ch--active')
    });

    tabTarget.classList.add('allFur__ch--active');
}