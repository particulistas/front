<template>
    <Modal :open="openNotify" classes="bg-[#155D61] rounded-none md:rounded-b-[24px] overflow-hidden md:max-w-[393px]" @clickOut="closeModal">
        <div class="h-[70px] relative py-[18px]">
            <h1 class="text-center text-[28px] font-medium text-white leading-8">Registrate</h1>
            <img class="cursor-pointer absolute top-0 bottom-0 my-auto right-4 w-6 h-6" src="/assets/icons/times.svg" alt="registro_times" @click="closeModal">
        </div>
        <div class="bg-[#D4CB50] rounded-t-[24px] py-8">
            <img class="mx-auto" src="/assets/icons/checkWhite.svg" alt="checkWhite icon">
            <h1 class="mt-[22px] text-white text-[20px] font-medium text-center leading-6">Necesitamos que aceptes para poder continuar con el registro.</h1>
        </div>
        <div class="bg-white py-5 text-center">
            <p class="text-base color-666 text-center w-[324px] mx-auto leading-4">Una vez realizado el registro podrás modificar los aspectos pertinentes en tu espacio personal </p>
            <button class="btn-primary py-3 px-[48px] rounded-[8px] text-[20px] font-bold my-5"  @click="closeModal">
                Aceptar
            </button>
        </div>
    </Modal>
</template>

<script setup>
import { ref, inject } from 'vue'
import Modal from '~/pages/components/slidingModal.vue'

const opinion = ref('')
const openNotify = inject('openNotify')
const maxChars = 300 


const updateCounter = () => {
    if (opinion.value.length > maxChars) {
        opinion.value = opinion.value.slice(0, maxChars)
    }
}

const closeModal = () => {
    openNotify.value = false;
}
</script>

