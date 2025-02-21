<template>
    <div class="max-w-4xl mx-auto p-6 bg-background rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-center text-muted">¿Todavía sin anuncios?</h2>
    <p class="text-center text-muted-foreground">Vivienda, trastero, local, parking, habitación... ¡Puedes publicar gratis hasta 2 anuncios de cada tipo!</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="p-4 border border-border rounded-lg flex flex-col items-center">
        <img aria-hidden="true" alt="Create your ad" src="https://openui.fly.dev/openui/100x100.svg?text=📝" />
        <h3 class="mt-2 text-lg font-medium text-primary">Crea tu anuncio de cero</h3>
        </div>
        <div class="p-4 border border-border rounded-lg flex flex-col items-center">
        <img aria-hidden="true" alt="Import your ad" src="https://openui.fly.dev/openui/100x100.svg?text=📄" />
        <h3 class="mt-2 text-lg font-medium text-primary">Trae tu anuncio publicado en otro portal</h3>
        </div>
    </div>
    </div>
</template>
<script setup>
import { ref, provide } from 'vue';
import ModalQuestions from './ModalQuestions.vue'
import UploadFiles from './UploadFiles.vue'

const openModal = ref(false)
provide('openModal',openModal)
</script>