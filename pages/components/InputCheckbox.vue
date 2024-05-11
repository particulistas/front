<template>
    <div class="relative flex items-center">
      <input
        type="checkbox"
        class="hidden" 
        v-model="checked"
        @change="toggleCheckbox"
      />
      <label :class="['cursor-pointer border border-07ACB4 bg-gray-100 hover:bg-gray-200 overflow-hidden w-5 h-5', checkboxSize]" @click="toggleCheckbox">
        <img
          v-if="checked"
          :src="checkedImage"
          alt="Checked"
          class="w-full h-full"
        />
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    modelValue: Boolean, // V-model binding
    checkedImage: { type: String, default: '/assets/icons/check07ACB4.svg'},
    checkboxSize: {
      type: String,
      default: 'w-6 h-6' // Default size, can be overridden by parent
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  // Local state to handle the checked state
  const checked = ref(props.modelValue);
  
  // Watch for external changes
  watch(() => props.modelValue, (newValue) => {
    checked.value = newValue;
  });
  
  function toggleCheckbox() {
    checked.value = !checked.value;
    emit('update:modelValue', checked.value);
  }
  </script>
  
  <style scoped>
  /* Additional styles can be added here */
  </style>
  