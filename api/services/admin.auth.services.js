import {
    getToken
} from '../config/apiHeaders'

const token = getToken(); // Obtiene el token

const headers = {
  'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${token}`,
  };
  

export const loginService = async (url,email,password) => {
    const body = {email,password}
    
        const response = await fetch(`${url}/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        });
    
        if (!response.ok) {
            throw new Error('Autenticacion Fallida');
          }
    
        const data = await response.json();
        return data; // Retorna los datos de la respuesta
};

