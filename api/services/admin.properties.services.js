import {
    getToken
} from '../config/apiHeaders'

const token = getToken(); // Obtiene el token

const headers = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${token}`,
  };
  
/* export const getAllVehiclesService = async (url) => {
    const response = await fetch(`${url}/vehicles`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; */

/* export const createVehicleService2 = async (url,title, selectedbrandId, selectedmodelVehicleId, selectedyearVehicleId, condition, transmission, mileage, selectedColorId, basePrice, priceShipping, priceTax, images) => {

        const formData = new FormData();

        formData.append('title', title);
        formData.append('selectedbrandId', selectedbrandId);
        formData.append('selectedmodelVehicleId', selectedmodelVehicleId);
        formData.append('selectedyearVehicleId', selectedyearVehicleId);
        formData.append('condition', condition);
        formData.append('transmission', transmission);
        formData.append('mileage', mileage);
        formData.append('selectedColorId', selectedColorId);
        formData.append('basePrice', basePrice);
        formData.append('priceShipping', priceShipping);
        formData.append('priceTax', priceTax);

        // Agregar imágenes
        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append(`images[${i}]`, images[i]);
            }
        }
    
        const response = await fetch(`${url}/vehicles`, {
            method: 'POST',
            body: formData,
            headers: headers,
        });
    
        if (!response.ok) {
            throw new Error('Error al crear el vehiculo');
          }
    
        const data = await response.json();
        return data; // Retorna los datos de la respuesta
}; */

export const createPropertieFirstStepService = async (baseUrl,authId, selectedTag, transaccion, sale_price, rental_price, m_built, m_usefull, number_habs, bathrooms, state, equipment, selectedCharacteristics, antiquity, caracteristics_optionals) => {

    const response = await $fetch(`${baseUrl}/properties/first-step`, {
        method: 'POST',
        body: {
        
            user_id: authId,
            category_id: selectedTag,
            transaction: transaccion,
            sale_price: sale_price,
            rental_price: rental_price,
            m_built: m_built,
            m_usefull: m_usefull,
            number_habs: number_habs,
            bathrooms: bathrooms,
            state: state,
            equipment: equipment,
            characteristics: selectedCharacteristics,  
            antique: antiquity,
            caracteristics_optionals: caracteristics_optionals

        },
        headers: headers,
    });

    return response;
      
    //const data = await response.json();
    //return data; // Retorna los datos de la respuesta
}; 

export const updatePropertieFirstStepService = async (baseUrl,id, selectedTag, transaccion, sale_price, rental_price, m_built, m_usefull, number_habs, bathrooms, state, equipment, selectedCharacteristics, antiquity, caracteristics_optionals) => {

    const response = await $fetch(`${baseUrl}/properties/update-first-step`, {
        method: 'POST',
        body: {
        
            id: id,
            category_id: selectedTag,
            transaction: transaccion,
            sale_price: sale_price,
            rental_price: rental_price,
            m_built: m_built,
            m_usefull: m_usefull,
            number_habs: number_habs,
            bathrooms: bathrooms,
            state: state,
            equipment: equipment,
            characteristics: selectedCharacteristics,  
            antique: antiquity,
            caracteristics_optionals: caracteristics_optionals

        },
        headers: headers,
    });

    return response;
      
    //const data = await response.json();
    //return data; // Retorna los datos de la respuesta
};

export const createPropertieSecondStepService = async (baseUrl, propertyId , number_plants, address, hide_address, top_floor, door, description, uploadedImages, latitude, longitude, imagesChanged, imagesToDelete) => {

    /* const response = await $fetch(`${baseUrl}/properties/second-step`, {
        method: 'POST',
        body: {
            id: propertyId,
            number_plants: number_plants,
            address: address,
            hide_address: hide_address,
            top_floor: top_floor,
            door: door,
            description: description,
        },
        headers: headers,
    }); */

    //const store = usePropertieData();
    const hide_address2 = hide_address === 0 ? 0 : 1;
    const top_floor2 = top_floor === 0 ? 0 : 1;

    // Crear FormData para enviar imágenes
     const formData = new FormData();
    formData.append('id', propertyId);
    formData.append('number_plants', number_plants);
    formData.append('address', address);
    formData.append('hide_address', hide_address2);
    formData.append('top_floor', top_floor2);
    formData.append('door', door);
    formData.append('description', description); 
    formData.append('latitude', latitude); 
    formData.append('longitude', longitude); 
    formData.append('imagesChanged', imagesChanged); 
    formData.append('imagesToDelete', imagesToDelete.value); 
    // Adjuntar imágenes al FormData
    uploadedImages.value.forEach((image, index) => {
         formData.append(`images[${index}]`, image.file);
     });

      
      // Agregar IDs de imágenes a eliminar
     /*   if (imagesToDelete && imagesToDelete.length > 0) {
        imagesToDelete.value.forEach((id, index) => {
          formData.append(`images_to_delete[${index}]`, id.file);
        });
      }  */

    // Agregar imágenes
    /* if (uploadedImages) {
        for (let i = 0; i < uploadedImages.length; i++) {
            formData.append(`uploadedImages[${i}]`, uploadedImages[i]);
        }
    } */

     const response = await $fetch(`${baseUrl}/properties/second-step`, {
        method: 'POST', // Utiliza POST en lugar de PUT
        body: formData,
        headers: headers,
      });
 
   

    return response;
      
}; 

export const createPropertieThirdStepService = async (baseUrl, propertyId , energyCertificate, energyData, uploadedPlanoImages, imagesChangedPlano, imagesToDeletePlano) => {
 
     // Crear FormData para enviar imágenes
    const formData = new FormData();
    formData.append('id', propertyId);
    formData.append('energy_certificate', energyCertificate);
    formData.append('energy_certificate_yes', energyData);
    formData.append('imagesChanged', imagesChangedPlano); 
    formData.append('imagesToDelete', imagesToDeletePlano.value); 
    
 
     // Adjuntar imágenes al FormData
     uploadedPlanoImages.value.forEach((file, index) => {
        formData.append(`images[${index}]`, file.file);
    });

      const response = await $fetch(`${baseUrl}/properties/third-step`, {
        method: 'POST', // Utiliza POST en lugar de PUT
        body: formData,
        headers: headers,
      });

    /* const response = await $fetch(`${baseUrl}/properties/third-step`, {
        method: 'POST',
        body: {
            id: propertyId,
            energy_certificate: energyCertificate,
            energy_certificate_yes: energyData,
        },
        headers: headers,
    }); */

    return response;
      
};

export const createPropertieFourthStepService = async (baseUrl, propertyId, varbutton, phone, serviceMovil) => {

    const response = await $fetch(`${baseUrl}/properties/fourth-step`, {
        method: 'POST',
        body: {
            id: propertyId,
            publish_phone: varbutton,
            phone: phone,
            phone_characteristics: serviceMovil
        },
        headers: headers,
    });

    return response;
      
};

export const updatePropertieStatusService = async (baseUrl, propertyId, status) => {

    const response = await $fetch(`${baseUrl}/properties/update-status`, {
        method: 'POST',
        body: {
            id: propertyId,
            status: status,
        },
        headers: headers,
    });

    return response;
      
};

export const getPropertiesService = async (baseUrl,id) => {
    const response = await fetch(`${baseUrl}/properties/`+id, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener la Propiedad');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getFetchPropertiesService = async (baseUrl,userId) => {
    const response = await fetch(`${baseUrl}/properties/user/`+userId, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener la Propiedad');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getAllPropertiesService = async (baseUrl) => {
    const response = await fetch(`${baseUrl}/properties/all/all`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener la Propiedad');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

/*
 export const updateVehicleService = async (url,id,title2, selectedbrandId2, selectedmodelVehicleId2, selectedyearVehicleId2, condition2, transmission2, mileage2, selectedColorId2, basePrice2, priceShipping2, priceTax2, images2) => {
    
        const formData = new FormData();

        formData.append('title2', title2);
        formData.append('selectedbrandId2', selectedbrandId2);
        formData.append('selectedmodelVehicleId2', selectedmodelVehicleId2);
        formData.append('selectedyearVehicleId2', selectedyearVehicleId2);
        formData.append('condition2', condition2);
        formData.append('transmission2', transmission2);
        formData.append('mileage2', mileage2);
        formData.append('selectedColorId2', selectedColorId2);
        formData.append('basePrice2', basePrice2);
        formData.append('priceShipping2', priceShipping2);
        formData.append('priceTax2', priceTax2);
        formData.append('isUpdate', true);

       // Agregar imágenes
       if (images2) {
            for (let i = 0; i < images2.length; i++) {
                formData.append(`images2[${i}]`, images2[i]);
            }
        }

        //body: JSON.stringify(body), body: formData,
        const response = await fetch(`${url}/vehicles/${id}`, {
            method: 'POST', // Utiliza POST en lugar de PUT
            body: formData,
            headers: headers,
          });

        if (!response.ok) {
            throw new Error('Error al actualizar el vehiculo');
          }
    
        const data = await response.json();
        console.log(data)
        return data; // Retorna los datos de la respuesta
}; 

 export const deleteVehicleService = async (url,id) => {
    const response = await fetch(`${url}/vehicles/`+id, {
        method: 'DELETE',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

 export const getsearchVehicles = async (url,searchQuery) => {
    const response = await fetch(`${url}/vehicles/searchVehicles/`+searchQuery, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getfilterBrandVehicles = async (url,id) => {
    const response = await fetch(`${url}/vehicles/filterBrandVehicles/`+id, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getfilterModelVehicles = async (url,id) => {
    const response = await fetch(`${url}/vehicles/filterModelVehicles/`+id, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getVehicleImageService = async (url,id) => {
    const response = await fetch(`${url}/imageVehicles/`+id, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const deleteVehicleImageService = async (url,id) => {
    const response = await fetch(`${url}/imageVehicles/`+id, {
        method: 'DELETE',
        headers: headers,
    });
}; 

export const getRecentModelsService = async (url,authId) => {
    const response = await fetch(`${url}/recentModels?authId=${authId}`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

export const getfeaturedVehiclesService = async (url,authId) => {
    const response = await fetch(`${url}/featuredVehicles/`+authId, {
        
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

export const getcatalogueVehiclesService = async (url,authId,page) => {
    
    const response = await fetch(`${url}/catalogueVehicles?page=${page}&authId=${authId}`,{
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

export const getorderCatalogueVehicleservice = async (url,id,authId) => {
    //const response = await fetch(`${url}/orderCatalogueVehicles/`+id, {
        const response = await fetch(`${url}/orderCatalogueVehicles/${id}?authId=${authId}`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const filtrarAutosService = async (url, selectedFilters) => {
    
    const queryParams = new URLSearchParams(selectedFilters);
  
    const response = await fetch(`${url}/filtrarAutos?`+queryParams, {
      
        method: 'GET',
        headers: headers,
    });

 

    const data = await response.json();
    console.log(data)
    return data; // Retorna los datos de la respuesta
};

export const getCountCatalogueVehiclesService = async (url) => {
    const response = await fetch(`${url}/countCatalogueVehicles`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

export const getSimilarVehiclesService = async (url,id,authId) => {
    const response = await fetch(`${url}/similarVehicles/${id}?authId=${authId}`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; 

export const getsearchVehicleBookingService = async (url,searchQuery) => {
    const response = await fetch(`${url}/vehicles/searchVehicleBooking/`+searchQuery, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los vehiculos');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};  */


  