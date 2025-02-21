<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<template>
  <div class="toggle-button relative" @click="toggle">
    <div class="knob" :class="{ 'on': !props.modelValue }"></div>
    <p class="text-base font-medium text-[#E9E9E9] absolute left-1.5 top-1 leading-[120%]">Si</p>
    <p class="text-base font-medium text-[#E9E9E9] absolute right-1.5 top-1 leading-[120%]">No</p>
  </div>
</template>

<style scoped>
.toggle-button {
  width: 61px;
  height: 28px;
  background-color: #27ABB1;
  border-radius: 100px;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.knob {
  width: 22px;
  height: 23px;
  background-color: #E9E9E9;
  border-radius: 50%;
  transition: transform 0.3s;
}
.knob.on {
  transform: translateX(150%);
}
</style>
