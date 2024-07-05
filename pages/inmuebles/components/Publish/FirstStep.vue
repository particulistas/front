<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
        
        <!-- type property -->
        <div class="w-[348px] lg:pb-8">
            <p class="text-[20px] font-medium color-666 mb-2">Tipo de inmueble*</p>
            <Dropdown 
                v-model="type" 
                :links="optionsType" 
                buttonClass="button-dropdown icon-container bg-[#27ABB1] hover:bg-white h-8 w-full flex items-center justify-between px-4 text-white hover:text-[#27ABB1] rounded-[10px] border border-[#27ABB1]"
                :iconRight="`/assets/icons/${openDropdownType ? 'dropdown-open-blanco' : 'dropdown-azul'}.svg`"
                iconRightClasess="w-5 icon-white"
                @isOpen="openDropdownType"
                contentClass="w-[90%] lg:w-[92%] py-4 rounded-b-[12px]"
                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
            />
        </div>
        <div class="border-b mt-8 border-gray-300 lg:hidden"></div>

        <!-- living place type -->
        <div class="mt-8">
            <p class="text-[20px] font-medium color-666 mb-2">Tipo de vivienda*</p>
            <div class="flex flex-wrap gap-6 lg:gap-8">
                <button 
                    class="border border-[#27ABB1] text-[#27ABB1] text-base font-medium rounded-[8px] px-3 py-0.5 hover:bg-[#27ABB1] hover:text-white"
                    v-for="tag in ['Piso','Piso','Piso','Piso','Piso','Piso','Piso','Piso']"
                >
                    {{ tag }}
                </button>
            </div>
        </div>
        <div class="border-b border-gray-300 mt-8"></div>

        <div class="flex flex-col lg:flex-row lg:gap-20 mt-8 lg:px-5">
            
            <div class="lg:w-[309px]">

                <!-- type of transaction -->
                <div>
                    <p class="text-[20px] font-medium color-666 mb-2">Tipo de transacción*</p>
                    <div class="flex flex-wrap gap-4">
                        <button 
                            class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-3 py-0.5 hover:bg-[#27ABB1] hover:text-white"
                            v-for="tag in ['Piso','Piso','Piso']"
                        >
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>

                <!-- price -->
                <div class="mt-8">
                    <p class="text-[20px] font-medium color-666">Precio*</p>
                    <label class="text-base font-medium mb-1 mt-2 block color-666" >Precio de venta</label>
                    <input class="h-7 w-[309px] rounded-[8px] p-2 border border-black text-sm" type="text" placeholder="Precio de venta €" />
                    <p class="mt-1.5 text-base font-light color-666">
                        ¿Dudas con el precio?
                        <span class="font-semibold text-[#27ABB1]">Valoración online</span>
                    </p>    
                </div>

                <!-- rental price -->
                <div class="mt-5">
                    <label class="text-base font-medium mb-1 mt-2 block color-666" >Precio de alquiler</label>
                    <input class="h-7 w-[309px] rounded-[8px] p-2 border border-black text-sm" type="text" placeholder="Precio de aluiler €/mes" />
                    <p class="mt-1.5 text-base font-light color-666">
                        ¿Dudas con el precio?
                        <span class="font-semibold text-[#27ABB1]">Valoración online</span>
                    </p>    
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>

                <!-- mtrs built -->
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-base font-medium color-666">m² construidos* </p>
                    <div class="relative">
                        <input class="border border-black rounded-[8px] h-7 p-2 pr-7 w-[106px]" type="text" placeholder="5,5">
                        <p class="absolute top-0 bottom-0 right-2 text-base font-medium color-666">m²</p>
                    </div>
                </div>

                <!-- useful mtrs -->
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-base font-medium color-666">
                        m² útiles 
                        <span class="opacity-50">(opcional)</span> 
                    </p>
                    <div class="relative">
                        <input class="border border-black rounded-[8px] h-7 p-2 pr-7 w-[106px]" type="text" placeholder="5,5">
                        <p class="absolute top-0 bottom-0 right-2 text-base font-medium color-666">m²</p>
                    </div>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>

                <!-- number of rooms -->
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-base font-medium color-666">
                        Nº de habitaciones*
                    </p>
                    <div class="relative w-[140px] grid grid-cols-3">
                        <button class="border border-[#27ABB1] rounded-l-[8px] border-r-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-menos.svg">
                        </button>
                        <input type="number" class="border border-[#666666] text-center h-7 p-2" min="1">
                        <button class="border border-[#27ABB1] rounded-r-[8px] border-l-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-mas.svg">
                        </button>
                    </div>
                </div>

                <!-- number of bathrooms -->
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-base font-medium color-666">
                        N° de Baños*
                    </p>
                    <div class="relative w-[140px] grid grid-cols-3">
                        <button class="border border-[#27ABB1] rounded-l-[8px] border-r-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-menos.svg">
                        </button>
                        <input type="number" class="border border-[#666666] text-center h-7 p-2" min="1">
                        <button class="border border-[#27ABB1] rounded-r-[8px] border-l-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-mas.svg">
                        </button>
                    </div>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>
            </div>

            <!-- right desktop -->
            <div class="mt-6 lg:mt-0">
                <!-- state -->
                <div>
                    <p class="text-[20px] font-medium color-666 mb-3">
                        Estado del inmueble <span class="opacity-50">(opcional)</span>
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button 
                            class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-1.5 hover:bg-[#27ABB1] hover:text-white"
                            v-for="tag in ['Piso','Piso','Piso']"
                        >
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>
                <!-- equipment -->
                <div class="mt-8">
                    <p class="text-[20px] font-medium color-666 mb-3">
                        Equipamiento <span class="opacity-50">(opcional)</span>
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button 
                            class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-1.5 hover:bg-[#27ABB1] hover:text-white"
                            v-for="tag in ['Piso','Piso','Piso']"
                        >
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>
                <!-- characters -->
                <div class="mt-8">
                    <p class="text-[20px] font-medium color-666">
                        Características <span class="opacity-50">(opcional)</span>
                    </p>
                    <div class="flex flex-wrap gap-4 mt-6">
                        <button 
                            class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-1.5 hover:bg-[#27ABB1] hover:text-white"
                            v-for="tag in ['Piso','Piso','Piso']"
                        >
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="border-b border-gray-300 mt-6"></div>
                <div class="flex flex-wrap gap-4 mt-6">
                    <button 
                        class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-1.5 hover:bg-[#27ABB1] hover:text-white"
                        v-for="tag in ['Piso','Piso','Piso']"
                    >
                        {{ tag }}
                    </button>
                </div>
                <div class="border-b mt-8 border-gray-300 lg:hidden"></div>
                <!-- antiquity -->
                <div class="mt-10 flex">
                    <div>
                        <p class="text-base font-medium color-666">Antiguedad del edificio</p>
                        <p class="text-base font-medium color-666 opacity-50">(Opcional)</p>
                    </div>
                    <div class="relative ml-4">
                        <Dropdown 
                            v-model="antiquity" 
                            :links="antiquityOptions" 
                            buttonClass="color-666 h-7 flex items-center justify-between px-4 rounded-[10px] border border-black"
                            :iconRight="`/assets/icons/dropdown-azul.svg`"
                            iconRightClasess="w-5 icon-white"
                            @isOpen="openAntiquity"
                            placeholder="20 años"
                            contentClass="lg:w-[98%] py-4 rounded-b-[12px] z-[1000] left-0"
                            linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="border-t pt-10 mt-10 text-center">
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
import Dropdown from '~/pages/components/dropdown.vue'

const openDropdownType = ref(false)
const type = ref('Habitación')

const openAntiquity = ref(false)
const antiquity  = ref(null)

const optionsType = ref([
    {value: 'Habitación', label: 'Habitación'},   
    {value: 'Vivienda', label: 'Vivienda'},
    {value: 'Oficinas', label: 'Oficinas'}
])

const antiquityOptions = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])
</script>