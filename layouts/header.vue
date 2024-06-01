<template>
    <header class="bg-white flex px-4 lg:px-10 pb-2 lg:pb-3">

        <div class="flex items-center pt-3 lg:pt-5 lg:pb-2 lg:ml-[-10px]">
            <button @click="toggleMenu" class="hover-chield-icon-white hover-bg-07ACB4 rounded-[6px] p-1 lg:p-2.5">
                <img  class="w-6 h-[18px] lg:w-auto lg:h-auto" src="/assets/icons/Burger menu.svg" alt="Burger menu particulistas"/>
            </button>
            <img  class="w-[97px] h-[22px] lg:w-auto lg:h-auto ml-1 lg:ml-2.5 cursor-pointer" src="/assets/fulllogo.svg" alt="fulllogo particulistas"/>
        </div>

        <!-- icons desktop -->
        <div class="ml-auto hidden lg:flex">
            <button class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/cuadrado.svg" alt="Mi espacio"/>
                Mi espacio
            </button>
            <button class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Chat.svg" alt="Chat"/>
                Chat
            </button>
            <button class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Calendario.svg" alt="Mis visitas"/>
                Mis visitas
            </button>
            <button class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Notificaciones.svg" alt="Avisos"/>
                Avisos
            </button>
        </div>

        <!-- icons mobile -->
        <div class="flex flex-grow lg:hidden justify-around pt-3 items-center px-1">
            <img  class="w-4 h-4" src="/assets/icons/message.svg" alt="message icon"/>
            <img  class="w-4 h-4" src="/assets/icons/bell.svg" alt="bell icon"/>
        </div>
        <div class="flex gap-1.5 lg:gap-4 ml-auto lg:ml-[28px] items-center pt-3 lg:pt-5 lg:pb-2">
            <button class="btn-outline-E786F0 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4">
                Publica
            </button>
            <nuxt-link to="/ingresar" class="btn-outline-07ACB4 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4">
                Accede
            </nuxt-link>
        </div>
    </header>
    <FixedNav />
    <sideMenu />
</template>
<script setup>
import { ref, provide } from 'vue'
import FixedNav from './fixedNav.vue'
import sideMenu from './sideMenu.vue'

const isSideMenuOpen = ref(false)

function toggleMenu() {
    isSideMenuOpen.value = !isSideMenuOpen.value;
}

provide('isSideMenuOpen',isSideMenuOpen)
</script>