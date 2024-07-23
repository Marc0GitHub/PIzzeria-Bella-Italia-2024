

const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

mobileMenu.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        navbar.classList.add('remove-active');
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 100); // Duration of the slide-out animation
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

// Modal functionality
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImage');
var captionText = document.getElementById('caption');

// Get all images in the gallery
var images = document.querySelectorAll('.scrollable-images img');
images.forEach(function (img) {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.querySelector('.close');
span.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal when the user clicks outside the modal content
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Close the modal when the escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modal.style.display = 'none';
    }
});

// const message = "Welkom bij Pizzeria Bella Italia, gelegen in het pittoreske dorp Eizeringen in de gemeente Lennik. Opgericht in 2016 door de ondernemende geest van Aldo Santoro en Gabriella Parillo, is Bella Italia geboren uit de passie voor de authentieke Napolitaanse keuken. Hier kunt u genieten van een ruime keuze aan pizza's en pasta's, bereid volgens de traditionele recepten, waardoor u de heerlijke en onweerstaanbare smaken van Campanië in België kunt proeven. Kom bij ons langs voor een unieke culinaire ervaring die u het gevoel geeft thuis te zijn."
// const speed = 30 // speed in milliseconds
// let textPosition = 0

// function typewriter() {
//   document.querySelector("#message").innerHTML = message.substring(0, textPosition) + '<span class="span1">\u25AE</span>'
  
//   if(textPosition++ !== message.length)
//     setTimeout(typewriter, speed)
// }

// window.onload = function(){
//   typewriter()
// }


const pizzas = `
<ul class="ul-pizzas">
<li><b>Pizza all'Aglio</b> - 9,00 - mozzarella, look, oregano</li>
<li><b>Margherita</b> - 9,00 - tomaat, mozzarella</li>
<li><b>Napoletana</b> - 11,00 - tomaat, mozzarella, oregano, look</li>
<li><b>Prosciutto Cotto</b> - 11,00 - tomaat, mozzarella, gekookte hesp</li>
<li><b>Funghi</b> - 11,00 - tomaat, mozzarella, champignons</li>
<li><b>Diavola</b> - 12,00 - tomaat, mozzarella, pikante salami</li>
<li><b>Rimini</b> - 12,00 - tomaat, mozzarella, hesp, champignons</li>
<li><b>Calabrese</b> - 12,00 - tomaat, mozzarella, pikante salami, ansjovis, kappertjes</li>
<li><b>Hawaii</b> - 12,00 - tomaat, mozzarella, hesp, ananas</li>
<li><b>Bolognese</b> - 13,00 - mozzarella, bolognesesaus</li>
<li><b>Siciliana</b> - 13,00 - tomaat, mozzarella, kappertjes, ansjovis, olijven</li>
<li><b>Tonno</b> - 13,00 - tomaat, mozzarella, tonijn, ajuin</li>
<li><b>Vegetariana</b> - 13,00 - tomaat, mozzarella, champignons, gegrilde groenten, oregano, olijven</li>
<li><b>Parmigiana</b> - 12,00 - tomaat, mozzarella, aubergine, parmezaankaas</li>
<li><b>Calzone</b> - 13,00 - toegeplooide pizza met tomaat, mozzarella, hesp, champignon</li>
<li><b>San Remo</b> - 13,00 - tomaat, mozzarella, salami, hesp, champignons</li>
<li><b>Quattro Formaggi</b> - 13,00 - tomaat, mozzarella, taleggio, parmezaankaas, gorgonzola</li>
<li><b>Parma</b> - 13,00 - tomaat, mozzarella, parmaham</li>
<li><b>Koukou</b> - 14,00 - tomaat, mozzarella, kip, ajuin, champignons</li>
<li><b>Quattro Stagioni</b> - 13,00 - tomaat, mozzarella, hesp, champignons, artisjok</li>
<li><b>Capricciosa</b> - 15,00 - tomaat, mozzarella, hesp, champignons, artisjok, kappertjes, olijven, ansjovis</li>
<li><b>Pescatore</b> - 15,00 - tomaat, mozzarella, zeevruchten</li>
<li><b>Pancetta</b> - 14,00 - tomaat, mozzarella, buikspek, ajuin, ei</li>
<li><b>Primavera</b> - 16,00 - tomaat, mozzarella, rucola, parmaham, kerstomaat, parmezaankaas</li>
<li><b>Scampi</b> - 16,00 - tomaat, mozzarella, 5 scampi's</li>
<li><b>Carpaccio</b> - 16,00 - tomaat, mozzarella, rundsvlees, rucola, parmezaankaas, balsamicoazijn</li>
<li><b>Salmone</b> - 16,00 - tomaat, mozzarella, gerookte zalm</li>
<li><b>Bella Italia</b> - 16,00 - pizza in stervorm met tomaat, mozzarella, salami, hesp, champignons, balsamicoazijn</li>
<li><b>Tirolese</b> - 16,00 - tomaat, gerookte mozzarella, gerookt speck, rucola, kerstomaten</li>
<li><b>Tartufata</b> - 17,00 - tomaat, mozzarella, truffelcrème, champignons, rucola</li>
<li><b>Bufala</b> - 18,00 - tomaat, mozzarella, parmaham, champignons, verse sla, verse mozzarella</li>
</ul>
`;

