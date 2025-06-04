"use strict";
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // para que no se vuelva a ejecutar
        }
    });
}, {
    threshold: 0.2 // se dispara cuando el 10% del elemento está visible
});

faders.forEach(fader => observer.observe(fader));