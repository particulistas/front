<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
     
        <h1 class="text-[20px] lg:text-[28px] font-medium color-666 opacity-50 text-center">(Esta sección es opcional)</h1>
        <!-- images -->
         <div class="mt-10 flex lg:gap-x-20 flex-wrap">
            <UploadPlane />
            <div class="mt-8 lg:mt-0 lg:w-[421px] lg:bg-[#F5F5F5] rounded-[12px] pt-8 lg:pt-4 pb-16 border-t border-gray-400 lg:border-t-none">
                <h2 class="text-[20px] font-medium color-666 text-center">Certificado energético</h2>
                <div class="mt-6 flex gap-4 px-8">
                    <button 
                        class="h-8 w-[82px] rounded-[8px] border border-[#27ABB1] text-base font-medium hover:bg-[#27ABB1] hover:text-white"
                        v-for="option in ['Si tengo', 'En tramite', 'Exento']"
                        @click="energyCertificate = option"
                        :class="energyCertificate == option ? 'bg-[#27ABB1] text-white' : 'opacity-50 color-666'"
                    >
                        {{ option }}
                    </button>
                </div>
                <p class="text-base text-center px-6 mt-6 color-666">Selecciona los perfiles de consumo (kW) y emisiones (CO2) que correspondan con el certificado del inmueble.</p>
                <div class="mt-6 mx-[-20px] lg:mx-0">
                    <table>
                        <thead>
                            <th></th>
                            <th class="text-base font-bold pb-4 text-center">Consumo</th>
                            <th class="text-base font-bold pb-4 text-center">Emisiones</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in energyObject">
                                <td>
                                    <div class="relative pb-1.5">
                                        <img class="w-[99px] h-[52px]" :src="`/assets/imgs/Rectangle${item.title}.svg`" :alt="`Rectangle${item.title} image`">
                                        <h1 class="absolute z-10 top-0 left-9 leading-[146%] text-[36px] text-white font-bold">{{ item.title }}</h1>
                                    </div>
                                </td>
                                <td>
                                    <button 
                                        class="w-[52px] h-[38px] border border-[#27ABB1] rounded-[8px] mx-8 hover:bg-[#27ABB1]"
                                        :class="energyObject[index].consumption ? 'bg-[#27ABB1]' : ''"
                                        @click="energyObject[index].consumption = !energyObject[index].consumption"
                                    ></button>
                                </td>
                                <td>
                                    <button 
                                        class="w-[52px] h-[38px] border border-[#27ABB1] rounded-[8px] mx-8 hover:bg-[#27ABB1]"
                                        :class="energyObject[index].emission ? 'bg-[#27ABB1]' : ''"
                                        @click="energyObject[index].emission = !energyObject[index].emission"
                                    ></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        

        <div class="pt-10 mt-10 text-center">
            <button 
                class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-4 px-3 rounded-[6px] shadow-md"
            >
                Guardar y continuar
            </button>
        </div>
    </div>
    
</template>
<script setup>
import { ref, provide } from 'vue';
import UploadPlane from './UploadPlane.vue'

const energyCertificate = ref(null);
const energyObject = ref([
        {title:'A',consumption:false,emission:false},
        {title:'B',consumption:false,emission:false},
        {title:'C',consumption:false,emission:false},
        {title:'D',consumption:false,emission:false},
        {title:'E',consumption:false,emission:false},
        {title:'F',consumption:false,emission:false},
        {title:'G',consumption:false,emission:false},
    ]);
</script>