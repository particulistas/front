export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('windowWidth', process.client ? window.innerWidth : 0);

  if (process.client) {
    window.addEventListener('resize', () => {
      nuxtApp.provide('windowWidth', window.innerWidth);
    });
  }
});
