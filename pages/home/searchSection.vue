<template>
    <section class="bg-[#155D61] pl-4 lg:pl-[72px] pr-4 lg:pr-10 py-3 lg:rounded-t-[24px] rounded-b-xl lg:rounded-b-[24px] lg:w-[1083px] mx-[-16px] lg:mx-auto mt-5 lg:mt-0">
        <div class="lg:flex lg:items-center">
            <p class="text-white lg:text-[24px] font-bold mr-6 hidden lg:inline-block">Viviendas</p>
            <div>
                <div class="mx-auto flex gap-[35px] lg:gap-3 justify-center">
                    <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Comprar</button>
                    <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Alquilar</button>
                    <button class="text-white lg:p-2.5 text-base lg:text-[20px] font-bold">Compartir</button>
                </div>
                <p class="mt-3 lg:hidden text-base font-medium text-white">Viviendas</p>
                <div class="lg:w-[819px] relative mt-2 lg:mt-0">
                    <input class="w-full h-[37px] lg:h-[62px] bg-white rounded-lg lg:rounded-[24px]"  type="text">
                    <img 
                        class="absolute top-0 bottom-0 my-auto right-2.5 hidden lg:block" 
                        src="/assets/icons/search-07C6CE.svg" alt="home-hero search icon"
                    >
                    <img 
                        class="absolute top-0 bottom-0 my-auto right-2.5 lg:hidden" 
                        src="/assets/icons/search-888888.svg" alt="home-hero search icon"
                    >
                </div>
                <img class="w-[224px] lg:w-auto h-[48px] lg:h-auto  mx-auto" src="/assets/imgs/home-hero-el-refugio-de-los-particulares.svg" alt="home-hero-el-refugio-de-los-particulares">
            </div>
        </div>
    </section>
</template>