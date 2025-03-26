import { defineStore } from 'pinia'

import {
  /* getAllVehiclesService,
    createVehicleService,
     getVehicleService,
     updateVehicleService,
     deleteVehicleService,
     getsearchVehicles,
     getfilterBrandVehicles,
     getfilterModelVehicles,
     getVehicleImageService,
     deleteVehicleImageService,
     getRecentModelsService,
     getfeaturedVehiclesService,
     getcatalogueVehiclesService,
     getorderCatalogueVehicleservice,
     filtrarAutosService,
     getCountCatalogueVehiclesService,
     getSimilarVehiclesService, */
     createPropertieFirstStepService,
     createPropertieSecondStepService,
     createPropertieThirdStepService,
     createPropertieFourthStepService,
     updatePropertieStatusService,
     getPropertiesService
} from '~/api/services/admin.properties.services'

export const usePropertieData = defineStore('propertie', {

  state: () => ({
    baseUrl: useRuntimeConfig().public.BASE_URL,
  }),
  /** aqui se crea cada metodo a utilizar donde importes el archivo **/
  actions: {

    /* Metodo para obtener los usuarios */
    /* async getAllVehicles() { //si llamas un endpoint debe ser asincrono para poder utilizar la directiva await sin errores
        //fijese que en cada funcion le coloco get put etc... es importante para la buena practica
        try {
          const response = await getAllVehiclesService(this.baseUrl)
          return response;
            
        } catch (error) {
            console.error(error.message)
        }
      }, */
     async createPropertieFirstStep(authId, selectedTag, transaccion, sale_price, rental_price, m_built, m_usefull, number_habs, bathrooms, state, equipment, selectedCharacteristics, antiquity, caracteristics_optionals){
      try{
        const response = await createPropertieFirstStepService(this.baseUrl,authId, selectedTag, transaccion, sale_price, rental_price, m_built, m_usefull, number_habs, bathrooms, state, equipment, selectedCharacteristics, antiquity, caracteristics_optionals);
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async createPropertieSecondStep(propertyId , number_plants, address, hide_address, top_floor, door, description, uploadedImages, latitude, longitude){
      try{
        const response = await createPropertieSecondStepService(this.baseUrl, propertyId , number_plants, address, hide_address, top_floor, door, description, uploadedImages, latitude, longitude);
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async createPropertieThirdStep(propertyId, energyCertificate, energyData, uploadedPlanoImages){
      try{
        const response = await createPropertieThirdStepService(this.baseUrl, propertyId , energyCertificate, energyData, uploadedPlanoImages);
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 

    async createPropertieFourthStep(propertyId, varbutton, phone, serviceMovil){
      try{
        const response = await createPropertieFourthStepService(this.baseUrl, propertyId, varbutton , phone, serviceMovil);
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 

    async updatePropertieStatus(propertyId, status){
      try{
        const response = await updatePropertieStatusService(this.baseUrl, propertyId, status);
        return response;
      }catch(error){
        console.error(error.message)
      }
    },
      async getProperties(id){
      try{
        const response = await getPropertiesService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
   /*  async updateVehicle(id,title2, selectedbrandId2, selectedmodelVehicleId2, selectedyearVehicleId2, condition2, transmission2, mileage2, selectedColorId2, basePrice2, priceShipping2, priceTax2,images2){
      try{
        const response = await updateVehicleService(this.baseUrl,id,title2, selectedbrandId2, selectedmodelVehicleId2, selectedyearVehicleId2, condition2, transmission2, mileage2, selectedColorId2, basePrice2, priceShipping2, priceTax2,images2)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
     async deleteVehicle(id){
      try{
        const response = await deleteVehicleService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
     async searchVehicles(searchQuery){
      try{
        const response = await getsearchVehicles(this.baseUrl,searchQuery)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async filterBrandVehicles(id){
      try{
        const response = await getfilterBrandVehicles(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async filterModelVehicles(id){
      try{
        const response = await getfilterModelVehicles(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async getVehicleImage(id){
      try{
        const response = await getVehicleImageService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    async deleteVehicleImage(id){
      try{
        const response = await deleteVehicleImageService(this.baseUrl,id)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    // Metodo para obtener los tres vehiculos mas recientes 
    async getRecentModels(authId) { 
      try {
        const response = await getRecentModelsService(this.baseUrl,authId)
        return response;
          
      } catch (error) {
          console.error(error.message)
      }
    },
     // Metodo para obtener los 12 vehiculos aleatorios 
     async getfeaturedVehicles(authId) { 
      try {
        const response = await getfeaturedVehiclesService(this.baseUrl,authId)
        return response;
          
      } catch (error) {
          console.error(error.message)
      }
    },
    // Metodo para obtener los vehiculos para el catalogo 
    async getcatalogueVehicles(authId,page) { 
      try {
        const response = await getcatalogueVehiclesService(this.baseUrl,authId,page)
        return response;
          
      } catch (error) {
          console.error(error.message)
      }
    },
    
    async getOrderCatalogueVehicles(id,authId){
      try{
        const response = await getorderCatalogueVehicleservice(this.baseUrl,id,authId)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 

    async filtrarAutos(selectedFilters){
      try{
        const response = await filtrarAutosService(this.baseUrl, selectedFilters)
       //console.log("selectedFilters2", this.selectedFilters); 
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 
    
    async getCountCatalogueVehicles(){
      try{
        const response = await getCountCatalogueVehiclesService(this.baseUrl)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, 

    async getSimilarVehicles(id,authId){
      try{
        const response = await getSimilarVehiclesService(this.baseUrl,id,authId)
        return response;
      }catch(error){
        console.error(error.message)
      }
    },

    async searchVehicleBooking(searchQuery){
      try{
        const response = await getsearchVehicleBookingService(this.baseUrl,searchQuery)
        return response;
      }catch(error){
        console.error(error.message)
      }
    }, */ 

  }
})
