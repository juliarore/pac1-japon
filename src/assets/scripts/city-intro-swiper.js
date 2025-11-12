// Import Swiper bundle and modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize all city-intro carousels
document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.city-intro__swiper');
    
    swiperContainers.forEach((container) => {
        const parent = container.closest('.city-intro');
        
        const swiper = new Swiper(container, {
            modules: [Navigation, Pagination],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: parent.querySelector('.city-intro__pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: parent.querySelector('.swiper-button-next'),
                prevEl: parent.querySelector('.swiper-button-prev'),
            },
            // breakpoints: {
            //   768: { slidesPerView: 2 },
            //   1200: { slidesPerView: 3 },
            // },
        });
    });
});
