import Pusher from 'pusher-js'

export default ({ app }, inject) => {
  const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
    cluster: process.env.PUSHER_APP_CLUSTER,
    forceTLS: true
  })
  
  inject('pusher', pusher)
}