<template>
    <div 
        class="bg-white rounded-b-[12px] rounded-[12px] lg:rounded-[24px] overflow-hidden lg:mx-auto shadow-par lg:shadow-none mb-4"
        :class="{
            'lg:w-[850px]': !openMap,
            'lg:w-[531px]': openMap,
        }"
    >
        <!-- head -->
        
        <div class="bg-[#155D61] lg:text-[24px] py-2 px-4 flex items-center">
            <h2 class="text-white ml-auto">
                {{ property.transaction === 'rental' ? 'Alquiler' : 
                property.transaction === 'sale' ? 'Venta' : 'Alquiler/Venta'  }} {{ property.category?.name }}
            </h2>
        </div>
        <div class="bg-[#D4CB50] py-2 px-4 flex items-center rounded-b-lg">
            <img src="/assets/icons/revisado-jud.svg" alt="Revisado" class="w-5 h-5">
            <span class="text-white text-sm flex-grow text-center">Revisado jurídicamente</span>
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
                <imageSection :images="property.media" :origin="'anuncios'"/>

                <!-- title & price mobile -->
                <div class="px-2.5 lg:hidden">
                    <!-- h-[86px] -->
                    <div class="flex justify-between items-center">
                        <!-- Título a la izquierda -->
                        <h1 class="lg:text-[24px] text-[#27ABB1] lg:leading-8 flex-1"
                            :class="{
                                'lg:truncate': !openMap,
                                'text-[20px] font-bold py-2.5 leading-5': styleCard == 'expandido',
                                'text-sm font-semibold h-[58px] overflow-hidden leading-4': styleCard == 'contraido',
                            }"
                        >
                            {{ property.address }}
                        </h1>
                        
                        <!-- Botón de favoritos a la derecha -->
                        <div class="ml-4">  <!-- ml-2 para un pequeño margen -->
                            <FavoriteButton :property="property" @favorite-toggled="$emit('refresh-favorites')"/>
                        </div>
                    </div>


                    <p class="text-base lg:text-[24px] color-666 mt-3">
                        <b>{{ property.rental_price ? `${property.rental_price} €/mes` : `${property.sale_price} €` }}</b>
                    </p>
                </div>
                <!-- <div class="flex gap-4 items-center">
                <img class="w-[25px] h-[26px] cursor-pointer" src="/assets/icons/share.svg" alt="share icon">
                <img 
                    class="w-[30px] h-[26px] cursor-pointer" 
                    @mouseover="likeHover = true"
                    @mouseleave="likeHover = false"
                    @click="likeCard = !likeCard"
                    :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
                    alt="i-like icon"
                >
                </div> -->
                <!-- i like -->
                <!-- <div v-if="styleCard == 'contraido'" class="ml-2 flex-shrink-0 lg:hidden">
                    <img 
                        class="w-[36px] h-[32px] cursor-pointer" 
                        @mouseover="likeHover = true"
                        @mouseleave="likeHover = false"
                        @click="likeCard = !likeCard"
                        :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
                        alt="i-like icon"
                    >
                </div> -->
            </div>
            <!-- info section -->
            <div class="px-2.5">
                <!-- h-[86px] -->
                <!-- <div 
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
                    >sssssCalle Jacinto, Marazuela - El Torreón, Las Rozas de Madrideeeee</h1>
                </div> -->
                <div class="hidden lg:block w-full  ">
                     <!-- Contenedor flex para alinear los elementos -->
                    <div class="flex justify-between items-center w-full  ">
                        <!-- Título a la izquierda -->
                        <h1 
                            class="text-[#27ABB1] font-bold py-2.5 leading-snug whitespace-normal break-words flex-1"
                            :class="{
                                'text-[24px] max-w-[480px]': !openMap,
                                'text-[18px] max-w-[500px]': openMap
                            }"
                        >
                            {{ property.address }}
                        </h1>
                        
                        <!-- Botón de favoritos a la derecha -->
                         <div class="ml-9 "> <!--Añade margen izquierdo para separación -->
                        <!-- <div class="absolute top-2 -right-20 z-10"> top/right ajustables -->
                            <FavoriteButton :property="property" @favorite-toggled="$emit('refresh-favorites')"/>
                        </div>
                    </div>


                </div>
                 <p class="text-base lg:text-[24px] color-666 hidden lg:block ">
                    <b>{{ property.rental_price ? `${property.rental_price} €/mes` : `${property.sale_price} €` }}</b>
                </p>
            </div>

           <!--  <div class="hidden lg:block w-full  ml-9"> 
                            <FavoriteButton :property="property" />
                        </div> -->
        </div>

        <div class="px-4 py-3">
            <div class="border border-gray-300 my-2"></div>
            <div class="flex justify-between">
                <div class="">
                    <img class="w-[48px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-tamano.svg" alt="tamaño inmueble icono">
                    <p class="mt-1 text-base color-666 text-center leading-4 font-light">Tamaño</p>
                    <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.m_built }}m2</p>
                </div>
                <div class="flex-grow relative"  v-html="divideHtml"></div>
                <div class="">
                    <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-planta.svg" alt="Planta inmueble icono">
                    <p class="mt-1 text-base color-666 text-center leading-4 font-light">Planta</p>
                    <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.number_plants }}</p>
                </div>
                <div class="flex-grow relative"  v-html="divideHtml"></div>
                <div class="">
                    <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-ascensor.svg" alt="Ascensor inmueble icono">
                    <p class="mt-1 text-base color-666 text-center leading-4 font-light">Ascensor</p>
                    <p class="mt-1 text-base font-semibold color-666 text-center leading-4">N/A</p>
                </div>
                <div class="flex-grow relative"  v-html="divideHtml"></div>
                <div class="">
                    <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-distribucion.svg" alt="Distribución inmueble icono">
                    <p class="mt-1 text-base color-666 text-center leading-4 font-light">Distribución</p>
                    <p class="mt-1 text-base font-semibold color-666 text-center leading-4">N/A</p>
                </div>
                <div v-if="!openMap" class="flex-grow relative hidden lg:inline"  v-html="divideHtml"></div>
                <div v-if="!openMap" class="hidden lg:inline">
                    <img class="w-[40px] h-[40px] hidden lg:block info-tamano mx-auto" src="/assets/icons/info-banos.svg" alt="N° de baños inmueble icono">
                    <p class="mt-1 text-base color-666 text-center leading-4 font-light">N° de baños</p>
                    <p class="mt-1 text-base font-semibold color-666 text-center leading-4">{{ property.bathrooms }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, inject, defineProps } from 'vue'
    import imageSection from './imageSectionAds.vue'
    import FavoriteButton from './favoriteButton.vue';

    const divideHtml = ref(`<div class="h-3 w-[2px] border-l-2 border-[#666] my-auto absolute inset-0 mx-auto"></div>`)
    const openMap = inject('openMap')
    const styleCard = inject('styleCard')
    
    defineEmits(['refresh-favorites']); // Añade esta línea
  //  const likeCard = ref(false)
   // const likeHover = ref(false)

    // Define las props que recibe el componente
    const props = defineProps({
    property: {
        type: Object,
        required: true
    }
    })

</script>