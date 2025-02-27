<template>
    <Layout>
        <div class="px-4 lg:px-20 py-10">
            <div class="lg:flex">
                <StepsSidebar :currentStep="currentStep" />
                <FirstStep v-if="currentStep === 1" @next-step="handleNextStep" />
                <SecondStep v-if="currentStep === 2" @next-step="handleNextStep" />
                <ThirdStep v-if="currentStep === 3" @next-step="handleNextStep" />
                <FourthStep v-if="currentStep === 4" @next-step="handleNextStep" />
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
    import ThirdStep from './components/Publish/ThirdStep.vue'
    import FourthStep from './components/Publish/FourthStep.vue'
    
    const currentStep = ref(1);
    const formData = ref({});
    
    provide('formData', formData);
    
    const handleNextStep = () => {
      if (currentStep.value < 4) {
        currentStep.value += 1;
      }
    };
    </script>
    