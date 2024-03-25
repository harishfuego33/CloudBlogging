"use strict";
const RightToLeftHamburger = document.querySelector(".RightToLeftHamburger");
RightToLeftHamburger.classList.add("hidden");
function hamburger()
{
    RightToLeftHamburger.classList.toggle("hidden");
    RightToLeftHamburger.classList.toggle("hamburger-menu-right-to-left");

}