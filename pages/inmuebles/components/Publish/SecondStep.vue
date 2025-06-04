<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
        <!-- address -->
        <div>
            <h2 class="text-[20px] font-medium color-666">Dirección exacta del inmueble*</h2>
            
            <p class="text-base font-bold text-red-600">Una vez completado este paso, no podrás modificarla</p>
            <!-- <div class="flex lg:w-[340px] mt-4">
                <input type="text" class="h-8 p-2 rounded-l-[8px] border border-black border-r-white w-[220px]">
                <button class="rounded-r-[8px] bg-[#27ABB1] text-base font-medium text-white py-2 px-2 text-right flex-grow leading-4">
                    Comprobar
                </button>
            </div> -->
        </div>        

        <!-- map -->
    <!--     <div class="mt-10 bg-red-200 py-40 h-[480px] mx-[-20px] lg:mx-0">
            <h1 class="text-5xl text-center">Mapa</h1>
            <div class="mt-10 h-[480px] mx-[-20px] lg:mx-0">
                <div ref="mapContainer" class="w-full h-full"></div>
                <input type="hidden" v-model="latitude">
                <input type="hidden" v-model="longitude">
            </div>
        </div> -->

        <div class="mt-10 h-[480px] mx-[-20px] lg:mx-0">
            <div ref="mapContainer" class="w-full h-full"></div>
            <input type="hidden" v-model="latitude">
            <input type="hidden" v-model="longitude">
        </div>

        <!-- address description -->
        <div class="lg:px-6 mt-10 lg:grid lg:gap-20 lg:grid-cols-2">
            <div class="lg:w-[340px]">
                <p class="text-base font-medium color-666 mb-1">La dirección es:</p>
                <div>
                    <textarea v-model="address"  class="border border-gray-400 rounded-[6px] h-[72px] w-full"></textarea>
                </div>
                <!-- <div class="text-right mt-3">
                    <button class="bg-[#27ABB1] rounded-[8px] h-7 text-base text-white py-1 px-1.5 leading-[90%]">
                        Confirmar dirección
                    </button>
                </div> -->
                <div class="mt-4 flex items-center">
                    <input v-model="hide_address" class="w-5 h-5 border border-[#27ABB1] rounded-none" type="checkbox">
                    <p class="ml-2 text-base font-medium color-666">Ocultar el número de la vía en el anuncio</p>
                </div>
            </div>
            <div class="mt-8 lg:mt-0">
                <div class="flex items-center">
                    <p class="text-base font-medium mr-2 color-666">N° de planta</p>
                    <input v-model="number_plants"  class="h-7 rounded-[8px] border border-black p-2 w-[131px]" type="number">
                </div>
                <div class="mt-4 flex items-center">
                    <input v-model="top_floor"  class="w-5 h-5 border border-[#27ABB1] rounded-none" type="checkbox">
                    <p class="ml-2 text-base font-medium color-666">Es la última planta del edificio</p>
                </div>
                <div class="mt-14">
                    <p class="text-base font-medium color-666 mb-2">Puerta</p>
                    <input v-model="door" class="h-7 rounded-[8px] border border-[#27ABB1] p-2 w-[332px]" type="text">
                </div>
            </div>
        </div>

        <div class="border-t border-gray-400 mt-14 text-center"></div>

        <!-- description -->
        <div class="lg:px-6 mt-6">
            <p class="text-[20px] font-medium color-666 mb-2">Descripción del inmueble*</p>
            <textarea v-model="description" class="border border-gray-300 p-3 h-[144px] w-full rounded-[8px] text-base"></textarea>
            <p class="text-sm font-light italic text-right">0 / X000 Caracteres</p>
        </div>

        <!-- images -->
         <div class="lg:px-6 mt-6 flex lg:gap-x-20 flex-wrap">
            <!-- <UploadFiles @files-selected="handleSelectedFiles" /> -->
            <!-- <UploadFiles @files-selected="handleSelectedFiles" :existing-media="existingMedia"/> -->
            <UploadFiles @files-selected="handleSelectedFiles" @files-deleted="handleDeletedFiles" :existing-media="existingMedia"
  />
            <div class="w-[316px] pt-10 hidden lg:inline-block">
                <p class="text-base text-center color-666">Sube <b>hasta 35 fotos</b>  y <b>4 videos</b> </p>
                <p class="text-base color-666 mt-4"><b>Fotos</b> de 32 megas cada una en formato gif, jpeg o png</p>
                <p class="text-base color-666"><b>Vídeos</b> de 100 megas cada uno en formato  avi, mov, wmv, mpeg, rm, mp4, flv, m2t o 3gp</p>
            </div>
        </div>

        <!-- questions -->
        <!-- <div class="mt-10 bg-[#F7F9F9] h-[84px] w-full p-7 cursor-pointer flex justify-between hidden lg:block" @click="openModal = true">
            <h1 class="text-[20px] font-medium text-[#27ABB1]">¿Problemas? ¡Te ayudamos!</h1>
            <img class="w-6 h-6" src="/assets/icons/simbolo-mas.svg" alt="icon seccion">
        </div> -->

        <div class="pt-10 mt-10 text-center">
            <button 
                class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-4 px-3 rounded-[6px] shadow-md"
                @click="saveAndContinue"
            >
                Guardar y continuar
            </button>
        </div>
    </div>
    <ModalQuestions />
