<script setup>
import Layout from '~/layouts/default.vue'
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
</script>

<template>
  <div>
    <Layout>
        <h2>Página 2</h2>
        <p>Contador: {{ mainStore.counter }}</p>
        <button @click="mainStore.increment">Incrementar</button>
    </Layout>
  </div>
</template>
