let menuToggle = document.querySelector('.menuToggle');

let navigation = document.querySelector('.navigation');

menuToggle.onclick = function(){
    navigation.classList.toggle('active')
}

// --------------loader

setTimeout(function () {

    $('.loader').fadeToggle();

}, 6500);



















