"use strict";
  function scrollNext() {
    const container = document.querySelector('.imgCardsBox');
    const card = container.querySelector('.imgCard');
    const scrollAmount = card.offsetWidth + 16; // card width + gap
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  function scrollPrevious() {
    const container = document.querySelector('.imgCardsBox');
    const card = container.querySelector('.imgCard');
    const scrollAmount = card.offsetWidth + 12; // card width + gap
    container.scrollBy({ left: (-scrollAmount), behavior: 'smooth' });
  }

