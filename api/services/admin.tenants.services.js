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



export const getByUserIdTenantService = async (url,userId,room) => {

 // const response = await fetch(`${url}/favorites/${id}?page=${page}`, {
 const response = await fetch(`${url}/tenants?user_id=${userId}&room=${room}`,{
 // const response = await fetch(`${url}/favorites/${id}`, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Error al obtener el Perfil de Inquilino');
  }

  const data = await response.json();
  return data; // Retorna los datos de la respuesta
}; 


