<template>
    <div class="relative">
      <input
        :class="inputClasses"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <p v-if="isError && showTextError" class="mt-2 text-xs text-[#EC3030] absolute bottom-[-20px]">
        {{ errorMessage }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  
  const props = defineProps({
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
    showTextError: Boolean,
    isError: Boolean,  
    errorMessage: { type: String, default: 'Campo requerido'}
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  // Clases predeterminadas
  const defaultClasses = 'h-8 border rounded-md text-sm w-full focus:outline-none p-2';
  const errorClasses = 'border-[#EC3030] text-[#EC3030] placeholder-negative';
  const initClasses = 'border-gray-300 color-666';
  
  const inputClasses = computed(() => {
    // Añade clases de error si isError es true
    return `${defaultClasses} ${props.isError ? errorClasses : initClasses}`;
  });
  
  // Manejo del evento input
  function handleInput(event) {
    emit('update:modelValue', event.target.value);
  }
  </script>
  
  <style scoped>
  input:focus, textarea:focus{
    border-color: var(--p-07ACB4);
  }
  </style>
  