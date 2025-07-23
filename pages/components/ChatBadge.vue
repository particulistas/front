<template>
  <div class="relative">

    <button @click="myChat" class="p-2 rounded-full  color-07ACB4">
    <!-- <button @click="toggleDropdown" class="p-2 rounded-full hover:bg-gray-200 color-07ACB4"></button> -->
     <!--  <svg xmlns="http://www.w3.org/2000/svg" class=" md:hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg> -->
      <img  class="md:hidden w-4 h-4" src="/assets/icons/bell.svg" alt="bell icon"/>
      
      <span v-if="totalUnreadMessages  > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {{ totalUnreadMessages  }}
      </span>
    </button>
    
    <!-- <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
      <div class="py-1">
        <div v-for="notification in recentNotifications" :key="notification.id" 
             class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          {{ notification.message }}
        </div>
        <div v-if="recentNotifications.length === 0" class="px-4 py-2 text-sm text-gray-500">
          No hay notificaciones recientes
        </div>
        <div class="border-t border-gray-100"></div>
        <a href="/notifications" class="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100">
          Ver todas las notificaciones
        </a>
      </div>
    </div> --> 
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { LocalNotifications } from '@capacitor/local-notifications';
  import { useRouter } from 'vue-router'


  const authToken = ref('');
  const authEmail = ref('');
  const authName = ref('');
  const authId = ref('');

  const router = useRouter()
  const conversations = ref([ ])

  // Computed property para sumar los mensajes no leídos
  const totalUnreadMessages = computed(() => {
    return conversations.value.reduce((total, conversation) => {
      return total + (conversation.unread_count || 0);
    }, 0);
  });

  onMounted(async () => {

    await LocalNotifications.requestPermissions();

    authToken.value = localStorage.getItem('authToken');
    authEmail.value = localStorage.getItem('authEmail');
    authName.value = localStorage.getItem('authName');
    authId.value = localStorage.getItem('authId');

     loadConversations()

  });

    const loadConversations = async () => {
      try {

        const url = useRuntimeConfig().public.BASE_URL;
        const response = await fetch(`${url}/conversations`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json()
        conversations.value = data.data
      } catch (error) {
        console.error('Error loading conversations:', error)
      }
    }

    async function myChat() {
        if (authId.value){
            router.push('/miespacio/Chat')
        }
        else{
           router.push('/ingresar')
        }
    }

</script>