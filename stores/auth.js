import { defineStore } from 'pinia'
import { useFetch } from '#app'

import {
  loginService
} from '~/api/services/admin.auth.services'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    name: localStorage.getItem('authName') || null,
    email: localStorage.getItem('authEmail') || null,
    id: localStorage.getItem('authId') || null,
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }),
  actions: {
    async register(name, email, password, password_confirmation) {
      const apiUrl = useRuntimeConfig().public.BASE_URL; //obtengo la url base
      try {
        const { data, error } = await useFetch(apiUrl + '/signup', {
          method: 'POST',
          body: { name, email, password, password_confirmation }
        })

        if (error.value) {
          throw new Error(error.value)
        }
        
        this.setToken(data.value)
      } catch (err) {
        console.error(err.message)
        // Manejo de errores
      }
    },
    setToken(data) {
      this.token = data.token?.token;
      this.name = data.user?.name;
      this.email = data.user?.email;
      this.id = data.user?.id;
      localStorage.setItem('authToken', this.token)
      localStorage.setItem('authName', this.name)
      localStorage.setItem('authEmail', this.email)
      localStorage.setItem('authId', this.id)
    },
    logout() {
      this.token = null;
      this.name = null;
      this.email = null;
      this.id = null;
      localStorage.removeItem('authToken')
      localStorage.removeItem('authName')
      localStorage.removeItem('authEmail')
      localStorage.removeItem('authId')
    },
    async login(email, password) {
      try {
          const data = await loginService(this.baseUrl,email,password)
          
          this.setToken(data) //tienes que ver como funcionan las cosas, no todo es igual, aqui no puede ir value por que no se trae la respuesta de lña misma forma
          //por eso es que no guardaba nada, por que aqui se pasa solo data, utiliza el console.log para ver las respuesats y ver que puedes pasar y como
          return data;
      } catch (err) {
        console.error(err.message)
              }
    },

  }
})
