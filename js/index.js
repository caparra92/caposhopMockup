//Variables

let loaderDiv = document.querySelector("#preloader-active");

window.onload = () => {
    fadeOutEffect(loaderDiv);
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
 
        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
     
        //Autoplay
        autoPlay : true,
        goToFirst : true,
        goToFirstSpeed : 1000,
    
        items : 1,
     
    });
  });

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
    }, 200);
}

