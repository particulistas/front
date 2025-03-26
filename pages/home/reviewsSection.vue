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
                    <!-- <SwiperSlide class="card bg-white p-5 lg:p-2.5 lg:w-[407px]" v-for="slide in 9" :key="slide"> -->
                    <SwiperSlide class="card bg-white p-5 lg:p-2.5 lg:w-[407px]" v-for="(slide, index) in slides" :key="index">
                        <div class="flex gap-3 items-center">
                            <img class="w-[52px] h-[52px] rounded-full" src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" alt="img-notice">
                            <div>
                                <h3 class="text-[24px] font-bold color-666">{{  slide.name }}</h3>
                                <div class="flex items-center">
                                    <p class="text-[20px] font-bold color-666">{{  slide.rating }}</p>
                                    <div class="flex items-center gap-1 ml-2">
                                        <!-- <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-review.svg" alt="star icon">
                                        <img src="/assets/icons/star-half-review.svg" alt="star icon"> -->
                                        <img v-for="star in slide.stars" :key="star" :src="star" alt="star icon">
                                    </div>
                                </div>
                            </div>
                            <img class="ml-auto mr-2.5 lg:hidden" src="/assets/imgs/home-reviews-estimacion-precio.svg" alt="home-reviews-estimacion-precio">
                        </div>
                        <p class="text-base lg:text-[20px] color-666 font-semibold italic mt-4 leading-[115%] lg:hidden">
                            Informe de estimación del precio de la vivienda.
                        </p>
                        <!-- <p class="text-base lg:text-[20px] color-666 italic mt-4 leading-[115%] h-[110px] lg:h-[138px] overflow-hidden">
                            Solo tuve el anuncio tres semanas, porque lo vendí enseguida. Durante esos días recibí bastantes 
                            visitas de gente que dice que lo vio en Particulista, y de hecho, la pareja que me lo compró, vio 
                            el anuncio en este portal.
                        </p> -->
                        <p class="text-base lg:text-[20px] color-666 italic mt-4 leading-[115%] h-[110px] lg:h-[138px] overflow-hidden">
                            {{  slide.review }}
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <!-- <div class="home-reviews-container-navigation h-[100px]"></div>
            <div class="home-reviews-container-pagination h-[10px]"></div> -->
        </section>
        <div class="text-center mt-[52px]">
            <button @click="openModal = true" class="btn-primary py-3 px-[48px] lg:px-6 rounded-[16px] text-[20px] lg:text-[38px] font-medium">
                Envíanos tu opinión
            </button>
        </div>
        <reviewModal />
    </div>
</template>
<script setup>
    import { ref, provide } from 'vue'
    import { Autoplay, Navigation, Pagination } from 'swiper/modules';
    import reviewModal from './reviewModal.vue'
    import 'swiper/css';

    const nuxtApp = useNuxtApp();
    const windowWidth = nuxtApp.$windowWidth;
    const openModal = ref(false)
    provide('openModal',openModal)

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

    const slides = [
        // Slide 1
        {
            //image: 'https://via.placeholder.com/150',
            name: 'Raquel ',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                //'/assets/icons/star-half-review.svg',
            ],
            review: 'Subí mi piso a la WEB, y la verdad es que con el sistema de “trae tu anuncio” de otro portal, me resultó súper sencillo.'
        },
        // Slide 2
        {
            image: 'https://via.placeholder.com/150',
            name: 'Jonás',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: 'Solo tuve el anuncio tres semanas, porque lo vendí enseguida. Durante esos días recibí bastantes visitas de gente que dice que lo vio en Particulista, y de hecho, la pareja que me lo compró, vio el anuncio en este portal'
        },
        // Slide 3
        {
            image: 'https://via.placeholder.com/150',
            name: 'Mario',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                //'/assets/icons/star-empty-review.svg',
            ],
            review: 'Le pongo cinco estrellas por el organizador de visitas automático. Yo lo activé para evitar que me llamaran constantemente para visitar el piso. Planifiqué visitas un par de tardes a la semana y conseguí alquilarlo sin problema.'
        },
        // Slide 4
        {
            image: 'https://via.placeholder.com/150',
            name: 'Alberta',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                //'/assets/icons/star-empty-review.svg',
            ],
            review: '¡Por fin un portal sin inmobiliarias!'
        },
        // Slide 5
        {
            image: 'https://via.placeholder.com/150',
            name: 'Rodrigo',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: 'Harto de que mi anuncio se perdiera debajo de decenas de pisos de inmobiliarias lo quité de todos los portales y lo publiqué solo en Particulista. Me siguió llamando mucha gente interesada.'
        },
        // Slide 6
        {
            image: 'https://via.placeholder.com/150',
            name: 'Miguel',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: '¡Estupendo portal!'
        },
        // Slide 7
        {
            image: 'https://via.placeholder.com/150',
            name: 'Roberto',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
            ],
            review: 'Uno de los inmuebles anunciados era una inmobiliaria. Lo reporte a Particulista y enseguida me contactaron y borraron el anuncio. '
        },
        // Slide 8
        {
            image: 'https://via.placeholder.com/150',
            name: 'Mara ',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: 'En este mundo poco transparente de inmobiliarias y comisiones, se agradece un portal en el que puedo hablar directamente con el propietario y negociar el precio.'
        },
        // Slide 8
        {
            image: 'https://via.placeholder.com/150',
            name: 'Benito',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
            ],
            review: '¡Harto de las comisiones de inmobiliarias! ¡Me alegro que todavía haya iniciativas como Particulista!'
        },
        // Slide 9
        {
            image: 'https://via.placeholder.com/150',
            name: 'Aurelio',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
            ],
            review: 'Buen servicio de atención. Si tienes un problema con la Web y les escribes, te contestan enseguida.'
        },
        // Slide 10
        {
            image: 'https://via.placeholder.com/150',
            name: 'Ramón',
            rating: 5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
            ],
            review: 'Puse mi piso en alquiler en Particulista y activé el organizador de visitas para que la gente pudiera reservar una visita en la franja horaria que me venía bien, y la verdad es que fue muy, muy bien. ¡Se agradece como propietario que te llegue el perfil del inquilino antes de la visita!'
        },
        // Slide 11
        {
            image: 'https://via.placeholder.com/150',
            name: 'Aurora',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: 'El sistema de opcion de traer el anuncio de otro portal es comodísimo. !'
        },
        // Slide 12
        {
            image: 'https://via.placeholder.com/150',
            name: 'Sara',
            rating: 4.5,
            stars: [
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-review.svg',
                '/assets/icons/star-half-review.svg',
            ],
            review: 'Éramos tres compañeros de universidad buscando piso en Madrid. Vamos… una odisea conseguir alquilar sin inmobiliarias de por medio. Utilizamos el sistema de favoritos compartidos y nos funcionó bastante guay.'
        },
    ];





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