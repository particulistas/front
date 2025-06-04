<template>
    <section class="max-w-4xl mx-auto px-4 py-5">
      <!-- Main heading -->
      <div class="text-center mb-12" v-if="properties.length === 0">
        <h1 class="text-4xl font-semibold text-gray-700 mb-4">¿Todavía sin anuncios?</h1>
        <p class="text-xl text-gray-600 mb-2">Vivienda, trastero, local, parking, habitación...</p>
        <p class="text-xl font-medium text-gray-700">
          ¡Puedes publicar gratis hasta 2 anuncios de cada tipo!
        </p>
      </div>

      <!-- <div v-for="item in 2" class="max-w-6xl mx-auto px-4 py-5">
                    <Card />
                </div> -->
              
      <!-- Iteramos sobre las propiedades -->
      <button 
        v-for="property in properties" 
        :key="property.id" 
        class="max-w-6xl w-full mx-auto px-4 py-5 text-left focus:outline-none"
        @click="previewProperty(property.id)"
      >
        <Card :property="property" />
      </button>

      <div class="text-center mb-12" v-if="properties.length != 0">
        <h1 class="text-4xl font-semibold text-gray-700 mb-4">¿Subir otro anuncio?</h1>
      </div>
  
      <!-- Cards container -->
      <div class="flex justify-center gap-8 mt-8">
        <!-- Create new ad card -->
        <!-- <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"> -->
          <button @click="goToPublicar" class="hover:shadow-xl transition-transform hover:scale-105">
          <div class="h-64 relative mb-6">
            <img  src="/assets/imgs/Group1.svg" alt="Ilustración de creación de anuncio" >
          </div>
        </button>
        <!-- Import existing ad card -->
        <button class="hover:shadow-xl transition-transform hover:scale-105">
          <div class="h-64 relative mb-6">
            <img  src="/assets/imgs/Group2.svg" alt="Ilustración de importar anuncio"
            >
          </div>
        </button> 
      </div>

      <!--  línea - En blanco -->
    <div class="flex justify-center gap-8 mt-8">   </div>

    </section>
  </template>
  
  <script setup>
    import { ref, provide, onMounted } from 'vue';
    import { useRouter } from 'vue-router'
    import Card from '../propertyCardAds.vue'

    const router = useRouter()
    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');
    const properties = ref([]); // Array para almacenar las propiedades

    const styleCard = ref('expandido')

    const goToPublicar = () => {
      router.push('/inmuebles/publicar')
    }

    const openMap = ref(false)
    provide('openMap',openMap)

    provide('styleCard',styleCard)

    onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
        
        await fetchProperties(authId.value); // Llamamos a la función para obtener las propiedades

    });

    async function fetchProperties(userId) {
    //const fetchProperties = async () => {
      const url = useRuntimeConfig().public.BASE_URL
      try {
        const store = usePropertieData();
        //const data = await store.getFetchProperties(userId);
        const response = await store.getFetchProperties(userId);

        // const response = await fetch('http://tu-backend.com/api/properties', {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${authToken.value}`
        //   }
        // });
        
        // if (!response.ok) {
        //   throw new Error('Error al obtener las propiedades');
        // }
        
        //const data = await response.json();
       // properties.value = data; // Almacenamos las propiedades en el ref
         // Asigna solo el array data a properties.value
        properties.value = response.data; // <-- Esto es lo clave
      } catch (error) {
        console.error('Error:', error);
      }
    };

    /* async function fetchMainCategories() {
    //const fetchMainCategories = async () => {
        const url = useRuntimeConfig().public.BASE_URL
        try {
            const response = await $fetch(`${url}/categories/main`);
            optionsType.value = response.map(category => ({
                value: category.id,
                label: category.name,
            })); 

        } catch (error) {
            console.error('Error fetching main categories:', error);
        }
    }; */

    /* const previewProperty = () => {
        // const propertyId = formData.value.propertyId;
        // const previewUrl = `/inmuebles/preview?id=${propertyId}`;
       
        // Navegación en la misma ventana usando Vue Router
        router.push(`/inmuebles/preview?id=${propertyId}`);
    }; */

    const previewProperty = (propertyId) => {
      router.push(`/inmuebles/preview?id=${propertyId}`);
    };

    // const openStyleModal = ref(false)
//const openMap = ref(false)
// const openFilters = ref(false)
// const order = ref('1')

   // provide('openMap',openMap)
//provide('styleCard',styleCard)
// provide('openStyleModal',openStyleModal)
// provide('openFilters',openFilters)
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>