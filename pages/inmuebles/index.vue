<template>
    <Layout>
        <!-- filters -->
        <section class="lg:bg-[#F5F5F5] px-4">
            <div class="shadow-par shadow-none-lg">
                <SearchSection />
            </div>
            <div class="w-[327px] my-[10px] mx-auto">
                <div class="flex w-full justify-between">
                    <button 
                        class="flex items-center py-2.5 px-2 lg:px-3 btn-primary-inverse shadow-none rounded-[8px]"
                        @click="openFilters = true"
                    >
                        <img class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" src="/assets/icons/filter-house.svg" alt="filter icon">
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Filtros</p>
                    </button>
                    <button 
                        class="flex items-center py-2.5 px-2 lg:px-3 btn-primary-inverse shadow-none rounded-[8px]"
                        @click="toggleMap"
                    >
                        <img 
                            class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" 
                            :src="`/assets/icons/${openMap ? 'lista' : 'point'}-house.svg`" 
                            :alt="`${openMap ? 'lista' : 'point map'} icon`"
                        >
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">
                            {{ openMap ? 'Lista' : 'Mapa' }}
                        </p>
                    </button>
                    <button 
                        class="flex items-center py-2.5 px-2 lg:px-3 lg:hidden btn-primary-inverse shadow-none rounded-[8px]"
                        @click="openStyleModal = true"
                    >
                        <img 
                            class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" 
                            :src="`/assets/icons/estilo-${styleCard}.svg`"
                            alt="style icon"
                        >
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Estilo</p>
                    </button>
                </div>
            </div>
        </section>  
        <!-- dropdown filters -->
        <section class="mt-3 py-2 flex justify-end items-center px-4 lg:px-20">
            <p class="text-base lg:text-[24px] font-semibold color-666 mr-2.5">Ordenar por:</p>
            <Dropdown 
                v-model="order" 
                :links="links" 
                buttonClass="border border-[#27ABB1] rounded-[8px] px-2 lg:px-3 py-1 text-base lg:text-[24px] text-[#27ABB1] leading-5 flex items-center gap-[2px]"
                :iconRight="`/assets/icons/${iconDropdown}.svg`"
                iconRightClasess="ml-2"
                openClass="bg-[#27ABB1] text-white"
                @isOpen="openDropdown"
                contentClass="lg:w-[190px] py-4"
                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
            />
        </section>

        <!-- cards list -->
        <section class="px-4 lg:px-20 my-8" :class="{'flex gap-3' : openMap }">
            <div :class="{'hidden lg:inline-block' : openMap}">
               <!--  <template v-for="item in 5">
                    <Card />
                </template> -->

                <div class="text-center mb-12" v-if="properties.length === 0">
                    <h1 class="text-4xl font-semibold text-gray-700 mb-4">¿Todavía sin anuncios?</h1>
                </div>

                <template v-for="property in properties" :key="property.id">
                    <Card :property="property"/>
                </template>

            </div>
            <div v-if="openMap" class="bg-gray-200 flex-grow rounded-[12px] py-24 h-[660px] sticky top-0 left-0">
                <!-- <h1 class="text-center text-5xl font-bold">MAPA</h1> -->
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
        </section>
    
        <StyleModal />
        <FiltersModal />
    </Layout>
</template>
<script setup>
    import { ref, provide, onMounted } from 'vue';
    import Layout from '~/layouts/default.vue'
    import SearchSection from '~/pages/home/searchSectionOld.vue'
    import Dropdown from '~/pages/components/dropdown.vue'
    import Card from './components/propertyCard.vue'
    import StyleModal from './components/StyleModal.vue'
    import FiltersModal from './components/FiltersModal.vue'
    import { useRouter } from 'vue-router'

    import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

    const router = useRouter()
    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');
    const properties = ref([]); // Array para almacenar las propiedades

    const openStyleModal = ref(false)
    const openMap = ref(false)
    const openFilters = ref(false)
    const styleCard = ref('expandido')
    const order = ref('1')
    const iconDropdown = ref('dropdown-azul')
    const googleMapsApiKey = ref('');
    const favorites = ref([]);
    const selectedProperty = ref(null);

    const links = ref([
        {value: '1', label: 'Más recientes'},   
        {value: '2', label: 'Más antiguos'},
        {value: '3', label: 'Mayor precio'},
        {value: '4', label: 'Menor precio'},
        {value: '5', label: 'Más pequeños (- m2)'},
        {value: '6', label: 'Más grandes (+ m2)'},
    ])

    const openDropdown = (open) =>{
        if(open){
            iconDropdown.value = "dropdown-open-blanco";
        }else{
            iconDropdown.value = "dropdown-azul";
        }
    }

    const openInfoWindow = (property) => {
      selectedProperty.value = property;
    }

    const formatTransaction = (transaction) => {
      return {
        rental: 'Alquiler',
        sale: 'Venta',
        both: 'Alquiler/Venta'
      }[transaction] || transaction;
    };
    

    const goToProperty = (id) => {
      //router.push(`/propiedades/${id}`);
      router.push(`/inmuebles/preview?id=${id}`);
    };

    provide('openMap',openMap)
    provide('styleCard',styleCard)
    provide('openStyleModal',openStyleModal)
    provide('openFilters',openFilters)

    const toggleMap = () => {
     // showMap.value = !showMap.value;
      openMap.value = !openMap.value;
      if (openMap.value) {
        updateMapCenter(); // Actualiza el centro cuando se muestra el mapa
      }
      //console.log('Map Center:', mapCenter.value);
    };

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

    const favoritesWithCoordinates = computed(() => {
      return favorites.value.filter(property => {
        const lat = parseFloat(property.latitude);
        const lng = parseFloat(property.longitude);
        return !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
      });
    });

    onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
        
        googleMapsApiKey.value = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY; // O usa process.env.GOOGLE_MAPS_API_KEY

        await getAllProperties(); // Llamamos a la función para obtener las propiedades
    });


    async function getAllProperties() {
    //const fetchProperties = async () => {
      const url = useRuntimeConfig().public.BASE_URL
      try {
        const store = usePropertieData();
        //const data = await store.getFetchProperties(userId);
        const response = await store.getAllProperties();

        properties.value = response; // <-- Esto es lo clave
        favorites.value = response;
        updateMapCenter();
      } catch (error) {
        console.error('Error:', error);
      }
    };

</script>

<style scoped>
.shadow-none{
    box-shadow: none;
}
@media(min-width:1020px){
    .shadow-none-lg{
        box-shadow: none;
    }
}
</style>
    