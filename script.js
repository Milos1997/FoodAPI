const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("change");
});

const background = document.querySelector("#background");
const sm = document.querySelector("#sm");
const logo = document.querySelector("#logo");
const quote = document.querySelector("#quote");
const quote2 = document.querySelector("#quote2");
const author = document.querySelector("#author");
const image = document.querySelector("#image");

const tl = new TimelineMax();

tl.fromTo(background, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut })
    .fromTo(sm, 2, { x: "-1000%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(logo, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(quote, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(quote2, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(author, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");