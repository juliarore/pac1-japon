// Import Swiper bundle and modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.tokio-intro__swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.tokio-intro__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tokio-intro__button--next',
            prevEl: '.tokio-intro__button--prev',
        },
        // breakpoints: {
        //   768: { slidesPerView: 2 },
        //   1200: { slidesPerView: 3 },
        // },
    });
});