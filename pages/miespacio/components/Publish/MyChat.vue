<template>
  <div class="min-h-screen  flex ">

    <!-- <div class="hidden lg:block ">
      <div class="bg-[#F5F5F5] rounded-[24px] w-[311px] py-4 h-[20px]">
        <img class="-mt-4" src="/assets/icons/rectangle 2907.png" alt="Avisos"/>
      </div> 
      <div class="-mt-6 bg-[#F5F5F5] rounded-[24px] w-[311px] py-10 h-[100vh] md:max-h-auto">
       
        <div class="p-4">
        
         
        </div>
      </div>
    </div> -->

    <!-- Chat List Sidebar -->
    <div class=" w-[311px] max-md:w-[362px] border-r border-gray-200 flex flex-col bg-white md:bg-[#F5F5F5]  rounded-[24px] ">
      <!-- Header -->
      <div class="bg-[#F5F5F5] rounded-[24px] w-[311px] max-md:w-[361px] py-4 h-[20px]">
        <img class="-mt-4" src="/assets/icons/rectangle 2908.png" />
      </div>

      <!-- <div class="bg-teal-700 text-white p-4 flex items-center justify-between rounded-t-[24px]">
        <h1 class="text-lg font-semibold">Chat</h1>
        <div class="flex items-center space-x-2">
          <button class="p-1 hover:bg-teal-600 rounded">
            <AdjustmentsHorizontalIcon class="h-5 w-5" />
          </button>
        </div>
      </div> -->

      <!-- Search and Filter Bar -->
      <div class="p-3 bg-white md:bg-[#F5F5F5]  flex items-center space-x-2">
        <div class="flex items-center text-teal-500">
          <AdjustmentsVerticalIcon class="h-5 w-5" />
        </div>
        <div class="relative flex-1">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar conversaciones..."
            class="w-full pl-8 pr-3 py-1 border border-gray-300 rounded text-sm"
          />
          <SearchIcon class="h-4 w-4 text-gray-400 absolute left-2.5 top-1.5" />
        </div>
        <button class="text-teal-500">
          <Bars3Icon class="h-5 w-5" />
        </button>
      </div>


      <!-- No Conversation -->
      <div v-if="conversations.length === 0" class="flex-1 flex items-center justify-center">
        <div class="text-center text-gray-500">
          <img :src="vacio" alt="Ilustración de favoritos" class="md:hidden"/>
          <!-- <ChatBubbleLeftRightIcon class="h-16 w-16 mx-auto mb-4 text-gray-300" /> -->
          <p class="nadie_escribe mt-5">¿Nadie te escribe?</p>
          <p class="text_nadie_escribe mt-5">Inicia tus conversaciones contactando con un propietario a través del botón de mensaje en su anuncio.</p>
        </div>
      </div>

      <!-- Conversations List -->
      <div  class="flex-1 overflow-y-auto">
        <div 
          v-for="conversation in filteredConversations" 
          :key="conversation.id"
          @click="selectConversation(conversation)"
          :class="[
            'p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors',
            selectedConversation?.id === conversation.id ? 'bg-blue-50' : ''
          ]"
        >
          <!-- Property Type Badge -->
          <div class="mb-2 flex items-center justify-between bg-teal-500 rounded-t px-2 py-1 ">
            <span class="bg-teal-500 text-white text-xs px-2 py-1 rounded">
              <!-- {{ conversation.properties_id }} {{ conversation.property?.transaction }} -->
                {{ conversation.property.category?.name }}  en
               {{ conversation.property?.transaction === 'rental' ? 'Alquiler' : 
                conversation.property?.transaction === 'sale' ? 'Venta' : 'Alquiler/Venta'  }}   
              <!-- {{ conversation.id }} -->
            </span>
            <span class="bg-teal-500 text-xs text-white">{{ formatTime(conversation.updated_at) }}</span>
          </div>

          <div class="flex items-start space-x-3">
            <!-- Avatar -->
            <div class="relative">
              <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-white">
                  {{ conversation.other_user.name.charAt(0).toUpperCase() }}
                </span>
              </div>
              <div 
                v-if="conversation.other_user.is_online"
                class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
              ></div>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-sm font-medium text-gray-900">
                  {{ conversation.other_user.name }}
                </h3>
                <div class="flex items-center space-x-1">
                  <button 
                    @click.stop="toggleFavorite(conversation)"
                    :class="[
                      'hover:text-yellow-500',
                      conversation.is_favorite ? 'text-yellow-500' : 'text-gray-400'
                    ]"
                  >
                    <StarIcon class="h-4 w-4" />
                  </button>
                  <button class="text-gray-400 hover:text-gray-600">
                    <EllipsisVerticalIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p class="text-xs text-gray-500 mb-1">{{ conversation.last_message?.content || 'No hay mensajes' }}</p>
              
              <!-- Unread indicator -->
              <div v-if="conversation.unread_count > 0" class="flex justify-end">
                <div class="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-xs">{{ conversation.unread_count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Blocked Users -->
        <div v-if="blockedUsers.length > 0" class="border-t">
          <div 
            v-for="blockedUser in blockedUsers" 
            :key="blockedUser.id"
            class="p-3 border-b border-gray-100"
          >
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">
                  {{ blockedUser.name.charAt(0).toUpperCase() }}
                </span>
              </div>
              <div class="flex-1">
                <span class="text-sm text-gray-600">{{ blockedUser.name }}</span>
                <p class="text-xs text-gray-400">Usuario bloqueado</p>
              </div>
              <button 
                @click="unblockUser(blockedUser.id)"
                class="bg-teal-500 text-white text-xs px-3 py-1 rounded hover:bg-teal-600"
              >
                Desbloquear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col p-6 bg-white md:bg-[#F5F5F5] w-[811px] rounded-[24px] ml-5 hidden lg:block ">
      
      <div v-if="selectedConversation" class="h-full flex flex-col">
        <!-- Chat Header -->
        <div class="bg-teal-500 text-white p-4 flex items-center justify-between rounded-t">
          <div class="flex items-center space-x-3">
            <div class="text-lg font-medium">
              {{ selectedConversation.property.category?.name }}  en
               {{ selectedConversation.property?.transaction === 'rental' ? 'Alquiler' : 
                selectedConversation.property?.transaction === 'sale' ? 'Venta' : 'Alquiler/Venta'  }} 
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <button 
              @click="toggleFavorite(selectedConversation)"
              :class="[
                'hover:text-yellow-300',
                selectedConversation.is_favorite ? 'text-yellow-300' : 'text-white'
              ]"
            >
              <StarIcon class="h-5 w-5" />
            </button>
            <button class="text-white hover:text-gray-200">
              <EllipsisVerticalIcon class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Property Info Bar -->
        <div class="bg-gray-100 p-3 flex items-center space-x-3">
          <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <span class="text-white text-sm font-medium">
              {{ selectedConversation.property.owner.name.charAt(0).toUpperCase() }}
            </span>
          </div>
          <div class="flex-1 flex items-center space-x-3">
            <img 
              :src="selectedConversation.property.image || '/placeholder.svg?height=40&width=60'" 
              alt="Property"
              class="w-15 h-10 object-cover rounded"
            />
            <div>
              <p class="text-sm font-medium">
                {{ selectedConversation.property.category?.name }}  en
               {{ selectedConversation.property?.transaction === 'rental' ? 'Alquiler' : 
                selectedConversation.property?.transaction === 'sale' ? 'Venta' : 'Alquiler/Venta'  }} 
              </p>
              <p class="text-xs text-gray-600">{{ selectedConversation.property.address }}</p>
              <p class="text-sm font-bold text-gray-800">
                {{ selectedConversation.property.rental_price ? `${selectedConversation.property.rental_price} €/mes` : `${selectedConversation.property.sale_price} €` }}
              </p>
            </div>
          </div>
          <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <span class="text-white text-sm font-medium">
              {{ selectedConversation.other_user.name.charAt(0).toUpperCase() }}
            </span>
          </div>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" ref="messagesContainer">
          
          <div 
            v-for="message in messages" 
            :key="message.id"
            :class="[
              'flex',
              //message.sender_id === currentUser.id ? 'justify-end' : 'justify-start'
              message.sender_id ===  parseInt(authId) ? 'justify-end' : 'justify-start'
            ]"
          >
            <div class="max-w-xs lg:max-w-md">
              <div 
                :class="[
                  'px-4 py-2 rounded-lg',
                  //message.sender_id === currentUser.id 
                  message.sender_id === parseInt(authId)
                    ? 'bg-teal-500 text-white' 
                    : getUserMessageColor(message.sender)
                ]"
              >
                <div 
                  v-if="message.sender_id !== parseInt(authId)"

                  class="text-xs font-medium mb-1 opacity-75"
                >
                  {{ message.sender.name }}
                </div>
                <p class="text-sm">{{ message.content }}</p>
              </div>
              <p class="text-xs text-gray-400 mt-1">
                {{ formatMessageTime(message.created_at) }}
              </p>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-gray-200 px-4 py-2 rounded-lg">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Message Input -->
        <div class="border-t bg-white p-4">
          <div class="flex items-center space-x-2">
            <button class="text-gray-400 hover:text-gray-600">
              <PlusIcon class="h-6 w-6" />
            </button>
            <input 
              v-model="newMessage"
              @keypress.enter="sendMessage"
              @input="handleTyping"
              type="text" 
              placeholder="Escribe un mensaje..."
              class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button 
              @click="sendMessage"
              :disabled="!newMessage.trim() || isSending"
              class="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- No Conversation Selected -->
      <div v-else class="flex-1 flex items-center justify-center">
        <div class="text-center text-gray-500">
          <img :src="vacio" alt="Ilustración de favoritos" />
          <!-- <ChatBubbleLeftRightIcon class="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p class="text-lg">Selecciona una conversación para comenzar</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import Pusher from 'pusher-js'
