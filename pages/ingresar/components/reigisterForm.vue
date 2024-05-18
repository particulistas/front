<template>
    <div class="grid lg:grid-cols-2 gap-y-[20px] lg:gap-y-[28px] lg:gap-x-5">
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Nombre*</label>
            <InputText placeholder="Nombre" v-model="name" :isError="errorsKey.includes('name')"  @click="removeError('name')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Apellidos</label>
            <InputText placeholder="Apellidos" v-model="lastname"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">E-mail*</label>
            <InputEmail 
                placeholder="E-mail" 
                v-model="email" 
                :isError="errorsKey.includes('email')" 
                 @click="removeError('email')"
                 :errorMessage="errorsKey.includes('email') ? 'Campo requerido' : 'formato de email incorrecto.'"
            />
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Teléfono*</label>
            <InputPhone v-model="phone" :isError="errorsKey.includes('phone')" placeholder="000 0000 00"   @click="removeError('phone')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Contraseña*</label>
            <InputPassword placeholder="*********" v-model="pass" :isError="errorsKey.includes('pass')"  @click="removeError('pass')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Confirma la Contraseña*</label>
            <InputPassword placeholder="*********" v-model="passConfirm"  :isError="errorsKey.includes('passConfirm')"  @click="removeError('passConfirm')"/>
        </div>
    </div>
    <!-- i agree -->
    <div class="mt-[48px] lg:mt-[28px] w-[296px] mx-auto">
        <div class="flex items-center">
            <InputCheckbox v-model="agreeTerms" :isError="errorsKey.includes('agreeTerms')" @click="removeError('agreeTerms')"/>
            <p class="text-sm p-2 whitespace-no-wrap text-left leading-4 color-666">
                Acepto 
                <a href="" class="color-07ACB4 text-sm hover-E786F0 font-semibold">términos</a> y 
                <a href="" class="color-07ACB4 text-sm hover-E786F0 font-semibold">condiciones</a> de uso*
            </p>
        </div>
        <div class="flex items-center mt-1">
            <InputCheckbox v-model="agreePolitics" :isError="errorsKey.includes('agreePolitics')" @click="removeError('agreePolitics')"/>
            <p class="text-sm p-2 whitespace-no-wrap text-left leading-4 color-666">
                Acepto 
                <a href="" class="color-07ACB4 text-sm hover-E786F0 font-semibold">Acepto Política de notificaciones y comunicaciones</a>*
            </p>
        </div>
    </div>
    <!-- buttons -->
    <div class="mt-10 text-center">
        <button 
            class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
            @click="submit"
        >
            Registrarse
        </button>
    </div>
    
    <div class="mt-8 pb-20 text-center w-[292px] mx-auto">
        <button 
            class="bg-[#EC3030] hover:bg-white hover:text-[#EC3030] text-white font-bold text-[24px] py-3 px-[48px] rounded-[6px] shadow-md w-full"
        >
            Google
        </button>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import InputText  from '../../components/InputText.vue';
import InputEmail  from '../../components/InputEmail.vue';
import InputPhone from '../../components/InputPhone.vue'
import InputCheckbox from '../../components/InputCheckbox.vue'
import InputPassword from '../../components/InputPassword.vue'

import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

const name = ref(null)
const lastname = ref(null)
const email = ref(null)
const phone = ref(null)
const pass = ref(null)
const passConfirm  = ref(null)

const agreeTerms = ref(false)
const agreePolitics = ref(false)
const errorsKey = ref([])

const submit = () =>{
    validForm();
    if(!errorsKey.length){
        authStore.register(name.value, email.value, pass.value, passConfirm.value)
    }
}

const validForm = () =>{
    !!name.value ? '' : errorsKey.value.push('name');
    !!email.value ? '' : errorsKey.value.push('email');
    !!phone.value ? '' : errorsKey.value.push('phone');
    !!pass.value ? '' : errorsKey.value.push('pass');
    !!passConfirm .value ? '' : errorsKey.value.push('passConfirm');
    !!agreeTerms.value ? '' : errorsKey.value.push('agreeTerms');
    !!agreePolitics.value ? '' : errorsKey.value.push('agreePolitics');
}

const removeError = (field) =>{
    errorsKey.value = errorsKey.value.filter(item => item !== field)
}


</script>