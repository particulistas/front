<template>
    <section >
          <!-- Action Buttons -->
        <div class="max-w-7xl mx-auto py-4 flex gap-3 mb-4 justify-center items-center">
            <button 
                :class="[
                    'px-6 py-2 lg:px-8 lg:py-3 transition-colors', // Más grande en desktop
                    'rounded-md lg:rounded-md', // Redondeado por defecto y en pantallas grandes
                    'rounded-xl md:rounded-md', // Más redondeado en móviles y tablets
                    activeButton === 'buy' 
                        ? 'bg-[rgb(230,130,239)] text-white' 
                        : 'bg-white text-[rgb(204,55,218)] font-bold shadow-sm',
                    'text-base lg:text-lg', // Tamaño de fuente más grande en desktop
                ]"
                @click="activeButton = 'buy'"
            >
                Comprar
            </button>
            <button 
                :class="[
                    'px-6 py-2 lg:px-8 lg:py-3 transition-colors', // Más grande en desktop
                    'rounded-md lg:rounded-md', // Redondeado por defecto y en pantallas grandes
                    'rounded-xl md:rounded-md', // Más redondeado en móviles y tablets
                    activeButton === 'rent' 
                        ? 'bg-[rgb(230,130,239)] text-white' 
                        : 'bg-white text-[rgb(204,55,218)] font-bold shadow-sm',
                    'text-base lg:text-lg', // Tamaño de fuente más grande en desktop
                ]"
                @click="activeButton = 'rent'"
            >
                Alquilar
            </button>
            <button 
                :class="[
                    'px-6 py-2 lg:px-8 lg:py-3 transition-colors', // Más grande en desktop
                    'rounded-md lg:rounded-md', // Redondeado por defecto y en pantallas grandes
                    'rounded-xl md:rounded-md', // Más redondeado en móviles y tablets
                    activeButton === 'comp' 
                        ? 'bg-[rgb(230,130,239)] text-white' 
                        : 'bg-white text-[rgb(204,55,218)] font-bold shadow-sm',
                    'text-base lg:text-lg', // Tamaño de fuente más grande en desktop
                ]"
                @click="activeButton = 'comp'"
            >
                Compartir
            </button>
        </div>
        <div class="max-w-7xl mx-auto px-4 py-4 bg-gradient-to-r from-[#CB34D9] to-[#E786F0] pl-4 lg:pl-[72px] pr-4 lg:pr-10 py-4 rounded-t-[24px]  rounded-b-[24px] lg:w-[1083px] mx-[-16px] lg:mx-auto mt-5 lg:mt-0">
            
            <div class="lg:flex lg:items-center">
                <div class=" mr-6 hidden lg:inline-block lg:-mt-7">
                    <button 
                        @click="showDropdown = !showDropdown"
                        class=" text-white flex items-center gap-2 "
                    >
                        <span class="text-white lg:text-[24px] font-bold ">Viviendas</span>
                        <ChevronDownIcon class="h-4 w-4" />
                    </button>
                    <!-- Dropdown Menu -->
                    <div 
                        v-if="showDropdown"
                        class="absolute z-10 mt-1 w-48 bg-white rounded-lg shadow-lg py-1"
                    >
                        <a 
                        v-for="option in propertyTypes" 
                        :key="option"
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                        {{ option }}
                        </a>
                    </div>
                </div>
                <div>
                    
                    <div class=" mt-3 lg:hidden">
                        <button 
                            @click="showDropdown = !showDropdown"
                            class=" text-white flex items-center gap-2 "
                        >
                            <span class="text-base font-medium text-white ">Viviendas</span>
                            <ChevronDownIcon class="h-4 w-4" />
                        </button>
                        <!-- Dropdown Menu -->
                        <div 
                            v-if="showDropdown"
                            class="absolute z-10 mt-1 w-48 bg-white rounded-lg shadow-lg py-1"
                        >
                            <a 
                            v-for="option in propertyTypes" 
                            :key="option"
                            href="#"
                            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                            {{ option }}
                            </a>
                        </div>
                    </div>
                    <div ref="searchContainerRef" class="lg:w-[819px] relative mt-2 lg:mt-0">
                        <img 
                            class="absolute top-0 bottom-0 my-auto right-2.5 hidden lg:block lg:mt-7" 
                            src="/assets/icons/search-07C6CE.svg" alt="home-hero search icon"
                        >
                        <img 
                            class="absolute top-0 bottom-0 my-auto right-2.5 lg:hidden" 
                            src="/assets/icons/search-888888.svg" alt="home-hero search icon"
                        >
                        <input 
                            class="w-full h-[37px] lg:h-[62px] bg-white rounded-[12px] lg:rounded-[16px] p-6 lg:mt-5" 
                            type="text"
                            v-model="inputSearch"
                            @click="openRecent = true"
                            @keyup="search"
                            placeholder="Busca municipio, barrio, calle, metro..."
                        >

                        <!-- recent searches -->
                        <div v-if="openRecent" class="bg-white rounded-b-[16px] absolute top-[37px] lg:top-[50px] w-full shadow-par overflow-hidden">
                            <nuxt-link to="/inmuebles" class="w-full btn-primary-inverse flex px-5 py-2 text-[20px] font-medium items-center cursor-pointer">
                                <img 
                                    class="primary-icon w-[32px] h-[36px] mr-3" 
                                    src="/assets/icons/point-house.svg" alt="search icon"
                                >
                                Buscar por mapa
                            </nuxt-link>
                            <nuxt-link to="/inmuebles" class="w-full btn-primary-inverse flex px-5 py-2 text-[20px] font-medium items-center cursor-pointer">
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
                            <nuxt-link to="/inmuebles" class="w-full block text-center text-base font-bold color-07ACB4 hover-E786F0 py-2 cursor-pointer">
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
                    <img v-if="$route.path == '/'" class="w-[224px] lg:w-auto h-[48px] lg:h-auto  mx-auto" src="/assets/imgs/home-hero-el-refugio-de-los-particulares.svg" alt="home-hero-el-refugio-de-los-particulares">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import { ChevronDownIcon, SearchIcon } from 'lucide-vue-next'

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

    const activeButton = ref('buy')
    const showDropdown = ref(false)
    
    const propertyTypes = [
        'Viviendas',
        'Habitaciones',
        'Locales',
        'Garajes',
        'Oficinas',
        'Trasteros'
    ]
</script>