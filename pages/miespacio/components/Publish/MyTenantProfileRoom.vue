<template>
  <!-- <div class="min-h-screen bg-gray-50"> -->
  <div class="max-w-6xl mx-auto px-4 py-5   min-h-screen bg-white md:bg-gray-100 rounded-lg">
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
              <h3 class="text-gray-700 font-medium mb-4">
                ¿Cuántas personas vivirían en la habitación? 
                <span class="text-gray-500 font-normal">(incluya menores)</span>
              </h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Persona 1</span>
                  <div class="flex items-center">
                    <span class="text-gray-600 mr-2">Edad</span>
                    <input 
                      v-model="form.person1Age" 
                      type="number" 
                      class="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                      placeholder="30"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Persona 2</span>
                  <div class="flex items-center">
                    <span class="text-gray-600 mr-2">Edad</span>
                    <input 
                      v-model="form.person2Age" 
                      type="number" 
                      class="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                      placeholder="10"
                    />
                  </div>
                </div>
                <button 
                  type="button" 
                  class="text-teal-500 hover:text-teal-600 flex items-center"
                  @click="addPerson"
                >
                  <PlusIcon class="h-4 w-4 mr-1" />
                  Agregar otra
                </button>
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
                    'px-4 py-2 rounded-full border transition-colors',
                    form.pets.includes(pet) 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                <label v-for="option in incomeOptions" :key="option.value" class="flex items-start">
                  <input 
                    v-model="form.incomePercentage" 
                    :value="option.value"
                    type="radio" 
                    class="mt-1 text-teal-500"
                  />
                  <span class="ml-2 text-sm text-gray-600">{{ option.label }}</span>
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
                    'px-4 py-2 rounded-full border transition-colors',
                    form.minimumStay === stay 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                <button 
                  type="button"
                  :class="[
                    'px-4 py-2 rounded-full border transition-colors',
                    form.acceptNoSmoking === true 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.acceptNoSmoking = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'px-4 py-2 rounded-full border transition-colors',
                    form.acceptNoSmoking === false 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Persona 1</span>
                  <select class="px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="">Seleccionar</option>
                    <option value="employed">Empleado</option>
                    <option value="self-employed">Autónomo</option>
                    <option value="student">Estudiante</option>
                    <option value="unemployed">Desempleado</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  class="text-teal-500 hover:text-teal-600 flex items-center"
                >
                  <PlusIcon class="h-4 w-4 mr-1" />
                  Agregar otro
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
                    'px-4 py-2 rounded-full border transition-colors',
                    form.canProvideDocumentation === true 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideDocumentation = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'px-4 py-2 rounded-full border transition-colors',
                    form.canProvideDocumentation === false 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                    'px-4 py-2 rounded-full border transition-colors',
                    form.canProvideReferences === true 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  ]"
                  @click="form.canProvideReferences = true"
                >
                  Sí
                </button>
                <button 
                  type="button"
                  :class="[
                    'px-4 py-2 rounded-full border transition-colors',
                    form.canProvideReferences === false 
                      ? 'border-teal-500 bg-teal-50 text-teal-700' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                  <span class="text-gray-600 text-sm">
                    Declaro ausencia de infracción en mi historial crediticio
                  </span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      v-model="form.noCreditIssues" 
                      type="checkbox" 
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    <span class="ml-3 text-sm font-medium text-teal-500">Sí</span>
                  </label>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600 text-sm">
                    Declaro no actuar como profesional del sector inmobiliario
                  </span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      v-model="form.notRealEstateProfessional" 
                      type="checkbox" 
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    <span class="ml-3 text-sm font-medium text-teal-500">Sí</span>
                  </label>
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
          <div class="text-right text-sm text-gray-500 mt-1">
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
import { ref } from 'vue'
import { ChevronLeftIcon, PlusIcon } from 'lucide-vue-next'
import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'

const form = ref({
  person1Age: 30,
  person2Age: 10,
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

const togglePet = (pet) => {
  const index = form.value.pets.indexOf(pet)
  if (index > -1) {
    form.value.pets.splice(index, 1)
  } else {
    form.value.pets.push(pet)
  }
}

const addPerson = () => {
  // Logic to add another person
  console.log('Adding another person')
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}

const emit = defineEmits(['hide-profile-room']);

const goBack = () => {
  emit('hide-profile-room');
};

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
