<template>
    <div class=" flex-grow">
        <img  src="/assets/imgs/2.png" >
      
    </div>
    <ModalQuestions />
</template>
<script setup>
import { ref, provide } from 'vue';
import ModalQuestions from './ModalQuestions.vue'
import UploadFiles from './UploadFiles.vue'

const openModal = ref(false)
provide('openModal',openModal)
</script>