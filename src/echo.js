
// src/echo.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

     
 const echo = new Echo({
    broadcaster: 'pusher',
    //key: process.env.VUE_APP_PUSHER_KEY,
    key: '53c913e685dc253b957',
    //cluster: process.env.VUE_APP_PUSHER_CLUSTER,
    cluster: 'mt1',
    forceTLS: true,
   // authEndpoint: 'http://tu-backend-api.com/api/broadcasting/auth',
    authEndpoint: `http://127.0.0.1:8000/api/v1/broadcasting/auth`,
    auth: {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
}); 


export default echo;  // ← Esto es lo importante
