<template>
    <!-- type living place -->
    <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Tipo de vivienda</h1>
            <div class="h-full cursor-pointer" @click="openTypeLivingPlace = !openTypeLivingPlace">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openTypeLivingPlace ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openTypeLivingPlace" class="content flex flex-wrap gap-4 mt-4">
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-4 rounded-[10px] border border-[#27ABB1]"
                    v-for="val in ['Piso','Ático','Casa','Chalet','Duplex','Loft','Apartamento','Estudio']"
                    :class="typeLivingPlace == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="typeLivingPlace = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
    </div>

    <!-- level -->
    <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Planta</h1>
            <div class="h-full cursor-pointer" @click="openLevel = !openLevel">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openLevel ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openLevel" class="content flex flex-wrap gap-4 mt-4">
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-4 rounded-[10px] border border-[#27ABB1]"
                    v-for="val in ['Piso','Ático','Casa','Chalet','Duplex','Loft','Apartamento','Estudio']"
                    :class="level == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="level = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
    </div>

    <!-- number of rooms -->
    <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Numero de habitaciones</h1>
            <div class="h-full cursor-pointer" @click="openRoomsNumber = !openRoomsNumber">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openRoomsNumber ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openRoomsNumber" class="content flex flex-wrap gap-4 mt-4">
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-4 rounded-[10px] border border-[#27ABB1]"
                    v-for="val in ['Piso','Ático','Casa','Chalet','Duplex','Loft','Apartamento','Estudio']"
                    :class="room == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="room = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
    </div>

    <!-- bathwroom number range -->
    <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Número de baños</h1>
            <div class="h-full cursor-pointer" @click="openNumberBathroom = !openNumberBathroom">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openNumberBathroom ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openNumberBathroom" class="content flex gap-4 mt-4">
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-4 rounded-[10px] border border-[#27ABB1]"
                    v-for="val in 3"
                    :class="numberBathroom == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="numberBathroom = val"
                >
                    {{ val }}
                </button>
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-2 rounded-[10px] border border-[#27ABB1]"
                    :class="numberBathroom == 4 ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="numberBathroom = 4"
                >
                    4 o más
                </button>
            </div>
        </transition>
    </div>

    <!-- characters -->
    <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Características</h1>
            <div class="h-full cursor-pointer" @click="openCharacters1 = !openCharacters1">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openCharacters1 ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openCharacters1" class="content flex gap-4 mt-4">
                <button 
                    class="text-base font-medium hover:bg-[#27abb1] hover:text-white px-4 h-7 rounded-[10px] border border-[#27ABB1] leading-5"
                    v-for="val in ['Exterior','Semi-exterior','Interior']"
                    :class="characters1 == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="characters1 = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
    </div>
    <div  class="py-5 border-b border-gray-300 flex">
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openCharacters2" class="content flex flex-wrap gap-4 mt-4">
                <button 
                    class="text-base font-medium hover:bg-[#27abb1] hover:text-white px-4 h-7 rounded-[10px] border border-[#27ABB1] leading-5"
                    v-for="val in ['Ascensor','Aire acondicionado','Garaje','Edificio accesible','Baño accesible']"
                    :class="characters2 == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="characters2 = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
        <div class="h-full cursor-pointer ml-auto flex-shrink-0 w-6" @click="openCharacters2 = !openCharacters2">
            <img class="w-6 " :src="`/assets/icons/simbolo-${openCharacters2 ? 'menos' : 'mas'}.svg`" alt="icon seccion">
        </div>
    </div>
   
   <!-- equipment -->
   <div  class="py-5 border-b border-gray-300">
        <div class="flex items-center justify-between">
            <h1 class="text-[20px] font-medium color-666">Equipamiento</h1>
            <div class="h-full cursor-pointer" @click="openEquipment = !openEquipment">
                <img class="w-6 " :src="`/assets/icons/simbolo-${openEquipment ? 'menos' : 'mas'}.svg`" alt="icon seccion">
            </div>
        </div>
        
        <transition name="height-transition" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="openEquipment" class="content flex flex-wrap gap-4 mt-4">
                <button 
                    class="hover:bg-[#27abb1] hover:text-white h-7 text-base font-medium px-4 rounded-[10px] border border-[#27ABB1]"
                    v-for="val in ['Piso','Ático','Casa','Chalet','Duplex','Loft','Apartamento','Estudio']"
                    :class="equipment == val ? 'bg-[#27abb1] text-white' : 'color-666'"
                    @click="equipment = val"
                >
                    {{ val }}
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import Dropdown from '~/pages/components/dropdown.vue'

//livingPlace
const openTypeLivingPlace= ref(false)
const typeLivingPlace = inject('typeLivingPlace')
const openLevel= ref(false)
const level = inject('level')
const openRoomsNumber= ref(false)
const room = inject('room')
const openNumberBathroom= ref(false)
const numberBathroom = inject('numberBathroom')
const openCharacters1= ref(false)
const characters1 = inject('characters1')
const openCharacters2= ref(false)
const characters2 = inject('characters2')
const openEquipment= ref(false)
const equipment = inject('equipment')

const antiquityOptions = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])

function beforeEnter(el) {
    el.style.height = '0';
  }

function   enter(el) {
    el.style.height = el.scrollHeight + 'px';
  }

function   beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px';
  }

  function leave(el) {
    el.style.height = '0';
  }
</script>
<style scoped>

/* Ajustes para la animación de altura */
.height-transition-enter-active, .height-transition-leave-active {
  transition: height 0.3s ease;
}
.height-transition-enter-from, .height-transition-leave-to {
  height: 0; /* Comienza de cero */
  overflow: hidden;
}
.height-transition-enter-to, .height-transition-leave-from {
  height: auto; /* Expande a la altura total */
  overflow: visible;
}

</style>