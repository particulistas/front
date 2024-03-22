<script setup>
import Layout from '~/layouts/default.vue'
import { useMainStore } from '~/stores/mainStore';

const mainStore = useMainStore();
</script>
<template>
  <div>
    <Layout>
        <h2 class="text-red-400">Página Principal</h2>
        <p class="bg-black text-white">Contador: {{ mainStore.counter }}</p>
        <button @click="mainStore.increment">Incrementar</button>
    </Layout>
  </div>
</template>
