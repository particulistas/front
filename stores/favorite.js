import { defineStore } from 'pinia'
//import { useFetch } from '#app'

import {
  //getisFavorite,
  //deleteFavoriteService,
 // createFavoriteService,
  getUserFavoritesService,
  getisFavoriteService,
  deleteFavoriteService,
  createFavoriteService

} from '~/api/services/admin.favorites.services'

export const useFavoriteData = defineStore('favorite', {

  state: () => ({
    token: process.client ? localStorage.getItem('authToken') || null : null,
    name: process.client ? localStorage.getItem('authName') || null : null,
    email: process.client ? localStorage.getItem('authEmail') || null : null,
    id: process.client ? localStorage.getItem('authId') || null : null,
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }), 
  /** aqui se crea cada metodo a utilizar donde importes el archivo **/
  actions: {

    /* Metodo para obtener los favoritos */
 
    /* async isFavorite(user_id,vehicle_id){
      try{
        const response = await getisFavorite(this.baseUrl,user_id,vehicle_id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */

    /* async deleteFavorite(user_id,vehicle_id){
      try{
        const response = await deleteFavoriteService(this.baseUrl,user_id,vehicle_id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */

    /* async createFavorite(user_id,vehicle_id){
      try{
        const response = await createFavoriteService(this.baseUrl,user_id,vehicle_id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */

    async getUserFavorites(page,id){
      try{
        const response = await getUserFavoritesService(this.baseUrl,page,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async isFavorite(id){
      try{
        const response = await getisFavoriteService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async createFavorite(id){
      try{
        const response = await createFavoriteService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async deleteFavorite(id){
      try{
        const response = await deleteFavoriteService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },


  }
})
