<template>
    <header class="bg-white flex px-4 lg:px-10 pb-2 lg:pb-3">

        <div class="flex items-center pt-3 lg:pt-5 lg:pb-2 lg:ml-[-10px]">
            <!-- <button @click="toggleMenu" class="hover-chield-icon-white hover-bg-07ACB4 rounded-[6px] p-1 lg:p-2.5 md:hidden">
                <img  class="w-6 h-[18px] lg:w-auto lg:h-auto" src="/assets/icons/BurgerMenu.svg" alt="Burger menu particulistas"/>
            </button> -->

            <button v-if="authId" @click="toggleMenu"   class="hover-chield-icon-white hover-bg-07ACB4 rounded-[6px] p-1 lg:p-2.5 md:hidden" >
                <img  
                    class="w-6 h-[18px] lg:w-auto lg:h-auto" 
                    src="/assets/icons/BurgerMenu.svg" 
                    alt="Burger menu particulistas"
                />
            </button>



            <nuxt-link to="/" class="ml-1 lg:ml-2.5">
                <img  class="w-[97px] h-[22px] lg:w-auto lg:h-auto" src="/assets/fulllogo.svg" alt="fulllogo particulistas"/>
            </nuxt-link>
        </div>

        <!-- icons desktop -->
        <div class="ml-auto hidden lg:flex">
            <button @click="mySpace" class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/cuadrado.svg" alt="Mi espacio"/>
                Mi espacio
            </button>
            <button @click="myChat" class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Chat.svg" alt="Chat"/>
                Chat
            </button>
            <button @click="myVisit" class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Calendario.svg" alt="Mis visitas"/>
                Mis visitas
            </button>
            <button @click="myNotification" class="flex items-center gap-2 color-07ACB4 hover-bg-07ACB4 hover-chield-icon-white hover:text-white font-medium text-[20px] pt-5 pb-2 px-2 rounded-b-[6px]">
                <img  class="" src="/assets/icons/Notificaciones.svg" alt="Avisos"/>
                Avisos
            </button>
        </div>

        <!-- icons mobile -->
        <div class="flex flex-grow lg:hidden justify-around pt-3 items-center px-1">
            <img  class="w-4 h-4" src="/assets/icons/message.svg" alt="message icon"/>
            <img  class="w-4 h-4" src="/assets/icons/bell.svg" alt="bell icon"/>
        </div>
        <div class="flex gap-1.5 lg:gap-4 ml-auto lg:ml-[28px] items-center pt-3 lg:pt-5 lg:pb-2">
            <button
                class="btn-outline-E786F0 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4"
                @click="publish"
            >
                Publica
            </button>
            <!-- <nuxt-link to="/ingresar" class="btn-outline-07ACB4 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4">
                Accede
            </nuxt-link> -->
            <nuxt-link v-if="!authId" to="/ingresar" class="btn-outline-07ACB4 btn-border-2 rounded-lg lg:rounded-full px-3 lg:px-4 py-1 lg:py-[6px] text-sm lg:text-[20px] font-medium leading-4">
                Accede
            </nuxt-link>

        </div>
    </header>
    <FixedNav />
    <sideMenu />


    <Modal :open="openPublishModal" classes="bg-[#155D61] w-full max-w-[100%] p-0 rounded-none" @clickOut="openPublishModal = false">
        <!-- head -->
        <div class="flex px-4 py-3 icon-container lg:hidden">
            <h1 class="text-white text-[28px] text-center font-medium flex-grow">Crea tu anuncio</h1>
            <img 
                class="ml-auto" 
                src="/assets/icons/real-times.svg" 
                alt="close icon"
                @click="openPublishModal = false"
            >
        </div>

        <div class="bg-white rounded-t-[24px] px-5 max-h-[90vh] overflow-y-auto pb-10">
            <Stepsbar />
            <div class="pb-5 border-b border-gray-300">
                <h1 class="text-[20px] font-medium text-center color-666">Datos principales</h1>
            </div>
            <div class="mt-6">
                <FirstStep /> 
                 <SecondStep /> 
                 <ThirdStep />
                <FourthStep />
            </div>
        </div>
    </Modal>
</template>
<script setup>
    import { ref, provide } from 'vue'
    import { useRouter } from 'vue-router'

    import FixedNav from './fixedNav.vue'
    import sideMenu from './sideMenu.vue'
    import Modal from '~/pages/components/slidingModal.vue'
    import Stepsbar from '~/pages/inmuebles/components/Publish/StepsSidebarMobile.vue'
    import FirstStep from '~/pages/inmuebles/components/Publish/FirstStep.vue'
    import SecondStep from '~/pages/inmuebles/components/Publish/SecondStep.vue'
    import ThirdStep from '~/pages/inmuebles/components/Publish/ThirdStep.vue'
    import FourthStep from '~/pages/inmuebles/components/Publish/FourthStep.vue'

    const router = useRouter()
    const nuxtApp = useNuxtApp();
    const windowWidth = nuxtApp.$windowWidth;

    const isSideMenuOpen = ref(false)
    const openPublishModal = ref(false)

    function toggleMenu() {
        isSideMenuOpen.value = !isSideMenuOpen.value;
    }

    function publish() {
    /*     if(windowWidth > 1020){
         router.push('/inmuebles/publicar')
        }else{
            openPublishModal.value = true;
        } */

        if (authId.value){
            router.push('/inmuebles/publicar')
        }
        else{
           router.push('/ingresar')
        }
    }


    provide('isSideMenuOpen',isSideMenuOpen)
    provide('openPublishModal',openPublishModal)

    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');

    onMounted(() => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');

    });

    function mySpace() {
        if (authId.value){
            router.push('/miespacio/Space')
        }
        else{
           router.push('/ingresar')
        }
    }

    function myChat() {
        if (authId.value){
            router.push('/miespacio/Chat')
        }
        else{
           router.push('/ingresar')
        }
    }

    function myVisit() {
        if (authId.value){
            router.push('/miespacio/Visits')
        }
        else{
           router.push('/ingresar')
        }
    }

    function myNotification() {
        if (authId.value){
            router.push('/miespacio/Notifications')
        }
        else{
           router.push('/ingresar')
        }
    }

</script>