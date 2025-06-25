<template>
    <div class="max-w-6xl mx-auto px-4 py-5   min-h-screen bg-gray-100 rounded-lg">
      <!-- Header -->
      <header >
        <div class="max-w-7xl mx-auto px-4">
          <div class="py-4">
            <button class="text-teal-500 hover:text-teal-600">
                <img :src="navigation_left_blue" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
            </button>
          </div>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-3xl mx-auto px-4 py-8">
        <h1 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Tus perfiles de inquilino
        </h1>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Create new ad card -->
        <button @click="navigateToProfileRoom">
            <div class="h-64 relative mb-6">
                <!-- Imagen de fondo -->
                <img :src="rectanguloPerfilHabitacion" alt="Fondo"  />
                <!-- Imagen que aparece encima -->
                <img :src="perfilHabitacion" alt="Persona" class="absolute inset-7 " />
            </div>
        </button>
        <!-- Import existing ad card -->
        <button >
          <div class="h-64 relative mb-6">
            <img :src="perfilVivienda"  alt="Person illustration" />
          </div>
        </button> 
      </div>
  
 
  
        <!-- Explanatory Text -->
        <div class=" text-gray-600 space-y-2 mb-12">
          <p class="text-sm">
            Para poder realizar una reserva automática para visitar una habitación o un inmueble es necesario tener un perfil como inquilino.
          </p>
          <p class="text-sm">
            Este perfil se lo facilitaremos al propietario/a.
          </p>
          <p class="text-sm font-medium">
            Tan solo te llevará dos minutos
          </p>
          <p class="text-sm italic">
            Si no, puedes ponerte en contacto con el propietario/a por chat o tlf!
          </p>
        </div>
  
        <!-- Automatic Reservation System -->
        <div class="text-center">
          <div class="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
            <button class="text-teal-500 hover:text-teal-600">
                <img :src="house_calendar_inquilino" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
            </button>
          </div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            Sistema automático de reserva de visitas
          </h2>
        </div>
        <div class="">
          <div class="text-sm text-gray-600 space-y-4">
            <p>
              Permite reservar día y hora para realizar la visita del inmueble o la habitación de manera automática
            </p>
            <p>
              En los anuncios que tienen habilitada esta opción aparece el símbolo correspondiente como forma de contacto
            </p>
            <p class="font-medium">
              ¡Sé el primero en visitar el inmueble!
            </p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
    import { 
        ChevronLeftIcon,
        HomeIcon,
        BuildingIcon,
        UserIcon,
        CalendarClockIcon
    } from 'lucide-vue-next'
    import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'
    import house_calendar_inquilino from '/assets/icons/house_calendar_inquilino.svg'
    import perfilVivienda from '/assets/imgs/perfilVivienda.svg'
    import perfilHabitacion from '/assets/imgs/perfilHabitacion.svg'
    import rectanguloPerfilHabitacion from '/assets/imgs/rectanguloPerfilHabitacion.svg'

    import { useRouter } from 'vue-router';

    const router = useRouter();

    /* const navigateToProfileRoom = () => {
      router.push('/MyTenantProfiles'); // Ajusta la ruta según tu configuración
      //router.push('/miespacio/Inquilino')
    }; */

    const emit = defineEmits(['show-profile-room']);

    const navigateToProfileRoom = () => {
      emit('show-profile-room');
    };

  </script>