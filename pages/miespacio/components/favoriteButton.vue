<template>
  <!-- <img 
    class="w-[30px] h-[26px] cursor-pointer " 
    @mouseover="likeHover = true"
    @mouseleave="likeHover = false"
    @click="likeCard = !likeCard"
    :src="`/assets/icons/i-like-${ likeCard || likeHover ? 'full' : 'null' }.svg`" 
    alt="i-like icon"
    :title="isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
  >  -->
  <img 
    class="w-[30px] h-[26px] cursor-pointer " 
    @click="toggleFavorite"
    :src="`/assets/icons/i-like-${ isFavorite ? 'full' : 'null' }.svg`" 
    alt="i-like icon"
    :title="isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
  >
   <!-- <button 
    @click.stop="toggleFavorite"
    class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
    :title="isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-6 w-6" 
      :class="{
        'text-gray-400 hover:text-red-500': !isFavorite,
        'text-red-500 fill-red-500': isFavorite
      }"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </button>  -->
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useFavoriteData } from '@/stores/favorite'

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
});

const auth = useAuthStore();
const router = useRouter();
const isFavorite = ref(false);

const likeCard = ref(false)
const likeHover = ref(false)

const authToken = ref('');
const authEmail = ref('');
const authName = ref('');
const authId = ref('');



onMounted(async () => {
  authToken.value = localStorage.getItem('authToken');
  authEmail.value = localStorage.getItem('authEmail');
  authName.value = localStorage.getItem('authName');
  authId.value = localStorage.getItem('authId');
        
  await checkFavoriteStatus(); 
});

const checkFavoriteStatus = async () => {
  if (!authId) return;
  try {
    const store = useFavoriteData();
    const response =  await store.isFavorite(props.property.id);

    isFavorite.value = response.isFavorite;
  } catch (error) {
    console.error('Error checking favorite status:', error);
  }
};

const emit = defineEmits(['favorite-toggled']); // Añade esta línea

const toggleFavorite = async () => {
  if (!authId) {
    router.push('/login');
    return;
  }

  try {
    const store = useFavoriteData();
    if (isFavorite.value) {
      await store.deleteFavorite(props.property.id);
    } else {
      await store.createFavorite(props.property.id);
    }
    isFavorite.value = !isFavorite.value;
     emit('favorite-toggled'); // Emite el evento después de cambiar el estado
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};

/* onMounted(checkFavoriteStatus);
watch(() => props.property.id, checkFavoriteStatus); */
</script>