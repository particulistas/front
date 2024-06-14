<template>
    <Modal :open="openStyleModal" classes="bg-white max-w-[211px] rounded-[6px] pb-2" @clickOut="openStyleModal = false">
        <h1 class="text-[20px] font-bold color-07ACB4 px-6 pt-4 pb-3">Estilo</h1>
        <button 
            class="w-full h-12 text-[20px] font-bold flex justify-center items-center"
            @click="styleCard = 'contraido'"
            :class="styleCard == 'contraido' ? 'primary-active' : 'color-07ACB4'"
        >
            <img class="w-8 h-9 mr-2 primary-icon" src="/assets/icons/estilo-contraido.svg" alt="point map icon">
            Contraido
        </button>
        <button 
            class="w-full h-12 text-[20px] font-bold flex justify-center items-center"
            :class="styleCard == 'expandido' ? 'primary-active' : 'color-07ACB4'"
            @click="styleCard = 'expandido'"
        >
            <img class="w-8 h-9 mr-2 primary-icon" src="/assets/icons/estilo-expandido.svg" alt="expandido map icon">
            Expandido
        </button>
    </Modal>
</template>
<script setup>
import { ref, inject } from 'vue';
import Modal from '~/pages/components/modal.vue'

const styleCard = inject('styleCard');
const openStyleModal = inject('openStyleModal');

</script>