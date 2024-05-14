<template>
    <div class="grid lg:grid-cols-2 gap-y-[20px] lg:gap-y-[28px] lg:gap-x-5">
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">E-mail o teléfono</label>
            <InputEmail placeholder="E-mail" v-model="email" :isError="errorsKey.includes('email')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Contraseña</label>
            <InputPassword v-model="pass" placeholder="*********" />
        </div>
    </div>
    <!-- buttons -->
    <div class="mt-[36px] text-center">
        <button 
            class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
            @click="submit"
        >
            Entrar
        </button>
    </div>
    <a href="javascript:void(0)" class="color-07ACB4 hover-E786F0 text-[20px] text-center block mt-[18px]">Olvide mi contraseña</a>
    <div class="mt-[18px] pb-20 text-center w-[292px] mx-auto">
        <button 
            class="bg-[#EC3030] hover:bg-white hover:text-[#EC3030] text-white font-bold text-[24px] py-3 px-[48px] rounded-[6px] shadow-md w-full"
        >
            Google
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import InputEmail  from '../components/InputEmail.vue'
import InputPassword from '../components/InputPassword.vue'


const email = ref(null)
const pass = ref(null)

const agreeTerms = ref(false)
const agreePolitics = ref(false)
const errorsKey = ref([])

const submit = () =>{
    if(errorsKey.value.includes('phone')){
        errorsKey.value = [];
    }else{
        errorsKey.value.push('phone');
    }
}
</script>