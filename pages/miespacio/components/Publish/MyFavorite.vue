<template>
    <div class="max-w-6xl mx-auto px-4 py-5   min-h-screen bg-gray-100 rounded-lg">
      <!-- <section class="max-w-6xl mx-auto px-4 py-5"></section> -->
      <!-- Top Navigation -->
      <nav >
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <!-- Left side -->
            <button class="text-gray-600 hover:text-gray-800">
              <img :src="navigation_left_blue" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
            </button>
  
            <!-- Center tabs -->
            <div class="relative inline-flex p-0.5   border border-pink-400 rounded-md" >
              <button 
                class="relative px-6 py-1.5  transition-all duration-200 focus:outline-none"
                :class="[
                  activeTab === 'favorites' 
                    ? 'text-white bg-pink-400' 
                    : 'text-gray-500 hover:text-gray-700'
                ]"
                @click="activeTab = 'favorites'"
              >
                Mis favoritos
              </button>
              <button 
                class="relative px-6 py-1.5  transition-all duration-200 focus:outline-none"
                :class="[
                  activeTab === 'shared' 
                    ? 'text-white bg-pink-400' 
                    : 'text-gray-500 hover:text-gray-700'
                ]"
                @click="activeTab = 'shared'"
              >
                Compartidos
              </button>
            </div>
  
            <!-- Right side -->
            <div class="flex items-center space-x-4">
              <button class="text-gray-600 hover:text-gray-800">
                <img :src="ordenar" alt="Ilustración de favoritos" class="bottom-0 h-16 w-16"/>
              </button>
              <button class="text-gray-600 hover:text-gray-800">
                <img :src="mapa" alt="Ilustración de favoritos" class="bottom-0 h-16 w-16"/>
              </button>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Secondary Navigation -->
    <!--   <div class="bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center space-x-4">
          <button class="flex items-center text-teal-500 text-sm">
            <FilterIcon class="h-4 w-4 mr-1" />
            Ordenar
          </button>
          <button class="flex items-center text-teal-500 text-sm">
            <MapPinIcon class="h-4 w-4 mr-1" />
            Mapa
          </button>
        </div>
      </div> -->
  
      <!-- Main Content -->
      <main class="max-w-2xl mx-auto px-4 py-12">
        <div class="text-center">
          <!-- Illustration -->
          <div class="mb-8 relative">
            <div class="w-53 h-53 mx-auto inset-0 flex  items-center justify-center">
              <!-- <div class=" inset-0 flex items-center justify-center"> -->
              <!--   <div class="bg-teal-500 w-32 h-24 rounded-lg flex items-center justify-center">
                  <HeartIcon class="h-12 w-12 text-pink-400" />
                </div> -->
              <!-- </div> -->
              <img :src="vacio" alt="Ilustración de favoritos" />
            </div>
          </div>
  
          <!-- Text content -->
          <h1 class="text-xl font-semibold text-gray-800 mb-2">
            No tienes anuncios favoritos
          </h1>
          <p class="text-gray-600 mb-8">
            ¡Si deseas guardar un inmueble como favorito, pulsa el icono de corazón en el anuncio!
          </p>
  
          <!-- Features list -->
          <div class="space-y-6 text-left">
            <div class="flex items-start space-x-3">
              <HeartIcon class="h-6 w-6 text-gray-400 mt-1" />
              <p class="text-gray-600">
                Guarda todos tus favoritos en el mismo lugar
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <BellIcon class="h-6 w-6 text-gray-400 mt-1" />
              <p class="text-gray-600">
                Recibirás notificaciones cuando el precio o detalles del anuncio cambien
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <PencilIcon class="h-6 w-6 text-gray-400 mt-1" />
              <p class="text-gray-600">
                Toma notas personales sobre lo que pienses de cada anuncio
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <ShareIcon class="h-6 w-6 text-gray-400 mt-1" />
              <p class="text-gray-600">
                Crea una lista compartida con las personas con las que busques piso
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
    import { 
      ChevronLeftIcon, 
      ArrowDownWideNarrowIcon,
      MapIcon,
      FilterIcon,
      MapPinIcon,
      HeartIcon,
      BellIcon,
      PencilIcon,
      ShareIcon
    } from 'lucide-vue-next'
    import vacio from '/assets/imgs/myFavoriteVacio.svg'
    import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'
    import ordenar from '/assets/icons/ordenar.svg'
    import mapa from '/assets/icons/mapa.svg'

    const activeTab = ref('favorites')
  </script>