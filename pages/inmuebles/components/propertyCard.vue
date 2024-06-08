<template>
    <div class="lg:w-[1083px] bg-white rounded-b-[12px] lg:rounded-b-none rounded-t-[12px] lg:rounded-t-[24px] overflow-hidden lg:mx-auto shadow-par lg:shadow-none">
        <!-- head -->
        <div class="bg-[#155D61] py-0.5 lg:py-2.5 px-5 lg:px-[50px]">
            <h1 class="text-base lg:text-[24px] font-medium lg:font-semibold text-white text-right">Alquiler apartamento</h1>
        </div>
        <div class="px-4 lg:px-10 py-3 lg:py-5 lg:flex lg:gap-8">
            <!-- image section -->
            <imageSection />
            <!-- info section -->
            <div class="px-2.5">
                <!-- h-[86px] -->
                <div class="lg:truncate">
                    <h1 class="text-[20px] lg:text-[24px] font-bold text-[#27ABB1] py-2.5 leading-5 lg:leading-8 lg:truncate">Calle Jacinto, Marazuela - El Torreón, Las Rozas de Madrid</h1>
                </div>
                <p class="text-base lg:text-[24px] color-666">
                    <b>600</b> €/mes
                </p>
                <div class="border border-gray-300 my-2"></div>
                <div class="flex justify-between">
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[48px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-tamano.svg" alt="tamaño inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Tamaño</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">180m2</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-planta.svg" alt="Planta inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Planta</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">4</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-ascensor.svg" alt="Ascensor inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Ascensor</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">Si</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-distribucion.svg" alt="Distribución inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Distribución</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">Diáfana</p>
                    </div>
                    <div class="flex-grow relative hidden lg:inline"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="hidden lg:inline">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-banos.svg" alt="N° de baños inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">N° de baños</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">1</p>
                    </div>
                    <div class="flex-grow relative hidden lg:inline"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="hidden lg:inline">
                        <img class="w-[36px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-iluminacion.svg" alt="Iluminación inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Iluminación</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">Exterior</p>
                    </div>
                </div>
                <p class="mt-2.5 py-1 text-base color-666 leading-5 h-[68px] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labores dolor sit amet. Consectetur adipis elit, sed do eiusmod tempor incididunt ut labores dolor sit amet.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import imageSection from './imageSection.vue'

const divideHtml = ref(`<div class="h-3 w-[2px] border-l-2 border-[#666] my-auto absolute inset-0 mx-auto"></div>`)
</script>