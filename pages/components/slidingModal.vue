<template>
    <div 
        class="fixed inset-0 z-[3001] flex" @click="clickOut"
        :class="{'close': !open, 'open': open}"
    >
        <div @click.stop class="w-full lg:w-[648px] rounded-[12px] mt-auto mx-auto md:mb-auto relative" :class="classes">
            <slot></slot>
        </div>
    </div>
    <div v-if="open" class="fixed inset-0 bg-[#00000080] z-[3000]" @click="clickOut"></div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    classes: {
        type: String,
        default: 'bg-white'
    },
    open: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['clickOut']);

const clickOut = (event) => {
    if (event.target === event.currentTarget) {
        emit('clickOut');
    }
};
</script>

<style scoped>

.open {
    transform: translateY(0%);
    transition: all 0.4s ease-out;
}
.close {
    transform: translateY(100%);
    transition: all 0.4s ease-out;
}



</style>