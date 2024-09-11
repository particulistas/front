<template>
    <Layout>
        <div class="bg-[#155D61] lg:bg-white">
            
            <div class="lg:mx-auto lg:w-[642px] text-center">
                <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-2.5 lg:p-1">
                    Recuperar contraseña
                    <img class="cursor-pointer absolute right-3 lg:right-2 top-[17px] lg:top-3" src="/assets/icons/times.svg" alt="registro_times" @click="closeModal">
                </p>
                <div class="bg-white pt-6 px-4 rounded-t-[18px] lg:rounded-t-none">
                    <img class="w-[308px] lg:w-auto mx-auto" src="/assets/imgs/ingresar-recuperar-contraseña.svg" alt="">
                    <p class="w-[308px] lg:w-[325px] mx-auto text-base mt-6 color-666 text-left leading-5">Para recuperar tu contraseña, ingresa tu email o teléfono registrado y te enviamos una clave de recuperación al correo electrónico.</p>
                    <div class="w-[311px] mx-auto mt-8">
                        <label class="text-[20px] color-666 font-medium mb-1 text-left block">E-mail o teléfono</label>
                        
                        <InputEmail placeholder="E-mail"  name="email" v-model="email" :isError="errorsKey.includes('email')"/>
                    </div>
                    <div class="mt-8 text-red-500 text-center font-bold text-sm relative">{{ message }}</div>
                    <div class="mt-8 mb-20 flex justify-between text-center w-[331px] mx-auto">
                        <button 
                            class="bg-E786F0 hover:text-[#E786F0] hover:bg-white text-white font-bold text-[20px] py-3 px-[40px] rounded-[6px] shadow-md"
                            @click="closeModal"
                        >
                            Cancelar    
                        </button>
                        <button 
                            class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
                            @click="submit"
                        >
                            Entrar
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
    import InputText  from '~/pages/components/InputText.vue'
    import { useRoute, useRouter } from 'vue-router';
    import { useAuthStore } from '~/stores/auth';
    import InputEmail  from '../components/InputEmail.vue'

    const router = useRouter();
    const message = ref(null);
    const email = ref(null);
    const store = useAuthStore();

    const errorsKey = ref([])

    const closeModal = () => {
        router.push('/ingresar');
    }

    const submit = async () =>{
        const response = await store.recoveryPassword(email.value);
        if (response) {
            message.value = 'Mensaje enviado satisfactoriamente';
        } else {
            message.value = 'Email no válido';
        }
          
    }
</script>
    