import { 
  SearchIcon, 
  StarIcon, 
  EllipsisVerticalIcon, 
  PlusIcon, 
  Send as PaperAirplaneIcon,
  MessagesSquare as ChatBubbleLeftRightIcon,
  Settings2 as  AdjustmentsHorizontalIcon,
 // AdjustmentsVerticalIcon,
   Menu as Bars3Icon
} from 'lucide-vue-next'

//import { Settings2 as AdjustmentsHorizontalIcon } from 'lucide-vue-next'
import AdjustmentsVerticalIcon from 'lucide-vue-next/dist/esm/icons/sliders-vertical'
import vacio from '/assets/imgs/myChatVacio.svg'

// Reactive data
const conversations = ref([ ])
const selectedConversation = ref(null)
const messages = ref([])
const newMessage = ref('')
const searchQuery = ref('')
const blockedUsers = ref([])
const currentUser = ref({ id: 1, name: 'Usuario Actual' })
//const currentUser = ref({ id: authId.value, name: 'Usuario Actual' })
const messagesContainer = ref(null)
const isSending = ref(false)
const isTyping = ref(false)
const typingTimeout = ref(null)

const authToken = ref('');
const authEmail = ref('');
const authName = ref('');
const authId = ref('');
const url = ref('');

// Pusher setup
let pusher = null
let channel = null

