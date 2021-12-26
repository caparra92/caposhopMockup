//Variables

let loaderDiv = document.querySelector("#preloader-active");
let firstSliderNext = document.querySelector('#first-slider-next');
let firstSliderPrev = document.querySelector('#first-slider-prev');

window.onload = () => {
    fadeOutEffect(loaderDiv);
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
 
        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        loop: true,
     
        //Autoplay
        autoplay : true,
        goToFirst : true,
        goToFirstSpeed : 1000,
    
        items : 1,
        dots: false
     
    });
  });

  firstSliderNext.onclick = () => {
    $(".owl-carousel").trigger('next.owl.carousel');
  }

  firstSliderPrev.onclick = () => {
    $(".owl-carousel").trigger('prev.owl.carousel');
  }
  
function fadeOutEffect(fadeTarget) {
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.4;
            fadeTarget.style.visibility = "hidden"
        } else {
            clearInterval(fadeEffect);
        }
    }, 1000);
}

