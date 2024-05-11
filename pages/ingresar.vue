<template>
  <div>
    <Layout>
      <div class="bg-gray-100">
        
          <div class="mx-auto w-[642px] text-center">
              <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-1">
                  Registrate
                  <img class="absolute right-2 top-3" src="/assets/icons/times.svg" alt="registro_times">
              </p>
              <img class="mx-auto mt-[26px]" src="/assets/imgs/registro1.svg" alt="registro">
              <div class="border border-07ACB4 rounded-[10px] inline-flex mt-6 overflow-hidden">
                <button 
                  class="px-6 py-2 font-medium text-[20px]"
                  :class="{'color-666 hover-bg-07ACB4 hover:text-white':!showLogin,'bg-07ACB4 text-white':showLogin}"
                  @click="()=>{ showLogin = true; showRegister = false}"
                >
                  Iniciar sesión
                </button>
                <button 
                  class="px-6 py-2 font-medium text-[20px]"
                  :class="{'color-666 hover-bg-07ACB4 hover:text-white':!showRegister,'bg-07ACB4 text-white':showRegister}"
                  @click="()=>{ showRegister = true; showLogin = false}"
                >
                  Registrarse
                </button>
              </div>
              <div class="mt-8">
                <reigisterForm v-if="showRegister" />
                <loginForm v-if="showLogin" />
              </div>
          </div>

      </div>
    </Layout>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '~/layouts/default.vue'
import reigisterForm from './ingresar/reigisterForm.vue';
import loginForm from './ingresar/loginForm.vue';

import { useMainStore } from '~/stores/mainStore';

const mainStore = useMainStore();

const showRegister = ref(true)
const showLogin = ref(false)
</script>
  