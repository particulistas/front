<template>
    <div>
        <section class="mt-[55px] lg:mt-[65px]">
            <h1 class="text-center p-2.5 color-666 text-[24px] lg:text-[38px] font-bold">Opiniones de usuarios</h1>
            <div id="home-reviews" class="lg:w-[1302px] mt-2.5 lg:mt-6 mx-auto">    
                <Swiper
                    :navigation="windowWidth > 1024 ? true : false"
                    :slidesPerView="1"
                    :spaceBetween="0"
                    :freeMode="true"
                    :pagination="{clickable: true,}"
                    :loop="true"
                    :modules="modules"
                    :breakpoints="breakpoints"
                    :autoplay="autoplay"
                >
                    <SwiperSlide class="card bg-white p-5 lg:p-2.5 lg:w-[407px]" v-for="slide in 9" :key="slide">
                        <div class="flex gap-3 items-center">
                            <img class="w-[52px] h-[52px] rounded-full" src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" alt="img-notice">
                            <div>
                                <h3 class="text-[24px] font-bold color-666">Raquel {{  slide }}</h3>
                                <div class="flex items-center">
                                    <p class="text-[20px] font-bold color-666">4.5</p>
                                    <div class="flex items-center gap-1">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-half-review.svg" alt="star icon">
                                    </div>
                                </div>
                            </div>
                            <img class="ml-auto mr-2.5 lg:hidden" src="/assets/imgs/home-reviews-estimacion-precio.svg" alt="home-reviews-estimacion-precio">
                        </div>
                        <p class="text-base lg:text-[20px] color-666 font-semibold italic mt-4 leading-[115%] lg:hidden">
                            Informe de estimación del precio de la vivienda.
                        </p>
                        <p class="text-base lg:text-[20px] color-666 italic mt-4 leading-[115%] h-[110px] lg:h-[138px] overflow-hidden">
                            Solo tuve el anuncio tres semanas, porque lo vendí enseguida. Durante esos días recibí bastantes 
                            visitas de gente que dice que lo vio en Particulista, y de hecho, la pareja que me lo compró, vio 
                            el anuncio en este portal.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <!-- <div class="home-reviews-container-navigation h-[100px]"></div>
            <div class="home-reviews-container-pagination h-[10px]"></div> -->
        </section>
        <div class="text-center mt-[52px]">
            <button class="btn-primary py-3 px-[48px] lg:px-6 rounded-[16px] text-[20px] lg:text-[38px] font-medium">
                Envíanos tu opinión
            </button>
        </div>
    </div>
</template>
<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const nuxtApp = useNuxtApp();
const windowWidth = nuxtApp.$windowWidth;

const breakpoints = {
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
}
const modules = [Autoplay, Navigation, Pagination];
const autoplay= {
    delay: 3000,
    disableOnInteraction: false,
}





</script>

<style>
#home-reviews .swiper{
    height: 354px
}
#home-reviews .swiper-button-prev, .swiper-button-next{
    margin-left: auto;
    margin-right: auto;
    color: #DC91E2;
    top: 290px;
}
#home-reviews .swiper-button-prev:after, .swiper-button-next::after{
    font-size: 36px;
}
#home-reviews .swiper-button-prev{
    left: 0;
    right: 71px;
}
#home-reviews .swiper-button-next{
    left: 71px;
    right: 0;
}
#home-reviews .swiper-pagination{
    top: 332px;
}
#home-reviews .swiper-pagination-bullet {
    height: 10px;
    width: 48px;
    border-radius: 16px; 
    background-color: #27ABB1;
    opacity: 100;
    margin: 12px;
}

#home-reviews .swiper-pagination-bullet-active {
    background-color: #DC91E2;
}

@media (max-width:1024px){
    #home-reviews .swiper{
        height: 348px
    }
    #home-reviews .swiper-pagination-bullet {
        height: 6px;
        width: 32px;
        margin: 2px;
    }   
}
</style>