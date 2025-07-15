<template>
  <div class="min-h-screen  flex ">
    <!-- Estos divs ahora se apilan en columna (uno encima del otro) -->
    <div class="hidden lg:block "> <!-- Contenedor para espacio vertical -->
      <div class="bg-[#F5F5F5] rounded-[24px] w-[311px] py-4 h-[20px]">
        <img class="-mt-4" src="/assets/icons/rectangle 2907.png" alt="Avisos"/>
      </div> 
      <div class="-mt-6 bg-[#F5F5F5] rounded-[24px] w-[311px] py-10 h-[100vh] md:max-h-auto">
        <!-- Contenido -->
        <div class="p-4">
          <h2 class="text-lg font-semibold text-white bg-[#27ABB1] px-4 py-2 rounded-lg text-center mb-4">
            Todas
            <button 
              v-if="filterType"
              @click="clearFilters"
              class="float-right text-white hover:text-gray-200"
            >
              <XIcon class="h-4 w-4" />
            </button>
          </h2>
          
          <nav class="space-y-2 text-menu">
              <a 
                v-for="(item, index) in menuItems" 
                :key="index"
                href="#"
                @click.prevent="filterNotifications(item.icon.replace('.svg', ''))"
                :class="[
                  'flex items-center px-4 py-2 rounded-lg transition-colors cursor-pointer',
                  item.active 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-[#FFFFFF] hover:bg-gray-100 border border-[#27ABB1]'
                ]"
              >
                <img class="h-5 w-5 mr-3" :src="icon + item.icon" />
                {{ item.label }}
              </a>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex-1 p-6 bg-white md:bg-[#F5F5F5] w-[811px] rounded-[24px] ml-5">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex flex-col space-y-2 md:hidden md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <span class="text-titulo-select text-left">Notificaciones</span>
          <select 
            v-model="selectedFilter"
            @change="applyFilter"
            class="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Todos</option>
            <option value="MessageCircleIcon">Chats</option>
            <option value="SearchIcon">Búsquedas</option>
            <option value="ShareIcon">Favoritos compartidos</option>
            <option value="HeartIcon">Favoritos</option>
            <option value="LogInIcon">Login y registro</option>
            <option value="CalendarIcon">Organizador y visitas</option>
            <option value="HomeIcon">Mis anuncios</option>
            <option value="UserIcon">Perfil de inquilino</option>
          </select>
        </div>
        <div class="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <span class="text-titulo-select">Día</span>
          <select 
            v-model="selectedDateFilter"
            @change="applyFilters"
            class="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Todos</option>
            <option value="today">Hoy</option>
            <option value="yesterday">Ayer</option>
            <option value="this_week">Esta semana</option>
          </select>
        </div>

      </div>
      <button 
          v-if="selectedFilter || selectedDateFilter"
          @click="clearAllFilters"
          class="ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:hidden"
      >
          Limpiar filtros
      </button>
      <h2 class="text-xl font-semibold mb-4">Tienes {{ unreadCount }} nuevos mensajes</h2>
      <div class="flex justify-end">
        <button 
          @click="deleteAllNotifications"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
          :disabled="notifications.length === 0"
        >
          <TrashIcon class="h-4 w-4 mr-2" />
          Borrar todas
        </button>
      </div>

      <div class="space-y-6 mt-5"> <!-- Aumenté el espacio vertical entre grupos -->
        <div v-for="(notificationsGroup, dateLabel) in groupedNotifications" :key="dateLabel">
            <!-- Encabezado de fecha -->
            <div class="mb-2 flex justify-end"> <!-- Eliminé ml-2 y agregué flex justify-end -->
              <span class="text-sm font-semibold text-gray-500">{{ dateLabel }}</span>
            </div>
            
            <!-- Lista de notificaciones para esta fecha -->
            <div class="space-y-4">
              <div 
                v-for="(notification, index) in notificationsGroup" 
                :key="index"
                class="text-white p-4 rounded-lg flex items-start space-x-3"
                :class="{
                  'bg-[#DC91E2]': !notification.is_read,
                  'bg-[#27ABB1]': notification.is_read
                }"
              > 

                <!-- Iconos de notificación -->
                <img v-if="notification.type =='MessageCircleIcon'" class="h-6 w-6" src="/assets/icons/MessageIconBlanco.svg" />
                <img v-if="notification.type =='SearchIcon'" class="h-6 w-6" src="/assets/icons/SearchIconBlanco.svg" />
                <img v-if="notification.type =='ShareIcon'" class="h-6 w-6" src="/assets/icons/ShareIconBlanco.svg" /> 
                <img v-if="notification.type =='HeartIcon'" class="h-6 w-6" src="/assets/icons/HeartIconBlanco.svg" />
                <img v-if="notification.type =='LogInIcon'" class="h-6 w-6" src="/assets/icons/LogInIconBlanco.svg" />
                <img v-if="notification.type =='CalendarIcon'" class="h-6 w-6" src="/assets/icons/CalendarIconBlanco.svg" />
                <img v-if="notification.type =='HomeIcon'" class="h-6 w-6" src="/assets/icons/HomeIconBlanco.svg" />
                <img v-if="notification.type =='UserIcon'" class="h-6 w-6" src="/assets/icons/UserIconBlanco.svg" />
                <!-- ...  ... -->
                
                <div class="flex-1">
                  <p class="text-sm">{{ notification.message }}</p>
                  <div class="flex items-center justify-between mt-2">
                    <span class="text-xs opacity-75">{{ formatTime(notification.created_at) }}</span>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-3">
                  <button 
                    v-if="!notification.is_read"
                    @click="markAsRead(notification.id)"
                    class="text-white hover:text-gray-200"
                  >
                    <ChevronRightIcon class="h-4 w-4" />
                  </button>
                  <button 
                    @click="deleteNotification(notification.id)"
                    class="text-blue hover:text-red-300"
                  >
                    <TrashIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  import Pusher from 'pusher-js'
  import { computed } from 'vue';
  import { ChevronRightIcon, TrashIcon, XIcon } from 'lucide-vue-next'
  import { ref, onMounted } from 'vue'
  import { LocalNotifications } from '@capacitor/local-notifications';

  const authToken = ref('');
  const authEmail = ref('');
  const authName = ref('');
  const authId = ref('');
  const url = ref('');
  const unreadCount = ref('');
  const notifications = ref([]);
  const icon ='/assets/icons/';
  const selectedDateFilter = ref('');
  const selectedFilter = ref(''); // Para el filtro por tipo
  const filterType = ref(null); // Para el filtro del menú lateral

  const menuItems = [
    // { label: 'Notificaciones', icon: BellIcon, active: true },
    { label: 'Chats', icon: 'MessageCircleIcon.svg', active: false },
    { label: 'Búsquedas', icon: 'SearchIcon.svg', active: false },
    { label: 'Favoritos compartidos', icon: 'ShareIcon.svg', active: false },
    { label: 'Favoritos', icon: 'HeartIcon.svg', active: false },
    { label: 'Login y registro', icon: 'LogInIcon.svg', active: false },
    { label: 'Organizador y visitas', icon: 'CalendarIcon.svg', active: false },
    { label: 'Mis anuncios', icon: 'HomeIcon.svg', active: false },
    { label: 'Perfil de inquilino', icon: 'UserIcon.svg', active: false }
  ]

   function clearFilters() {
    filterType.value = null;
    fetchNotifications();
  } 

  function clearSelectFilter() {
    selectedFilter.value = '';
    applyFilter();
  }

  function clearAllFilters() {
    selectedFilter.value = '';
    selectedDateFilter.value = '';
    filterType.value = null;
    fetchNotifications();
  }

  onMounted(async () => {

    await LocalNotifications.requestPermissions();

      authToken.value = localStorage.getItem('authToken');
      authEmail.value = localStorage.getItem('authEmail');
      authName.value = localStorage.getItem('authName');
      authId.value = localStorage.getItem('authId');

      url.value = useRuntimeConfig().public.BASE_URL

      await fetchNotifications()

    Pusher.logToConsole = true;

   // await setupPusher()

  });

    async function filterNotifications(type) {
      filterType.value = type;
      await fetchNotifications();
    }

    async function applyFilters() {
      await fetchNotifications();
    }

    async function fetchNotifications() {
      try {

        const url1 = useRuntimeConfig().public.BASE_URL

        let url = `${url1}/notifications`;
  
        const params = new URLSearchParams();
        
        // Filtro por tipo (select principal)
        if (selectedFilter.value) {
          params.append('type', selectedFilter.value);
        }
        
        // Filtro del menú lateral
        if (filterType.value) {
          params.append('type', filterType.value);
        }
        
        // Filtro por fecha
        if (selectedDateFilter.value) {
          const dateRange = getDateRange(selectedDateFilter.value);
          if (dateRange) {
            params.append('start_date', dateRange.start.toISOString());
            params.append('end_date', dateRange.end.toISOString());
          }
        }
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        notifications.value = data || []; // Asigna el array interno o un array vacío por defecto
        unreadCount.value = notifications.value.filter(n => !n.is_read).length;

      } catch (error) {
        console.error('Error fetching notifications:', error)
      }
    }

    async function markAsRead(notificationId) {
      try {
        
        const url = useRuntimeConfig().public.BASE_URL
          const response = await fetch(`${url}/notifications/${notificationId}/read`, {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
              'Content-Type': 'application/json'
            }
          })

        await this.fetchNotifications()
      } catch (error) {
        console.error('Error marking notification as read:', error)
      }
    }

   async function setupPusher() {

      const pusher = new Pusher('6a7c4b7d8c5cc10caed5', {
        cluster: 'mt1',
      }); 

      // Verifica que $pusher esté disponible
      // if (!this.$pusher) {
      //   console.error('Pusher no está inicializado')
      //   return
      // } 

      // Verifica que el usuario esté autenticado
      if (!localStorage.getItem('authId')) {
        console.error('Usuario no autenticado')
        return
      }

      try {

        var channel = pusher.subscribe(`user.${localStorage.getItem('authId')}`);
        channel.bind('my-event', function(data) {
          app.messages.push(JSON.stringify(data));
        });

        /* channel.bind('App\\Events\\NewNotification', (data) => {
          this.notifications.unshift(data)
          this.unreadCount++
          this.$toast.show('Nueva notificación: ' + data.message)
        })  */

        channel.bind('App\\Events\\NewNotification', (data) => {
          // Solo añade si coincide con los filtros actuales o no hay filtros
          const typeMatches = (!filterType.value || data.type === filterType.value) && 
                            (!selectedFilter.value || data.type === selectedFilter.value);
          
          if (typeMatches) {
            notifications.value.unshift(data);
            if (!data.is_read) {
              unreadCount.value++;
            }
          }
        });

      } catch (error) {
        console.error('Error configurando Pusher:', error)
      }
    }

  const groupedNotifications = computed(() => {
    const groups = {};
    notifications.value.forEach(notification => {
      const dateKey = formatDate(notification.created_at);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(notification);
    });
    return groups;
  });

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    
    // Reset hours for accurate day comparison
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    
    const diffTime = today - compareDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    
    // Para fechas más antiguas
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long'
    });
  };

  // Agrega el método para eliminar
  async function deleteNotification(notificationId) {
    if (confirm('¿Estás seguro de eliminar esta notificación?')) {
      try {
        const url = useRuntimeConfig().public.BASE_URL;
        const response = await fetch(`${url}/notifications/${notificationId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Error al eliminar la notificación');
        }

        // Actualiza la lista de notificaciones
        await fetchNotifications();
        
        // Opcional: Mostrar mensaje de éxito
        // this.$toast.success('Notificación eliminada');
        
      } catch (error) {
        console.error('Error deleting notification:', error);
        // this.$toast.error('Error al eliminar la notificación');
      }
    }
  }

  async function deleteAllNotifications() {
    try {
      if (confirm('¿Estás seguro de que deseas eliminar TODAS tus notificaciones?')) {

        const url = useRuntimeConfig().public.BASE_URL;
        const response = await fetch(`${url}/notifications/delete-all`, { // Asegúrate que coincida exactamente
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Error al eliminar las notificaciones');
        }

        notifications.value = [];
        unreadCount.value = 0;
      }
    } catch (error) {
      console.error('Error deleting all notifications:', error);
    }
  }

  function getDateRange(filter) {
    const now = new Date();
    const start = new Date();
    const end = new Date();
    
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    
    switch(filter) {
      case 'today':
        return { start, end };
      case 'yesterday':
        start.setDate(start.getDate() - 1);
        end.setDate(end.getDate() - 1);
        return { start, end };
      case 'this_week':
        start.setDate(start.getDate() - start.getDay()); // Domingo de esta semana
        return { start, end };
      default:
        return null;
    }
  }

</script>


<style scoped>
/* Chats */

  .text-menu {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;

    color: #27ABB1;
  }

  /* Dia */
  .text-titulo-select {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */
    /* text-align: center; */

    color: #666666;
  }

  .trash-button {
    transition: all 0.2s;
  }

  .trash-button:hover {
    transform: scale(1.1);
    color: #ef4444 !important; /* Rojo de Tailwind */
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Cambia el color en móvil (pantallas < 768px) */
  @media (max-width: 767px) {
    .text-titulo-select {
      font-size: 20px;
    }
  }

</style>
