<template>
    <Layout>
        <!-- filters -->
        <section class="lg:bg-[#F5F5F5] px-4">
            <div class="shadow-par shadow-none-lg">
                <SearchSection />
            </div>
            <div class="w-[327px] my-[10px] mx-auto">
                <div class="flex w-full justify-between">
                    <button class="flex items-center py-2.5 px-2 lg:px-3 btn-primary-inverse shadow-none rounded-[8px]">
                        <img class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" src="/assets/icons/filter-house.svg" alt="filter icon">
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Filtros</p>
                    </button>
                    <button 
                        class="flex items-center py-2.5 px-2 lg:px-3 btn-primary-inverse shadow-none rounded-[8px]"
                        @click="openMap = !openMap"
                    >
                        <img 
                            class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" 
                            :src="`/assets/icons/${openMap ? 'lista' : 'point'}-house.svg`" 
                            :alt="`${openMap ? 'lista' : 'point map'} icon`"
                        >
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">
                            {{ openMap ? 'Lista' : 'Mapa' }}
                        </p>
                    </button>
                    <button 
                        class="flex items-center py-2.5 px-2 lg:px-3 lg:hidden btn-primary-inverse shadow-none rounded-[8px]"
                        @click="openStyleModal = true"
                    >
                        <img 
                            class="primary-icon w-[33px] h-[36px] lg:w-[45px] lg:h-[48px]" 
                            :src="`/assets/icons/estilo-${styleCard}.svg`"
                            alt="style icon"
                        >
                        <p class="primary-text ml-1.5 lg:ml-3 color-07ACB4 text-[20px] lg:text-[24px] font-bold">Estilo</p>
                    </button>
                </div>
            </div>
        </section>  
        <!-- dropdown filters -->
        <section class="mt-3 py-2 flex justify-end items-center px-4 lg:px-20">
            <p class="text-base lg:text-[24px] font-semibold color-666 mr-2.5">Ordenar por:</p>
            <Dropdown 
                v-model="order" 
                :links="links" 
                buttonClass="border border-[#27ABB1] rounded-[8px] px-2 lg:px-3 py-1 text-base lg:text-[24px] text-[#27ABB1] leading-5 flex items-center gap-[2px]"
                :iconRight="`/assets/icons/${iconDropdown}.svg`"
                iconRightClasess="ml-2"
                openClass="bg-[#27ABB1] text-white"
                @isOpen="openDropdown"
                contentClass="lg:w-[190px] py-4"
                linkClass="px-3 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base color-666 hover:text-white hover:bg-[#27ABB1] w-full text-left"
            />
        </section>

        <!-- cards list -->
        <section 
            class="px-4 lg:px-20 my-8"
            :class="{
                'flex gap-3' : openMap
            }"
        >
            <div 
                :class="{
                    'hidden lg:inline-block' : openMap
                }"
            >
                <template v-for="item in 5">
                    <Card />
                </template>
            </div>
            <div 
                v-if="openMap" 
                class="bg-gray-200 flex-grow rounded-[12px] py-24 h-[660px] sticky top-0 left-0"
            >
                <h1 class="text-center text-5xl font-bold">MAPA</h1>
            </div>
        </section>
    
        <Modal :open="openStyleModal" classes="bg-white max-w-[211px] rounded-[6px] pb-2" @clickOut="openStyleModal = false">
            <h1 class="text-[20px] font-bold color-07ACB4 px-6 pt-4 pb-3">Estilo</h1>
            <button 
                class="w-full h-12 text-[20px] font-bold flex justify-center items-center"
                @click="styleCard = 'contraido'"
                :class="styleCard == 'contraido' ? 'primary-active' : 'color-07ACB4'"
            >
                <img class="w-8 h-9 mr-2 primary-icon" src="/assets/icons/estilo-contraido.svg" alt="point map icon">
                Contraido
            </button>
            <button 
                class="w-full h-12 text-[20px] font-bold flex justify-center items-center"
                :class="styleCard == 'expandido' ? 'primary-active' : 'color-07ACB4'"
                @click="styleCard = 'expandido'"
            >
                <img class="w-8 h-9 mr-2 primary-icon" src="/assets/icons/estilo-expandido.svg" alt="expandido map icon">
                Expandido
            </button>
        </Modal>
    </Layout>
</template>
<script setup>
import { ref, provide } from 'vue';
import Layout from '~/layouts/default.vue'
import SearchSection from '~/pages/home/searchSection.vue'
import Modal from '~/pages/components/modal.vue'
import Dropdown from '~/pages/components/dropdown.vue'
import Card from './components/propertyCard.vue'

const openStyleModal = ref(false)
const openMap = ref(false)
const styleCard = ref('expandido')
const order = ref('1')
const iconDropdown = ref('dropdown-azul')

const links = ref([
    {value: '1', label: 'Más recientes'},   
    {value: '2', label: 'Más antiguos'},
    {value: '3', label: 'Mayor precio'},
    {value: '4', label: 'Menor precio'},
    {value: '5', label: 'Más pequeños (- m2)'},
    {value: '6', label: 'Más grandes (+ m2)'},
])

const openDropdown = (open) =>{
    if(open){
        iconDropdown.value = "dropdown-open-blanco";
    }else{
        iconDropdown.value = "dropdown-azul";
    }
}

provide('openMap',openMap)
provide('styleCard',styleCard)
</script>
<style scoped>
.shadow-none{
    box-shadow: none;
}
@media(min-width:1020px){
    .shadow-none-lg{
        box-shadow: none;
    }
}
</style>
    