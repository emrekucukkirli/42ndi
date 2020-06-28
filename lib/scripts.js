$(document).ready(function () {
    $('.clients-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay:true,
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
    });
    $('.works-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 2
            },
            820: {
                items: 3
            },
            1100: {
                items: 4
            }, 
            1360: {
                items: 4
            },
            1600: {
                items: 4
            }
        }
    })
});

