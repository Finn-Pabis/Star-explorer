const intro = document.getElementById("intro");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 90000,
    triggerElemnt: intro,
    triggerHook: 0
})
.addTo(controller)
.setPin(intro);

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("solar_system");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}




