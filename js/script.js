$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.logo').addClass('white');
    } else {
        $('nav').removeClass('black');
        $('.logo').removeClass('white');
    }

})

const burger = document.querySelector('.btn-burger');
const menu = document.querySelector('.menu-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
})