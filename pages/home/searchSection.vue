<template>
    <section class="bg-[#F3F3F3]">
        <div class="bg-[#155D61] pl-4 lg:pl-[72px] pr-4 lg:pr-10 py-3 lg:rounded-t-[24px] rounded-b-xl lg:rounded-b-[24px] lg:w-[1083px] mx-[-16px] lg:mx-auto mt-5 lg:mt-0">
            <div class="lg:flex lg:items-center">
                <p class="text-white lg:text-[24px] font-bold mr-6 hidden lg:inline-block">Viviendas</p>
                <div>
                    <div class="mx-auto flex gap-[35px] lg:gap-3 justify-center">
                        <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Comprar</button>
                        <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Alquilar</button>
                        <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Compartir</button>
                    </div>
                    <p class="mt-3 lg:hidden text-base font-medium text-white">Viviendas</p>
                    <div ref="searchContainerRef" class="lg:w-[819px] relative mt-2 lg:mt-0">
                        <img 
                            class="absolute top-0 bottom-0 my-auto right-2.5 hidden lg:block" 
                            src="/assets/icons/search-07C6CE.svg" alt="home-hero search icon"
                        >
                        <img 
                            class="absolute top-0 bottom-0 my-auto right-2.5 lg:hidden" 
                            src="/assets/icons/search-888888.svg" alt="home-hero search icon"
                        >
                        <input 
                            class="w-full h-[37px] lg:h-[62px] bg-white rounded-lg lg:rounded-[16px] p-6" 
                            type="text"
                            v-model="inputSearch"
                            @click="openRecent = true"
                            @keyup="search"
                        >

                        <!-- recent searches -->
                        <div v-if="openRecent" class="bg-white rounded-b-[16px] absolute top-[37px] lg:top-[50px] w-full shadow-par overflow-hidden">
                            <nuxt-link class="w-full btn-primary-inverse flex px-5 py-2 text-[20px] font-medium items-center cursor-pointer">
                                <img 
                                    class="primary-icon w-[32px] h-[36px] mr-3" 
                                    src="/assets/icons/point-house.svg" alt="search icon"
                                >
                                Buscar por mapa
                            </nuxt-link>
                            <nuxt-link class="w-full btn-primary-inverse flex px-5 py-2 text-[20px] font-medium items-center cursor-pointer">
                                <img 
                                    class="primary-icon w-[32px] h-[36px] mr-3" 
                                    src="/assets/icons/search-house.svg" alt="search icon"
                                >
                                Buscar a mi alrededor
                            </nuxt-link>
                            <div class="bg-[#155D61] h-[33px]">
                                <p class="text-[20px] text-white font-medium text-center">últimas búsquedas</p>
                            </div>
                            <div class="w-full flex px-5 items-center">
                                <img 
                                    class="primary-icon w-[32px] h-[36px] mr-3" 
                                    src="/assets/icons/clock-house.svg" alt="search icon"
                                >
                                <nuxt-link class="text-base font-medium cursor-pointer color-07ACB4 leading-5 hover-E786F0 py-3 border-b border-gray-300 flex-grow">
                                    Piso en calle Jacinto, 5, Marazuela- El Torreón, Las Rozas de Madrid
                                </nuxt-link>
                            </div>
                            <nuxt-link class="w-full block text-center text-base font-bold color-07ACB4 hover-E786F0 py-2 cursor-pointer">
                                Ver todos
                            </nuxt-link>
                        </div>

                        <div v-if="openSearchList" class="bg-white rounded-b-[16px] absolute top-[37px] lg:top-[50px] w-full shadow-par overflow-hidden">
                            <nuxt-link class="px-6 mt-4 block group">
                                <p class="text-base font-medium color-666 border-b h-[38px] group-hover:text-[#E786F0]">
                                    Toledo  
                                </p>
                            </nuxt-link>
                            <nuxt-link class="px-6 mt-4 block group">
                                <p class="text-base font-medium color-666 border-b h-[38px] group-hover:text-[#E786F0]">
                                    Toledo  
                                </p>
                            </nuxt-link>
                        </div>
                    </div>
                    <img class="w-[224px] lg:w-auto h-[48px] lg:h-auto  mx-auto" src="/assets/imgs/home-hero-el-refugio-de-los-particulares.svg" alt="home-hero-el-refugio-de-los-particulares">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

const openRecent = ref(false)
const openSearchList = ref(false)
const inputSearch = ref(null)
const searchContainerRef = ref(null)

const search = () => {
    openRecent.value = false;
    openSearchList.value = !!inputSearch.value;
}

const handleClickOutside = event => {
    if (!searchContainerRef.value.contains(event.target)) {
        openRecent.value = false;
        openSearchList.value = false;
    }
}
</script>