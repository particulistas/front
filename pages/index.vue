<template>
    <div>
      <Layout>
        <div class="px-4 lg:px-0">
            <HeroSection />
            <SearchSection />
        </div>
      </Layout>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '~/layouts/default.vue'
import HeroSection from './home/heroSection.vue'
import SearchSection from './home/searchSection.vue'

</script>
    