"use strict";

// Fade-in
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Altura de ejecucion de fade-in
});


// Parallax
faders.forEach(fader => observer.observe(fader));

const delayImg = document.querySelector('.delay-img');

  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.4; // Más o menos delay
    delayImg.style.transform = `translateY(${offset}px)`;
  });