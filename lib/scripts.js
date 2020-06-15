$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 3
            },
            550: {
                items: 3
            },
            820: {
                items: 4
            },
            1100: {
                items: 5
            }, 
            1360: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    })
});

