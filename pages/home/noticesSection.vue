<template>
    <div>
        <section class="mt-[55px] lg:mt-[52px]">
            <h1 class="text-center p-2.5 color-666 text-[24px] lg:text-[38px] font-bold">Revisa aquí nuestros articulos y noticias</h1>
            <div class="lg:w-[1302px] mt-2.5 lg:mt-11 mx-auto">    
                <Swiper
                    :slidesPerView="1"
                    :spaceBetween="0"
                    :freeMode="true"
                    :loop="true"
                    :modules="modules"
                    :breakpoints="breakpoints"
                    :autoplay="autoplay"
                >
                    <SwiperSlide class="card-notice bg-[#155D61] rounded-[24px] py-3 lg:py-10 px-7 lg:px-[52px] w-full" v-for="slide in 9" :key="slide">
                        <p class="text-base text-right text-white pr-6 lg:pr-0">17/03/2024</p>
                        <img class="object-cover w-full h-[204px] rounded-[16px] mt-2" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/500922098.jpg?k=cec77129b183212173c5067e37968a137d1311494001ee5aef63d403c18ba2a9&o=&hp=1" alt="img-notice">
                        <h1 class="text-[20px] font-bold text-white text-left mt-3 leading-6 px-2">
                            Es posible ahorrarse entre 12.000 y 24.000 euros en la compra de un piso.
                        </h1>
                        <p class="text-base text-white italic px-2 mt-2 leading-5 h-[80px] overflow-hidden">
                            Cuando un particular quiere comprar un piso, afronta en la mayoría de los casos una de las operaciones económicas más importantes y de mayor calado de su vida.
                        </p>
                        <button class="block btn-primary py-2.5 rounded-[12px] text-base font-bold text-center mt-6 w-[209px] mx-auto">
                            Ver noticia
                        </button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <button class="btn-primary block mx-auto mt-11 lg:mt-[65px] w-[178px] lg:w-[420px] py-3 text-[20px] lg:text-[32px] font-medium rounded-[16px] mb-11">
            Ver más
        </button>
    </div>
</template>
<script setup>
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const breakpoints = {
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
}
const modules = [Autoplay];
const autoplay= {
    delay: 3000,
    disableOnInteraction: false,
}





</script>