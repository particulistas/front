<template>
    <Layout>
        <div class="bg-[#155D61] lg:bg-white">
            
            <div class="lg:mx-auto lg:w-[642px] text-center">
                <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-2.5 lg:p-1">
                    Confirma
                    <img class="absolute right-3 lg:right-2 top-[17px] lg:top-3" src="/assets/icons/times.svg" alt="registro_times">
                </p>
                <div class="bg-[#D4CB50] text-center text-white text-[28px] font-medium py-6 lg:py-1 rounded-t-[20px] lg:rounded-t-none lg:rounded-b-[30px]">
                    Confirma tu e-mail
                </div>
                <div class="bg-white pt-6 px-4">
                    <img class="mx-auto" src="/assets/imgs/card-confirm-register.svg" alt="card-confirm-register">
                    <p class="color-666 leading-5 text-[20px] lg:text-[24px] mt-[30px]">Por favor confirma el alta en el correo electrónico que te acabamos de enviar a</p>
                    <p class="color-27ABB1 mt-4 text-[20px]">micorreo@correo.com</p>
                    <div class="mt-4 border-b border-gray-[#666] lg:w-[412px] lg:mx-auto"></div>
                    <p class="mt-4 lg:w-[412px] mx-auto text-base">
                        <b>Nota:</b> Si no ves el correo en tu bandeja de entrada, revisa la sección de correo no deseado.
                    </p>
                    <div class="mt-8 mb-20 text-center">
                        <button 
                            class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
                            @click="submit"
                        >
                            Reenviar e-mail
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
</script>
    