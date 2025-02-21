<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
        <h1 class="text-[28px] font-medium color-666 text-center hidden lg:block">Listos para publicar </h1>

        <div class="mt-10 lg:grid lg:gap-20 lg:grid-cols-2">
            <div class="lg:w-[377px]">
                <p class="text-base font-medium color-666 lg:w-[327px] leading-[130%]">¿Qué datos quieres que publiquemos en el anuncio para que te contacten los interesados?</p>
                <div class="flex items-center mt-6 gap-5">
                    <p class="text-base font-semibold color-666">Publicar teléfono</p>
                    <ToggleButton v-model="varbutton" />
                </div>

                <div class="mt-6 border border-[#D9D9D9] px-3 py-6">
                    <!-- input movil -->
                    <div class="flex gap-2">
                        <input type="text" class="w-[65px] h-7 text-center border border-gray-400 rounded-[8px] p-2 color-666 bg-zinc-300" placeholder="+34">
                        <input type="text" class="w-[131px] h-7 border border-gray-400 rounded-[8px] p-2 color-666 bg-zinc-300" placeholder="00000000">
                    </div>
                    <div class="mt-4 flex gap-2">
                        <button 
                            v-for="item in  ['Solo llamadas','Solo WhatsApp','Ambos']"
                            class="text-base font-medium border border-[#27ABB1] rounded-[8px] px-1.5 lg:px-2 hover:bg-[#27ABB1] hover:text-white"
                            :class="item == serviceMovil ? 'bg-[#27ABB1] text-white' : 'color-666'"
                            @click="serviceMovil = item"
                        >
                            {{ item }}
                        </button>
                    </div>
                </div>

                <div class="mt-6 text-center">
                    <button class="w-[195px] h-10 bg-[#27ABB1] text-white text-base font-bold rounded-[16px] shadow-par hover:bg-white hover:text-[#27ABB1]">
                        Guardar cambios
                    </button>
                </div>
            </div>

            <div class="lg:w-[326px] border-t border-gray-400 lg:border-t-none mt-8 lg-mt-0 pt-8 lg:pt-0">
                <h2 class="text-[20px] font-medium color-666 text-center">¿Tu anuncio está listo?</h2>
                <div class="text-center mt-6">
                    <button class="flex items-center gap-2 text-base font-medium text-white w-[206px] h-[70px] rounded-[8px] bg-[#27ABB1] hover:text-[#27ABB1] justify-center icon-container hover:bg-white shadow-par mx-auto">
                        <img class="hover-icon-27ABB1" src="/assets/icons/eye-house.svg" alt="eye-house icon">
                        Previsualizar
                    </button>
                </div>
                <h2 class="text-[20px] font-medium color-666 text-center mt-8">¿Tu anuncio está listo?</h2>
                <div class="flex mt-6 justify-between">
                    <button class="py-6 px-4 rounded-[8px] border-2 border-[#27ABB1] icon-container-hover hover:bg-[#27ABB1] group shadow-par">
                        <img class="mx-auto w-10 h-10 icon-white" src="/assets/icons/save-icon.svg" alt="save-icon icon">
                        <p class="text-base font-bold text-[#27ABB1] mt-2 group-hover:text-white">Guardar borrador</p>
                    </button>
                    <button class="py-6 px-4 rounded-[8px] button-gradient group shadow-par icon-container">
                        <img class="mx-auto w-10 h-10 hover-icon-27ABB1" src="/assets/icons/adver-house.svg" alt="adver-house icon">
                        <p class="text-base font-bold text-white mt-2 group-hover:text-[#27ABB1]">Guardar borrador</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, provide } from 'vue';
import ToggleButton from './ToggleButton.vue'

const varbutton = ref(false);
const serviceMovil = ref('Ambos');

</script>
<style scoped>
.button-gradient {
    background-image: linear-gradient(to bottom right, #E786F0 1%, #07ABB2 98%);
}

.button-gradient:hover {
    background:white ;
}

</style>