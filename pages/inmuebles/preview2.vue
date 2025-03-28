<template>
    <Layout>
        <div class="px-4 lg:px-20 py-10">
            <div class="lg:flex">
                <!-- <div class="min-h-screen bg-gray-50"> -->
                <div class="min-h-screen bg-white w-full">
                    <!-- Header -->
                    <header>
                        <div class="bg-[#D4CB50] py-2 px-4 text-center">
                            <span class="text-sm font-medium">Previsualización del anuncio</span>
                        </div>
                    </header>
                
                    <!-- Main Content -->
                    <main class="max-w-6xl mx-auto px-4 py-4">
                        <div class="flex justify-between items-center px-4 py-2 bg-white">
                            <a href="#" class="text-blue-500 text-sm flex items-center">
                                <ChevronLeftIcon class="h-4 w-4 mr-1" />
                                Volver a anuncios
                            </a>
                            
                            <!-- Visible solo en móvil -->
                            <span class="text-sm md:hidden">
                                Alquiler oficina
                            </span>
                            
                            <!-- Visible solo en desktop -->
                            <span class="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                                Alquiler oficina
                            </span>
                        </div>
                        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> -->
                        <div class="flex flex-col md:flex-row gap-6 items-stretch">
                            <!-- Left Column - Images and Basic Info -->
                            <!-- <div class="md:col-span-2"> -->
                            <!-- <div class="md:w-2/3">  -->
                            <div class="md:w-1/2 bg-white rounded-lg shadow-sm p-4">
                                <!-- Main Image -->
                                <div class="bg-blue-400 h-64 rounded-lg mb-2 relative">
                                <!-- Image placeholder -->
                                </div>
                    
                                <!-- Thumbnails -->
                                <div class="flex space-x-2 mb-4">
                                <div v-for="i in 4" :key="i" class="w-16 h-16 bg-gray-200 rounded"></div>
                                <div class="w-16 h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs">
                                    +15 Fotos
                                </div>
                                </div>
                    
                                <!-- Action Buttons -->
                                <div class="flex space-x-2 mb-4">
                                    <button 
                                        class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                                        :class="sectionSelected == 'images' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                                        @click="sectionSelected = 'images'"
                                    >         
                                        <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/image-house.svg" alt="image-house icon">
                                    </button>
                                    <button 
                                        class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                                        :class="sectionSelected == 'video' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                                        @click="sectionSelected = 'video'"
                                    >         
                                        <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/video-house.svg" alt="video-house icon">
                                    </button>
                                    <button 
                                        class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                                        :class="sectionSelected == 'tetris' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                                        @click="sectionSelected = 'tetris'"
                                    >         
                                        <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/tetris-house.svg" alt="tetris-house">
                                    </button>
                                    <button 
                                        class="rounded-[4px] from-[#07ACB4] to-[#08CCD3] box-border w-[47px] h-[47px]"
                                        :class="sectionSelected == 'map' ? 'bg-gradient-to-r shadow-par icon-container' : 'hover:bg-gradient-to-r icon-container-hover border-2 border-[#08CCD3]'"
                                        @click="sectionSelected = 'map'"
                                    >         
                                        <img class="w-[28px] h-[30px] icon-white m-auto" src="/assets/icons/point-house.svg" alt="point-house icon">
                                    </button>
                                    <div class="flex-grow"></div>
                                     <button class="p-2 text-teal-500">
                                        <img class="w-[25px] h-[26px] cursor-pointer" src="/assets/icons/share.svg" alt="share icon">
                                    </button>
                                    <button class="p-2 text-teal-500">
                                        <img 
                                            class="w-[30px] h-[26px] cursor-pointer" 
                                            @mouseover="likeHover = true"
                                            @mouseleave="likeHover = false"
                                            @click="likeCard = !likeCard"
                                            :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
                                            alt="i-like icon"
                                        >
                                    </button> 
                                </div>
                    
                                <!-- Property Title -->
                                <h1 class="text-lg font-medium mb-1">
                                    {{ property.category?.name }} en {{ transactionText }}. {{ property.address }}
                                </h1>
                                <!-- Mostrar solo precio de renta cuando es rental -->
                                <p v-if="property.transaction === 'rental'" class="text-xl font-bold mb-2">
                                Renta {{ property.rental_price }} €
                                </p>

                                <!-- Mostrar solo precio de venta cuando es sale -->
                                <p v-else-if="property.transaction === 'sale'" class="text-xl font-bold mb-2">
                                Venta {{ property.sale_price }} €
                                </p>

                                <!-- Mostrar ambos precios cuando es both o cualquier otro caso -->
                                <p v-else class="text-xl font-bold mb-2">
                                Venta {{ property.sale_price }} € | Renta {{ property.rental_price }} €
                                </p>
                    
                                <!-- Description -->
                                <div class="mb-6">
                                <h2 class="text-lg font-medium mb-2">Descripción del anunciante</h2>
                                <!-- <p class="text-gray-700 text-sm mb-3"> -->
                                    <p class="text-gray-700 text-xs sm:text-sm mb-3 text-justify">
                                    {{ property.description }}
                                </p>
                                
                                </div>
                            </div>
                    
                            <!-- Right Column - Details and Contact -->
                            <!-- <div class="bg-white rounded-lg shadow-sm p-4"> -->
                            <!-- <div class="md:w-1/3"> -->
                            <div class="md:w-1/2 bg-white rounded-lg shadow-sm p-4">
                                <div class="bg-[#F5F5F5]  rounded-lg shadow-sm p-4 sticky top-4 h-fit">
                                    <!-- Contact Section -->
                                    <div class="hidden md:block bg-white rounded-xl shadow-md p-4">
                                        <h3 class="text-gray-700 text-sm font-medium mb-3 text-center">
                                            Contacta con el anunciante
                                        </h3>
                                        <div class="grid grid-cols-4 gap-2">
                                            <button>
                                                <div class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] text-white p-2 rounded-lg w-full flex flex-col justify-center items-center mb-1">
                                                    <img class="w-[40px] h-[39px] mb-1" src="/assets/icons/house_llamar_white.svg" alt="point-house icon">
                                                    <span class="text-xs text-white">Llamar</span>
                                                </div>
                                            </button>
                                            <button>
                                                <div class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] text-white p-2 rounded-lg w-full flex flex-col justify-center items-center mb-1">
                                                    <img class="w-[40px] h-[39px] mb-1" src="/assets/icons/house_whatsapp_white.svg" alt="point-house icon">
                                                    <span class="text-xs text-white">WhatsApp</span>
                                                </div>
                                            </button>
                                            <button>
                                                <div class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] text-white p-2 rounded-lg w-full flex flex-col justify-center items-center mb-1">
                                                    <img class="w-[40px] h-[39px] mb-1" src="/assets/icons/house_chat_white.svg" alt="point-house icon">
                                                    <span class="text-xs text-white">Chat</span>
                                                </div>
                                            </button>
                                            <button>
                                                <div class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] text-white p-2 rounded-lg w-full flex flex-col justify-center items-center mb-1">
                                                    <img class="w-[40px] h-[39px] mb-1" src="/assets/icons/house_calendar_white.svg" alt="point-house icon">
                                                    <span class="text-xs text-white">Visitar</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Features -->
                                    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mt-2 md:mt-10">
                                        <!-- Card 1 - Tamaño -->
                                        <div class="info-card">
                                            <img class="w-[48px] h-[40px] mx-auto" src="/assets/icons/info-tamano.svg" alt="Tamaño">
                                            <p class="mt-1 text-base color-666 text-center font-light">Tamaño</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">180m2</p>
                                        </div>

                                        <!-- Card 2 - Planta -->
                                        <div class="info-card">
                                            <img class="w-[40px] h-[40px]  mx-auto" src="/assets/icons/info-planta.svg" alt="Planta">
                                            <p class="mt-1 text-base color-666 text-center font-light">Planta</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">4</p>
                                        </div>

                                        <!-- Card 3 - Ascensor -->
                                        <div class="info-card">
                                            <img class="w-[40px] h-[40px] mx-auto" src="/assets/icons/info-ascensor.svg" alt="Ascensor">
                                            <p class="mt-1 text-base color-666 text-center font-light">Ascensor</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                        <!-- Card 4 - Distribución  -->
                                        <div class="info-card ">
                                            <img class="w-[40px] h-[40px]  mx-auto" src="/assets/icons/info-distribucion.svg" alt="Distribución">
                                            <p class="mt-1 text-base color-666 text-center font-light">Distribución</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Diáfana</p>
                                        </div>

                                        <!-- Card 5 - Baños  -->
                                        <div class="info-card ">
                                            <img class="w-[40px] h-[40px] mx-auto" src="/assets/icons/info-banos.svg" alt="Baños">
                                            <p class="mt-1 text-base color-666 text-center font-light">N° de baños</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">1</p>
                                        </div>

                                        <!-- Card 6 móvil - Iluminación -->
                                        <div class="info-card ">
                                            <img class="w-[36px] h-[40px] mx-auto" src="/assets/icons/info-iluminacion.svg" alt="Iluminación">
                                            <p class="mt-1 text-base color-666 text-center font-light">Iluminación</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Exterior</p>
                                        </div>

                                        <div class="info-card">
                                            <img class="w-[48px] h-[40px] mx-auto" src="/assets/icons/info-tamano.svg" alt="Tamaño">
                                            <p class="mt-1 text-base color-666 text-center font-light">A / A</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                        
                                        <div class="info-card">
                                            <img class="w-[40px] h-[40px]  mx-auto" src="/assets/icons/info-planta.svg" alt="Planta">
                                            <p class="mt-1 text-base color-666 text-center font-light">Garaje</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                    
                                        <div class="info-card">
                                            <img class="w-[40px] h-[40px] mx-auto" src="/assets/icons/info-ascensor.svg" alt="Ascensor">
                                            <p class="mt-1 text-base color-666 text-center font-light">Edif. accesible</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                    
                                        <div class="info-card ">
                                            <img class="w-[40px] h-[40px]  mx-auto" src="/assets/icons/info-distribucion.svg" alt="Distribución">
                                            <p class="mt-1 text-base color-666 text-center font-light">Baño accesible</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                        
                                        <div class="info-card ">
                                            <img class="w-[40px] h-[40px] mx-auto" src="/assets/icons/info-banos.svg" alt="Baños">
                                            <p class="mt-1 text-base color-666 text-center font-light">Calefacción</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">Si</p>
                                        </div>

                                        
                                        <div class="info-card ">
                                            <img class="w-[36px] h-[40px] mx-auto" src="/assets/icons/info-iluminacion.svg" alt="Iluminación">
                                            <p class="mt-1 text-base color-666 text-center font-light">m2 utiles</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">180m2</p>
                                        </div>

                                        <div class="info-card ">
                                            <img class="w-[36px] h-[40px] mx-auto" src="/assets/icons/info-iluminacion.svg" alt="Iluminación">
                                            <p class="mt-1 text-base color-666 text-center font-light">Antiguedad</p>
                                            <p class="mt-1 text-base font-semibold color-666 text-center">30 Años</p>
                                        </div>

                                    </div>

                                    <!-- Línea separadora -->
                                    <div class="border-t border-gray-500 my-4 w-full"></div>
                        
                                    <!-- Location -->
                                    <div class="mb-6 mt-5">
                                        <h3 class="flex items-center text-sm font-medium mb-2 justify-start">
                                            <img class="w-[28px] h-[30px] mr-2" src="/assets/icons/point-house-gris.svg" alt="point-house icon">
                                            Ubicación
                                        </h3>
                                        <p class="text-sm mb-3">{{ property.address }}</p>
                                        <div class="mt-4 h-64 bg-gray-200 rounded-lg overflow-hidden">
                                            <!-- Mapa estático o dinámico -->
                                            <img 
                                                v-if="property.latitude && property.longitude"
                                                :src="`https://maps.googleapis.com/maps/api/staticmap?center=${property.latitude},${property.longitude}&zoom=15&size=600x300&markers=color:red%7C${property.latitude},${property.longitude}&key=${useRuntimeConfig().public.GOOGLE_MAPS_API_KEY}`" 
                                                alt="Mapa de ubicación"
                                                class="w-full h-full object-cover"
                                            >
                                            <!-- Fallback visual -->
                                            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
                                                <p class="text-gray-500">Mapa no disponible</p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div class="flex text-xs text-gray-500 items-center mt-4 justify-start">
                                        Publicado por: {{ property.user?.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class=" left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-4"> -->
                        <div class="md:w-1/2 left-0 right-0 bg-white  p-4 flex gap-4 mt-6">
                            <button @click="updateAdvertisement('Draft')" class="flex-1  text-white py-3 px-4 rounded-lg border-2 border-[#27ABB1] icon-container-hover hover:bg-[#27ABB1] group shadow-par">
                                <img class="mx-auto w-7 h-7 icon-white" src="/assets/icons/save-icon.svg" alt="save-icon icon">
                                <p class="text-base font-bold text-[#27ABB1] mt-2 group-hover:text-white">Seguir editando</p>
                            </button>
                            <button @click="updateAdvertisement('Publish')" class="flex-1  text-white py-6 px-4 rounded-[8px] button-gradient group shadow-par icon-container">
                                <img class="mx-auto w-7 h-7 hover-icon-27ABB1" src="/assets/icons/adver-house.svg" alt="adver-house icon">
                                <p class="text-base font-bold text-white mt-2 group-hover:text-[#27ABB1]">Publicar anuncio</p>
                            </button>
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
    </Layout>
  </template>
  

<script setup>
    import { ref, onMounted, inject, computed } from 'vue';
    import Layout from '~/layouts/default.vue'
    import Swal from 'sweetalert2';

    import { 
  ChevronLeftIcon,
  MessageCircleIcon,
  PhoneIcon,
  CalendarIcon,
  ShareIcon,
  HeartIcon,
  SquareIcon,
  LayoutIcon,
  BedIcon,
  BathIcon,
  ThermometerIcon,
  HomeIcon,
  MonitorIcon,
  CarIcon,
  KeyIcon,
  ThumbsUpIcon,
  AirVentIcon,
  ClockIcon,
  MapPinIcon
} from 'lucide-vue-next'

    const route = useRoute();
    const property = ref({});

    const sectionSelected = ref('images')
    const likeCard = ref(false)
    const likeHover = ref(false)
    const formData = inject('formData');

    const transactionText = computed(() => {
        switch(property.value?.transaction) {
            case 'rental': return 'Renta';
            case 'sale': return 'Venta';
            default: return 'Venta y Renta';
        }
    });

    onMounted(async () => {
        await getProperties(route.query.id);
    });

    async function getProperties(id) {
        const store = usePropertieData();
        const data = await store.getProperties(id);
        property.value = data;
    };

    const handleMapError = (event) => {
    event.target.src = 'https://static-maps.yandex.ru/1.x/?ll=-3.692607879638672,40.43545015171254&z=15&size=600,300&l=map&pt=-3.692607879638672,40.43545015171254,pm2rdl';
    // O usa una imagen de respaldo alternativa
    // event.target.src = '/placeholder-map.png';
    };

    async function updateAdvertisement(status) {
         try {
            const store = usePropertieData() 
            const response = await store.updatePropertieStatus(route.query.id , status)
            const mensaje = status === 'Draft' ? 'Anunció actualizado como Borrador.' : 'Anunció publicado con éxito.';
            Swal.fire({
                title: '¡Éxito!',
                text: mensaje,
                icon: 'success',
                confirmButtonText: 'OK',
            });
         } 
        catch (error) {
           // console.error('Error updating avatar:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al actualizar el Anunció .',
            });
        } 
    }

</script>
<style scoped>
    .button-gradient {
        background-image: linear-gradient(to bottom right, #E786F0 1%, #07ABB2 98%);
    }

    .button-gradient:hover {
        background:white ;
    }

</style>