<template>
    <div 
        class="flex-shrink-0"
        :class="{
            'lg:w-full': openMap,
            'lg:w-[310px]': !openMap && styleCard == 'expandido',
            'lg:w-[200px]': !openMap && styleCard == 'expandido' && origin == 'favorite',
            'w-[82px]': styleCard == 'contraido',
        }"
    >
        
        <imageSlider :images="images" />

       <!--  <div v-if="styleCard == 'expandido'" class="mt-[14px] flex items-center justify-between">
            <div class="flex gap-1">
                <button 
                    class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                    :class="sectionSelected == 'images' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                    @click="sectionSelected = 'images'"
                >         
                    <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/image-house.svg" alt="image-house icon">
                </button>
                <button 
                    class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                    :class="sectionSelected == 'video' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                    @click="sectionSelected = 'video'"
                >         
                    <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/video-house.svg" alt="video-house icon">
                </button>
                <button 
                    class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                    :class="sectionSelected == 'tetris' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                    @click="sectionSelected = 'tetris'"
                >         
                    <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/tetris-house.svg" alt="tetris-house">
                </button>
                <button 
                    class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                    :class="sectionSelected == 'map' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                    @click="sectionSelected = 'map'"
                >         
                    <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/point-house.svg" alt="point-house icon">
                </button>
            </div>
             <div class="flex gap-4 items-center">
                <img class="w-[25px] h-[26px] cursor-pointer" src="/assets/icons/share.svg" alt="share icon">
                <img 
                    class="w-[30px] h-[26px] cursor-pointer" 
                    @mouseover="likeHover = true"
                    @mouseleave="likeHover = false"
                    @click="likeCard = !likeCard"
                    :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
                    alt="i-like icon"
                >
            </div> 
        </div> -->
    </div>
</template>
<script setup>
    import { ref, inject, defineProps } from 'vue'
    import imageSlider from './imageSliderAds.vue'

    /* const sectionSelected = ref('images')
    const likeCard = ref(false)
    const likeHover = ref(false) */

    const openMap = inject('openMap')
    const styleCard = inject('styleCard')

    defineProps({
        images: {
            type: Array,
            default: () => []
        },
        origin: {
            type: String, // Ahora es String
            default: "" // Valor por defecto vacío
        }
    })
</script>