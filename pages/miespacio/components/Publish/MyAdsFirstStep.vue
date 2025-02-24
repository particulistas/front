<template>
    <section class="max-w-6xl mx-auto px-4 py-5">
      <!-- Main heading -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-semibold text-gray-700 mb-4">¿Todavía sin anuncios?</h1>
        <p class="text-xl text-gray-600 mb-2">Vivienda, trastero, local, parking, habitación...</p>
        <p class="text-xl font-medium text-gray-700">
          ¡Puedes publicar gratis hasta 2 anuncios de cada tipo!
        </p>
      </div>
  
      <!-- Cards container -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Create new ad card -->
        <!-- <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"> -->
        <button>
          <div class="h-64 relative mb-6">
            <img  src="/assets/imgs/Group1.svg" alt="Ilustración de creación de anuncio" >
          </div>
        </button>
        <!-- Import existing ad card -->
        <button >
          <div class="h-64 relative mb-6">
            <img  src="/assets/imgs/Group2.svg" alt="Ilustración de importar anuncio"
            >
          </div>
        </button> 
      </div>
    </section>
  </template>
  
  <script setup>
  // Component logic can be added here if needed
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>