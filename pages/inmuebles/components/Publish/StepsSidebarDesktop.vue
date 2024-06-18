<template>
    <div class="bg-[#F5F5F5] rounded-[16px] w-[421px] py-8 hidden lg:inline">

        <div 
            class="flex items-center w-full pl-[74px]"
            v-for="(step, index) in  ['Datos principales','Descripción y fotos','Datos opcionales','Listos para públicar']"
            :class="{
                'mt-[65px]': index > 0,
            }"
        >
            <span class="w-[68px] h-[68px] bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] rounded-full flex">
                <div 
                    class=" rounded-full m-auto"
                    :class="{
                        'bg-[#ffffff00]': current == index+1,
                        'bg-white': current !== index+1,
                    }"
                >
                    <h1 
                        class="text-[36px] font-bold w-[66px] h-[66px] py-1.5 text-center"
                        :class="{
                            'text-white': current == index+1,
                            'text-[#27ABB1]': current !== index+1,
                        }"
                    >
                        <img v-if="index+1 == 4" class="mx-auto my-2.5" src="/assets/icons/check-blue.svg" alt="">
                        <template v-else>
                            {{ index+1 }}
                        </template>
                    </h1>
                </div>
            </span>
            <p class="ml-4 text-[24px] font-medium color-666">{{step}}</p>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'

const current = ref(1)
</script>