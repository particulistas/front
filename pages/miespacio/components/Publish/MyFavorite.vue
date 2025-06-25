<template>
    <div class="max-w-6xl mx-auto px-4 py-5 min-h-screen bg-white md:bg-gray-100 rounded-lg">
      <!-- <section class="max-w-6xl mx-auto px-4 py-5"></section> -->
      <!-- Top Navigation -->
      <nav >
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <!-- Left side -->
            <button class="hidden md:block text-gray-600 hover:text-gray-800">
              <img :src="navigation_left_blue" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
            </button>
  
            <!-- Center tabs -->
            <div class="hidden md:block relative inline-flex p-0.5   border border-pink-400 rounded-md" >
              <button 
                class="relative px-6 py-1.5  transition-all duration-200 focus:outline-none"
                :class="[
                  activeTab === 'favorites' 
                    ? 'text-white bg-pink-400' 
                    : 'text-gray-500 hover:text-gray-700'
                ]"
                @click="activeTab = 'favorites'"
              >
                Mis favoritos
              </button>
              <button 
                class="relative px-6 py-1.5  transition-all duration-200 focus:outline-none"
                :class="[
                  activeTab === 'shared' 
                    ? 'text-white bg-pink-400' 
                    : 'text-gray-500 hover:text-gray-700'
                ]"
                @click="activeTab = 'shared'"
              >
                Compartidos
              </button>
            </div>
  
            <!-- Right side -->
            <div class="flex items-center space-x-4">
              <button class="hidden md:block text-gray-600 hover:text-gray-800">
                <img :src="ordenar" alt="Ilustración de favoritos" class="bottom-0 h-16 w-16"/>
              </button>
              <!-- <button class="text-gray-600 hover:text-gray-800">
                <img :src="mapa" alt="Ilustración de favoritos" class="bottom-0 h-16 w-16"/>
              </button> -->
              <button class="hidden md:block text-gray-600 hover:text-gray-800" @click="toggleMap">
                <img :src="showMap ? mapaAzul : mapa" alt="Mostrar mapa" class="h-16 w-16" />
              </button>
            </div>

            <div class="lg:hidden flex justify-end space-x-2 lg:space-x-3"> 
              <button 
                class="flex items-center py-2.5 px-2 lg:px-3  btn-primary-inverse shadow-none rounded-[8px]"
                @click="showMap = true"
              >
                <img class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" :src="`/assets/icons/point-house.svg`">
                <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Mapa</p>
              </button>
              <button 
                class="flex items-center py-2.5 px-2 lg:px-3  btn-primary-inverse shadow-none rounded-[8px]"
                @click="showMap = false"
              >
                <img class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" :src="`/assets/icons/lista-house.svg`">
                <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Vista</p>
              </button>
            </div>


            
          </div>
        </div>
      </nav>
  
      <!-- Secondary Navigation -->
      <!--   <div class="bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center space-x-4">
          <button class="flex items-center text-teal-500 text-sm">
            <FilterIcon class="h-4 w-4 mr-1" />
            Ordenar
          </button>
          <button class="flex items-center text-teal-500 text-sm">
            <MapPinIcon class="h-4 w-4 mr-1" />
            Mapa
          </button>
        </div>
      </div> -->
  
      <!-- Main Content -->
      <div v-if="!showMap">
        <main v-if="favorites.length === 0" class="max-w-2xl mx-auto px-4 py-12">
          <div class="text-center">
            <!-- Illustration -->
            <div class="mb-8 relative">
              <div class="w-53 h-53 mx-auto inset-0 flex  items-center justify-center">
                <!-- <div class=" inset-0 flex items-center justify-center"> -->
                <!--   <div class="bg-teal-500 w-32 h-24 rounded-lg flex items-center justify-center">
                    <HeartIcon class="h-12 w-12 text-pink-400" />
                  </div> -->
                <!-- </div> -->
                <img :src="vacio" alt="Ilustración de favoritos" />
              </div>
            </div>
    
            <!-- Text content -->
            <h1 class="text-xl font-semibold text-gray-800 mb-2">
              No tienes anuncios favoritos
            </h1>
            <p class="text-gray-600 mb-8">
              ¡Si deseas guardar un inmueble como favorito, pulsa el icono de corazón en el anuncio!
            </p>
    
            <!-- Features list -->
            <div class="space-y-6 text-left">
              <div class="flex items-start space-x-3">
                <HeartIcon class="h-6 w-6 text-gray-400 mt-1" />
                <p class="text-gray-600">
                  Guarda todos tus favoritos en el mismo lugar
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <BellIcon class="h-6 w-6 text-gray-400 mt-1" />
                <p class="text-gray-600">
                  Recibirás notificaciones cuando el precio o detalles del anuncio cambien
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <PencilIcon class="h-6 w-6 text-gray-400 mt-1" />
                <p class="text-gray-600">
                  Toma notas personales sobre lo que pienses de cada anuncio
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <ShareIcon class="h-6 w-6 text-gray-400 mt-1" />
                <p class="text-gray-600">
                  Crea una lista compartida con las personas con las que busques piso
                </p>
              </div>
            </div>
          </div>
        </main>
        

        <div class="max-w-6xl mx-auto px-4 py-5">
          <!-- <h1 class="text-4xl font-semibold text-gray-700 mb-8">Tus propiedades favoritas</h1> -->
          
          <div v-if="loading" class="text-center py-12">
            <p>Cargando tus favoritos...</p>
          </div>
          
          <!-- <div v-else-if="favorites.length === 0" class="text-center py-12">
            <p>Aún no tienes propiedades favoritas</p>
          </div> -->
          
          <div v-else>
            <div v-for="property in favorites" :key="property.id" class="mb-8">

              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <!-- Botón de favoritos -->
                <!-- <FavoriteButton :property="property" class="absolute top-4 right-4 z-10" /> -->
                
                <!-- Imágenes -->
                <!-- <PropertyImages :images="property.media" /> -->
                
                
                <!-- Encabezado -->
                <!-- <div class="bg-[#27ABB1] py-2 px-4 flex justify-between items-center">
                  <span class="text-white font-medium">
                    {{ property.status === 'Publish' ? 'Publicado' : 'Borrador' }}
                  </span>
                  <span class="text-white">
                    {{ formatTransaction(property.transaction) }} {{ property.category?.name }}
                  </span>
                </div> -->
              
              </div>

              <Card :property="property" @refresh-favorites="fetchFavorites(authId)"/>

            </div>
          </div>
        </div>
      </div>

      <!-- Mapa de Google -->
       <!-- <div 
                v-if="openMap" 
                class="bg-gray-200 flex-grow rounded-[12px] py-24 h-[660px] sticky top-0 left-0"
            >
                <h1 class="text-center text-5xl font-bold">MAPA</h1>
            </div> -->
            
      <div v-if="showMap" class="h-[600px] w-full md:w-[880px] rounded-lg overflow-hidden shadow-lg pt-2">
        <GoogleMap
          :api-key="googleMapsApiKey"
          :center="mapCenter"
          :zoom="12"
          style="width: 100%; height: 100%"
          map-type-id="roadmap"
        >
          <Marker
            v-for="(property, index) in favoritesWithCoordinates"
            :key="`marker-${index}`"
            :options="{
              position: {
                lat: parseFloat(property.latitude),
                lng: parseFloat(property.longitude)
              },
              clickable: true
            }"
            @click="openInfoWindow(property)"
          />
          
          <InfoWindow
            v-if="selectedProperty"
            :options="{
              position: {
                lat: parseFloat(selectedProperty.latitude),
                lng: parseFloat(selectedProperty.longitude)
              },
              pixelOffset: { width: 0, height: -40 }
            }"
            @closeclick="selectedProperty = null"
          >
            <div class="p-2 bg-white max-w-xs">
              <h3 class="font-bold text-sm">{{ selectedProperty.address }}</h3>
              <p class="text-xs">
                {{ formatTransaction(selectedProperty.transaction) }}: 
                {{ selectedProperty.rental_price ? `${selectedProperty.rental_price} €/mes` : `${selectedProperty.sale_price} €` }}
              </p>
              <button 
                @click.stop="goToProperty(selectedProperty.id)"
                class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
              >
                Ver detalles
              </button>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>
      

    </div>
  </template>
  
  <script setup>
    import { 
      ChevronLeftIcon, ArrowDownWideNarrowIcon, MapIcon, FilterIcon, MapPinIcon,
      HeartIcon, BellIcon, PencilIcon,  ShareIcon
    } from 'lucide-vue-next'
    import vacio from '/assets/imgs/myFavoriteVacio.svg'
    import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'
    import ordenar from '/assets/icons/ordenar.svg'
    import mapa from '/assets/icons/mapa.svg'
    import mapaAzul from '/assets/icons/mapaAzul.svg'

    import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
    

    import { ref, onMounted, computed,createApp } from 'vue';
    //import { useAuthStore } from '@/stores/auth';
    import { useFavoriteData } from '@/stores/favorite'
    import imageSection from '../imageSectionAds.vue'
    import Card from '../propertyCardFavorite.vue'


    const googleMapsApiKey = ref('');
    const auth = useAuthStore();
    const favorites = ref([]);
    const loading = ref(true);

    const activeTab = ref('favorites')

    const router = useRouter()
    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');

    const showMap = ref(false);
    const selectedProperty = ref(null);

    const styleCard = ref('expandido')
    const openMap = ref(false)
    provide('openMap',openMap)
    provide('styleCard',styleCard)

    // Filtra propiedades con coordenadas válidas
    /* const favoritesWithCoordinates = computed(() => {
      return favorites.value.filter(property => 
        property.latitude && property.longitude &&
        !isNaN(parseFloat(property.latitude)) && 
        !isNaN(parseFloat(property.longitude))
      );
    }); */

    const favoritesWithCoordinates = computed(() => {
      return favorites.value.filter(property => {
        const lat = parseFloat(property.latitude);
        const lng = parseFloat(property.longitude);
        return !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
      });
    });

    // Calcula el centro del mapa basado en las propiedades
     /* const mapCenter = computed(() => {
      if (favoritesWithCoordinates.value.length === 0) {
        return { lat: 40.4168, lng: -3.7038 }; // Coordenadas de Madrid por defecto
      }
      
      const latSum = favoritesWithCoordinates.value.reduce((sum, property) => 
        sum + parseFloat(property.latitude), 0);
      const lngSum = favoritesWithCoordinates.value.reduce((sum, property) => 
        sum + parseFloat(property.longitude), 0);
      
      return {
        lat: latSum / favoritesWithCoordinates.value.length,
        lng: lngSum / favoritesWithCoordinates.value.length
      };
    });  */


   /* const mapCenter = computed(() => {
      if (favoritesWithCoordinates.value.length === 0) {
        return { lat: 40.4168, lng: -3.7038 }; // Coordenadas de Madrid por defecto
      }
      
      // Filtra coordenadas inválidas
      const validCoords = favoritesWithCoordinates.value.filter(prop => 
        !isNaN(parseFloat(prop.latitude)) && 
        !isNaN(parseFloat(prop.longitude))
      );

      if (validCoords.length === 0) return { lat: 40.4168, lng: -3.7038 };

      const latSum = validCoords.reduce((sum, property) => 
        sum + parseFloat(property.latitude), 0);
      const lngSum = validCoords.reduce((sum, property) => 
        sum + parseFloat(property.longitude), 0);
      
      return {
        lat: latSum / validCoords.length,
        lng: lngSum / validCoords.length
      };
    });*/

    const mapCenter = ref({ lat: 40.4168, lng: -3.7038 }); // Valores por defecto

    // Función para actualizar el centro
    const updateMapCenter = () => {
      if (favoritesWithCoordinates.value.length === 0) {
        mapCenter.value = { lat: 40.4168, lng: -3.7038 };
        return;
      }
      
      const validCoords = favoritesWithCoordinates.value.filter(prop => 
        !isNaN(parseFloat(prop.latitude)) && 
        !isNaN(parseFloat(prop.longitude))
      );

      if (validCoords.length === 0) return;

      const latSum = validCoords.reduce((sum, property) => 
        sum + parseFloat(property.latitude), 0);
      const lngSum = validCoords.reduce((sum, property) => 
        sum + parseFloat(property.longitude), 0);
      
      mapCenter.value = {
        lat: latSum / validCoords.length,
        lng: lngSum / validCoords.length
      };
    };

    

    const toggleMap = () => {
      showMap.value = !showMap.value;
      if (showMap.value) {
        updateMapCenter(); // Actualiza el centro cuando se muestra el mapa
      }
      console.log('Map Center:', mapCenter.value);
    };

    const openInfoWindow = (property) => {
      selectedProperty.value = property;
    };

    const goToProperty = (id) => {
      //router.push(`/propiedades/${id}`);
      router.push(`/inmuebles/preview?id=${id}`);
    };


    const formatTransaction = (transaction) => {
      return {
        rental: 'Alquiler',
        sale: 'Venta',
        both: 'Alquiler/Venta'
      }[transaction] || transaction;
    };

    onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
        
        googleMapsApiKey.value = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY; // O usa process.env.GOOGLE_MAPS_API_KEY
        
        await fetchFavorites(authId.value); 

    });

    //const fetchFavorites = async (userId) => {
    async function fetchFavorites(userId) {
      try {
        loading.value = true;
        const store = useFavoriteData();
       const response = await store.getUserFavorites(1,userId);

        favorites.value = response.data;
        updateMapCenter(); // Actualiza el centro después de cargar
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        loading.value = false;
      }
    };

   

    
  </script>