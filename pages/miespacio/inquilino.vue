<template>
<Layout>
    <div class="px-4 lg:px-20 py-10">
        <div class="lg:flex">
            <StepsSidebar2 />
            
            <MyProfiles v-if="!showProfileRoom" @show-profile-room="showProfileRoom = true" />
            <MyProfileRoom v-else @hide-profile-room="showProfileRoom = false" />
        </div>
    </div>
</Layout>
</template>
<script setup>
    import { ref, provide } from 'vue';
    import Layout from '~/layouts/default.vue'
    import StepsSidebar2 from './components/Publish/StepsSidebarDesktop2.vue'
    import MyProfiles from './components/Publish/MyTenantProfiles.vue'
    import MyProfileRoom from './components/Publish/MyTenantProfileRoom.vue'

    const showProfileRoom = ref(false);
</script>
<style scoped>
</style>
    