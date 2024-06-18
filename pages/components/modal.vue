<template>
    <div 
        v-if="open" 
        class="fixed bg-[#00000080] h-screen w-screen z-[3000] top-0 left-0 flex lg:px-4"
        @click="clickOut"
    >
        <div class="w-full lg:w-[648px] rounded-[12px] m-auto relative" :class="classes">
            <slot></slot>
        </div>
    </div>
    
</template>
<script setup>
 const props = defineProps({
    classes:{
        type: String,
        default: 'bg-white'
    },
    open:{
        type: Boolean,
        default: false
    }
 })

 const emit = defineEmits(['clickOut'])

 const clickOut = () =>{
    emit('clickOut')
 }
</script>