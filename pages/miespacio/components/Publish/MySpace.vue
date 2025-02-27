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
        <button class="absolute bottom-0 right-0 bg-teal-500 rounded-full p-2" @click="showModal = true">
          <img :src="editIcon" class="h-6 w-6 text-white" />
        </button>
        <AvatarModal 
          v-if="showModal"
          @close="showModal = false"
          @confirm="handleAvatarSelection"
        />
        </div>
          <h2 class="text-2xl font-semibold text-gray-700">Datos de registro</h2>
        </div>
      <div class="max-w-md md:max-w-lg lg:max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <form @submit.prevent="updateUser(user.id)">
        <div class="mb-4 flex items-center gap-x-2">
          <label class="text-muted-foreground" for="username">Usuario:</label>
          <input type="text" v-model="user.name" class="shadow-sm  rounded-lg p-2 w-full" required/>
        </div>
        <div class="mb-4 shadow-sm flex items-center gap-x-2">
          <label class="text-muted-foreground whitespace-nowrap" for="phone">Teléfono:</label>
          <div class="flex flex-1 gap-x-2">
            <select v-model="code" class="rounded-lg p-2 w-1/4 shadow-sm focus:ring-teal-500 focus:border-teal-500" required>
              <option value="+34">+34</option>
          </select>
            <input id="phone" v-model="phone" type="tel" class="rounded-lg p-2 w-3/4 shadow-sm  focus:ring-teal-500 focus:border-teal-500"  placeholder="000000000" required/>
            <!-- <InputPhone  id="phone" v-model=" user.profile.phone " type="tel" class="rounded-lg p-2 w-3/4 shadow-sm  focus:ring-teal-500 focus:border-teal-500"  placeholder="000000000"/> -->
          
          </div>
        </div>
        <div class="shadow-sm  mb-4 flex items-center gap-4">
          <label class="text-muted-foreground whitespace-nowrap" for="email">E-mail:</label>
          <input type="email" id="email" v-model="user.email" class="shadow-sm rounded-lg p-2 w-full" placeholder="nombre@mail.com" required/>
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
            <label class="text-muted-foreground whitespace-nowrap" for="currentPassword">Contraseña actual:</label>
            <input type="password" v-model="currentPassword" class="shadow-sm  rounded-lg p-2 flex-1 w-32 sm:w-auto" required/>
          </div>
          <div class="shadow-sm mb-4 flex items-center gap-4">
            <label class="text-muted-foreground whitespace-nowrap" for="newPassword">Contraseña nueva:</label>
            <input type="password" v-model="newPassword" class="shadow-sm rounded-lg p-2 flex-1 w-32 sm:w-auto" required/>
          </div>
          <div class="shadow-sm mb-4 flex items-center gap-4">
            <label class="text-muted-foreground whitespace-nowrap" for="confirmPassword">Confirmar contraseña:</label>
            <input type="password" v-model="confirmPassword" class="shadow-sm rounded-lg p-2 flex-1 w-32 sm:w-auto" required/>
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

  import Swal from 'sweetalert2';
  import AvatarModal from './AvatarModal.vue'

  const mostrarCampos = ref(false)
  const showPasswordChange = ref(false)
  const showPassword = ref(false)
  const showHelp = ref(false)

  const authToken = ref('');
  const authEmail = ref('');
  const authName = ref('');
  const authId = ref('');
  const avatar = ref('');
  const code = ref('');
  const phone = ref('');
  const imageUrl = ref('');
  const user = ref({
    name: '',
    email: '',
    profile: {
      phone: ''
    },
  });

  const currentPassword = ref('');
  const newPassword = ref('');
  const confirmPassword = ref('');

  onMounted(async () => {
    authToken.value = localStorage.getItem('authToken');
    authEmail.value = localStorage.getItem('authEmail');
    authName.value = localStorage.getItem('authName');
    authId.value = localStorage.getItem('authId');
    imageUrl.value = useRuntimeConfig().public.IMAGE_URL_AVATARS; 
    await getUser(authId.value);

  });

  const toggleCampos = () => {
    mostrarCampos.value = !mostrarCampos.value
  }

  const showModal = ref(false)

  const handleAvatarSelection = async (selection) => {
    const url = useRuntimeConfig().public.BASE_URL
    if (selection.type === 'image') {
      // Si se seleccionó una imagen, actualizar el campo avatar en la base de datos
      try {
        //const response = await fetch('/api/update-avatar', {
        const response = await fetch(`${url}/update-avatar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Especificar que el cuerpo es JSON
          },
          body: JSON.stringify({
            userId: authId.value,
            avatar: selection.value, // Nombre del archivo
          }),
        });

        if (!response.ok) {
          throw new Error('Error updating avatar');
        }

        const data = await response.json();

        // Actualizar el avatar en el frontend
        avatar.value = selection.value;
        Swal.fire({
          title: '¡Éxito!',
          text: 'Avatar actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error updating avatar:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al actualizar el avatar.',
        });
      }
    } 
    else if (selection.type === 'avatar') {
      // Si se seleccionó un avatar predefinido, actualizar el campo avatar en la base de datos
      try {
        const fileName = selection.value.split('/').pop(); 
        const response = await fetch(`${url}/update-avatar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Especificar que el cuerpo es JSON
          },
          body: JSON.stringify({
            userId: authId.value,
            avatar: fileName, // URL del avatar
          }),
        });

        if (!response.ok) {
          throw new Error('Error updating avatar');
        }

        const data = await response.json();

        // Actualizar el avatar en el frontend
        avatar.value = selection.value;
        Swal.fire({
          title: '¡Éxito!',
          text: 'Avatar actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error updating avatar:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al actualizar el avatar.',
        });
      }
    } 
    await getUser(authId.value);

  }

  const togglePasswordChange = () => {
      showPasswordChange.value = !showPasswordChange.value
  }

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
  }

  const toggleHelp = () => {
    showHelp.value = !showHelp.value
  }

  async function getUser(id) {
    const store = useUserData();
    const userEdit = await store.getUser(id);
    user.value = userEdit;
       // Extraer solo el número del teléfono (lo que viene después del espacio)
    if (userEdit.profile.phone) {
      const phoneParts = userEdit.profile.phone.split(' ');
      code.value = phoneParts[0]; // Toma la primera parte (antes del espacio)
      phone.value = phoneParts[1] || ''; // Tomar la segunda parte (el número)
    }
    avatar.value = userEdit.profile.avatar;
     
  };

  async function updateUser(id) {

    if(this.mostrarCampos){
      if(this.newPassword != this.confirmPassword){
                  Swal.fire({
                    text: 'Las Contraseñas NO Coinciden',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
                  return 1;
      }
    }

        const store = useUserData() 
        try {
          const response = await store.updateUser(id,this.user.name,this.code,this.phone,this.user.email,this.currentPassword,this.newPassword,this.confirmPassword,this.mostrarCampos)

           // Verificar si la respuesta contiene un mensaje de error
          if (response.message ) {
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: response.message, // Mostrar el mensaje del backend
                  confirmButtonText: 'OK',
              });
              return; // Detener la ejecución si el usuario no fue encontrado
          } 

          this.getUser(id);
          this.mostrarCampos = false;
          Swal.fire({
              title: '¡Operación  Exitosa!',
              text: 'El Usuario fue Actualizado Exitosamente',
              icon: 'success',
              confirmButtonText: 'OK'
            });

        } catch (error) {
          console.error(error);
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal!"
              //footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
  };

</script>