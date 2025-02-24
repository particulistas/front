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
  
/* export const getAllUsersService = async (url) => {
    const response = await fetch(`${url}/users`, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; */

/* export const createUserService = async (url,name,email,password,password_confirmation,role) => {
    const body = {name,email,password,password_confirmation,role}
    
        const response = await fetch(`${url}/users`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        });
    
        if (!response.ok) {
            throw new Error('Error al crear usuario');
          }
    
        const data = await response.json();
        return data; // Retorna los datos de la respuesta
}; */

export const getUserService = async (url,id) => {
    const response = await fetch(`${url}/users/`+id, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
};

 export const updateUserService = async (url,id,name,code,phone,email,currentPassword,newPassword,confirmPassword,mostrarCampos) => {
   /*  const body = {name}
    
        const response = await fetch(`${url}/users/+${id}+?name=${name}`, {
            method: 'PUT',
           // body: JSON.stringify(body),
            headers: headers,
        }); */


        const body = JSON.stringify({ name,code,phone,email,currentPassword,newPassword,confirmPassword,mostrarCampos });

        const response = await fetch(`${url}/users/${id}`, {
            method: 'PUT',
            body: body, 
            headers: {
                'Content-Type': 'application/json', // Asegura que el backend lo reciba correctamente
                ...headers, // Agrega otros headers si los tienes
            },
        });



        if (!response.ok) {
            throw new Error('Error al actualizar los usuarios');
          }
    
        const data = await response.json();
        return data; // Retorna los datos de la respuesta
}; 

/* export const deleteUserService = async (url,id) => {
    const response = await fetch(`${url}/users/`+id, {
        method: 'DELETE',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; */

/* export const getsearchUsers = async (url,searchQuery) => {
    const response = await fetch(`${url}/users/searchUsers/`+searchQuery, {
        method: 'GET',
        headers: headers,
    });

    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
      }

    const data = await response.json();
    return data; // Retorna los datos de la respuesta
}; */