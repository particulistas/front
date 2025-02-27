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
                    :class="{ 'bg-[#27ABB1] text-white': selectedTag === tag }" 
                    v-for="tag in tags"
                    :key="tag"
                    @click="selectedTag = tag" 
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
                            :class="{ 'bg-[#27ABB1] text-white': transaccion === tag }" 
                            v-for="tag in ['Vendo', 'Alquilo', 'Ambos']" 
                            :key="tag"
                            @click="transaccion = tag" 
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
                    <input class="h-7 w-[309px] rounded-[8px] p-2 border border-black text-sm" type="number" v-model="sale_price"  placeholder="Precio de venta €" />
                    <p class="mt-1.5 text-base font-light color-666">
                        ¿Dudas con el precio?
                        <span class="font-semibold text-[#27ABB1]">Valoración online</span>
                    </p>    
                </div>

                <!-- rental price -->
                <div class="mt-5">
                    <label class="text-base font-medium mb-1 mt-2 block color-666" >Precio de alquiler</label>
                    <input class="h-7 w-[309px] rounded-[8px] p-2 border border-black text-sm" type="number" v-model="rental_price" placeholder="Precio de aluiler €/mes" />
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
                        <input class="border border-black rounded-[8px] h-7 p-2 pr-7 w-[106px]" type="number" v-model="m_built" placeholder="5,5">
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
                        <input class="border border-black rounded-[8px] h-7 p-2 pr-7 w-[106px]" type="number" v-model="m_usefull" placeholder="5,5">
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
                        <button @click="decrementarHabs" class="border border-[#27ABB1] rounded-l-[8px] border-r-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-menos.svg">
                        </button>
                        <input type="number" v-model="number_habs" class="border border-[#666666] text-center h-7 p-2" min="1">
                        <button @click="incrementarHabs"  class="border border-[#27ABB1] rounded-r-[8px] border-l-0">
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
                        <button @click="decrementarBathrooms" class="border border-[#27ABB1] rounded-l-[8px] border-r-0">
                            <img class="mx-auto w-4 h-4" src="/assets/icons/simbolo-menos.svg">
                        </button>
                        <input type="number" v-model="bathrooms" class="border border-[#666666] text-center h-7 p-2" min="1">
                        <button @click="incrementarBathrooms"class="border border-[#27ABB1] rounded-r-[8px] border-l-0">
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
                            :class="{ 'bg-[#27ABB1] text-white': state === tag }" 
                            v-for="tag in ['Obra Nueva', 'Buen Estado', 'Reformar']" 
                            :key="tag"
                            @click="state = tag" 
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
                            :class="{ 'bg-[#27ABB1] text-white': equipment === tag }" 
                            v-for="tag in ['Solo en cocina', 'Amueblado']" 
                            :key="tag"
                            @click="equipment = tag" 
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
                            :class="{ 'bg-[#27ABB1] text-white': characteristics === tag }" 
                            v-for="tag in ['Exterior', 'Semi-exterior', 'Interior']" 
                            :key="tag"
                            @click="characteristics = tag" 
                        >
                            {{ tag }}
                        </button>
                    </div>
                </div>
                <div class="border-b border-gray-300 mt-6"></div>
                <div class="flex flex-wrap gap-2 mt-6">
                    <button 
                        class="border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-1.5 hover:bg-[#27ABB1] hover:text-white"
                        :class="{ 'bg-[#27ABB1] text-white': caracteristicsOptionals === opcion.value }" 
                        v-for="opcion in opcionesCaracteristicas"
                        :key="opcion.value"
                        @click="caracteristicsOptionals = opcion.value" 
                    >
                        {{ opcion.label }}
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
                             placeholder="años" 
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
                @click="saveAndContinue"
            >
                Guardar y continuar
            </button>
        </div>

    </div>
</template>
<script setup>
import { ref, provide, onMounted } from 'vue';
import Dropdown from '~/pages/components/dropdown.vue'
import { inject } from 'vue';

