<template>
    <div>
      <Layout>
        <div class="bg-gray-100">
          
            <div class="mx-auto w-[642px]">
                <p class="bg-[#155D61] relative text-white text-center text-[24px] font-medium p-1">
                    Registrate
                    <img class="absolute right-2 top-3" src="/assets/icons/times.svg" alt="registro_times">
                </p>
                <img class="mx-auto mt-[26px]" src="/assets/imgs/registro1.svg" alt="registro">
            </div>

        </div>
      </Layout>
    </div>
  </template>
  <script setup>
  import Layout from '~/layouts/default.vue'
  import { useMainStore } from '~/stores/mainStore';
  
  const mainStore = useMainStore();
  </script>
  