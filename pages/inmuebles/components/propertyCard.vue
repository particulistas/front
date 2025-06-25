<template>
    <div 
        class="bg-white rounded-b-[12px] rounded-[12px] lg:rounded-[24px] overflow-hidden lg:mx-auto shadow-par lg:shadow-none mb-4"
        :class="{
            'lg:w-[1083px]': !openMap,
            'lg:w-[531px]': openMap,
        }"
    >
        <!-- head -->
        <div class="bg-[#155D61] py-0.5 lg:py-2.5 px-5">
            <h1 class="text-base lg:text-[24px] font-medium lg:font-semibold text-white text-right">
                {{ property.transaction === 'rental' ? 'Alquiler' : 
                property.transaction === 'sale' ? 'Venta' : 'Alquiler/Venta' }} 
                {{ property.category?.name }}
            </h1>
            
        </div>
        <!-- body card -->
        <div 
            class="px-4 py-3"
            :class="{
                'lg:py-5 lg:flex lg:gap-8 lg:px-10': !openMap,
            }"
        >
            <div
                :class="{
                    'flex': styleCard == 'contraido',
                }"
            >
                <!-- image section -->
                <imageSection :images="property.media" :property="property" :origin="'index'"/>

                <!-- title & price mobile -->
                <div class="px-2.5 lg:hidden">
                    <!-- h-[86px] -->
                    <div 
                        :class="{
                            'lg:truncate': !openMap,
                        }"
                    >
                        <h1 
                            class="lg:text-[24px] text-[#27ABB1] lg:leading-8"
                            :class="{
                                'lg:truncate': !openMap,
                                'text-[20px] font-bold py-2.5 leading-5 ': styleCard == 'expandido',
                                'text-sm font-semibold h-[58px] overflow-hidden leading-4': styleCard == 'contraido',
                            }"
                        >{{ property.address  }}</h1>
                    </div>
                    <p class="text-base lg:text-[24px] color-666">
                        {{ property.rental_price ? `${property.rental_price} €/mes` : `${property.sale_price} €` }}
                    </p>
                </div>

                <!-- i like -->
                <div v-if="styleCard == 'contraido'" class="ml-2 flex-shrink-0 lg:hidden">
                   <!--  <img 
                        class="w-[36px] h-[32px] cursor-pointer" 
                        @mouseover="likeHover = true"
                        @mouseleave="likeHover = false"
                        @click="likeCard = !likeCard"
                        :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
                        alt="i-like icon"
                    > -->
                    <FavoriteButton :property="property" @favorite-toggled="$emit('refresh-favorites')"/>
                </div>
            </div>
            <!-- info section -->
            <div class="px-2.5">
                <!-- h-[86px] -->
                <div 
                    class="hidden lg:block"
                    :class="{
                        'lg:truncate': !openMap,
                    }"
                >
                    <h1 
                        class="lg:text-[24px] text-[#27ABB1] lg:leading-8 font-bold py-2.5 leading-5"
                        :class="{
                            'lg:truncate': !openMap,
                        }"
                    >{{ property.address  }}</h1>
                </div>
                <p class="text-base lg:text-[24px] color-666 hidden lg:block">
                    {{ property.rental_price ? `${property.rental_price} €/mes` : `${property.sale_price} €` }}
                </p>
                <div class="border border-gray-300 my-2"></div>
                <div class="flex justify-between">
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[48px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-tamano.svg" alt="tamaño inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Tamaño</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.m_built }}m2</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-planta.svg" alt="Planta inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Planta</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.number_plants }}</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-ascensor.svg" alt="Ascensor inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Ascensor</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">N/A</p>
                    </div>
                    <div class="flex-grow relative"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div class="">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-distribucion.svg" alt="Distribución inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Distribución</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">N/A</p>
                    </div>
                    <div v-if="!openMap" class="flex-grow relative hidden lg:inline"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div v-if="!openMap" class="hidden lg:inline">
                        <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-banos.svg" alt="N° de baños inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">N° de baños</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.bathrooms }}</p>
                    </div>
                    <div v-if="!openMap" class="flex-grow relative hidden lg:inline"  v-html="divideHtml"></div>
                    <!--card info-property -->
                    <div v-if="!openMap" class="hidden lg:inline">
                        <img class="w-[36px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-iluminacion.svg" alt="Iluminación inmueble icono">
                        <p class="mt-1 text-base color-666 text-center leading-4 font-light">Iluminación</p>
                        <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.caracteristics_optionals }}</p>
                    </div>
                </div>
                <p
                    v-if="styleCard == 'expandido'"
                    class="mt-2.5 py-1 text-base color-666 leading-5 h-[68px] overflow-hidden"
                >
                     {{ property.description  }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, inject, defineProps } from 'vue'
    import imageSection from './imageSection.vue'
    import FavoriteButton from './favoriteButton.vue';
    

    const divideHtml = ref(`<div class="h-3 w-[2px] border-l-2 border-[#666] my-auto absolute inset-0 mx-auto"></div>`)
    const openMap = inject('openMap')
    const styleCard = inject('styleCard')

    const likeCard = ref(false)
    const likeHover = ref(false)

    defineEmits(['refresh-favorites']); // Añade esta línea
    // Define las props que recibe el componente
    const props = defineProps({
        property: {
            type: Object,
            required: true
        }
    })
</script>
