<template>
    <div class="relative">
        <Swiper v-if="images.length > 0"
            :slidesPerView="1"
            :spaceBetween="0"
            :freeMode="true"
            :loop="true"
            :modules="modules"
        >
            <SwiperSlide v-for="(image, index) in images" :key="image.id">
                <div v-if="styleCard == 'expandido'" class="absolute rounded-t-[12px] bg-[#D4CB50] flex justify-center gap-[6px] items-center w-full top-0 left-0 z-20">
                    <img class="w-[18px] h-[18px]" src="/assets/icons/revisado-jud.svg" alt="revisado juridicamente icono">
                    <p class="py-1 text-sm text-white">Revisado juridicamente</p>
                </div>
                <img 
                    class="w-full object-cover rounded-[12px]" 
                    :class="{
                        'h-[201px]': !openMap,
                        'h-[245px]': openMap && styleCard == 'expandido',
                        'h-[82px]': styleCard == 'contraido',
                    }"
                    :src="imageUrl + image.path" 
                    :alt="image.name"
                >     
                <div class="absolute py-2 px-1 w-[45px] h-[36px] bg-[#66666666] bottom-2 mx-auto right-0 left-0">
                    <p class="text-white text-[24px] font-semibold leading-5">{{ index+1 }}/{{ images.length }}</p>           
                </div>
            </SwiperSlide>
        </Swiper>
        <div 
            v-else
            class="bg-gray-200 flex items-center justify-center rounded-[12px]"
            :class="{
                'h-[201px]': !openMap,
                'h-[245px]': openMap && styleCard == 'expandido',
                'h-[82px]': styleCard == 'contraido',
            }"
        >
            <span class="text-gray-500">Sin imágenes</span>
        </div>
    </div>
</template>
<script setup>
    import { inject, defineProps  } from 'vue'
    import 'swiper/css';

    const openMap = inject('openMap')
    const styleCard = inject('styleCard')
    const imageUrl = ref('');

    defineProps({
    images: {
        type: Array,
        default: () => []
    }
    })

    onMounted(async () => {
        imageUrl.value = useRuntimeConfig().public.IMAGE_URL; 
    });
</script>