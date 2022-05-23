$(function(){
    $('.design-slider').slick({
        dots: false,
        sliderToShow: 4,
        variableWidth: true,
        nextArrow: '<img src="img/arrow-left.svg" alt="" class="arrow arrow-left">',
        prevArrow: '<img src="img/arrow-right.svg" alt="" class="arrow arrow-right">',
        responsive: [
            {
                breakpoint: 361, 
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    })
})