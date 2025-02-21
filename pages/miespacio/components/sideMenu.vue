<template>
    <transition name="slide">
        <div  class="fixed top-0 left-0 z-[2000] bg-[#155D61] rounded-r-[24px] w-[311px] py-4 max-h-[100vh] md:max-h-auto">
            <img 
                class="w-6 h-6 mr-auto ml-6 cursor-pointer" 
                src="/assets/icons/side-menu-times-torcia.svg" 
                alt="cerrar menu icono"
                @click="toggleMenu"
            >
            
            <!-- user  -->
            <div class="mt-9 flex items-center px-6">
                <img class="w-[52px] h-[52px] rounded-full object-cover" src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" alt="img usuario">
                <p class="text-white text-[20px] font-medium ml-4">Alejandro Chacon</p>
            </div>

            <!-- menu -->
            <div class="mt-10">

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-mi-espacio.svg" alt="sidemenu-mi-espacio icon">
                    <p class="text-base font-medium text-white">Mi espacio</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center mt-4" >
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-mis-anuncios.svg" alt="sidemenu-mis-anuncios icon">
                    <p class="text-base font-medium text-white">Mis Anuncios</p>
                </div>
              

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-visitas.svg" alt="sidemenu-visitas icon">
                    <p class="text-base font-medium text-white">Organizador de visitas</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center mt-4">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-perfil.svg" alt="sidemenu-perfil icon">
                    <p class="text-base font-medium text-white">Perfil como inquilino</p>
                </div>

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-favoritos.svg" alt="sidemenu-favoritos icon">
                    <p class="text-base font-medium text-white">Mis favoritos</p>
                </div>

                <div class="link-menu pl-9 hover:bg-white cursor-pointer py-2.5 flex items-center">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-busquedas.svg" alt="sidemenu-busquedas icon">
                    <p class="text-base font-medium text-white">Mis busquedas</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <p class="mt-6 text-white text-[20px] font-medium text-center">Contactanos</p>
                <button class="btn-config ml-4 mb-6 mt-12 flex items-center text-white text-[20px] font-medium">
                    <div class="p-2 rounded-full btn-icon">
                        <img class="w-6 h-6" src="/assets/icons/configuracion.svg" alt="sidemenu-busquedas icon">
                    </div>
                    Configuración
                </button>
            </div>
        </div>
    </transition>
    <transition name="disapear">
        <div 
            v-if="isMenuOpen"
            @click="toggleMenu" 
            class="fixed h-screen w-screen top-0 left-0 bg-[#00000080] z-[1800]"
        ></div>
    </transition>
</template>
<script setup>
import { ref, inject } from 'vue';

const isMenuOpen = inject('isSideMenuOpen');

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}


</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(-100%);
}

.disapear-enter-active, .disapear-leave-active {
    transition: opacity 0.3s ease;
}
.disapear-enter-from, .disapear-leave-to {
    opacity: 0.5;
}

.btn-config:hover .btn-icon{
    background-color: #40B4B9;
    transition: all 0.2s ease;
}

.link-menu:hover p{
    color: #155D61;
}
.link-menu:hover img{
    filter: invert(52%) sepia(24%) saturate(2791%) hue-rotate(157deg) brightness(89%) contrast(101%);
}
</style>