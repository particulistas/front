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
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt','nuxt-swiper',],
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
      IMAGE_URL_AVATARS: process.env.IMAGE_URL_AVATARS,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,

      PUSHER_APP_ID: process.env.PUSHER_APP_ID,
      PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
      PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
      PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,

      pusherAppKey: process.env.PUSHER_APP_KEY,
      pusherAppCluster: process.env.PUSHER_APP_CLUSTER,
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000'

    },
  },

  
 /*  env: {
    baseUrl: process.env.BASE_URL, // Usar en el lado del cliente
    imageUrl: process.env.IMAGE_URL, // Usar en el lado del cliente
    IMAGE_URL_AVATARS: process.env.IMAGE_URL_AVATARS,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL, // Usar en el lado del servidor
    imageUrl: process.env.IMAGE_URL, // Usar en el lado del servidor
    IMAGE_URL_AVATARS: process.env.IMAGE_URL_AVATARS,
  }, */
  plugins: [
    '~/plugins/windowWidth.js',
  ],
})
