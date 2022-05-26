const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const nav = document.querySelector(".navMenu");
const headline = document.querySelector(".headline");
const aboutLink = document.querySelector(".about-link");

const tl = new TimelineMax();


tl.
fromTo(hero,0.85,{height: "0%"}, {height: "85%", ease: Power2.easeInOut})
.to([headline, aboutLink], 40, {delay: 0.2, opacity: 100, ease: Power0.easeOut});
//.fromTo(hero,1.2, {width: "100%"}, {width: "90%", ease: Power2.easeInOut})