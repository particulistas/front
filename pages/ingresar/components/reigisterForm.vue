<template>
    <div class="grid lg:grid-cols-2 gap-y-[20px] lg:gap-y-[28px] lg:gap-x-5">
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Nombre*</label>
            <InputText 
                placeholder="Nombre" 
                v-model="name" 
                :isError="errorsKey.includes('firstname')"  
                @click="removeError('firstname')"
            />
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
            />
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Teléfono*</label>
            <InputPhone v-model="phone" :isError="errorsKey.includes('phone')" placeholder="000 0000 00"   @click="removeError('phone')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Contraseña*</label>
            <InputPassword placeholder="*********" v-model="pass" :isError="errorsKey.includes('password')"  @click="removeError('password')"/>
        </div>
        <div class="text-left">
            <label class="mb-1 color-666 font-medium text-[20px]">Confirma la Contraseña*</label>
            <InputPassword placeholder="*********" v-model="passConfirm"  :isError="errorsKey.includes('password')"  @click="removeError('password')"/>
        </div>
    </div>
    <div v-if="validationErrors" class="mt-4">
      <ul v-for="key in Object.keys(validationErrors)" :key="key">
        <li class="text-sm text-[#EC3030] text-left" for="message in messages" :key="key">
            {{ trasnlateTextValidation(key) }}
        </li>
      </ul>
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
            :class="{
                'opacity-50' : formProcess,
            }"
            @click="submit"
            :disabled="formProcess"
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
import { ref } from 'vue'
import InputText  from '../../components/InputText.vue';
import InputEmail  from '../../components/InputEmail.vue';
import InputPhone from '../../components/InputPhone.vue'
import InputCheckbox from '../../components/InputCheckbox.vue'
import InputPassword from '../../components/InputPassword.vue'

import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const name = ref(null)
const lastname = ref('')
const email = ref(null)
const phone = ref(null)
const pass = ref(null)
const passConfirm  = ref(null)
const formProcess = ref(false)

const agreeTerms = ref(false)
const agreePolitics = ref(false)
const validationErrors = ref(null)
const errorsKey = ref([])

const submit = async () =>{
    formProcess.value = true
    if(!errorsKey.length){
        try {
            let { data, error} = await authStore.register(name.value, lastname.value, email.value, phone.value, pass.value, passConfirm.value)
            if(error.value?.statusCode == 422){
                validationErrors.value = error.value.data;
                console.log('error.value.data',error.value.data)
                errorsKey.value = Object.keys(validationErrors.value);
                !agreeTerms.value  ? errorsKey.value.push('agreeTerms') : '';
                !agreePolitics.value ? errorsKey.value.push('agreePolitics') : '';
            }else{
                validationErrors.value = null;
            }

            if (data.value?.success) {
                router.push('/ingresar/confirmar-registro');
            }
            formProcess.value = false
        } catch (err) {
            console.log('Errores al enviar form:', err);
        }
    }
}

const trasnlateTextValidation = (key) =>{
    let string = validationErrors.value[key][0];
    string = replaceKeys(string, key);
    return string
}

const replaceKeys = (string, key) =>{
    let replace;
    key == 'firstname' ? replace = 'Nombre' : '';
    key == 'lastname' ? replace = 'Apellidos' : '';
    key == 'phone' ? replace = 'Teléfono' : '';
    key == 'email' ? replace = 'E-mail' : '';
    key == 'password' ? replace = 'Contraseña' : '';
    
    let result = string.replace(key, replace);
    return result
}

const removeError = (field) =>{
    console.log('field',field)
    errorsKey.value = errorsKey.value.filter(item => item !== field)
    console.log('errorsKey.value',errorsKey.value)
}


</script>