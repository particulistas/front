<template>
  <div class="max-w-6xl mx-auto px-4 py-5   min-h-screen bg-gray-100 rounded-lg">
    <!-- Header -->
    <header class="hidden md:block" >
      <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <button class="hidden md:block text-gray-600 hover:text-gray-800 mr-8" @click="goBack">
              <img :src="navigation_left_blue" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
            </button>
          <h1 class="titulo">Alquiler de Habitación</h1>
        </div>
        <!-- <div class="flex items-center bg-teal-700 text-white px-4 py-2 rounded-full">
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
            <span class="text-teal-700 text-sm">😊</span>
          </div>
          <span class="font-medium">Carlos</span>
        </div> -->
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 py-6">
      <!-- Info Banner -->
      <div class="bg-[#D4CB50] text-center py-4 px-6 rounded-lg mb-8">
        <p class="subtitulo">
          Este es el perfil que enviaremos a los propietarios cuando busques alquilar una habitación
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-6">
            <!-- Number of People -->
            <div>
              <div>
                <h3 class="text-gray-700 font-medium mb-4">
                  ¿Cuántas personas vivirían en la habitación? 
                  <span class="text-gray-500 font-normal italic">(incluya menores)</span>
                </h3>
                <div class="space-y-2 max-w-xs mx-auto">
                  <!-- Personas - renderizado dinámico -->
                  <div 
                     v-for="(person, index) in form.people" 
                    :key="person.id"
                    class="flex justify-between items-center"
                  >
                    <span class="text-gray-600 w-1/3 text-left">{{ person.name }}</span>
                    <span class="text-gray-600 w-1/3 text-center">Edad</span>
                    <input 
                      v-model="person.age" 
                      type="number" 
                      class="w-1/3 px-2 py-1 border-b border-gray-300 text-right focus:outline-none focus:ring-1 focus:ring-teal-500 bg-transparent"
                      placeholder="0"
                    />
                     <button 
                      v-if="index === form.people.length - 1 && form.people.length > 1"
                      type="button" 
                      @click="removePerson(person.id)"
                      class="text-red-500 hover:text-red-700 ml-2"
                      title="Eliminar persona"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Botón Agregar otra -->
                  <div class="pt-2">
                    <button 
                      type="button" 
                      class="border border-[#27ABB1] rounded-[8px] px-3 py-0.5 hover:bg-[#27ABB1] hover:text-white text-teal-500 hover:text-teal-600 flex items-center"
                      @click="addPerson"
                    >
                      Agregar otra
                      <PlusIcon class="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pets -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">Tienes mascotas</h3>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="pet in petOptions" 
                  :key="pet"
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white ',
                    form.pets.includes(pet) 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="togglePet(pet)"
                >
                  {{ pet }}
                </button>
              </div>
            </div>

            <!-- Income Percentage -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">
                El precio del alquiler representa del total de ingresos de las personas que asumen al renta
              </h3>
              <div class="space-y-2">
                <label 
                  v-for="option in incomeOptions" 
                  :key="option.value" 
                  class="flex items-start cursor-pointer"
                >
                  <!-- Input radio oculto -->
                  <input 
                    v-model="form.incomePercentage" 
                    :value="option.value"
                    type="radio" 
                    name="incomePercentage" 
                    class="hidden"
                  />
                  <!-- Custom radio rectangular -->
                  <span 
                    class="inline-block w-4 h-4 border border-[#27ABB1] rounded-sm mr-2 relative"
                    :class="{'bg-[#27ABB1]': form.incomePercentage === option.value}"
                  >
                    <span 
                      v-if="form.incomePercentage === option.value"
                      class="absolute inset-0 flex items-center justify-center text-white"
                    >
                      ✓
                    </span>
                  </span>
                  <span class="text-sm text-gray-600">{{ option.label }}</span>
                </label>
              </div>
            </div>

            <!-- Minimum Stay -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">Me comprometo a una estancia mínima de</h3>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="stay in stayOptions" 
                  :key="stay"
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white',
                    form.minimumStay === stay 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.minimumStay = stay"
                >
                  {{ stay }}
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <!-- Smoking Restriction -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">
                ¿Aceptarías la restricción de no poder fumar dentro de la vivienda?
              </h3>
              <div class="flex gap-2">
                <!-- "border border-[#27ABB1] color-666 text-base font-medium rounded-[8px] px-3 py-0.5 hover:bg-[#27ABB1] hover:text-white -->
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white ',
                    form.acceptNoSmoking === true 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white ' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.acceptNoSmoking = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px] px-4 py-2  transition-colors hover:bg-[#27ABB1] hover:text-white',
                    form.acceptNoSmoking === false 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white ' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.acceptNoSmoking = false"
                >
                  No
                </button>
              </div>
            </div>

            <!-- Employment Situation -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">Situación laboral de las personas que alquilan</h3>
              <div class="space-y-3">
                <!-- Situaciones laborales - renderizado dinámico -->
                <div 
                  v-for="(employment, index) in form.employmentSituations" 
                  :key="employment.id"
                  class="flex items-center justify-between"
                >
                  <span class="text-gray-600">{{ employment.name }}</span>
                  <select 
                    v-model="employment.situation"
                    class="button-dropdown icon-container hover:bg-white px-3 py-1 flex items-center justify-between rounded-[10px] border border-[#27ABB1]"
                  >
                    <option value="">Seleccionar</option>
                    <option value="employed">Empleado</option>
                    <option value="self-employed">Autónomo</option>
                    <option value="student">Estudiante</option>
                    <option value="unemployed">Desempleado</option>
                  </select>
                  <button 
                    v-if="index === form.employmentSituations.length - 1 && form.employmentSituations.length > 1"
                    type="button" 
                    @click="removePerson(employment.id)"
                    class="text-red-500 hover:text-red-700 ml-2"
                    title="Eliminar persona"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <!-- Botón Agregar otra -->
                <button 
                  type="button" 
                  class="border border-[#27ABB1] rounded-[8px] px-3 py-0.5 hover:bg-[#27ABB1] hover:text-white text-teal-500 hover:text-teal-600 flex items-center"
                  @click="addPersonSelect"
                >
                  Agregar otra
                  <PlusIcon class="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <!-- Documentation -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">
                ¿Podría facilitar documentación que demuestre los ingresos de las personas que asumen la renta (nóminas, etcétera)?
              </h3>
              <div class="flex gap-2">
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white',
                    form.canProvideDocumentation === true 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white ' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideDocumentation = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white',
                    form.canProvideDocumentation === false 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white ' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideDocumentation = false"
                >
                  No
                </button>
              </div>
            </div>

            <!-- References -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">
                ¿Podría proporcionar referencias de anteriores arrendadores y/o empleadores?
              </h3>
              <div class="flex gap-2">
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white',
                    form.canProvideReferences === true 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideReferences = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'border border-[#27ABB1] rounded-[8px]  px-4 py-2 hover:bg-[#27ABB1] hover:text-white',
                    form.canProvideReferences === false 
                      ? 'border border-[#27ABB1] bg-[#27ABB1] text-white' 
                      : 'border border-[#27ABB1] text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideReferences = false"
                >
                  No
                </button>
              </div>
            </div>

            <!-- Declarations -->
            <div>
              <h3 class="text-gray-700 font-medium mb-4">
                Por favor, confirme o rechace las siguientes afirmaciones
              </h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <ToggleButton v-model="form.noCreditIssues" />
                  <span class="text-gray-600 text-sm ml-2">
                    Declaro ausencia de infracción en mi historial crediticio
                  </span>
                 
                </div>
                <div class="flex items-center justify-between">
                  <ToggleButton v-model="form.notRealEstateProfessional" />
                  <span class="text-gray-600 text-sm ml-2">
                    Declaro no actuar como profesional del sector inmobiliario
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div>
          <h3 class="text-gray-700 font-medium mb-4">¿Otra información relevante?</h3>
          <textarea 
            v-model="form.additionalInfo"
            class="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg resize-none"
            placeholder="Los propietarios agradecen información como tu profesión, ocupación, disponibilidad para incorporación, etcétera"
          ></textarea>
          <div class="text-legth text-sm text-gray-500 mt-1">
            {{ form.additionalInfo.length }} / X000 Caracteres
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center pt-6">
          <button 
            type="submit"
            class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { ChevronLeftIcon, PlusIcon } from 'lucide-vue-next'
  import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'
  import ToggleButton from './ToggleButton.vue'
  import { useRouter } from 'vue-router'
  import { useTenantData } from '@/stores/tenant'
  import Swal from 'sweetalert2';
  //import { createNotification } from '@/src/utils/notifications';
  

  // Obtener el ID del usuario autenticado (ajusta según tu sistema de autenticación)
  const userId = ref(null) // Aquí deberías obtener el ID del usuario logueado


  const router = useRouter()
  const authToken = ref('');
  const authEmail = ref('');
  const authName = ref('');
  const authId = ref('');

  const url = ref('');

  const form = ref({
    id: null, // Para saber si es un registro existente
    user_id: authId.value,
    people: [
      { id: 1, name: 'Persona 1', age: 0 }
    ],
    employmentSituations: [
      { id: 1, name: 'Persona 1', situation: '' }
    ],
    pets: [],
    incomePercentage: '',
    minimumStay: '',
    acceptNoSmoking: null,
    canProvideDocumentation: null,
    canProvideReferences: null,
    noCreditIssues: false,
    notRealEstateProfessional: false,
    additionalInfo: ''
  })

  const petOptions = ['Perro', 'Gato', 'Otros', 'No tengo']
  const incomeOptions = [
    { value: 'less30', label: 'Menos del 30% de la suma de las rentas de las personas que asumen el pago' },
    { value: '30to40', label: 'Entre el 30 y el 40% de la suma de las rentas de las personas que asumen el pago' },
    { value: '40to50', label: 'Entre el 40 y el 50% de la suma de las rentas de las personas que asumen el pago' },
    { value: 'more50', label: 'Más del 50%' }
  ]
  const stayOptions = ['< de 1 año', 'de 1 a 2 años', 'de 2 a 3 años', 'de 3 a 4 años', '+ de 4 años']

  // Cargar datos existentes al montar el componente
  onMounted(async () => {
    authToken.value = localStorage.getItem('authToken');
    authEmail.value = localStorage.getItem('authEmail');
    authName.value = localStorage.getItem('authName');
    authId.value = localStorage.getItem('authId');

     url.value = useRuntimeConfig().public.BASE_URL

    await loadTenantData(authId.value,1); 
        
  })

 

  async function createNotification(payload) {
    try {
      const url = useRuntimeConfig().public.BASE_URL
      await $fetch(`${url}/notifications`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  }

async function loadTenantData(userId, room) {
  try {
    
    // Crear notificación
    await createNotification({
      recipientId: localStorage.getItem('authId'),
      message: `Tienes un nuevo mensaje de ${localStorage.getItem('authId')}`,
      type: 'UserIcon',
      /* data: {
        conversation_id: localStorage.getItem('authId'),
        sender_id: localStorage.getItem('authId')
      } */
    });
    


    const store = useTenantData();
    const response = await store.getByUserIdTenant(userId, room);
    
    if (response && Array.isArray(response) && response.length > 0) {
      const tenantData = response[0];
      const petsArray = tenantData.pets ? JSON.parse(tenantData.pets) : [];
      
      // Mapear datos al formulario preservando los IDs reales
      form.value = {
        id: tenantData.id,
        user_id: userId,
        people: tenantData.peoples?.map((p) => ({
          id: p.id, // Usar el ID real de la base de datos
          name: p.name || `Persona ${p.id}`, // Mantener el nombre original si existe
          age: p.age
        })) || [{ id: 1, name: 'Persona 1', age: 0 }],
        employmentSituations: tenantData.peoples?.map((p) => ({
          id: p.id, // Usar el ID real
          name: p.name || `Persona ${p.id}`,
          situation: p.employment_situation || ''
        })) || [{ id: 1, name: 'Persona 1', situation: '' }],
        pets: petsArray,
        incomePercentage: tenantData.income_percentage || '',
        minimumStay: tenantData.minimum_stay || '',
        acceptNoSmoking: tenantData.accept_no_smoking ?? null,
        canProvideDocumentation: tenantData.can_provide_documentation ?? null,
        canProvideReferences: tenantData.can_provide_references ?? null,
        noCreditIssues: tenantData.no_credit_issues || false,
        notRealEstateProfessional: tenantData.not_real_estate_professional || false,
        additionalInfo: tenantData.additional_info || ''
      };
    }
  } catch (error) {
    console.error('Error al cargar datos del inquilino:', error);
  }
}

  const togglePet = (pet) => {
    const index = form.value.pets.indexOf(pet)
    if (index > -1) {
      form.value.pets.splice(index, 1)
    } else {
      form.value.pets.push(pet)
    }
  }

  const addPerson = () => {
    const newId = form.value.people.length + 1
    form.value.people.push({
      id: newId,
      name: `Persona ${newId}`,
      age: 0
    })
    
    // Añadir también a employmentSituations para mantener sincronizados
    form.value.employmentSituations.push({
      id: newId,
      name: `Persona ${newId}`,
      situation: ''
    })
  }

  const addPersonSelect = () => {
    const newId = form.value.employmentSituations.length + 1
    form.value.employmentSituations.push({
      id: newId,
      name: `Persona ${newId}`,
      situation: ''
    })
    
    // Añadir también a people para mantener sincronizados
    form.value.people.push({
      id: newId,
      name: `Persona ${newId}`,
      age: 0
    })
  }

  const removePerson = (personId) => {
    // Eliminar de la lista de personas
    form.value.people = form.value.people.filter(p => p.id !== personId);
    
    // Eliminar de la lista de situaciones laborales
    form.value.employmentSituations = form.value.employmentSituations.filter(e => e.id !== personId);
  }

  const handleSubmit = async () => {
    try {
      // Preparar datos para enviar
      const payload = {
        user_id: authId.value,
        room: true,
        pets: JSON.stringify(form.value.pets),
        accept_no_smoking: form.value.acceptNoSmoking,
        can_provide_documentation: form.value.canProvideDocumentation,
        can_provide_references: form.value.canProvideReferences,
        no_credit_issues: form.value.noCreditIssues,
        not_real_estate_professional: form.value.notRealEstateProfessional,
        additional_info: form.value.additionalInfo,
        income_percentage: form.value.incomePercentage,
        minimum_stay: form.value.minimumStay,
        peoples: form.value.people.map((person, index) => ({
          id: person.id, // Enviar el ID real (puede ser null para nuevas personas)
          name: person.name,
          age: person.age,
          employment_situation: form.value.employmentSituations[index]?.situation || ''
        }))
      };
      
      let response;
      if (form.value.id) {
        // Actualizar registro existente
        response = await fetch(`${url.value}/tenants/${form.value.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${authToken.value}`
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Crear nuevo registro
        response = await fetch(`${url.value}/tenants`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${authToken.value}`
          },
          body: JSON.stringify(payload)
        });
      }
      
      if (response.ok) {
        const data = await response.json();
        if (!form.value.id) {
          form.value.id = data.id;
        }
        // Recargar los datos para obtener los IDs reales de las personas creadas
        await loadTenantData(authId.value, 1);
        //alert('Datos guardados correctamente');
        Swal.fire({
              title: '¡Éxito!',
              text: 'Datos guardados correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn-confirm' // Clase CSS personalizada
              },
              buttonsStyling: false // Desactiva los estilos por defecto
              });
      } else {
        const errorData = await response.json();
        console.error('Error al guardar:', errorData);
       // alert('Error al guardar los datos: ' + (errorData.message || JSON.stringify(errorData)));
        Swal.fire({
          title: 'Error',
          text: 'Error al guardar los datos: ' + (errorData.message || JSON.stringify(errorData)),
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
                confirmButton: 'btn-confirm' // Clase CSS personalizada
          },
          buttonsStyling: false // Desactiva los estilos por defecto
        });
      }
    } catch (error) {
      console.error('Error:', error);
     // alert('Error al conectar con el servidor');
      Swal.fire({
        title: 'Error de conexión',
        text: 'Error al conectar con el servidor',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
                confirmButton: 'btn-confirm' // Clase CSS personalizada
        },
        buttonsStyling: false // Desactiva los estilos por defecto
      });
    }
  };

  const emit = defineEmits(['hide-profile-room'])

  const goBack = () => {
    emit('hide-profile-room')
  }
</script>

<style>
  .titulo {
    width: 277px;
    height: 33px;
    left: calc(50% - 277px/2 + 76.5px);
    top: 124px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */
    color: #666666;
  }

  .subtitulo {
    width: 798px;
    height: 56px;
    left: 648px;
    top: 217px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #FFFDFD;
  }

  .btn-confirm {
    background-color: #27ABB1 !important; /* Color teal de tu botón Guardar */
    color: white !important;
    border: none !important;
    padding: 8px 24px !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
    transition: background-color 0.3s ease !important;
  }

  .btn-confirm:hover {
    background-color: #1f8c91 !important; /* Color más oscuro para hover */
    transform: translateY(-1px) !important;
  }

  /* Agrega esto a tu sección de estilos */
  .text-red-500 {
    color: #ef4444;
  }
  .text-red-700 {
    color: #b91c1c;
  }

  @media (max-width:1024px){
    .subtitulo {
      width: 257px;
      height: 48px;
      left: 74px;
      top: 229px;
      font-size: 14px;
      line-height: 16px;
      color: #FFFDFD;
    }  

  }

</style>
