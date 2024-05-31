<template>
    <Modal :open="openModal" classes="py-8 px-10 bg-[#F5F5F5]">
        <div class="relative">
            <img class="cursor-pointer absolute top-0 right-[-20px] w-4 md:w-6 h-4 md:h-6" src="/assets/icons/timesblue.svg" alt="close icon" @click="closeModal">
            <h1 class="text-xl md:text-[28px] font-medium color-666 py-2 px-2.5">Adriana, danos tu opinión</h1>
        </div>
        <div class="relative">
            <textarea 
                v-model="opinion" 
                @input="updateCounter" 
                :maxlength="maxChars" 
                class="rounded-[6px] bg-white border border-gray-400 px-4 pt-4 pb-7 text-sm w-full h-[142px]"
            ></textarea>
            <p class="text-sm color-666 absolute bottom-4 right-4 italic">{{ opinion.length }} / {{ maxChars }} Caracteres</p>
        </div>
        <div class="mt-6 flex justify-center gap-3">
            <img v-for="star in 5" class="w-8 md:w-[48px] h-8 md:h-[48px]" src="/assets/icons/mediumStarNull.svg" alt="star icon">
        </div>
        <div class="mt-10 flex justify-center gap-3">
            <button @click="closeModal" class="btn-secondary text-lg md:text-[20px] font-medium rounded-[16px] text-center w-[128px] py-2.5 md:py-3">
                Cancelar
            </button>
            <button class="btn-primary text-lg md:text-[20px] font-medium rounded-[16px] text-center w-[128px] py-2.5 md:py-3">
                Enviar
            </button>
        </div>
    </Modal>
</template>

<script setup>
import { ref, inject } from 'vue'
import Modal from '~/pages/components/modal.vue'

const opinion = ref('')
const openModal = inject('openModal')
const maxChars = 300 


const updateCounter = () => {
    if (opinion.value.length > maxChars) {
        opinion.value = opinion.value.slice(0, maxChars)
    }
}

const closeModal = () => {
    openModal.value = false;
}
</script>
