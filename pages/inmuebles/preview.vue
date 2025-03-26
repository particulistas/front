<template>
    <Layout>
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-8">Previsualización de la Propiedad</h1>
            
            <!-- Mostrar todos los datos de la propiedad -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-xl font-semibold mb-4">Información Básica</h2>
                    <p><span class="font-medium">Tipo:</span> {{ property.id }}</p>
                    <p><span class="font-medium">Transacción:</span> {{ property.transaction }}</p>
                    <p><span class="font-medium">Precio:</span> {{ property.sale_price }} €</p>
                    <p><span class="font-medium">Habitaciones:</span> {{ property.number_habs }}</p>
                    <p><span class="font-medium">Baños:</span> {{ property.bathrooms }}</p>
                </div>
                
                <div>
                    <h2 class="text-xl font-semibold mb-4">Ubicación</h2>
                    <p>{{ property.address }}</p>
                    <div class="mt-4 h-64 bg-gray-200">
                        <!-- Mapa estático o dinámico -->
                        <img 
                            v-if="property.latitude && property.longitude"
                            :src="`https://maps.googleapis.com/maps/api/staticmap?center=${property.latitude},${property.longitude}&zoom=15&size=600x300&markers=color:red%7C${property.latitude},${property.longitude}&key=TU_API_KEY`" 
                            alt="Mapa de ubicación"
                            class="w-full h-full object-cover"
                        >
                    </div>
                </div>
                
                <div class="md:col-span-2">
                    <h2 class="text-xl font-semibold mb-4">Descripción</h2>
                    <p class="whitespace-pre-line">{{ property.description }}</p>
                </div>
                
                <div class="md:col-span-2">
                    <h2 class="text-xl font-semibold mb-4">Galería de Imágenes</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div 
                            v-for="(image, index) in property.media" 
                            :key="index"
                            class="h-48 bg-gray-200 rounded overflow-hidden"
                        >
                            <img 
                                :src="image.path" 
                                :alt="`Imagen ${index + 1}`"
                                class="w-full h-full object-cover"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

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