// Computed
const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value
  return conversations.value.filter(conv => 
    conv.other_user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    conv.property.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Methods
const initializePusher = () => {
 /*  pusher = new Pusher(process.env.PUSHER_APP_KEY, {
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
  }) */

  /* pusher = new Pusher('53c913e685dc253b9573', {
    cluster: 'mt1',
    encrypted: true
  }) */
  const url = useRuntimeConfig().public.BASE_URL;

  pusher = new Pusher('53c913e685dc253b9573', {
    cluster: 'mt1',
    encrypted: true,
    authEndpoint: `${url}/pusher/auth`, // Usa tu endpoint de autenticación
    auth: {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    }
  });


  // Subscribe to user's private channel
 // channel = pusher.subscribe(`private-user.${currentUser.value.id}`)
  channel = pusher.subscribe(`user.${localStorage.getItem('authId')}`)

  //const channel = pusher.subscribe(emailChannel);
  
  // Listen for new messages
  channel.bind('message.sent', (data) => {
    if (selectedConversation.value && data.conversation_id === selectedConversation.value.id) {
      messages.value.push(data.message)
      nextTick(() => scrollToBottom())
    }
    updateConversationLastMessage(data.conversation_id, data.message)
  })

  // Listen for typing events
  channel.bind('user.typing', (data) => {
    if (selectedConversation.value && data.conversation_id === selectedConversation.value.id) {
      isTyping.value = true
      setTimeout(() => {
        isTyping.value = false
      }, 3000)
    }
  })
}

const loadConversations = async () => {
  try {

    //const url = useRuntimeConfig().public.BASE_URL
    //const response = await fetch(`${url}/notifications/${notificationId}/read`, {

    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/conversations`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    conversations.value = data.data
    //notifications.value.length;
    //alert('numero:' );
    //alert(conversations.value.length );
  } catch (error) {
    console.error('Error loading conversations:', error)
  }
}

const loadBlockedUsers = async () => {
  try {
    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/blocked-users`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    blockedUsers.value = data.data
  } catch (error) {
    console.error('Error loading blocked users:', error)
  }
}

const selectConversation = async (conversation) => {
  selectedConversation.value = conversation
  await loadMessages(conversation.id)
  markAsRead(conversation.id)
}

const loadMessages = async (conversationId) => {
  try {
    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/conversations/${conversationId}/messages`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    messages.value = data.data
    await nextTick()
    scrollToBottom()
  } catch (error) {
    console.error('Error loading messages:', error)
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || !selectedConversation.value || isSending.value) return

  isSending.value = true
  const messageContent = newMessage.value
  newMessage.value = ''

  try {
    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/conversations/${selectedConversation.value.id}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: messageContent
      })
    })

    const data = await response.json()
    
    if (response.ok) {
      messages.value.push(data.data)
      await nextTick()
      scrollToBottom()
    } else {
      newMessage.value = messageContent // Restore message on error
      console.error('Error sending message:', data.message)
    }
  } catch (error) {
    newMessage.value = messageContent // Restore message on error
    console.error('Error sending message:', error)
  } finally {
    isSending.value = false
  }
}

const handleTyping = () => {
  if (!selectedConversation.value) return

  // Clear existing timeout
  if (typingTimeout.value) {
    clearTimeout(typingTimeout.value)
  }

 
  // Send typing event
  const url = useRuntimeConfig().public.BASE_URL;
  fetch(`${url}/conversations/${selectedConversation.value.id}/typing`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`,
      'Content-Type': 'application/json'
    }
  })

  // Set timeout to stop typing
  typingTimeout.value = setTimeout(() => {
    // Optionally send stop typing event
  }, 3000)
}

