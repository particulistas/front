// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt','nuxt-swiper'],
  postcss: {
    plugins: {
      'postcss-nesting': {}, //
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      IMAGE_URL: process.env.IMAGE_URL,
    },
  },
  env: {
    baseUrl: process.env.BASE_URL, // Usar en el lado del cliente
    imageUrl: process.env.IMAGE_URL, // Usar en el lado del cliente
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL, // Usar en el lado del servidor
    imageUrl: process.env.IMAGE_URL, // Usar en el lado del servidor
  },
  plugins: [
    '~/plugins/windowWidth.js'
  ],  
})
