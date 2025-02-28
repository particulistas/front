<template>
    <div class="flex flex-col items-center w-full py-12 block sm:hidden">
        <div class="flex gap-14">
            <div class="bg-gradient-to-r from-[#07ACB4] to-[#08CCD3] rounded-full flex w-10 h-10 mx-auto"
                v-for="(step, index) in  ['Datos principales','Descripción y fotos','Datos opcionales','Listos para públicar']"
            >
                <span class=" rounded-full m-auto"
                    :class="{
                        'bg-[#ffffff00]': currentStep === index+1,
                        'bg-white': currentStep !== index+1,
                    }"
                >
                    <h1 class="text-[20px] font-bold w-[38px] h-[38px] py-1 text-center"
                        :class="{
                            'text-white': currentStep === index+1,
                                'text-[#27ABB1]': currentStep !== index+1,
                        }"
                    >
                        <img v-if="index+1 < currentStep" class="mx-auto my-2 w-5 h-4" src="/assets/icons/check-blue.svg" alt="">
                        <template v-else>
                            {{ index+1 }}
                        </template>
                    </h1>
                </span>
                <span>
                </span>
            </div>
        </div>

        <!-- Segundo div: Texto del paso -->
        <div class="mt-4"> <!-- Añade margen superior para separar -->
            <div v-for="(step, index) in  ['Datos principales','Descripción y fotos','Datos opcionales','Listos para públicar']">
                <span>
                    <p v-if="index+1 == currentStep" class="ml-4 text-[24px] font-medium color-666">{{step}}</p>
                </span>
            </div>
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