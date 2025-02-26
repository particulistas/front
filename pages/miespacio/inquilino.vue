<template>
<Layout>
    <div class="px-4 lg:px-20 py-10">
        <div class="lg:flex">
            <StepsSidebar2 />
            
              <!-- <Imagen3 />  -->
            <MyProfiles /> 
             
        </div>
    </div>
</Layout>
</template>
<script setup>
import { ref, provide } from 'vue';
import Layout from '~/layouts/default.vue'
import StepsSidebar from './components/Publish/StepsSidebarDesktop.vue'
import StepsSidebar2 from './components/Publish/StepsSidebarDesktop2.vue'
import Imagen3 from './components/Publish/Imagen3.vue'
import MyProfiles from './components/Publish/MyTenantProfiles.vue'
import FirstStep from './components/Publish/FirstStep.vue'
import SecondStep from './components/Publish/SecondStep.vue'
import ThirdStep from './components/Publish/ThirdStep.vue'
import FourthStep from './components/Publish/FourthStep.vue'
import ImageSection from './components/imageSection.vue'
import Menu from '~/layouts/sideMenu.vue'
import Menu2 from './components/sideMenu.vue'
</script>
<style scoped>
</style>
    