const openDropdownType = ref(false)
//const type = ref('Habitacion')

const openAntiquity = ref(false)
const antiquity  = ref(null)

const optionsType = ref([]); // Almacena las categorías principales
const tags = ref([]); // Almacena las subcategorías (tipo de vivienda)
const type = ref(null); // Almacena la categoría seleccionada en el Dropdown

const selectedTag = ref(null); // Almacena la opción seleccionada
const transaccion = ref(null); // Almacena la opción seleccionada
const state = ref(null); // Almacena la opción seleccionada
const equipment = ref(null); // Almacena la opción seleccionada
const characteristics = ref(null); // Almacena la opción seleccionada
const caracteristicsOptionals  = ref(null); // Almacena la opción seleccionada
const number_habs = ref(1); // Valor inicial de 1
const bathrooms = ref(1); // Valor inicial de 1

const opcionesCaracteristicas = ref([
    { value: 'ascensor', label: 'Ascensor' },
    { value: 'jardin', label: 'Jardín' },
    { value: 'piscina', label: 'Piscina' },
    { value: 'garaje', label: 'Garaje' },
    { value: 'terraza', label: 'Terraza' },
    { value: 'trastero', label: 'Trastero' },
    // { value: 'aire', label: 'Aire acondicionado' }, 
]);


/*  const optionsType = ref([
    {value: 'Garage', label: 'Garage'}, 
    {value: 'Habitacion', label: 'Habitación'},
    {value: 'Local y nave', label: 'Local y nave'}, 
    {value: 'Oficinas', label: 'Oficinas'},
    {value: 'Trastero', label: 'Trastero'},  
    {value: 'Vivienda', label: 'Vivienda'}
])  */

const antiquityOptions = ref([
    {value: '10', label: '10'},   
    {value: '20', label: '20'},
    {value: '30', label: '30'}
])

// Llamar a la función al cargar el componente
onMounted(async () => {
    fetchMainCategories();
});

// Función para obtener las categorías principales
async function fetchMainCategories() {
//const fetchMainCategories = async () => {
    const url = useRuntimeConfig().public.BASE_URL
    try {
        const response = await $fetch(`${url}/categories/main`);
        optionsType.value = response.map(category => ({
            value: category.id,
            label: category.name,
        })); 

    } catch (error) {
        console.error('Error fetching main categories:', error);
    }
};

// Función para obtener las subcategorías
const fetchChildCategories = async (parentId) => {
    const url = useRuntimeConfig().public.BASE_URL
    try {
        const response = await $fetch(`${url}/categories/children/${parentId}`);
        tags.value = response.map(category => category.name);
    } catch (error) {
        console.error('Error fetching child categories:', error);
    }
};

// Escuchar cambios en la selección del Dropdown
watch(type, (newValue) => {
    if (newValue) { // Solo obtener subcategorías si se selecciona una categoría válida
        fetchChildCategories(newValue);
    } else {
        tags.value = []; // Limpiar las subcategorías si no hay selección
        selectedTag.value = null; // Reinicia la selección
    }
});

const incrementarHabs = () => {
    number_habs.value += 1; // Incrementa en 1
};

const decrementarHabs = () => {
    if (number_habs.value > 1) { // Asegura que no sea menor que 1
        number_habs.value -= 1; // Decrementa en 1
    }
};

const incrementarBathrooms = () => {
    bathrooms.value += 1; // Incrementa en 1
};

const decrementarBathrooms = () => {
    if (bathrooms.value > 1) { // Asegura que no sea menor que 1
        bathrooms.value -= 1; // Decrementa en 1
    }
};

const formData = inject('formData');
const emit = defineEmits(['next-step']);
const saveAndContinue = () => {
  // Guardar los datos del formulario en formData
/*   formData.value.firstStep = {
    type: type.value,
    antiquity: antiquity.value,
    // otros campos...
  }; */

  // Emitir el evento para pasar al siguiente paso
  emit('next-step');
};

</script>

