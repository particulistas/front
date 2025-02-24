import { defineStore } from 'pinia'
//import { useFetch } from '#app'

import {
  //getAllUsersService,
   // createUserService,
    getUserService,
    updateUserService,
   // deleteUserService,
  //  getsearchUsers,
   // identifyUserService,
   // sendEmailService
} from '~/api/services/admin.users.services'

export const useUserData = defineStore('user', {

  state: () => ({
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }),
  /** aqui se crea cada metodo a utilizar donde importes el archivo **/
  actions: {

    /* Metodo para obtener los usuarios */
  /*   async getAllUsers() { //si llamas un endpoint debe ser asincrono para poder utilizar la directiva await sin errores
        try {
          const response = await getAllUsersService(this.baseUrl)
          return response;
            
        } catch (error) {
            console.error(error.message)
        }
      }, */
  /*   async createUser(name,email,password,password_confirmation,role,document,phone){
      try{
        const response = await createUserService(this.baseUrl,name,email,password,password_confirmation,role,document,phone)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */
    async getUser(id){
      try{
        const response = await getUserService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async updateUser(id,name,code,phone,email,currentPassword,newPassword,confirmPassword,mostrarCampos){
      try{
        const response = await updateUserService(this.baseUrl,id,name,code,phone,email,currentPassword,newPassword,confirmPassword,mostrarCampos)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
   /*  async deleteUser(id){
      try{
        const response = await deleteUserService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */
/*     async searchUsers(searchQuery){
      try{
        const response = await getsearchUsers(this.baseUrl,searchQuery)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */
   /*  async identifyUser(email){
      try{
        const response = await identifyUserService(this.baseUrl,email)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */
   /*  async sendEmail(name,email,motive,message){
      try{
        const response = await sendEmailService(this.baseUrl,name,email,motive,message)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */
  }
})
