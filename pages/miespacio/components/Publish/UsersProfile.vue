<template>
    
  <!-- <div class="max-w-md bg-gray-100 mx-auto bg-card p-6 rounded-lg shadow-md"> -->
  <div class="max-w-md md:max-w-lg lg:max-w-xl bg-gray-100 mx-auto bg-card p-6 rounded-lg shadow-md">
    <div class="flex flex-col items-center mb-4">
      <div class="relative w-36 h-36 mx-auto mb-4">
        <div class="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
          <!-- <img :src="camara" class="h-16 w-16 text-white" /> -->
          <img v-if="avatar" class="w-36 h-36 rounded-full object-cover" :src="imageUrl + avatar" alt="Imagen de Perfil">
          <img v-else class="h-16 w-16 text-white" :src="camara" alt="Imagen de Perfil">
        </div>
        <button class="absolute bottom-0 right-0 bg-teal-500 rounded-full p-2">
          <img :src="editIcon" class="h-6 w-6 text-white" />
        </button>
        </div>
          <h2 class="text-2xl font-semibold text-gray-700">Datos de registro</h2>
        </div>
      <div class="max-w-md md:max-w-lg lg:max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <form>
        <div class="mb-4 flex items-center gap-x-2">
          <label class="text-muted-foreground" for="username">Usuario:</label>
          <input type="text" id="username" v-model="user.name" class="shadow-sm  rounded-lg p-2 w-full" />
        </div>
        <div class="mb-4 shadow-sm flex items-center gap-x-2">
          <label class="text-muted-foreground whitespace-nowrap" for="phone">Teléfono:</label>
          <div class="flex flex-1 gap-x-2">
            <input type="text" id="code" value="+34" class="rounded-lg p-2 w-1/4 shadow-sm  focus:ring-teal-500 focus:border-teal-500" />
            <input id="phone" v-model="user.profile.phone" type="tel" class="rounded-lg p-2 w-3/4 shadow-sm  focus:ring-teal-500 focus:border-teal-500"  placeholder="000000000"/>
            <!-- <InputPhone  id="phone" v-model=" user.profile.phone " type="tel" class="rounded-lg p-2 w-3/4 shadow-sm  focus:ring-teal-500 focus:border-teal-500"  placeholder="000000000"/> -->
          
          </div>
        </div>
        <div class="shadow-sm  mb-4 flex items-center gap-4">
          <label class="text-muted-foreground whitespace-nowrap" for="email">E-mail:</label>
          <input type="email" id="email" v-model="user.email" class="shadow-sm rounded-lg p-2 w-full" placeholder="nombre@mail.com"/>
        </div>
        <div class="mb-4 flex justify-between items-center mt-10">
          <span class="text-muted-foreground">Cambiar contraseña</span>
          <button type="button" class="text-blue-500" @click="toggleCampos">
            <span class="material-icons text-blue-500 text-xl">
              <img :src="mostrarCampos ? closeIcon : editIcon" />
            </span>
          </button>
        </div>
        <div v-if="mostrarCampos">
          <div class="shadow-sm  mb-4 flex items-center gap-4">
            <label class="text-muted-foreground whitespace-nowrap" for="current-password">Contraseña actual:</label>
            <input type="password" id="current-password" class="shadow-sm  rounded-lg p-2 flex-1 w-32 sm:w-auto" />
          </div>
          <div class="shadow-sm mb-4 flex items-center gap-4">
            <label class="text-muted-foreground whitespace-nowrap" for="new-password">Contraseña nueva:</label>
            <input type="password" id="new-password" class="shadow-sm rounded-lg p-2 flex-1 w-32 sm:w-auto" />
          </div>
          <div class="shadow-sm mb-4 flex items-center gap-4">
            <label class="text-muted-foreground whitespace-nowrap" for="confirm-password">Confirmar contraseña:</label>
            <input type="password" id="confirm-password" class="shadow-sm rounded-lg p-2 flex-1 w-32 sm:w-auto" />
          </div>
        </div>
        <div class="flex items-center justify-center gap-x-4">
          <button type="button" class="bg-pink-100 text-pink-700 hover:bg-pink-200 px-4 py-2 rounded-md text-sm font-medium">
            Cancelar
          </button>
          <button type="submit" class="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-md text-sm font-medium">
            Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="max-w-md md:max-w-lg lg:max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md mt-5">
      <button @click="toggleHelp" class="flex items-center justify-between w-full text-left text-teal-500 hover:text-teal-600">
        <span class="text-lg font-medium">¿Problemas? ¡Te ayudamos!</span>
        <ChevronDownIcon v-if="!showHelp" class="h-5 w-5" />
        <ChevronUpIcon v-else class="h-5 w-5" />
      </button>
      <div v-if="showHelp" class="mt-4 text-sm text-gray-600">
        <p>Si necesitas ayuda, por favor contáctanos a través de nuestro servicio de soporte.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, provide } from 'vue';
  import ModalQuestions from './ModalQuestions.vue'
  import UploadFiles from './UploadFiles.vue'
  import InputPhone from '../../../components/InputPhone.vue'

  import editIcon from '/assets/icons/edit-pencil-blue.svg'
  import closeIcon from '/assets/icons/close.svg'
  import camara from '/assets/icons/camara.svg'
  import { useUserData } from '../../stores/users'

  const form = ref({
    username: 'Alejandro Rodriguez',
    phone: '',
    email: 'nombre@mail.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const mostrarCampos = ref(false)
  const showPasswordChange = ref(false)
  const showPassword = ref(false)
  const showHelp = ref(false)

  const authToken = ref('');
  const authEmail = ref('');
  const authName = ref('');
  const authId = ref('');
  const avatar = ref('');
  const imageUrl = ref('');
  const user = ref({
    name: '',
    email: '',
    profile: {
      phone: ''
    }
  });
 

  onMounted(async () => {
    authToken.value = localStorage.getItem('authToken');
    authEmail.value = localStorage.getItem('authEmail');
    authName.value = localStorage.getItem('authName');
    authId.value = localStorage.getItem('authId');
    avatar.value = localStorage.getItem('avatar');
    imageUrl.value = useRuntimeConfig().public.IMAGE_URL_AVATARS; 
    await getUser(authId.value);

  });

  const toggleCampos = () => {
    mostrarCampos.value = !mostrarCampos.value
  }

  const openModal = ref(false)
  provide('openModal',openModal)


  const togglePasswordChange = () => {
      showPasswordChange.value = !showPasswordChange.value
  }

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
  }

  const toggleHelp = () => {
    showHelp.value = !showHelp.value
  }

  const onSubmit = () => {
    // Handle form submission
    console.log('Form submitted', form.value)
  }

  /* const fetchUserData = async () => {
    try {
        const { data } = await axios.get('/api/user')
        user.value = data
        avatarUrl.value = data.profile?.avatar ? `/assets/avatars/${data.profile.avatar}` : '/default-avatar.png'
    } catch (error) {
        console.error('Error al cargar datos del usuario', error)
    } */

    async function getUser(id) {
    //async getUser(id) {
        const store = useUserData();
          const userEdit = await store.getUser(id);
         // user.value = userEdit;
          user.value = {
            ...userEdit,
            profile: userEdit.profile || { phone: '' }
          };
        //  avatar.value = user.profile.avatar;
          //const data = await response.json(); // Convertir la respuesta a JSON
          //messages.value = data;
          /* this.user.name = userEdit.name;
          this.user.email = userEdit.email;
          this.user.roles = userEdit.roles[0]?.name;
          this.user.document = userEdit.document;
          this.user.phone = userEdit.phone; */
          //console.log("userEdit", userEdit.roles[0]);
          //this.isModalActive = true
     
      };
     

</script>