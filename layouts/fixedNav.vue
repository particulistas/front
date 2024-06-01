<template>
    <div 
        class="fixed top-0 bottom-0 my-auto left-0 h-[90px] z-[1600] md:hidden flex items-center"
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
    <transition name="disapear">
        <div 
            v-if="openMenu"
            @click="openMenu = !openMenu" 
            class="fixed h-screen w-screen top-0 left-0 bg-[#00000080] z-[1400]"
        ></div>
    </transition>
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
.disapear-enter-active, .disapear-leave-active {
    transition: opacity 0.3s ease;
}
.disapear-enter-from, .disapear-leave-to {
    opacity: 0.5;
}
</style>