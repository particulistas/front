<template>
    <Layout>
        <div class="bg-[#155D61] lg:bg-white">
            
            <div class="lg:mx-auto lg:w-[642px] text-center">
                <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-2.5 lg:p-1">
                    Verificación del e-mail
                    <img class="cursor-pointer absolute right-3 lg:right-2 top-[17px] lg:top-3" src="/assets/icons/times.svg" alt="registro_times" @click="closeModal">
                </p>
                <div class="bg-white pt-6 px-4">
                    <img class="mx-auto" src="/assets/imgs/card-confirm-register.svg" alt="card-confirm-register">
                    <p class="color-666 leading-5 text-[20px] lg:text-[24px] mt-[30px]">La verificación del correo electrónico:</p>
                    <p class="color-27ABB1 mt-4 text-[20px]"> {{ email }}</p>
                    <div class="mt-4 border-b border-gray-[#666] lg:w-[412px] lg:mx-auto"></div>
                    <p class="text-red-500 leading-5 text-[20px] lg:text-[24px] mt-[30px]">
                        <b>{{ message }}</b> 
                    </p>
                    <div class="mt-8 mb-20 text-center">     </div>
                </div>
            </div>

        </div>
    </Layout>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    import Layout from '~/layouts/default.vue'
    import { useRoute, useRouter } from 'vue-router';
    import { useAuthStore } from '~/stores/auth';

    const route = useRoute();
    const router = useRouter();
    const store = useAuthStore();
    const email = ref('');
    const token = ref('');
    const message = ref(null)

    onMounted(() => {
        email.value = route.query.email;
        token.value = route.query.to;
        submit();
    });

    const closeModal = () => {
        router.push('/');
    }

    const submit = async () =>{
        const response = await store.verifiedMail(token.value);
        if (response) {
            message.value = 'VALIDACION SATISFACTORIA';
        } else {
            message.value = 'VALIDACION ERRADA';
        }
          
    }

</script>    