// src/utils/notifications.js
export async function createNotification(userId, message, type, data = null) {
  try {
    const url = useRuntimeConfig().public.BASE_URL
     
        //const response = await fetch('http://tu-backend-api.com/api/notifications', {
    //const response = await fetch('http://tu-backend-api.com/api/notifications/create', {
    const response = await fetch(`${url}/notifications/`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        message: message,
        type: type,
        data: data
      })
    });
    
    if (!response.ok) throw new Error('Error creating notification');
    
    return await response.json();
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
}