<template>
    <form @submit.prevent="login" class="flex flex-col gap-4">
        <div class="grid lg:grid-cols-2 gap-y-[20px] lg:gap-y-[28px] lg:gap-x-5">
            <div class="text-left">
                <label class="mb-1 color-666 font-medium text-[20px]">E-mail o teléfono</label>
                <InputEmail placeholder="E-mail"  name="email" v-model="email" :isError="errorsKey.includes('email')"/>
            </div>
            <div class="text-left">
                <label class="mb-1 color-666 font-medium text-[20px]">Contraseña</label>
                <InputPassword v-model="password" placeholder="*********" />
            </div>
        </div>
        <div class="text-red-500 text-left font-bold text-sm relative">{{ message }}</div>
        <!-- buttons -->
        <div class="mt-[36px] text-center">
            <button 
                class="bg-07ACB4 hover:text-[#07ACB4] hover:bg-white text-white font-bold text-[20px] py-3 px-[48px] rounded-[6px] shadow-md"
                @click="submit"
            >
                Entrar
            </button>
        </div>
    </form>
    <a href="/ingresar/recuperar-contraseña" class="color-07ACB4 hover-E786F0 text-[20px] text-center block mt-[18px]">Olvide mi contraseña</a>
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
    import InputEmail  from '../../components/InputEmail.vue'
    import InputPassword from '../../components/InputPassword.vue'
    import { useAuthStore } from '~/stores/auth';
    import { useRouter } from 'vue-router';

    //  const authStore = useAuthStore();
    const router = useRouter();
    const store = useAuthStore();

    //const email = 'alejandrojchacon@gmail.com'
    //const password = 'usuario12345'
    const email = ref(null)
    const password = ref(null)
    const message = ref(null)

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

    const login = async () =>{
        const response = await store.login(email.value, password.value);
        //const response = await store.login('alejandrojchacon@gmail.com', 'usuario12345');
        if (response) {
            if (response.role == 'admin') {
                router.push('https://www.youadmin.com/');
            } else if (response.role == 'client') {
                router.push('miespacio/Space');
            } else {
                const redirect = router.query.redirect || '/';
                if (redirect == '/') {
                    router.push('/adminUser/myBookings');
                } else {
                    router.push(redirect);
                }
            } 
        } else {
            message.value = 'Estas credenciales no coinciden con nuestros registros.';
        }
    }
</script>
