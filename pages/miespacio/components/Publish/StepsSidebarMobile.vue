<template>
    <div 
        class="flex items-center w-full py-12"
    >
        <span 
            class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] rounded-full flex w-10 h-10 mx-auto"
            v-for="(step, index) in  4"
        >
            <div 
                class=" rounded-full m-auto"
                :class="{
                    'bg-[#ffffff00]': current == index+1,
                    'bg-white': current !== index+1,
                }"
            >
                <h1 
                    class="text-[20px] font-bold w-[38px] h-[38px] py-1 text-center"
                    :class="{
                        'text-white': current == index+1,
                        'text-[#27ABB1]': current !== index+1,
                    }"
                >
                    <img v-if="index+1 == 4" class="mx-auto my-2 w-5 h-4" src="/assets/icons/check-blue.svg" alt="">
                    <template v-else>
                        {{ index+1 }}
                    </template>
                </h1>
            </div>
        </span>
        <p class="ml-4 text-[24px] font-medium color-666">{{step}}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const current = ref(1)
</script>