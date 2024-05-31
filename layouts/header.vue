<template>
    <header class="bg-white flex px-4 lg:px-10 pb-2 lg:pb-3">

        <div class="flex items-center pt-3 lg:pt-5 lg:pb-2 lg:ml-[-10px]">
            <button class="hover-chield-icon-white hover-bg-07ACB4 rounded-[6px] p-1 lg:p-2.5">
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
            <button class="btn-outline-07ACB4 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4">
                Accede
            </button>
        </div>
    </header>

    <div 
        class="fixed top-0 bottom-0 my-auto left-0 h-[90px] z-[1200] md:hidden flex items-center"
        :class="{'close': !openMenu, 'open': openMenu}"
    >
        <div class="border-y-2 border-[#27ABB1] bg-white flex items-center h-full rounded-l-[16px]">
            <div class="px-2">
                <img class="mx-auto w-[48px] h-[48px]" src="/assets/icons/nav-mi-espacio.svg" alt="nav icon mi espacio">
                <p class="text-base font-semibold text-[#27ABB1] text-center">Mi espacio</p>
            </div>
            <div class="px-3.5">
                <img class="mx-auto w-[48px] h-[48px]" src="/assets/icons/nav-citas.svg" alt="nav icon citas">
                <p class="text-base font-semibold text-[#27ABB1] text-center">Mis citas</p>
            </div>
            <div class="px-3.5">
                <img class="mx-auto w-[48px] h-[48px]" src="/assets/icons/nav-chat.svg" alt="nav icon chat">
                <p class="text-base font-semibold text-[#27ABB1] text-center">Chat</p>
            </div>
        </div>
        <div 
            class="px-1 bg-[#27ABB1] my-auto h-full flex items-center rounded-r-[16px]" 
            :class="{'opacity-50':!openMenu}"
            @click="openMenu = !openMenu"
        >
            <img 
                class="w-[18px] h-[36px]" 
                :src="`/assets/icons/navigation-${ openMenu ? 'left' : 'right'}.svg`" alt="open menu"
            >
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
//270

const openMenu = ref(false)
</script>
<style>
.open{
    left: 0;
    transition: all 0.5s ease;
}
.close{
    left: -270px;
    transition: all 0.5s ease;
}
</style>