<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
        <h1 class="text-[28px] font-medium color-666 text-center hidden lg:block">Listos para publicar </h1>

        <div class="mt-10 lg:grid lg:gap-20 lg:grid-cols-2">
            <div class="lg:w-[377px]">
                <p class="text-base font-medium color-666 lg:w-[327px] leading-[130%]">¿Qué datos quieres que publiquemos en el anuncio para que te contacten los interesados?</p>
                <div class="flex items-center mt-6 gap-5">
                    <p class="text-base font-semibold color-666">Publicar teléfono</p>
                    <ToggleButton v-model="varbutton" />
                </div>

                <div class="mt-6 border border-[#D9D9D9] px-3 py-6">
                    <!-- input movil -->
                    <div class="flex gap-2">
                        <input v-model="phone_codi" type="number" class="w-[65px] h-7 text-center border border-gray-400 rounded-[8px] p-2 color-666 bg-zinc-300" placeholder="+34">
                        <input v-model="phone" type="number" class="w-[131px] h-7 border border-gray-400 rounded-[8px] p-2 color-666 bg-zinc-300" placeholder="00000000">
                    </div>
                    <div class="mt-4 flex gap-2">
                        <button 
                            v-for="item in  serviceMovilOptions"
                            class="text-base font-medium border border-[#27ABB1] rounded-[8px] px-1.5 lg:px-2 hover:bg-[#27ABB1] hover:text-white"
                            :class="item.value == serviceMovil ? 'bg-[#27ABB1] text-white' : 'color-666'"
                            @click="serviceMovil = item.value"
                        >
                            {{ item.label }}
                        </button>
                    </div>
                </div>

                <div class="mt-6 text-center">
                    <button @click="saveAndContinue" class="w-[195px] h-10 bg-[#27ABB1] text-white text-base font-bold rounded-[16px] shadow-par hover:bg-white hover:text-[#27ABB1]">
                        Guardar cambios
                    </button>
                </div>
            </div>

            <div class="lg:w-[326px] border-t border-gray-400 lg:border-t-none mt-8 lg-mt-0 pt-8 lg:pt-0">
                <h2 class="text-[20px] font-medium color-666 text-center">¿Tu anuncio está listo?</h2>
                <div class="text-center mt-6">
                    <button @click="previewProperty" class="flex items-center gap-2 text-base font-medium text-white w-[206px] h-[70px] rounded-[8px] bg-[#27ABB1] hover:text-[#27ABB1] justify-center icon-container hover:bg-white shadow-par mx-auto">
                        <img class="hover-icon-27ABB1" src="/assets/icons/eye-house.svg" alt="eye-house icon">
                        Previsualizar
                    </button>
                </div>
                <h2 class="text-[20px] font-medium color-666 text-center mt-8">¿Tu anuncio está listo?</h2>
                <div class="flex mt-6 justify-between">
                    <button @click="updateAdvertisement('Draft')" class="py-6 px-4 rounded-[8px] border-2 border-[#27ABB1] icon-container-hover hover:bg-[#27ABB1] group shadow-par">
                        <img class="mx-auto w-10 h-10 icon-white" src="/assets/icons/save-icon.svg" alt="save-icon icon">
                        <p class="text-base font-bold text-[#27ABB1] mt-2 group-hover:text-white">Guardar borrador</p>
                    </button>
                    <button @click="updateAdvertisement('Publish')" class="py-6 px-4 rounded-[8px] button-gradient group shadow-par icon-container">
                        <img class="mx-auto w-10 h-10 hover-icon-27ABB1" src="/assets/icons/adver-house.svg" alt="adver-house icon">
                        <p class="text-base font-bold text-white mt-2 group-hover:text-[#27ABB1]">Publicar anuncio</p>
                    </button>
                </div>

                <ConfirmationModal v-if="showConfirmationModal" @close="showConfirmationModal = false" />

            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, provide, inject, onMounted, watch } from 'vue';
    import ToggleButton from './ToggleButton.vue'
    import Swal from 'sweetalert2';
    import { useRouter } from 'vue-router';

    import ConfirmationModal from './ConfirmationModal.vue'
    const showConfirmationModal = ref(false)

    const router = useRouter();

    const varbutton = ref(false);
    const serviceMovil = ref('Ambos');
    const phone_codi = ref(null); // Valor inicial de 1
    const phone = ref(null); // Valor inicial de 1

    const serviceMovilOptions = ref([
        { label: 'Solo llamadas', value: 'calls' },
        { label: 'Solo WhatsApp', value: 'whatsapp' },
        { label: 'Ambos', value: 'both' },
    ]);
    
    const formData = inject('formData');

    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');

    const props = defineProps({
        propertyId: {
            type: String,
            default: null
        }
    });

    async function createNotification(payload) {
        try {
        const url = useRuntimeConfig().public.BASE_URL
        await $fetch(`${url}/notifications`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        } catch (error) {
        console.error('Error creating notification:', error);
        }
    }

    onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');

        // Cargar datos del inmueble al montar el componente
        await loadPropertyData();
    });

    watch(() => props.propertyId, async () => {
        await loadPropertyData(); // Recargar si el ID cambia
    });

    const saveAndContinue = async () => {
        try {
            const store = usePropertieData() 
            const response = await store.createPropertieFourthStep(formData.value.propertyId , varbutton.value, phone_codi.value +' '+ phone.value, serviceMovil.value)

            // Crear notificación
            await createNotification({
                recipientId: localStorage.getItem('authId'),
                message: `Anuncio pendiente de completar para su publicación`,
                type: 'HomeIcon',
            });

            Swal.fire({
            title: '¡Éxito!',
            text: 'Anunció  actualizado correctamente.',
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
    };

    async function updateAdvertisement(status) {
        try {
            const store = usePropertieData() 
            const response = await store.updatePropertieStatus(formData.value.propertyId , status)
            const mensaje = status === 'Draft' ? 'Anunció actualizado como Borrador.' : 'Anunció publicado con éxito.';

            if (status === 'Publish') {
                showConfirmationModal.value = true; // Mostrar modal
                // Crear notificación
                await createNotification({
                    recipientId: localStorage.getItem('authId'),
                    message: `Tu anuncio acaba de ser publicado`,
                    type: 'HomeIcon',
                });
                return; // No continuar con la función
            }
            else {
                // Crear notificación
                await createNotification({
                    recipientId: localStorage.getItem('authId'),
                    message: `Tu anuncio acaba de ser actualizado como Borrador`,
                    type: 'HomeIcon',
                });

                Swal.fire({
                    title: '¡Éxito!',
                    text: mensaje,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
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

    const previewProperty = () => {
        const propertyId = formData.value.propertyId;
        const previewUrl = `/inmuebles/preview?id=${propertyId}`;
       
        // Navegación en la misma ventana usando Vue Router
        router.push(`/inmuebles/preview?id=${propertyId}`);
    };

    
    // Función para cargar los datos del inmueble
    const loadPropertyData = async () => {
       
        if (!props.propertyId) return;
        
        try {
            const store = usePropertieData();
            const response = await store.getProperties(props.propertyId);
            
            // Establecer los valores de los campos según la respuesta
            if (response) {
                varbutton.value = Boolean(response.publish_phone || false);
                // Separar el código y número de teléfono si existe
                if (response.phone) {
                    const phoneParts = response.phone.split(' ');
                    phone_codi.value = phoneParts[0] || '';
                    phone.value = phoneParts[1] || '';
                }
                
                serviceMovil.value = response.phone_characteristics || 'both';
            }
        } catch (error) {
            console.error('Error loading property data:', error);
            Swal.fire({
            title: 'Error',
            text: 'No se pudieron cargar los datos del inmueble',
            icon: 'error'
            });
        }
    };

</script>
<style scoped>
.button-gradient {
    background-image: linear-gradient(to bottom right, #E786F0 1%, #07ABB2 98%);
}

.button-gradient:hover {
    background:white ;
}

</style>