const toggleFavorite = async (conversation) => {
  try {
    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/conversations/${conversation.id}/favorite`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      conversation.is_favorite = !conversation.is_favorite
    }
  } catch (error) {
    console.error('Error toggling favorite:', error)
  }
}

const unblockUser = async (userId) => {
  try {
    const url = useRuntimeConfig().public.BASE_URL;
    const response = await fetch(`${url}/users/${userId}/unblock`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      blockedUsers.value = blockedUsers.value.filter(user => user.id !== userId)
    }
  } catch (error) {
    console.error('Error unblocking user:', error)
  }
}

const markAsRead = async (conversationId) => {
  try {
    const url = useRuntimeConfig().public.BASE_URL;
    await fetch(`${url}/conversations/${conversationId}/read`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    })

    // Update local conversation
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (conversation) {
      conversation.unread_count = 0
    }
  } catch (error) {
    console.error('Error marking as read:', error)
  }
}

const updateConversationLastMessage = (conversationId, message) => {
  const conversation = conversations.value.find(c => c.id === conversationId)
  if (conversation) {
    conversation.last_message = message
    conversation.updated_at = message.created_at
    //if (message.sender_id !== currentUser.value.id) {
    if (message.sender_id !== localStorage.getItem('authId')) {
      conversation.unread_count = (conversation.unread_count || 0) + 1
    }
  }
}

const getUserMessageColor = (sender) => {
  // Different colors for different users
  const colors = [
    'bg-pink-100 text-gray-800',
    'bg-purple-100 text-gray-800',
    'bg-blue-100 text-gray-800',
    'bg-green-100 text-gray-800'
  ]
  return colors[sender.id % colors.length]
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = (now - date) / (1000 * 60 * 60)

  if (diffInHours < 24) {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  } else if (diffInHours < 48) {
    return 'Ayer'
  } else {
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })
  }
}

const formatMessageTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = (now - date) / (1000 * 60 * 60)

  if (diffInHours < 24) {
    return `Hoy a las ${date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`
  } else if (diffInHours < 48) {
    return `Ayer a las ${date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`
  } else {
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })
  }
}

const getAuthToken = () => {
  // Get token from localStorage, cookie, or your auth system
  return localStorage.getItem('authToken') || ''
  
}

// Lifecycle
onMounted(() => {
  authToken.value = localStorage.getItem('authToken');
  authEmail.value = localStorage.getItem('authEmail');
  authName.value = localStorage.getItem('authName');
  authId.value = localStorage.getItem('authId');

  url.value = useRuntimeConfig().public.BASE_URL

  loadConversations()
  loadBlockedUsers()
  initializePusher()
})

onUnmounted(() => {
  if (channel) {
    channel.unbind_all()
   // pusher.unsubscribe(`private-user.${currentUser.value.id}`)
    pusher.unsubscribe(`user.${localStorage.getItem('authId')}`)
  }
  if (pusher) {
    pusher.disconnect()
  }
  if (typingTimeout.value) {
    clearTimeout(typingTimeout.value)
  }
})
</script>

<style scoped>

/* ¿Nadie te escribe? */
  .nadie_escribe{
    /* position: absolute;
    width: 231px;
    height: 33px;
    left: 154px;
    top: 330px; */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    color: #666666;
  }

  .text_nadie_escribe{
    /* position: absolute;*/
    width: 311px;
    height: 85px;
    left: 124px;
    top: 387px; 

    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #666666;
  }



</style>
