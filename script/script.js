$(document).ready(function () {

    // var scene = document.getElementById('staff-list');
    // var parallaxInstance = new Parallax(scene);



    //                функция скрола
    //
    // $(document).on("scroll", onScroll);
    //
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     });
    //     $(this).addClass('active');
    //
    //     var target = this.hash;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 1000, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

    //===================================//

    //              слайдер

    $('.projects_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:'<img class="prev" src="img/arrow_lf.png">',
        nextArrow:'<img class="next" src="img/arrow_rt.png">',
        dots: true



    });

    //======================================//

    //           бургер меню
    //
    // $(function() {
    //     $('.menu__icon').on('click', function() {
    //         $(this).closest('.nav__menu')
    //             .toggleClass('menu_state_open');
    //     });
    //
    //     $('.menu__links-item').on('click', function() {
    //
    //
    //         $(this).closest('.nav__menu')
    //             .removeClass('menu_state_open');
    //     });
    // });

    //======================//

});


//            функция скрола

// function onScroll(){
//     var scrollPosition = $(document).scrollTop();
//     $('.nav__menu a').each(function () {
//         var currentLink = $(this);
//         var refElement = $(currentLink.attr("href"));
//         if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//             $('.nav__menu ul li a').removeClass("active");
//             currentLink.addClass("active");
//         }
//         else{
//             currentLink.removeClass("active");
//         }
//     });
// }

//===============================//

var scene = document.getElementById('scene');
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
var parallaxInstance2 = new Parallax(scene2);