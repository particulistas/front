import {
    getToken
} from '../config/apiHeaders'

const token = getToken(); // Obtiene el token

/* const headers = {
  'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${token}`,
  }; */

  const headers = {
    'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': `Bearer ${token}`,
    };
    
  

export const loginService = async (url,email,password) => {
    const body = {email,password}
    
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
      // body: { email,password}
    });

    if (!response.ok) {
      throw new Error('Autenticacion Fallida');
    }
    
    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

export const resendMailVerifiedService = async (url,email) => {
  const body = {email}

  const response = await fetch(`${url}/resend/email`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  
  if (!response.ok) {
      throw new Error('Error al enviar el email');
  }
  
  const data = await response.json();
  return data; // Retorna los datos de la respuesta
};

export const recoveryPasswordService = async (url,email) => {
  const body = {email}

  const response = await fetch(`${url}/recovery/password/`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  
   if (!response.ok) {
      throw new Error('Error al enviar el email');
  } 
  
  const data = await response.json();
  return data; // Retorna los datos de la respuesta
};

export const verifiedMailService = async (url,token) => {
  const body = {token}

  const response = await fetch(`${url}/verified`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  
  if (!response.ok) {
      throw new Error('Error al validar el email');
  }
  
  const data = await response.json();
  return data; // Retorna los datos de la respuesta
};
