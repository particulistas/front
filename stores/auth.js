import { defineStore } from 'pinia'
import { useFetch } from '#app'

import {
  loginService,
  resendMailVerifiedService,
  recoveryPasswordService,
  verifiedMailService
} from '~/api/services/admin.auth.services'

export const useAuthStore = defineStore('auth', {
   state: () => ({
    token: process.client ? localStorage.getItem('authToken') || null : null,
    name: process.client ? localStorage.getItem('authName') || null : null,
    email: process.client ? localStorage.getItem('authEmail') || null : null,
    id: process.client ? localStorage.getItem('authId') || null : null,
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }), 
 /*  state: () => ({
    token: localStorage.getItem('authToken') || null,
    name: localStorage.getItem('authName') || null,
    email: localStorage.getItem('authEmail') || null,
    id: localStorage.getItem('authId') || null,
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }), */
  actions: {
    async register(firstname, lastname, email, phone, password, password_confirmation) {
      const apiUrl = useRuntimeConfig().public.BASE_URL; //obtengo la url base
      try {
          const response = await useFetch(apiUrl + '/signup', {
              method: 'POST',
              body: { firstname, lastname, email, phone, password, password_confirmation }
          });

          console.log('response data',response)
          if (response.data.value?.success) {
            this.setToken(response.data.value?.token?.token, response.data.value?.user);   
          }
          return response
      } catch (err) {
          console.error('Error in registration:', err);
          throw err; 
      }
    },
  

    
    /* setToken(token, user) {
      this.token = token;
      this.remember_token = user?.remember_token;
      this.name = user?.name;
      this.email = user?.email;
      this.id = user?.id;
      localStorage.setItem('authToken', this.token)
      localStorage.setItem('authName', this.name)
      localStorage.setItem('authEmail', this.email)
      localStorage.setItem('authId', this.id)
      localStorage.setItem('authRememberToken', this.remember_token)
    }, */
    setToken(data) {
      this.token = data.token?.token;
      //this.name = data.profile?.firstname +' '+ data.profile?.lastname ;
      this.name = data.user?.name ;
      this.email = data.user?.email;
      this.id = data.user?.id;
      this.avatar = data.profile?.avatar;
      localStorage.setItem('authToken', this.token)
      localStorage.setItem('authName', this.name)
      localStorage.setItem('authEmail', this.email)
      localStorage.setItem('authId', this.id)
      localStorage.setItem('avatar', this.avatar)
    },
    logout() {
      this.token = null;
      this.name = null;
      this.email = null;
      this.id = null;
      this.remember_token = null;
      localStorage.removeItem('authToken')
      localStorage.removeItem('authName')
      localStorage.removeItem('authEmail')
      localStorage.removeItem('authId')
      localStorage.removeItem('avatar')
      localStorage.removeItem('authRememberToken')
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

    async resendMailVerified(email){
      try{
        const response = await resendMailVerifiedService(this.baseUrl,email)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async recoveryPassword(email){
      try{
        const response = await recoveryPasswordService(this.baseUrl,email)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async verifiedMail(token){
      try{
        const response = await verifiedMailService(this.baseUrl,token)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

  }
})
