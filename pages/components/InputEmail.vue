<template>
  <div class="relative">
    <input
      :class="inputClasses"
      :value="modelValue"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
      type="email"
    />
    <p v-if="isError || hasError" class="mt-2 text-xs text-[#EC3030] absolute bottom-[-20px]">
      {{ textError }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  isError: Boolean,
  errorMessage: String
});

const emit = defineEmits(['update:modelValue', 'isError']);
const hasError = ref(false);

// Clases predeterminadas
const defaultClasses = 'h-8 border rounded-md text-sm w-full focus:outline-none p-2';
const errorClasses = 'border-[#EC3030] text-[#EC3030] placeholder-negative';
const initClasses = 'border-gray-300 color-666';

const inputClasses = computed(() => {
  return `${defaultClasses} ${props.isError || hasError.value ? errorClasses : initClasses}`;
});

const textError = computed(() => {
  return props.errorMessage ?? 'formato de email incorrecto.';
});

// Validación de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleInput(event) {
  const inputVal = event.target.value;
  const isValidEmail = emailRegex.test(inputVal);

  // Emitir siempre el valor actualizado
  emit('update:modelValue', inputVal);

  // Manejar estados de error
  if (inputVal === '') {
    hasError.value = false;
    emit('isError', false);
  } else if (!isValidEmail) {
    hasError.value = true;
    emit('isError', true);
  } else {
    hasError.value = false;
    emit('isError', false);
  }
}

// Observar cambios en isError para actualizarlo desde el componente padre
watch(() => props.isError, (newVal) => {
  hasError.value = newVal;
});
</script>

<style scoped>
input:focus, textarea:focus{
    border-color: var(--p-07ACB4);
  }
</style>