const pastas = `
<ul>
    <li><b>Spaghetti Bolognese</b> - 13,00 - spaghetti, bolognesesaus</li>
    <li><b>Lasagna Bella Italia</b> - 13,00 - mozzarella, emmentalkaas, bolognesesaus</li>
    <li><b>Lasagna Vegetariana</b> - 13,00 - mozzarella, groenten, saus</li>
    <li><b>Pasta Arrabiata</b> - 13,00 - buikspek, pikante saus</li>
    <li><b>Cannelloni</b> - 13,00 - ricotta, spinazie, mozzarella, saus</li>
    <li><b>Spaghetti Carbonara</b> - 13,00 - spek, verse room, ei, parmezaankaas</li>
    <li><b>Penne Quattro Formaggi</b> - 13,00 - taleggio, gorgonzola, verse room, parmezaankaas</li>
    <li><b>Pasta Chef</b> - 13,00 - spek, champignons, verse room, saus</li>
    <li><b>Spaghetti Vegetariana</b> - 13,00 - groenten, saus, olijven - légumes, sauce, olives</li>
    <li><b>Penne Prosciutto Cotto</b> - 13,00 - hesp, champignons, saus, verse room</li>
    <li><b>Penne Salsiccia e Funghi</b> - 15,00 - Italiaanse worst, champignons, saus</li>
    <li><b>Penne Salmone</b> - 15,00 - gerookte zalm, saus, verse room</li>
    <li><b>Spaghetti alla Puttanesca</b> - 16,00 - scampi's, ansjovis, saus, kappertjes, olijven</li>
    <li><b>Spaghetti Vongole</b> - 16,00 - venusschelpen, saus, kruiden</li>
    <li><b>Spaghetti Frutti di Mare</b> - 16,00 - zeevruchten, saus</li>
    <li><b>Spaghetti Scampi e Zucchine</b> - 16,00 - scampi's, courgette, saus</li>
    <li><b>Scampi all'Aglio</b> - 18,00 - 7 scampi's, looksaus, spaghetti</li>
    <li><b>Spaghetti Scampi e Salmone</b> - 18,00 - scampi's, zalm, saus, verse room</li>
</ul>
`;

const antipasti = `
<ul>
        <li><b>Bruschette all'aglio</b> - 8,00 - 10 stuks; brood, look, mozzarella</li>
        <li><b>Bruschette al Pomodoro</b> - 9,00 - 10 stuks; brood, kerstomaten, oregano, olie</li>
        <li><b>Bruschette Mix</b> - 11,00 - 10 stuks - kerstomaten, gerookte mozzarella, spek, truffelcrème</li>
        <li><b>Caprese</b> - 12,00 - verse tomaten, mozzarella, oregano, olie</li>
        <li><b>Parmigiana Melanzane</b> - 14,00 - aubergines, tomatensaus, mozzarella</li>
        <li><b>Italiano Misto</b> - 14,00 - Italiaanse vleeswaren, gegrilde groenten, bruschette</li>
        <li><b>Carpaccio di Manzo</b> - 15,00 - rundsvlees, rucola, kruiden, parmezaankaas</li>
    </ul>
    `;
const scaloppine = `
    <ul>
        <li><b>Scaloppina Milanese</b> - 17,00 - gepaneerd kalfslapje, spaghetti, saus</li>
        <li><b>Scaloppina Pizzaiola</b> - 17,00 - kalfslapje, saus, kappertjes, look, oregano</li>
        <li><b>Scaloppina Sorrentina</b> - 18,00 - kalfslapje, mozzarella, saus, gebakken in de oven</li>
        <li><b>Scaloppina Parmigiana</b> - 18,00 - kalfslapje, aubergines, mozzarella, parmezaankaas</li>
        <li><b>Scaloppina della Casa</b> - 19,00 - kalfslapje, parmaham, saus, mozzarella</li>
    </ul>
    `;
const insalata = `
    <ul>
        <li><b>Insalata Napoletana</b> - 13,00 - salade, rucola, kerstomaten, verse mozzarella, olijven, balsamicoazijn</li>
        <li><b>Insalata Siciliana</b> - 13,00 - salade, gegrilde groenten, olijven, rucola, kerstomaten</li>
        <li><b>Insalata di Pollo</b> - 15,00 - salade, kip, rucola, kerstomaten, parmezaankaas</li>
        <li><b>Insalata Parma</b> - 15,00 - salade, parmaham, parmezaankaas, rucola, tomaten</li>
        <li><b>Insalata Salmone e Scampi</b> - 17,00 - salade, zalm, scampi's, rucola, kerstomaten</li>
    </ul>
    `;

// Similarly, add the other menu items

function showMenu(category, element) {
    let content = '';
    switch (category) {
        case 'pizzas':
            content = pizzas;
            break;
        case 'pastas':
            content = pastas;
            break;
        case 'antipasti':
            content = antipasti;
            break;
        case 'scaloppine':
            content = scaloppine;
            break;
        case 'insalata':
            content = insalata;
            break;
        // Add cases for other menu items
    }
    document.getElementById('menu-content').innerHTML = content;
    highlightMenuItem(element);
}

function highlightMenuItem(item) {
    // Remove the 'highlighted' class from all items
    const items = document.querySelectorAll('.ul-select .select');
    items.forEach(i => i.classList.remove('highlighted'));
    
    // Add the 'highlighted' class to the clicked item
    item.classList.add('highlighted');
}

window.onload = function() {
    showMenu('pizzas', document.querySelector('.ul-select .select.first')); // Default to showing pizzas on load
}



function clock() {// We create a new Date object and assign it to a variable called "time".
    var time = new Date(),
        
        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),
        
        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes();
        
   
    
    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes);
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);

    document.addEventListener("DOMContentLoaded", function() {
        const headerHeight = document.querySelector("header").offsetHeight;
    
        document.querySelectorAll("a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            });
        });
    });
    