$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["El-Shammah Crew"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["mais conhecido como B.boy Iron"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


    
     // Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Ver menos.';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ver mais...';
});


//mascara telefone 
function formatarTelefone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length >= 1) {
        formattedValue = `(${value.slice(0, 2)}`;
    }
    if (value.length >= 3) {
        formattedValue += `) ${value.slice(2, 6)}`;
    }
    if (value.length >= 7) {
        formattedValue += `-${value.slice(6, 10)}`;
    }

    input.value = formattedValue;
}

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function() {
    formatarTelefone(this);
});
});