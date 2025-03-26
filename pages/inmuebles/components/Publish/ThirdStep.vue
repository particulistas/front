<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
     
        <h1 class="text-[20px] lg:text-[28px] font-medium color-666 opacity-50 text-center">(Esta sección es opcional)</h1>
        <!-- images -->
         <!-- <div class="mt-10 flex lg:gap-x-20 flex-wrap"> -->
            <div class="mt-10 flex flex-col items-center justify-center w-full space-y-4">
            <UploadPlane @files-selected="handleSelectedFilesPlano" />
            <div class="mt-8 lg:mt-0 lg:w-[421px] lg:bg-[#F5F5F5] rounded-[12px] pt-8 lg:pt-4 pb-16 border-t border-gray-400 lg:border-t-none">
                <h2 class="text-[20px] font-medium color-666 text-center">Certificado energético</h2>
                <div class="mt-6 flex gap-4 px-8">
                    <button 
                        class="h-8 w-[82px] rounded-[8px] border border-[#27ABB1] text-base font-medium hover:bg-[#27ABB1] hover:text-white"
                        v-for="option in energyCertificateOptions"
                        @click="energyCertificate = option.value"
                        :class="energyCertificate == option.value ? 'bg-[#27ABB1] text-white' : 'opacity-50 color-666'"
                    >
                        {{ option.label }}
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
                        <!-- <tbody>
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
                        </tbody> -->
                        <tbody>
                            <tr v-for="(item, index) in energyObject" :key="index">
                                <td>
                                    <div class="relative pb-1.5">
                                        <img class="w-[99px] h-[52px] mx-auto" :src="`/assets/imgs/Rectangle${item.title}.svg`" :alt="`Rectangle${item.title} image`">
                                        <h1 class="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 leading-[146%] text-[36px] text-white font-bold">{{ item.title }}</h1>
                                    </div>
                                </td>
                                <!-- Grupo de Consumo -->
                                <td class="text-center">
                                    <input 
                                        type="radio" 
                                        name="consumptionGroup" 
                                        :value="item.title" 
                                        v-model="selectedConsumption"
                                        class = "hidden"
                                    />
                                    <button 
                                        class="w-[52px] h-[38px] border border-[#27ABB1] rounded-[8px] hover:bg-[#27ABB1] hover:text-white"
                                        :class="{ 'bg-[#27ABB1] text-white': selectedConsumption === item.title }"
                                        @click="selectConsumption(item.title)"
                                    ></button>
                                </td>
                                <!-- Grupo de Emisiones -->
                                <td class="text-center">
                                    <input 
                                        type="radio" 
                                        name="emissionGroup" 
                                        :value="item.title" 
                                        v-model="selectedEmission"
                                        class = "hidden"
                                    />
                                    <button 
                                        class="w-[52px] h-[38px] border border-[#27ABB1] rounded-[8px] hover:bg-[#27ABB1] hover:text-white"
                                        :class="{ 'bg-[#27ABB1] text-white': selectedEmission === item.title }"
                                        @click="selectEmission(item.title)"
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
                @click="saveAndContinue"
            >
                Guardar y continuar
            </button>
        </div>
    </div>
    
</template>
<script setup>
    import { ref, provide, inject, onMounted } from 'vue';
    import UploadPlane from './UploadPlane.vue'
    import Swal from 'sweetalert2';


    const energyCertificate = ref(null);
   /*  const energyObject = ref([
        {title:'A',consumption:false,emission:false},
        {title:'B',consumption:false,emission:false},
        {title:'C',consumption:false,emission:false},
        {title:'D',consumption:false,emission:false},
        {title:'E',consumption:false,emission:false},
        {title:'F',consumption:false,emission:false},
        {title:'G',consumption:false,emission:false},
    ]); */

    const energyObject = ref([
        { title: 'A' },
        { title: 'B' },
        { title: 'C' },
        { title: 'D' },
        { title: 'E' },
        { title: 'F' },
        { title: 'G' }
    ]);

    const selectedConsumption = ref(null);
    const selectedEmission = ref(null);

    const selectConsumption = (title) => {
        selectedConsumption.value = title;
    };

    const selectEmission = (title) => {
        selectedEmission.value = title;
    };

    const energyCertificateOptions = ref([
        { label: 'Si tengo', value: 'yes' },
        { label: 'En tramite', value: 'process' },
        { label: 'Exento', value: 'exempt' },
    ]);
    
    const authToken = ref('');
    const authEmail = ref('');
    const authName = ref('');
    const authId = ref('');

    const uploadedPlanoImages = ref([]);

    const handleSelectedFilesPlano = (files) => {
        alert('entro');
        uploadedPlanoImages.value = files;
        //this.uploadedImages.value = Array.from(files);
    };
    

    onMounted(async () => {
        authToken.value = localStorage.getItem('authToken');
        authEmail.value = localStorage.getItem('authEmail');
        authName.value = localStorage.getItem('authName');
        authId.value = localStorage.getItem('authId');
    });

    const formData = inject('formData');
    const emit = defineEmits(['next-step']);

    const saveAndContinue = async () => {
        if (!energyCertificate.value ) {
            Swal.fire({
                text: 'Por favor, seleccione el tipo Certificado energético',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
       // alert(formData.value.propertyId );
        const store = usePropertieData() 
          // Crear JSON con los valores seleccionados
        const energyData = JSON.stringify({
            consumption: selectedConsumption.value,
            emission: selectedEmission.value
        });

        const response = await store.createPropertieThirdStep(formData.value.propertyId , energyCertificate.value, energyData, uploadedPlanoImages)

        // Emitir el evento para pasar al siguiente paso
        emit('next-step');
    };

</script>