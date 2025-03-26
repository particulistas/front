<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header>
        <div class="bg-yellow-300 py-2 px-4 text-center">
          <span class="text-sm font-medium">Previsualización del anuncio</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-white">
          <a href="#" class="text-blue-500 text-sm flex items-center">
            <ChevronLeftIcon class="h-4 w-4 mr-1" />
            Volver a anuncios
          </a>
          <span class="text-sm">Alquiler oficina</span>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-4 py-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Left Column - Images and Basic Info -->
          <div class="md:col-span-2">
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
              <button class="p-2 bg-teal-500 rounded-full">
                <MessageCircleIcon class="h-5 w-5 text-white" />
              </button>
              <button class="p-2 bg-teal-500 rounded-full">
                <PhoneIcon class="h-5 w-5 text-white" />
              </button>
              <button class="p-2 bg-teal-500 rounded-full">
                <CalendarIcon class="h-5 w-5 text-white" />
              </button>
              <button class="p-2 bg-teal-500 rounded-full">
                <ShareIcon class="h-5 w-5 text-white" />
              </button>
              <div class="flex-grow"></div>
              <button class="p-2 text-teal-500">
                <HeartIcon class="h-5 w-5" />
              </button>
            </div>
  
            <!-- Property Title -->
            <h1 class="text-lg font-medium mb-1">
              Oficina venta en calle Manzanela. El Torreón, Las Rozas de Madrid
            </h1>
            <p class="text-xl font-bold mb-6">60.000 €</p>
  
            <!-- Description -->
            <div class="mb-6">
              <h2 class="text-lg font-medium mb-2">Descripción del anunciante</h2>
              <p class="text-gray-700 text-sm mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-gray-700 text-sm mb-3">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p class="text-gray-700 text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
  
          <!-- Right Column - Details and Contact -->
          <div class="bg-white rounded-lg shadow-sm p-4">
            <!-- Contact Section -->
            <div class="mb-6">
              <h3 class="text-sm font-medium mb-3">Contacta con el anunciante</h3>
              <div class="grid grid-cols-4 gap-2 mb-4">
                <div class="flex flex-col items-center">
                  <div class="p-2 bg-teal-500 rounded-lg mb-1">
                    <MessageCircleIcon class="h-5 w-5 text-white" />
                  </div>
                  <span class="text-xs">Chat</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="p-2 bg-teal-500 rounded-lg mb-1">
                    <PhoneIcon class="h-5 w-5 text-white" />
                  </div>
                  <span class="text-xs">Llamar</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="p-2 bg-teal-500 rounded-lg mb-1">
                    <CalendarIcon class="h-5 w-5 text-white" />
                  </div>
                  <span class="text-xs">Cita</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="p-2 bg-teal-500 rounded-lg mb-1">
                    <ShareIcon class="h-5 w-5 text-white" />
                  </div>
                  <span class="text-xs">Enviar</span>
                </div>
              </div>
            </div>
  
            <!-- Features -->
            <div class="grid grid-cols-5 gap-2 mb-6">
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <SquareIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">150m²</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <LayoutIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">4</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <BedIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">2</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <BathIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">2 baños</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <ThermometerIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">A+ Energía</span>
              </div>
            </div>
  
            <div class="grid grid-cols-5 gap-2 mb-6">
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <HomeIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Oficina</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <MonitorIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Amueblado</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <CarIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Garaje</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <KeyIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Ext. Llaves</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <ThumbsUpIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Buen estado</span>
              </div>
            </div>
  
            <div class="grid grid-cols-3 gap-2 mb-6">
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <CalendarIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Calefacción</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <AirVentIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">A/C</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="p-2 bg-gray-100 rounded-lg mb-1">
                  <ClockIcon class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs text-center">Antigüedad 10 Años</span>
              </div>
            </div>
  
            <!-- Location -->
            <div class="mb-6">
              <h3 class="flex items-center text-sm font-medium mb-2">
                <MapPinIcon class="h-5 w-5 mr-1" />
                Ubicación
              </h3>
              <p class="text-sm mb-3">El Torreón, Las Rozas de Madrid</p>
              <div class="h-48 bg-gray-200 rounded-lg relative">
                <!-- Map placeholder -->
                <img 
                  :src="'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vmHYebGeyLj8CBQ3McQ4In6UEoGVrH.png'" 
                  alt="Mapa de ubicación"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
  
            <div class="text-xs text-gray-500 text-center mt-4">
              Publicado por: Sandro | Hace 2 meses | ID: 6543210987
            </div>
          </div>
        </div>
      </main>
  
      <!-- Footer Actions -->
      <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-4">
        <button class="flex-1 bg-teal-500 text-white py-3 px-4 rounded-lg hover:bg-teal-600 transition-colors">
          Seguir editando
        </button>
        <button class="flex-1 bg-white border border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <HomeIcon class="h-5 w-5 text-gray-600" />
          Publicar anuncio
        </button>
      </footer>
    </div>
  </template>
  

<script setup>
    import { ref, onMounted } from 'vue';

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

    onMounted(async () => {
        //const { data } = await useFetch(`/api/properties/${route.params.id}/preview`);
    // property.value = data.value;
        await getProperties(route.query.id);
    });

    async function getProperties(id) {
        const store = usePropertieData();
        const data = await store.getProperties(id);
      //  alert(data.id);
        property.value = data;
      //  alert(property.value);
        
        
    };

</script>