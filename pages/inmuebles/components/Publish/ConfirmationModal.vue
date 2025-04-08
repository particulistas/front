<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        <!-- Header -->
        <div class="bg-[#D4CB50] text-white font-medium text-lg px-4 py-3 flex items-center justify-between">
            <div class="flex-1 min-w-0">
                <h3 class="font-medium text-center truncate">Muchas gracias!!</h3>
            </div>
            <button @click="closeModal" class="text-white hover:text-gray-200 flex-shrink-0">
                <XIcon class="h-6 w-6" />
            </button>
        </div>
        
        <!-- Thank you banner -->
        <!-- <div class="bg-yellow-300 px-4 py-3 text-center">
          <p class="text-white font-medium text-lg">Muchas gracias!!</p>
          <button @click="closeModal" class="text-white hover:text-gray-200">
            <XIcon class="h-6 w-6" />
          </button>
        </div> -->
        
        <!-- Illustration -->
        <div class="px-6 py-4 flex justify-center">
            <img 
                src="/assets/imgs/personasCelebrando.svg" 
                alt="Personas celebrando"
                class="h-64 object-contain" 
            />
        </div>

        <div class="bg-[#D4CB50] text-white font-medium text-lg px-4 py-1 grid grid-cols-3 items-center">
            
        </div>
        
        <!-- Content -->
        <div class="px-6 pb-4 mt-5">
            <p class="text-gray-700 text-sm text-center mb-4 font-bold">
                Tu anuncio está en proceso de revisión, y se
                publicará dentro de las próximas 48 horas.
                Cuando lo hagamos se te notificará a tu correo
                electrónico.
            </p>
          
            <p class="text-gray-700 text-sm text-center mb-6">
                Si te acabas de Registrar, por favor recuerda 
                confirmar tu alta a la web de Particulista  desde tu correo para que podamos publicar el anuncio.
            </p>
          
          <!-- Action button -->
          <div class="relative">
            <button 
              @click="resendEmail" 
              class="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Reenviar e-mail de confirmación
            </button>
            
         
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { XIcon } from 'lucide-vue-next'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: true
    }
  })
  
  const emit = defineEmits(['close', 'resend-email'])
  
  const closeModal = () => {
    emit('close')
    router.push('/miespacio/Ads')
  }
  
  const resendEmail = () => {
    emit('resend-email')
    // Aquí podrías mostrar un mensaje de confirmación o feedback
  }
  </script>