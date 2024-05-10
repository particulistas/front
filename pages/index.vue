<template>
  <div>
    <Layout>
      <div class="bg-E2E1E1">
        <p class="text-center text-2xl font-medium">Contador: {{ mainStore.counter }}</p>
        <button @click="mainStore.increment">Incrementar</button>
      </div>
    </Layout>
  </div>
</template>
<script setup>
import Layout from '~/layouts/default.vue'
import { useMainStore } from '~/stores/mainStore';

const mainStore = useMainStore();
</script>
