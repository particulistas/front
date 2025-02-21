<template>
    <div class="relative">
        <Swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :freeMode="true"
            :loop="true"
            :modules="modules"
        >
            <SwiperSlide v-for="(slide, index) in 9" :key="slide">
                <div v-if="styleCard == 'expandido'" class="absolute rounded-t-[12px] bg-[#D4CB50] flex justify-center gap-[6px] items-center w-full top-0 left-0 z-20">
                    <img class="w-[18px] h-[18px]" src="/assets/icons/revisado-jud.svg" alt="revisado juridicamente icono">
                    <p class="py-1 text-sm text-white">Revisado juridicamente</p>
                </div>
                <img 
                    class="w-full object-cover rounded-[12px]" 
                    :class="{
                        'h-[201px]': !openMap,
                        'h-[245px]': openMap && styleCard == 'expandido',
                        'h-[82px]': styleCard == 'contraido',
                    }"
                    src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" 
                    alt=""
                >     
                <div class="absolute py-2 px-1 w-[45px] h-[36px] bg-[#66666666] bottom-2 mx-auto right-0 left-0">
                    <p class="text-white text-[24px] font-semibold leading-5">{{ index+1 }}/{{ 9 }}</p>           
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
import { inject } from 'vue'
import 'swiper/css';

const openMap = inject('openMap')
const styleCard = inject('styleCard')
</script>