</template>

<script setup>
    import { ref, provide, inject, onMounted } from 'vue';
    import ModalQuestions from './ModalQuestions.vue'
    import UploadFiles from './UploadFiles.vue'
    import Swal from 'sweetalert2';

   
    const mapContainer = ref(null);
    const latitude = ref(null);
    const longitude = ref(null);
    const address = ref('');

    const openModal = ref(false)
    provide('openModal',openModal)

    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');

    const number_plants = ref(0);
   // const address = ref(null);
   // const latitude = ref(null);
   // const longitude = ref(null);
    const hide_address = ref(0);
    const top_floor = ref(0);
    const door = ref(null);
    const description = ref(null);
    const imageUrl = ref('');

    const uploadedImages = ref([]);
    const existingMedia = ref([]); // Para almacenar las imágenes existentes
    const imagesChanged = ref([]); 
    const imagesToDelete = ref([]); // Nuevo ref para almacenar IDs a eliminar

    const handleSelectedFiles = (files) => {
        uploadedImages.value = files;
        imagesChanged.value = true;
        //this.uploadedImages.value = Array.from(files);
        //alert(hasChanges.value);
    };

    // Nuevo manejador para archivos eliminados
   /*  const handleDeletedFiles = (fileId) => {
        imagesToDelete.value = fileId;// Crea un nuevo arreglo con los valores existentes más el nuevo fileId
        imagesChanged.value = true;
    }; */

    const handleDeletedFiles = (fileId) => {
        // Verifica si el ID ya existe en el arreglo para evitar duplicados
        if (!imagesToDelete.value.includes(fileId)) {
            // Crea un nuevo arreglo con los valores existentes más el nuevo fileId
            imagesToDelete.value = [...imagesToDelete.value, fileId];
            imagesChanged.value = true;
            
            // Opcional: puedes verificar el contenido del arreglo
        }
    };

    
    const props = defineProps({
        propertyId: {
            type: String,
            default: null
        }
    });


    // Acceder a formData usando inject
    const formData = inject('formData');
    const emit = defineEmits(['next-step']);

     onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
        imageUrl.value = useRuntimeConfig().public.IMAGE_URL; 
        loadGoogleMaps();
        //alert(formData.value.propertyId)
        await loadPropertyData();
    });

    watch(() => props.propertyId, async () => {
        await loadPropertyData(); // Recargar si el ID cambia
    });

    const saveAndContinue = async () => {
        if (!latitude.value || !longitude.value) {
            Swal.fire({
                text: 'Por favor, seleccione una ubicación en el mapa',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        const store = usePropertieData() 
        const response = await store.createPropertieSecondStep(formData.value.propertyId , number_plants.value, address.value , hide_address.value, top_floor.value, door.value, description.value, uploadedImages, latitude.value, longitude.value, imagesChanged.value, imagesToDelete)
   

        // Emitir el evento para pasar al siguiente paso
        emit('next-step');
    };

    const loadGoogleMaps = async () => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${useRuntimeConfig().public.GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    };

    const initMap = () => {
        const map = new google.maps.Map(mapContainer.value, {
            center: { lat: 40.4168, lng: -3.7038 }, // Centro en Madrid por defecto
            zoom: 12
        });

        const marker = new google.maps.Marker({
            map: map,
            draggable: true
        });

        const geocoder = new google.maps.Geocoder();
        const autocomplete = new google.maps.places.Autocomplete(
            document.createElement('input'),
            { types: ['geocode'] }
        );

        autocomplete.bindTo('bounds', map);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) return;
            
            map.setCenter(place.geometry.location);
            marker.setPosition(place.geometry.location);
            
            latitude.value = place.geometry.location.lat();
            longitude.value = place.geometry.location.lng();
            address.value = place.formatted_address;
        });

        map.addListener('click', (e) => {
            marker.setPosition(e.latLng);
            latitude.value = e.latLng.lat();
            longitude.value = e.latLng.lng();
            
            geocoder.geocode({ location: e.latLng }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    address.value = results[0].formatted_address;
                }
            });
        });

        marker.addListener('dragend', (e) => {
            latitude.value = e.latLng.lat();
            longitude.value = e.latLng.lng();
            
            geocoder.geocode({ location: e.latLng }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    address.value = results[0].formatted_address;
                }
            });
        });
    };

    // Función para cargar los datos del inmueble
    const loadPropertyData = async () => {
        if (!props.propertyId) return;
        
        try {
            const store = usePropertieData();
            const response = await store.getProperties(props.propertyId);

            // Rellenar los campos con los datos del inmueble
            number_plants.value = response.number_plants || 0;
            address.value = response.address || '';
            // Convertir valores numéricos/string a booleanos para los checkboxes
            hide_address.value = Boolean(Number(response.hide_address)) || false;
            top_floor.value = Boolean(Number(response.top_floor)) || false;
            door.value = response.door || '';
            description.value = response.description || '';
            latitude.value = response.latitude || null;
            longitude.value = response.longitude || null;
            
            // Si hay coordenadas, centrar el mapa
            if (latitude.value && longitude.value) {
                initMapWithCoordinates();
            }

            // Verifica profundamente la estructura de response
            if (!response?.media) {
                console.warn('No media found in response:', response);
                existingMedia.value = [];
                return;
            }

            if (response?.media?.length > 0) {
                existingMedia.value = response.media
                    .filter(media => media?.object !== "plano") // Verifica si media.object existe
                    .map(media => ({
                        url: imageUrl.value + (media?.path || ''), // Path con fallback
                        name: media?.file_name || 'Imagen',
                        type: media?.type || 'image/jpeg', // Tipo por defecto
                        size: media?.size || 0,
                        isExisting: true,
                        id: media?.id || Math.random().toString(36).substr(2, 9) // ID único si no existe
                    }));
            } else {
                existingMedia.value = []; // Asegura array vacío si no hay media
            }
            
        } catch (error) {
            console.error('Error loading property data:', error);
            Swal.fire({
            title: 'Error',
            text: 'No se pudo cargar la información del inmueble',
            icon: 'error'
            });
        }
    };

        // Función para inicializar el mapa con coordenadas existentes
    const initMapWithCoordinates = () => {
        const map = new google.maps.Map(mapContainer.value, {
            center: { lat: parseFloat(latitude.value), lng: parseFloat(longitude.value) },
            zoom: 16
        });

        const marker = new google.maps.Marker({
            map: map,
            position: { lat: parseFloat(latitude.value), lng: parseFloat(longitude.value) },
            draggable: true
        });

        // ... (resto del código de initMap)
    };

</script>