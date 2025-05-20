"use strict";
// NAVBAR RESPONSIVE
document.addEventListener('DOMContentLoaded', displayNavbar)
function displayNavbar(){
    let burguerMenuButtons = document.querySelectorAll(".navbarMenu")
    for (let b = 0; b < burguerMenuButtons.length; b++) {
        burguerMenuButtons[b].addEventListener('click', e => {
            document.querySelector(".navbarButtons").classList.toggle("navbarButtonsAfter");
            let navbarLink = document.querySelectorAll("nav ul li");
        
            for (let i = 0; i < navbarLink.length; i++) {
                navbarLink[i].classList.toggle("liAfter");
            }
        });;
    }
    
}
