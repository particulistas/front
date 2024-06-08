<template>
    <div :class="dropdownClass" ref="dropdown">
        <button :class="`min-w-[100px] lg:min-w-[200px] ${buttonClass} ${isOpen ? openClass : ''}`" @click="toggleDropdown">
            {{ displayText }}
            <img :class="`${iconRightClasess}`" :src="iconRight" alt="dropdown icon">
        </button>
      <div v-show="isOpen" :class="`absolute bg-white shadow-par ${contentClass}`">
        <!-- Contenido del dropdown -->
        <button 
          v-for="(link, index) in links" 
          :key="index" 
          href="javascript:void(0)"
          :class="`block ${linkClass}`"
          @click.prevent="selectOption(link)"
        >
          {{ link.label }}
      </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
  
  const emit = defineEmits(['update:modelValue', 'change', 'isOpen']);
  
  const props = defineProps({
    links: Array,
    dropdownClass: String,
    buttonClass: String,
    openClass: String,
    contentClass: String,
    linkClass: String,
    iconRightClasess: String,
    placeholder: String,
    modelValue: {
      type: String,
      default: null  // Asegurarse de que el valor por defecto pueda ser nulo
    },
    iconRight: String,
    iconRightClasses: String,
  });
  
  const dropdown = ref(null);
  const isOpen = ref(false);
  
  // Computar la etiqueta inicial basándose en el valor de modelValue
  const initialLabel = computed(() => {
    if (props.modelValue === null) {
      return props.placeholder;  // Retorna el placeholder si modelValue es nulo
    }
    const foundLink = props.links.find(link => link.value === props.modelValue);
    return foundLink ? foundLink.label : props.placeholder;
  });
  const textLabel = ref(initialLabel.value);
  
  const displayText = computed(() => {
    return textLabel.value || props.placeholder;
  });
  
  const toggleDropdown = () => {
    emit('isOpen', !isOpen.value);
    isOpen.value = !isOpen.value;
  };
  
  const handleClickOutside = (event) => {
    if (!dropdown.value.contains(event.target)) {
      isOpen.value = false;
      emit('isOpen', false);
    }
  };
  
  const selectOption = (link) => {
    emit('isOpen', false);
    isOpen.value = false;
    textLabel.value = link.label;
    emit('update:modelValue', link.value);
    emit('change', link.value);
  };
  
  watch(() => props.modelValue, (newValue) => {
    if (newValue === null) {
      textLabel.value = props.placeholder;  // Actualiza a mostrar el placeholder si el valor es nulo
      return;
    }
    const link = props.links.find(link => link.value === newValue);
    textLabel.value = link ? link.label : props.placeholder;
  });
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>
  