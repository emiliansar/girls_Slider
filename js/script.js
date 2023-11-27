// new Swiper('.image-slider', {
//     navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next'
//     },
//     pagination: {
//         el: '.swiper-pagination',

//         type: 'bullets',
//         clickabled: true,
//     },

//     loop: true,

//     thumbs: {
//         swiper: {
//             el: '.image-mini-slider',
//             slidesPerView: 4,
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//     },

//     simulateTouch: true,

//     touchRatio: 1,

//     touchAngle: 45,

//     grabCursor: true,

//     keyboard: {
//         enabled: true,

//         onlyInViewport: true,

//         pageUpDown: true,
//     },

//     mousewheel: {
//         sensitivity: 1,

//         eventsTarget: '.image-slider',
//     },
// });

let sweper_1 = new Swiper('.image-slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination',

        type: 'bullets',
        clickabled: true,
    },

    loop: true,

    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 4,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    simulateTouch: true,

    touchRatio: 1,

    touchAngle: 45,

    grabCursor: true,

    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    // mousewheel: {
    //     sensitivity: 1,

    //     eventsTarget: '.image-slider',
    // },
});

let swiper_2 = new Swiper('.image-slider-2', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination',

        type: 'bullets',
        clickabled: true,
    },

    loop: true,

    thumbs: {
        swiper: {
            el: '.image-mini-slider-2',
            slidesPerView: 3,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    simulateTouch: true,

    touchRatio: 1,

    touchAngle: 45,

    grabCursor: true,

    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    // mousewheel: {
    //     sensitivity: 1,

    //     eventsTarget: '.image-slider',
    // },
});