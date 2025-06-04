import {
    getToken
} from '../config/apiHeaders'

const token = getToken(); // Obtiene el token

const headers = {
    'Access-Control-Allow-Origin': '*',
    //'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${token}`,
  };

/* export const getisFavorite = async (url,user,vehicle) => {
    const response = await fetch(`${url}/favorites/isFavorite/?user=${user}&vehicle=${vehicle}`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el vehiculo favorito');
      }

    const data = await response.json();
    return data; 
}; */

/* export const deleteFavoriteService = async (url,user,vehicle) => {
        const response = await fetch(`${url}/favorites/?user=${user}&vehicle=${vehicle}`, {
        method: 'DELETE',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el favorito');
      }

    const data = await response.json();
    return data; 
};  */

/* export const createFavoriteService = async (url,user,vehicle) => {
    const body = {user,vehicle}
    
        const response = await fetch(`${url}/favorites`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        });
    
        if (!response.ok) {
            throw new Error('Error al crear el favorito');
          }
    
        const data = await response.json();
        return data; 
}; */

export const getUserFavoritesService = async (url,page,id) => {

 // const response = await fetch(`${url}/favorites/${id}?page=${page}`, {
  const response = await fetch(`${url}/favorites/${id}`, {
  method: 'GET',
  headers: headers,
});

if (!response.ok) {
  throw new Error('Error al obtener los Favoritos');
}

const data = await response.json();
return data; // Retorna los datos de la respuesta
}; 

export const getisFavoriteService = async (url,id) => {
    const response = await fetch(`${url}/is-favorite/${id}`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el favorito');
      }

    const data = await response.json();
    return data; 
};

export const deleteFavoriteService = async (url,id) => {
    const response = await fetch(`${url}/favorites/${id}`, {
        method: 'DELETE',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el  favorito');
      }

    const data = await response.json();
    return data; 
};

export const createFavoriteService = async (url,id) => {
    const response = await fetch(`${url}/favorites/${id}`, {
        method: 'POST',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el favorito');
      }

    const data = await response.json();
    return data; 
};





