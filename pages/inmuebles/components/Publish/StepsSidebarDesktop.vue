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
                        'bg-[#ffffff00]': currentStep === index+1,
                        'bg-white': currentStep !== index+1,
                    }"
                >
                    <h1 
                        class="text-[36px] font-bold w-[66px] h-[66px] py-1.5 text-center"
                        :class="{
                            'text-white': currentStep === index+1,
                            'text-[#27ABB1]': currentStep !== index+1,
                        }"
                    >
                        <img v-if="index+1 < currentStep" class="mx-auto my-2.5" src="/assets/icons/check-blue.svg" alt="">
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
defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});
</script>