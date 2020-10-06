new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project-pagination',
        bulletClass: "projects-bullet",
        bulletActiveClass: "projects-bullet-active",
        clickable: true
    },
});

var heroEl = 'hero';
heroEl = document.getElementsByClassName(heroEl);
window.alert(heroEl);