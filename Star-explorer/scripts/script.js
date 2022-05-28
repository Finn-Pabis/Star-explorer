const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const nav = document.querySelector(".navMenu");
const headline = document.querySelector(".headline");
const aboutLink = document.querySelector(".about-link");

const tl = new TimelineMax();


tl.
fromTo(hero,0.85,{height: "0%"}, {height: "95%", ease: Power2.easeInOut})
.fromTo([headline, aboutLink], 1.1, {delay: 0.2, opacity: 0}, {opacity: 1, ease: Power4.easeInOut});



