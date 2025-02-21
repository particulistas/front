<template>
    <Modal :open="openFilters" classes="bg-[#155D61] lg:min-w-[391px] lg:max-w-[391px] p-0 rounded-t-none lg:rounded-t-[24px] rounded-b-[24px]" @clickOut="openFilters = false">

        <!-- head -->
        <div class="flex px-4 py-3 icon-container lg:hidden">
            <img class="icon-white mr-2.5" src="/assets/icons/filter-house.svg" alt="filter icon">
            <h1 class="text-white text-[32px] font-medium">Filtros</h1>
            <img 
                class="ml-auto" 
                src="/assets/icons/real-times.svg" 
                alt="close icon"
                @click="openFilters = false"
            >
        </div>

        <!-- body -->
        <div class="bg-white rounded-[24px]">

            <div class="flex items-center justify-between  p-4">
                <h1 class="text-[20px] font-medium color-666">Tipo de inmueble</h1>
                <button class="px-4 py-2 flex border border-[#27ABB1] rounded-[12px] hover:bg-[#27ABB1] group">
                    <img class="w-[20px] h-[28px] group-hover:hidden" src="/assets/icons/search-save.svg" alt="save search icon">
                    <img class="w-[20px] h-[28px] hidden group-hover:block" src="/assets/icons/search-save-white.svg" alt="save search icon">
                    <div class="ml-2.5">
                        <p class="text-base font-medium color-666 leading-4 text-left group-hover:text-white">Guardar</p>
                        <p class="text-base font-medium color-666 leading-4 text-left group-hover:text-white">búsqueda</p>
                    </div>
                </button>
            </div>
            <!-- tipo de inmueble -->
            <div id="dropdown-filters" class="mt-2 pb-8 border-b border-gray-300 p-4">
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

            <!-- CONTAINER FILTER -->
            <div class="overflow-y-auto max-h-[64vh] lg:max-h-[400px] p-4">

                <!-- prices range -->
                <div class="mt-2 pb-8 border-b border-gray-300">
                    <h1 class="text-[20px] font-medium color-666">Precio</h1>
                    <div class="flex mt-4">
                        <div>
                            <Dropdown 
                                v-model="minPrice" 
                                :links="optionsminPrice" 
                                buttonClass="hover:bg-[#27abb1] color-666 hover:text-white h-8 w-[144px] flex items-center justify-between px-4 rounded-[10px] border border-[#27ABB1] icon-container-hover"
                                :iconRight="`/assets/icons/dropdown-azul.svg`"
                                iconRightClasess="w-5 icon-white"
                                @isOpen="openDropdownMinP"
                                placeholder="Min"
                                contentClass="lg:w-[38%] py-4 rounded-b-[12px]"
                                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                            />
                        </div>
                        <div class="ml-5">
                            <Dropdown 
                                v-model="maxPrice" 
                                placeholder="Max"
                                :links="optionsmaxPrice" 
                                buttonClass="hover:bg-[#27abb1] color-666 hover:text-white h-8 w-[144px] flex items-center justify-between px-4 rounded-[10px] border border-[#27ABB1] icon-container-hover"
                                :iconRight="`/assets/icons/dropdown-azul.svg`"
                                iconRightClasess="w-5 icon-white"
                                @isOpen="openDropdownMaxP"
                                contentClass="lg:w-[38%] py-4 rounded-b-[12px]"
                                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                            />
                        </div>
                    </div>
                </div>

                <!-- size range -->
                <div class="mt-2 pb-8 border-b border-gray-300">
                    <h1 class="text-[20px] font-medium color-666">Tamaño de la oficina (m2)</h1>
                    <div class="flex mt-4">
                        <div>
                            <Dropdown 
                                v-model="minSize" 
                                :links="optionsminSize" 
                                buttonClass="hover:bg-[#27abb1] color-666 hover:text-white h-8 w-[144px] flex items-center justify-between px-4 rounded-[10px] border border-[#27ABB1] icon-container-hover"
                                :iconRight="`/assets/icons/dropdown-azul.svg`"
                                iconRightClasess="w-5 icon-white"
                                @isOpen="openDropdownMinS"
                                placeholder="Min"
                                contentClass="lg:w-[38%] py-4 rounded-b-[12px]"
                                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                            />
                        </div>
                        <div class="ml-5">
                            <Dropdown 
                                v-model="maxSize" 
                                placeholder="Max"
                                :links="optionsmaxSize" 
                                buttonClass="hover:bg-[#27abb1] color-666 hover:text-white h-8 w-[144px] flex items-center justify-between px-4 rounded-[10px] border border-[#27ABB1] icon-container-hover"
                                :iconRight="`/assets/icons/dropdown-azul.svg`"
                                iconRightClasess="w-5 icon-white"
                                @isOpen="openDropdownMaxS"
                                contentClass="lg:w-[38%] py-4 rounded-b-[12px]"
                                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
                            />
                        </div>
                    </div>
                </div>

                
                
                <OfficeFilters v-if="type == 'Oficinas'" />
                <LivingPlaceFilters v-if="type == 'Vivienda'" />
                <div class="py-8 text-center">
                    <button 
                        class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-2.5 px-5 rounded-[6px] shadow-md"
                    >
                        Aceptar
                    </button>
                </div>
            

            </div>
        </div>
    </Modal>
</template>
<script setup>
import { ref, inject } from 'vue';
import Modal from '~/pages/components/slidingModal.vue'
import Dropdown from '~/pages/components/dropdown.vue'
import OfficeFilters from './Filters/Office.vue'
import LivingPlaceFilters from './Filters/LivingPlace.vue'

const openFilters = inject('openFilters');


const openDropdownType = ref(false)
const type = ref('Habitación')

const openDropdownMinP = ref(false)
const minPrice = ref(null)

const openDropdownMaxP = ref(false)
const maxPrice = ref(null)

const openDropdownMinS = ref(false)
const minSize = ref(null)

const openDropdownMaxS= ref(false)
const maxSize = ref(null)

//general
const numberBathroom = ref(null)
const characters1 = ref(null)
const characters2 = ref(null)
provide('numberBathroom',numberBathroom)
provide('characters1',characters1)
provide('characters2',characters2)

//office
const distribution = ref(null)
const antiquity  = ref(null)
provide('distribution',distribution)
provide('antiquity',antiquity)

//living place
const typeLivingPlace = ref(null)
const level = ref(null)
const room = ref(null)
const equipment = ref(null)
provide('typeLivingPlace',typeLivingPlace)
provide('level',level)
provide('room',room)
provide('equipment',equipment)

const optionsType = ref([
    {value: 'Habitación', label: 'Habitación'},   
    {value: 'Vivienda', label: 'Vivienda'},
    {value: 'Oficinas', label: 'Oficinas'}
])

const optionsminPrice = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])

const optionsmaxPrice = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])

const optionsminSize = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])

const optionsmaxSize = ref([
    {value: '100', label: '100'},   
    {value: '200', label: '200'},
    {value: '300', label: '300'}
])

</script>
<style>
#dropdown-filters .button-dropdown:hover .icon-white{
    filter: none !important;
}


</style>