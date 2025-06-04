"use strict";
document.querySelectorAll('.carousel').forEach(carousel => {
    let autoSlide;
    const track = carousel.querySelector('.carouselTrack');
    const images = track.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsContainer = carousel.querySelector('.carouselDots');

    let currentIndex = 0;
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
        goToSlide((currentIndex + 1) % images.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + images.length) % images.length);

    }

    function goToSlide(index) {
        
        currentIndex = index;
        current = index;
        console.log(currentIndex);
        
        dotsContainer.querySelectorAll('.carouselDot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000)
    }

    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carouselDot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

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
