<template>
  <div class="relative">
    <input
      :class="inputClasses"
      :value="modelValue"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="passwordVisible ? 'text' : 'password'"
    />
    <img
      :src="`/assets/icons/${passwordVisible ? 'showeye' : 'disableeye'}.svg`"
      :alt="passwordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'"
      class="absolute right-2 top-2 cursor-pointer w-4 h-4"
      @click="togglePasswordVisibility"
    />
    <p v-if="isError && showTextError" class="mt-2 text-xs text-[#EC3030] absolute bottom-[-20px]">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  isError: Boolean,  
  showTextError: Boolean,
  errorMessage: { type: String, default: 'Campo requerido' }
});

const emit = defineEmits(['update:modelValue']);

// Clases predeterminadas
const defaultClasses = 'h-8 border rounded-md text-sm w-full focus:outline-none p-2';
const errorClasses = 'border-[#EC3030] text-[#EC3030] placeholder-negative';
const initClasses = 'border-gray-300 color-666';

const inputClasses = computed(() => {
  return `${defaultClasses} ${props.isError ? errorClasses : initClasses}`;
});

// Estado para controlar la visibilidad de la contraseña
const passwordVisible = ref(false);

function handleInput(event) {
  emit('update:modelValue', event.target.value);
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<style scoped>
input:focus {
  border-color: var(--p-07ACB4); /* Asegúrate de que esta variable CSS esté definida */
}
</style>
