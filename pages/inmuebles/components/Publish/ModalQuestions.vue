<template>
    <Modal :open="openModal" classes="py-8 px-10 bg-[#F7F9F9]">
        <div class="relative">
            <img class="cursor-pointer absolute top-0 right-1 w-6 h-6" src="/assets/icons/timesblue.svg" alt="close icon" @click="closeModal">
            <h1 class="text-[20px] font-medium text-[#27ABB1]">¿Problemas? ¡Te ayudamos!</h1>
        </div>
        <div class="relative mt-4">
            <textarea 
                v-model="opinion" 
                @input="updateCounter" 
                :maxlength="maxChars" 
                class="rounded-[6px] bg-white border border-gray-400 px-4 pt-4 pb-7 text-sm w-full h-[142px]"
            ></textarea>
            <!-- <p class="text-sm color-666 absolute bottom-4 right-4 italic">{{ opinion.length }} / {{ maxChars }} Caracteres</p> -->
        </div>
        <div class="mt-2 text-right">
            <button class="btn-primary text-[20px] font-medium rounded-[8px] text-center w-[156px] py-2.5 md:py-3">
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
