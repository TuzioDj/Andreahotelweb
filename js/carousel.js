"use strict";
document.querySelectorAll('.carousel').forEach(carousel => {
    let autoSlide;
    const track = carousel.querySelector('.carouselTrack');
    const images = track.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsContainer = document.querySelector('.carouselDots');

    let current = 0;
    let startX = 0;
    let endX = 0;

    function updateCarousel() {
        clearInterval(autoSlide)
        const width = carousel.offsetWidth;
        track.style.transform = `translateX(-${width * current}px)`;
        startAutoSlide()
    }

    function nextSlide() {
        current = (current + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        current = (current - 1 + images.length) % images.length;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000)
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    startAutoSlide()

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50; // distancia mínima para considerar un swipe

        if (startX - endX > threshold) {
            // Deslizó a la izquierda → próxima imagen
            nextSlide();
        } else if (endX - startX > threshold) {
            // Deslizó a la derecha → imagen anterior
            prevSlide();
        }
        startX = 0;
        endX = 0;
    }

    // Resize support
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
