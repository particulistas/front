<template>
    <Layout>
        <div class="bg-[#155D61] lg:bg-white">
            
            <div class="lg:mx-auto lg:w-[642px] text-center">
                <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-2.5 lg:p-1">
                    Registrate
                    <img class="absolute right-3 lg:right-2 top-[17px] lg:top-3" src="/assets/icons/times.svg" alt="registro_times">
                </p>
                <div class="bg-white pt-6 rounded-t-[18px] lg:rounded-t-none">
                    <img class="w-[280px] h-[222px] mx-auto" src="/assets/imgs/agregar-telefono.svg" alt="agregar-telefono">
                    <div class="w-[336px] md:w-[442px] mx-auto p-2.5 md:p-0">
                        <p class="text-[28px] md:text-[24px] md:text-center font-medium mt-8 color-666 text-left leading-8">Este portal es solo para particulares.</p>
                        <div class="w-[90%] mx-auto border-b border-gray-300 my-3 hidden md:block"></div>
                        <p class="text-[20px] mt-6 color-666 text-left leading-6 md:px-2.5">La participación de inmobiliarias y agencias queda estrictamente prohibida. </p>
                        <p class="text-[20px] mt-6 color-666 text-left leading-6 md:px-2.5">Por eso es importante conocer tu número de teléfono para confirmar que eres un particular.</p>
                    </div>
                    <div class="w-[311px] mx-auto mt-8">
                        <label class="text-[20px] color-666 font-medium mb-1 text-left block">Teléfono* </label>
                        <InputPhone placeholder="000 0000 00"/>
                    </div>
                    <div class="w-[311px] mx-auto mt-[30px] flex items-center justify-center">
                        <InputCheckbox />
                        <p class="text-baseleading-4 color-666 p-2.5">
                            Confirmo que soy un particular
                        </p>
                    </div>
                    <div class="text-center my-[30px]">
                        <button 
                            class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
                        >
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '~/layouts/default.vue'
import InputPhone from '~/pages/components/InputPhone.vue'
import InputCheckbox from '~/pages/components/InputCheckbox.vue'
</script>
    