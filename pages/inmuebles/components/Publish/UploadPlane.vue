<template>
    <div class="lg:min-w-[340px]">
      <p class="text-[20px] font-medium color-666 mb-2">Plano del inmueble</p>
      <div v-if="files.length === 0" class="border-2 border-[#27ABB1] rounded-[8px] h-[187px] w-[335px] bg-[#27abb11a] border-dashed flex cursor-pointer" @click="triggerFileInput">
        <div class="m-auto">
          <img class="w-[46px] h-[49px] mx-auto" src="/assets/icons/gallery-house.svg" alt="gallery-house">
          <p class="text-base text-[#27ABB1] font-bold mt-1 text-center">Subir Imagen del plano</p>
        </div>
      </div>
      <div v-else class="flex border-2 border-[#27ABB1] rounded-[8px] bg-[#27abb11a] border-dashed py-4 px-6">
        <draggable v-model="files" handle=".drag-handle" class="flex gap-10 flex-wrap" @start="drag=true" @end="drag=false" tag="div">
          <template #item="{element, index}">
            <div class="flex">
              <div 
                :key="element.name" 
                class="h-[191px] w-[164px] rounded-[10px] shadow-par overflow-hidden relative" 
                :class="element.type.includes('image/') ? 'bg-[#27ABB1]' : 'bg-[#F090D2]'"
              >
                <div class="w-6 h-6 rounded-full bg-[#27ABB1] border-2 border-white text-white text-base font-bold absolute top-2 left-2 text-center leading-[130%]">
                  {{ index+1 }}
                </div>
                <img v-if="element.type.includes('image/')" :src="element.url" class="w-full h-[146px] object-cover drag-handle">
                <video v-else controls class="w-full h-[146px] object-cover drag-handle">
                  <source :src="element.url" :type="element.type">
                  Tu navegador no soporta el video.
                </video>
                <div class="h-[45px] w-full flex items-center">
                  <div 
                    class="flex-grow px-4 hover:bg-white h-full py-[10px]" :class="element.type.includes('image/') ? 'hover-turquoise' : 'hover-pink'"
                    @click="removeFile(index)"
                  >
                    <img class="w-4 h-5 mr-auto icon" src="/assets/icons/trash.svg" alt="trash icon">
                  </div>
                  <div class="flex-grow px-4 hover:bg-white h-full py-[10px]" :class="element.type.includes('image/') ? 'hover-turquoise' : 'hover-pink'">
                    <img class="w-5 h-5 mx-auto icon" src="/assets/icons/reload.svg" alt="reload icon">
                  </div>
                  <div 
                    class="flex-grow px-4 hover:bg-white h-full py-[10px]" :class="element.type.includes('image/') ? 'hover-turquoise' : 'hover-pink'" 
                    @click="toggleEdit(index)"
                  >
                    <img class="w-5 h-5 ml-auto icon" src="/assets/icons/edit-pencil.svg" alt="edit icon">
                  </div>
                </div>
              </div>
              <!-- Edit section se muestra solo si element.editable es true -->
              <div v-if="element.editable" id="edit" class="h-[191px] w-[164px] lg:ml-10">
                <p class="text-base font-medium color-666">Nombra tu imagen</p>
                <Dropdown 
                    placeholder="Elije"
                    v-model="element.customName" 
                    :links="links" 
                    buttonClass="border border-[#27ABB1] text-[#27ABB1] rounded-[8px] flex items-center h-[33px] gap-x-[2px] w-full mt-2 justify-between px-2"
                    :iconRight="`/assets/icons/${'dropdown-azul'}.svg`"
                    iconRightClasess="ml-2"
                    openClass="bg-[#27ABB1] text-white"
                    contentClass="lg:w-[160px] py-4"
                    linkClass="px-2 py-1 text-xs lg:text-base font-medium color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                    @change="toggleEdit(index)"
                />
              </div>
              <div v-if="(index+1) == files.length" class="w-[164px] flex-shrink-0 ml-10">
                <p class="text-base font-medium color-666 mt-5">{{imageCount}}/{{limitImages}} fotos</p>
                <p class="text-base font-medium color-666">{{videoCount}}/{{ limitVideos }} Vídeos</p>
                <button 
                  class="border-2 border-[#27ABB1] border-dashed h-[108px] rounded-[8px] px-6 text-center text-base font-bold text-[#27ABB1] mt-4" 
                  @click="triggerFileInput"
                >
                <img v-if="!maxVideosOrImages && !hasLargeImage && !hasLargeVideo" class="mx-auto w-6 h-6 mb-2" src="/assets/icons/simbolo-mas.svg" alt="plus symbol">
                <template v-if="!maxVideosOrImages && !hasLargeImage && !hasLargeVideo">
                  Subir otra imagen o video
                </template>  
                <div v-if="hasLargeImage">
                  <p class="text-base lg:text-xs font-medium text-red-600 text-center leading-4">Tu imagen pesa mas de 32 megas</p>
                  <p class="text-base lg:text-xs font-medium color-666 text-center leading-4 mt-2">Reduce el tamaño o agrega otra</p>
                </div>
                <div v-if="hasLargeVideo">
                  <p class="text-base lg:text-xs font-medium text-red-600 text-center leading-4">Tu video pesa mas de 100 megas</p>
                  <p class="text-base lg:text-xs font-medium color-666 text-center leading-4 mt-2">Reduce el tamaño o agrega otra</p>
                </div>
                <div v-if="maxVideosOrImages">
                  <p class="text-base lg:text-xs font-medium text-red-600 text-center leading-4 mb-1">Alcanzaste el máximo</p>
                  <p class="text-base lg:text-xs font-medium color-666 text-center leading-4 mt-2">{{imageCount}}/{{limitImages}} fotos</p>
                  <p class="text-base lg:text-xs font-medium color-666 text-center leading-4 mt-1">{{videoCount}}/{{ limitVideos }} Vídeos</p>
                </div>
                </button>
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <input type="file" multiple @change="handleFiles" hidden ref="fileInput"/>
    </div>
  </template>
  
  
  <script setup>
  import { ref, computed } from 'vue';
  import draggable from 'vuedraggable';
  import Dropdown from '~/pages/components/dropdown.vue'
  
  const files = ref([]);
  const fileInput = ref(null);
  const openDropdown = ref(false);
  const limitVideos = ref(4);
  const limitImages = ref(4);

  const emit = defineEmits(['files-selected']);//// garegue para probar
  
  /*function handleFiles(event) {
      const uploadedFiles = Array.from(event.target.files);
      for (let file of uploadedFiles) {
          const reader = new FileReader();
          reader.onload = (e) => {
              files.value.push({
                  url: e.target.result,
                  name: file.name,
                  type: file.type,
                  size: file.size,  // Asegúrate de añadir esta línea
                  editable: false,
                  customName: ""
              });
          };
          reader.readAsDataURL(file);
      }
  }*/

  function handleFiles(event) {
    const uploadedFiles = Array.from(event.target.files);
    const uploadedData = [];

    for (let file of uploadedFiles) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = {
                file, // Mantenemos el objeto File original para enviarlo
                url: e.target.result,
                name: file.name,
                type: file.type,
                size: file.size,
                editable: false,
                customName: ""
            };
            files.value.push(fileData);
            uploadedData.push(fileData);

             if (uploadedData.length === uploadedFiles.length) {
                emit('files-selected', uploadedData);
            } 
        };
        reader.readAsDataURL(file);
    }
}
  
  
  function triggerFileInput() {
      fileInput.value.click();
  }
  
  // Agrega funcionalidad para mostrar/ocultar la sección de edición
  function toggleEdit(index) {
      files.value[index].editable = !files.value[index].editable;
  }
  
  function removeFile(index) {
      files.value.splice(index, 1);
  }
  
  const links = ref([
      {value: 'Cocina', label: 'Cocina'},   
      {value: 'Salón', label: 'Salón'},
      {value: 'Vestíbulo', label: 'Vestíbulo'},
      {value: 'Terraza', label: 'Terraza'},
      {value: 'Fachada', label: 'Fachada'},
      {value: 'Plano', label: 'Plano'},
      {value: 'Buhardilla', label: 'Buhardilla'},
      {value: 'Baño', label: 'Baño'},
      {value: 'Habitación', label: 'Habitación'},
      {value: 'Pasillo', label: 'Pasillo'},
      {value: 'Patio', label: 'Patio'},
      {value: 'Estacia', label: 'Estacia'},
      {value: 'Alrededores', label: 'Alrededores'}
  ])
  
  // Propiedades computadas para contar imágenes y vídeos
  const imageCount = computed(() => files.value.filter(file => file.type.startsWith('image')).length);
  const videoCount = computed(() => files.value.filter(file => file.type.startsWith('video')).length);
  
  const maxImagesReached = computed(() => imageCount.value > limitVideos.value);
  const maxVideosReached = computed(() => videoCount.value > limitImages.value);
  const maxVideosOrImages = computed(() => maxImagesReached.value || maxVideosReached.value);
  
  // Propiedades computadas para verificar el tamaño de los archivos
  const hasLargeImage = computed(() => {
    return files.value.some(file => {
      console.log('image',file.size)
      return file.type.startsWith('image') && file.size > 1 * 1024 * 1024
    })
  });
  const hasLargeVideo = computed(() => {
    return files.value.some(file => {
      console.log('video',file.size)
      return file.type.startsWith('video') && file.size > 1 * 1024 * 1024
    })
  });
  
  </script>
  
  <style scoped>
  .hover-turquoise:hover .icon {
    filter: brightness(0) saturate(100%) invert(54%) sepia(36%) saturate(1357%) hue-rotate(138deg) brightness(91%) contrast(90%);
  }
  
  .hover-pink:hover .icon {
    filter: brightness(0) saturate(100%) invert(80%) sepia(15%) saturate(6278%) hue-rotate(283deg) brightness(103%) contrast(101%);
  }
  
  .drag-handle {
    cursor: grab;
  }
  
  .drag-handle:active {
    cursor: grabbing;
  }
  </style>