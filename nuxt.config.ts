// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }
      ]
    }
  },
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
