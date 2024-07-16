const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

mobileMenu.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        navbar.classList.add('remove-active');
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500); // Duration of the slide-out animation
        mobileMenu.classList.remove('active');
    } else {
        navbar.style.display = 'flex';
        setTimeout(() => {
            navbar.classList.remove('remove-active');
            navbar.classList.add('active');
        }, 10); // Slight delay to ensure the display change takes effect
        mobileMenu.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') && !navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        navbar.classList.remove('active');
        navbar.classList.add('remove-active');
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500); // Duration of the slide-out animation
        mobileMenu.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            navbar.classList.add('remove-active');
            setTimeout(() => {
                navbar.style.display = 'none';
            }, 500); // Duration of the slide-out animation
            mobileMenu.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}


// const message = "Welkom bij Pizzeria Bella Italia"
// const speed = 65 // speed in milliseconds
// let textPosition = 0

// function typewriter() {
//   document.querySelector("#message").innerHTML = message.substring(0, textPosition) + '<span class="span1">\u25AE</span>'
  
//   if(textPosition++ !== message.length)
//     setTimeout(typewriter, speed)
// }

// window.onload = function(){
//   typewriter()
// }