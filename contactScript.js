const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("change");
});

const logo = document.querySelector("#logo");
const contact = document.querySelector("#contact");

const tl = new TimelineMax();

tl.fromTo(contact, 2, { y: "-1000%" }, { y: "0%", ease: Power2.easeInOut })
    .fromTo(logo, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(menuIcon, 2, { x: "1000%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");