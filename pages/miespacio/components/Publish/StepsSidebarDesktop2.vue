<template>
        <!-- <div  class="bg-[#155D61] rounded-r-[24px] w-[311px] py-4 hidden lg:inline max-h-[100vh] md:max-h-auto"> -->
        <div class="bg-[#155D61] rounded-[24px] w-[311px] py-4 hidden lg:inline max-h-[100vh] md:max-h-auto">

            <div class="mt-9 flex items-center px-6">
                <!-- <img class="w-[52px] h-[52px] rounded-full object-cover" src="https://fundacioncompartir.org/sites/default/files/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg" alt="img usuario"> -->
                <!-- <img class="w-[52px] h-[52px] rounded-full object-cover" src="/assets/avatars/perfil.jpg" alt="img usuario"> -->
                <!-- <img  class="small-image" :src="imageUrl + avatar" alt="img usuario">
                <img  class="small-image" :src="camara" alt="img camara"> -->
                <img v-if="avatar" class="w-[52px] h-[52px] rounded-full object-cover" :src="imageUrl + avatar" alt="Imagen de Perfil">
                <img v-else class="w-[52px] h-[52px] rounded-full object-cover" :src="camara" alt="Imagen de Perfil">
          
                <p class="text-white text-[20px] font-medium ml-4">{{ authName }}</p>
            </div>
            <div class="mt-10">

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center" @click="space">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-mi-espacio.svg" alt="sidemenu-mi-espacio icon">
                    <p class="text-base font-medium text-white">Mi espacio</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center mt-4" @click="anuncios">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-mis-anuncios.svg" alt="sidemenu-mis-anuncios icon">
                    <p class="text-base font-medium text-white">Mis Anuncios</p>
                </div>

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center" @click="visitOrganizer">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-visitas.svg" alt="sidemenu-visitas icon">
                    <p class="text-base font-medium text-white">Organizador de visitas</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center mt-4" @click="inquilino">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-perfil.svg" alt="sidemenu-perfil icon">
                    <p class="text-base font-medium text-white">Perfil como inquilino</p>
                </div>

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center" @click="favorito">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-favoritos.svg" alt="sidemenu-favoritos icon">
                    <p class="text-base font-medium text-white">Mis favoritos</p>
                </div>

                <div class="link-menu pl-9  cursor-pointer py-2.5 flex items-center" @click="searches">
                    <img class="w-5 h-5 mr-2" src="/assets/icons/sidemenu-busquedas.svg" alt="sidemenu-busquedas icon">
                    <p class="text-base font-medium text-white">Mis busquedas</p>
                </div>
                <div class="mx-6 border-b border-white mt-3"></div>

                <button class="btn-config ml-4 mb-6 mt-5 flex items-center text-white text-[20px] font-medium" @click="settings">
                    <div class="p-2 rounded-full btn-icon">
                        <img class="w-6 h-6" src="/assets/icons/configuracion.svg" alt="sidemenu-busquedas icon">
                    </div>
                    Configuración
                </button>

                <div class="link-menu pl-9 cursor-pointer py-2.5 flex items-center mt-4" @click="logout">
                    <svg class="w-5 h-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 16l5-4-5-4v3H3v2h7v3z"/>
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2v-4h-2v4H6V4h8v4h2V4a2 2 0 00-2-2z"/>
                    </svg>
                    <p class="items-center text-white text-[20px] font-medium">Cerrar Sesión</p>
                </div>
                <!-- <ion-button @click="logout" rel="noopener noreferrer" href="/Login">Cerrar Sesión</ion-button> -->
          


            </div>
        </div> 
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import camara from '/assets/icons/camara.svg'


    const isMenuOpen = inject('isSideMenuOpen');

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

        //  const authStore = useAuthStore();
    const router = useRouter();
    
    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');
    const avatar = ref('');
    const imageUrl = ref('');

    onMounted(() => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
        avatar.value = localStorage.getItem('avatar');
        imageUrl.value = useRuntimeConfig().public.IMAGE_URL_AVATARS; 

    });

    const current = ref(1)
    function anuncios() {
            router.push('/miespacio/Ads')
    }
    function space() {
        router.push('/miespacio/Space')
    }
    function visitOrganizer() {
        router.push('/miespacio/VisitOrganizer')
    }
    function inquilino() {
        router.push('/miespacio/Inquilino')
    }
    function favorito() {
        router.push('/miespacio/Favorito')
    }
    function searches() {
        router.push('/miespacio/Searches')
    }
    function settings() {
        router.push('/miespacio/Settings')
    }

    function logout() {
        localStorage.clear();
        router.push('/')
    };
</script>
<style scoped>
    .slide-enter-active, .slide-leave-active {
        transition: transform 0.3s ease;
    }
    .slide-enter-from, .slide-leave-to {
        transform: translateX(-100%);
    }

    .disapear-enter-active, .disapear-leave-active {
        transition: opacity 0.3s ease;
    }
    .disapear-enter-from, .disapear-leave-to {
        opacity: 0.5;
    }

    .btn-config:hover .btn-icon{
        background-color: #40B4B9; 
        transition: all 0.2s ease;
    }

    .link-menu:hover p{
        color: #155D61;
        background-color: #f9fcfc;
    }
    .link-menu:hover img{
        filter: invert(52%) sepia(24%) saturate(2791%) hue-rotate(157deg) brightness(89%) contrast(101%);
    }
</style>