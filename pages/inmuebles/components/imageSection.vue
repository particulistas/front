<template>
    <div class="w-[310px] flex-shrink-0">
        <div class="relative">
            <div class="absolute rounded-t-[12px] bg-[#D4CB50] flex justify-center gap-[6px] items-center w-full top-0 left-0 z-20">
                <img class="w-[18px] h-[18px]" src="/assets/icons/revisado-jud.svg" alt="revisado juridicamente icono">
                <p class="py-1 text-sm text-white">Revisado juridicamente</p>
            </div>
            <img class="w-full h-[201px] object-cover rounded-[12px]" src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" alt="">
        </div>
        <div class="mt-[14px] flex items-center justify-between">
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
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const sectionSelected = ref('images')
const likeCard = ref(false)
const likeHover = ref(false)
</script>