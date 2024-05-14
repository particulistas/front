<template>
    <div class="flex items-center gap-3 relative">
        <div 
            @click="toggleDropdown" 
            class="cursor-pointer border rounded-md px-2.5 py-1 h-8 flex items-center w-[105px]"
            :class="{'border-[#EC3030]': isError,'border-gray-300': !isError,}"
        >
            <span 
              class="text-[20px] font-medium"
              :class="{'text-[#EC3030]': isError,'color-666': !isError,}"
            >{{ selectedCode }}</span>
            <img class="ml-auto w-4 h-4" src="/assets/icons/Polygon2.svg" alt="Polygon input phone">
        </div>
        <input
            :class="inputClasses"
            :value="phoneNumber"
            @input="updatePhoneNumber"
            :placeholder="placeholder"
            :disabled="disabled"
        />
        <div v-if="dropdown" class="absolute top-full mt-1 w-auto bg-white border border-gray-300 rounded-md z-10 w-[80px]">
            <div v-for="code in countryCodes" :key="code" @click="selectCode(code)" class="p-2 hover:bg-blue-100 cursor-pointer">
                {{ code }}
            </div>
        </div>
        <p v-if="isError" class="mt-2 text-xs text-[#EC3030] absolute bottom-[-20px]">
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
    errorMessage: { type: String, default: 'Campo requerido' }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const countryCodes = ref(['+34', '+1', '+44', '+91']); // Agrega más códigos según necesites
  const selectedCode = ref('+34'); // Código inicial
  const phoneNumber = ref('');
  
  const defaultClasses = 'h-8 border rounded-md text-[20px] font-medium  w-full focus:outline-none p-2 text-center';
  const errorClasses = 'border-[#EC3030] text-[#EC3030] placeholder-negative';
  const initClasses = 'border-gray-300 color-666';
   
  const dropdown = ref(false);
  
  function toggleDropdown() {
    dropdown.value = !dropdown.value;
  }
  
  function selectCode(code) {
    selectedCode.value = code;
    dropdown.value = false;
    updateModelValue();
  }
  
  function updatePhoneNumber(event) {
    phoneNumber.value = event.target.value;
    updateModelValue();
  }
  
  function updateModelValue() {
    emit('update:modelValue', `${selectedCode.value} ${phoneNumber.value}`);
  }

  const inputClasses = computed(() => {
    // Añade clases de error si isError es true
    return `${defaultClasses} ${props.isError ? errorClasses : initClasses}`;
  });
  
  
  watch(() => props.modelValue, (newVal) => {
    const parts = newVal.split(' ');
    selectedCode.value = parts[0];
    phoneNumber.value = parts[1] || '';
  });
  </script>
  
  <style scoped>
  input:focus, textarea:focus{
    border-color: var(--p-07ACB4);
  }
  </style>
  