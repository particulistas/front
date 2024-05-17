<template>
  <div>
    <Layout>
      <div class="bg-[#155D61] lg:bg-white">
        
          <div class="lg:mx-auto lg:w-[642px] text-center">
              <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-2.5 lg:p-1">
                  {{ showRegister ? 'Registrate' : 'Iniciar sesión'}}
                  <img class="absolute right-3 lg:right-2 top-[17px] lg:top-3" src="/assets/icons/times.svg" alt="registro_times">
              </p>
              <div class="bg-white pt-12 lg:pt-[26px] rounded-t-[18px] px-4 lg:px-0">
                <img class="mx-auto" src="/assets/imgs/registro1.svg" alt="registro">
                <div class="border border-07ACB4 rounded-[10px] inline-flex mt-14 lg:mt-6 overflow-hidden">
                  <button 
                    class="px-6 py-2 font-medium text-[20px] leading-5 lg:leading-7"
                    :class="{'color-666 hover-bg-07ACB4 hover:text-white':!showLogin,'bg-07ACB4 text-white':showLogin}"
                    @click="()=>{ showLogin = true; showRegister = false}"
                  >
                    Iniciar sesión
                  </button>
                  <button 
                    class="px-6 py-2 font-medium text-[20px] leading-5 lg:leading-7"
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

      </div>
    </Layout>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '~/layouts/default.vue'
import reigisterForm from './components/reigisterForm.vue';
import loginForm from './components/loginForm.vue';

import { useMainStore } from '~/stores/mainStore';

const mainStore = useMainStore();

const showRegister = ref(true)
const showLogin = ref(false)
</script>
  