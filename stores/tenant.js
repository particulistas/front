import { defineStore } from 'pinia'

import {

  getByUserIdTenantService

} from '~/api/services/admin.tenants.services'

export const useTenantData = defineStore('tenant', {

  state: () => ({
    token: process.client ? localStorage.getItem('authToken') || null : null,
    name: process.client ? localStorage.getItem('authName') || null : null,
    email: process.client ? localStorage.getItem('authEmail') || null : null,
    id: process.client ? localStorage.getItem('authId') || null : null,
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }), 
  /** aqui se crea cada metodo a utilizar donde importes el archivo **/
  actions: {

    /* Metodo para obtener los pefiles de inquilino */
 
    async getByUserIdTenant(userId,room){
      try{
        const response = await getByUserIdTenantService(this.baseUrl,userId,room)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    
   

  }
})
