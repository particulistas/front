<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-lg w-full p-6">
            <!-- Preview Section -->
            <div class="flex flex-col items-center mb-8">
            <div class="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center" >
                <img v-if="selectedImage" :src="selectedImage" alt="Preview" class="w-full h-full object-cover rounded-full" />
                <div v-else-if="selectedAvatar" class="w-full h-full flex items-center justify-center ">
                <img :src="selectedAvatar" alt="Selected avatar" class="w-full h-full rounded-full" />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4 mt-5">
                <button 
                @click="closeModal" 
                class="px-6 py-2 rounded-full bg-pink-400 text-white hover:bg-pink-500 transition-colors"
                >
                Cancelar
                </button>
                <button 
                @click="confirmSelection" 
                class="px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
                >
                Aceptar
                </button>
            </div>
            </div>
    
            <h2 class="text-center text-gray-600 text-lg mb-6">
            Sube una imagen de perfil o elige tu avatar
            </h2>
    
            <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- Upload Section -->
                <div class="w-full md:w-auto">
                    <label 
                        class="border-2 border-dashed border-teal-500 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-teal-50 transition-colors"
                    >
                        <input 
                        type="file" 
                        class="hidden" 
                        accept="image/*" 
                        @change="handleImageUpload"
                        >
                        <PlusIcon class="w-8 h-8 text-teal-500 mb-2" />
                        <span class="text-teal-500">Subir una imagen de perfil</span>
                    </label>
                </div>

                <!-- Avatar Grid -->
                <div class="w-full grid grid-cols-3 md:grid-cols-6 gap-4">
                    <button 
                        v-for="(avatar, index) in avatars" 
                        :key="index"
                        @click="selectAvatar(avatar)"
                        class="rounded-full p-1 hover:bg-gray-100 transition-colors"
                        :class="{ 'ring-2 ring-teal-500': avatar === selectedAvatar }"
                    >
                        <img :src="avatar" alt="Avatar option" class="w-full" />
                    </button>
                </div>
            </div>

        </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { PlusIcon } from 'lucide-vue-next'
    import Swal from 'sweetalert2';
   
    import camara from '/assets/icons/camara.svg'
    import avatar6 from '/assets/icons/avatar1.svg'
    import avatar2 from '/assets/icons/avatar2.svg'  
    import avatar3 from '/assets/icons/avatar3.svg'
    import avatar4 from '/assets/icons/avatar4.svg'  
    import avatar5 from '/assets/icons/avatar5.svg' 
    import avatar1 from '/assets/icons/avatar6.svg' 
    import avatar7 from '/assets/icons/avatar7.svg' 
    import avatar8 from '/assets/icons/avatar8.svg' 
    import avatar9 from '/assets/icons/avatar9.svg' 
    import avatar10 from '/assets/icons/avatar10.svg' 
    import avatar11 from '/assets/icons/avatar11.svg' 
    import avatar12 from '/assets/icons/avatar12.svg' 
    import avatar13 from '/assets/icons/avatar13.svg' 
    import avatar14 from '/assets/icons/avatar14.svg' 
    import avatar15 from '/assets/icons/avatar15.svg' 
    import avatar16 from '/assets/icons/avatar16.svg' 
    import avatar17 from '/assets/icons/avatar17.svg' 
    import avatar18 from '/assets/icons/avatar18.svg' 
    import avatar19 from '/assets/icons/avatar19.svg' 
    import avatar20 from '/assets/icons/avatar20.svg' 
    import avatar21 from '/assets/icons/avatar21.svg' 
    import avatar22 from '/assets/icons/avatar22.svg' 
    import avatar23 from '/assets/icons/avatar23.svg' 
    import avatar24 from '/assets/icons/avatar24.svg' 

    // Avatar options - replace with actual avatar URLs
    const avatars = [
        avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,
        avatar7,avatar8,avatar9,avatar10,avatar11,avatar12,
        avatar13,avatar14,avatar15,avatar16,avatar17,avatar18,
        avatar19,avatar20,avatar21,avatar22,avatar23,avatar24,
    ].map(url => url) // You would need to replace these with actual avatar image URLs
    
    const selectedImage = ref(null)
    const selectedAvatar = ref(null)
    const previewBackground = ref({
        // backgroundColor: '#eab308' // Default yellow background
        backgroundImage: `url(${camara})`, // Usar la imagen como fondo
        backgroundSize: 'cover', // Ajustar la imagen al tamaño del contenedor
        backgroundPosition: 'center', // Centrar la imagen
    })
    const file = ref(null); // Para almacenar el archivo seleccionado
    
    const handleImageUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            selectedAvatar.value = null;
            selectedImage.value = URL.createObjectURL(selectedFile);
            file.value = selectedFile; // Guardar el archivo seleccionado
        }
    };
    
     const selectAvatar = (avatar) => {
        selectedImage.value = null;
        selectedAvatar.value = avatar;
        file.value = null; // Limpiar el archivo si se selecciona un avatar
    }; 

    const closeModal = () => {
        // Emit close event to parent
        emit('close')
    }
  
    const confirmSelection = async () => {
        const url = useRuntimeConfig().public.BASE_URL
        if (file.value) {
            // Si se seleccionó una imagen, enviarla al backend usando fetch
            const formData = new FormData();
            formData.append('avatar', file.value);

            try {
                const response = await fetch(`${url}/upload-avatar`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                    // No es necesario agregar 'Content-Type' manualmente, fetch lo maneja automáticamente para FormData
                    },
                });

                if (!response.ok) {
                    throw new Error('Error uploading image');
                }

                const data = await response.json();

                // Emitir el nombre del archivo al componente padre
                emit('confirm', {
                    type: 'image',
                    value: data.fileName, // Nombre del archivo guardado
                });
            } catch (error) {
                console.error('Error uploading image:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al subir la imagen.',
                });
            }
        } else if (selectedAvatar.value) {
            // Si se seleccionó un avatar, emitir su URL
            emit('confirm', {
            type: 'avatar',
            value: selectedAvatar.value,
            });
        }

        closeModal();
    };

  
  const emit = defineEmits(['close', 'confirm'])
</script>
  
  <style scoped>
  /* Add any additional component-specific styles here */
  </style>