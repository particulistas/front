<template>
<Layout>
    <div class="px-4 lg:px-20 py-10">
        <div class="lg:flex">
            <StepsSidebar2/>
            <UsersProfile/> 
        </div>
    </div>
</Layout>
</template>
<script setup>
    import { ref, provide } from 'vue';
    import Layout from '~/layouts/default.vue'
    import StepsSidebar2 from './components/Publish/StepsSidebarDesktop2.vue'
    import UsersProfile from './components/Publish/UsersProfile.vue'
</script>
<style scoped>
</style>
    