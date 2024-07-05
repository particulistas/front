<template>
<Layout>
    <div class="px-4 lg:px-20 py-10">
        <div class="lg:flex">
            <StepsSidebar />
            <!-- <FirstStep /> -->
            <SecondStep />
        </div>
    </div>
</Layout>
</template>
<script setup>
import { ref, provide } from 'vue';
import Layout from '~/layouts/default.vue'
import StepsSidebar from './components/Publish/StepsSidebarDesktop.vue'
import FirstStep from './components/Publish/FirstStep.vue'
import SecondStep from './components/Publish/SecondStep.vue'

</script>
<style scoped>
</style>
    