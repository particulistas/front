<template>
    <div class="lg:px-6 lg:pt-10 flex-grow">
        <!-- address -->
        <div>
            <h2 class="text-[20px] font-medium color-666">Dirección exacta del inmueble*</h2>
            <p class="text-base font-light color-666">Una vez publicado, no podrás modicarla</p>
            <div class="flex lg:w-[340px] mt-4">
                <input type="text" class="h-8 p-2 rounded-l-[8px] border border-black border-r-white w-[220px]">
                <button class="rounded-r-[8px] bg-[#27ABB1] text-base font-medium text-white py-2 px-2 text-right flex-grow leading-4">
                    Comprobar
                </button>
            </div>
        </div>        

        <!-- map -->
        <div class="mt-10 bg-red-200 py-40 h-[480px] mx-[-20px] lg:mx-0">
            <h1 class="text-5xl text-center">Mapa</h1>
        </div>

        <!-- address description -->
        <div class="lg:px-6 mt-10 lg:grid lg:gap-20 lg:grid-cols-2">
            <div class="lg:w-[340px]">
                <p class="text-base font-medium color-666 mb-1">La dirección es:</p>
                <div>
                    <textarea class="border border-gray-400 rounded-[6px] h-[72px] w-full"></textarea>
                </div>
                <div class="text-right mt-3">
                    <button class="bg-[#27ABB1] rounded-[8px] h-7 text-base text-white py-1 px-1.5 leading-[90%]">
                        Confirmar dirección
                    </button>
                </div>
                <div class="mt-4 flex items-center">
                    <input class="w-5 h-5 border border-[#27ABB1] rounded-none" type="checkbox">
                    <p class="ml-2 text-base font-medium color-666">Ocultar el número de la vía en el anuncio</p>
                </div>
            </div>
            <div class="mt-8 lg:mt-0">
                <div class="flex items-center">
                    <p class="text-base font-medium mr-2 color-666">N° de planta</p>
                    <input class="h-7 rounded-[8px] border border-black p-2 w-[131px]" type="text">
                </div>
                <div class="mt-4 flex items-center">
                    <input class="w-5 h-5 border border-[#27ABB1] rounded-none" type="checkbox">
                    <p class="ml-2 text-base font-medium color-666">Es la última planta del edificio</p>
                </div>
                <div class="mt-14">
                    <p class="text-base font-medium color-666 mb-2">Puerta</p>
                    <input class="h-7 rounded-[8px] border border-[#27ABB1] p-2 w-[332px]" type="text">
                </div>
            </div>
        </div>

        <div class="border-t border-gray-400 mt-14 text-center"></div>

        <!-- description -->
        <div class="lg:px-6 mt-6">
            <p class="text-[20px] font-medium color-666 mb-2">Descripción del inmueble*</p>
            <textarea class="border border-gray-300 p-3 h-[144px] w-full rounded-[8px] text-base"></textarea>
            <p class="text-sm font-light italic text-right">0 / X000 Caracteres</p>
        </div>

        <!-- images -->
         <div class="lg:px-6 mt-6 flex lg:gap-x-20 flex-wrap">
            <UploadFiles />
            <div class="w-[316px] pt-10 hidden lg:inline-block">
                <p class="text-base text-center color-666">Sube <b>hasta 35 fotos</b>  y <b>4 videos</b> </p>
                <p class="text-base color-666 mt-4"><b>Fotos</b> de 32 megas cada una en formato gif, jpeg o png</p>
                <p class="text-base color-666"><b>Vídeos</b> de 100 megas cada uno en formato  avi, mov, wmv, mpeg, rm, mp4, flv, m2t o 3gp</p>
            </div>
        </div>

        <!-- questions -->
        <!-- <div class="mt-10 bg-[#F7F9F9] h-[84px] w-full p-7 cursor-pointer flex justify-between hidden lg:block" @click="openModal = true">
            <h1 class="text-[20px] font-medium text-[#27ABB1]">¿Problemas? ¡Te ayudamos!</h1>
            <img class="w-6 h-6" src="/assets/icons/simbolo-mas.svg" alt="icon seccion">
        </div> -->

        <div class="pt-10 mt-10 text-center">
            <button 
                class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-4 px-3 rounded-[6px] shadow-md"
                @click="saveAndContinue"
            >
                Guardar y continuar
            </button>
        </div>
    </div>
    <ModalQuestions />
</template>

<script setup>
    import { ref, provide, inject } from 'vue';
    import ModalQuestions from './ModalQuestions.vue'
    import UploadFiles from './UploadFiles.vue'

    const openModal = ref(false)
    provide('openModal',openModal)

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