<template>
  <div class="max-w-6xl mx-auto px-4 py-5   min-h-screen bg-gray-100 rounded-lg">
    <!-- Header -->
    <header >
      <div class="max-w-7xl mx-auto px-4">
        <div class="py-4">
          <button class="text-teal-500 hover:text-teal-600">
              <img :src="navigation_left_blue" alt="Ilustración de favoritos" class=" right-0 bottom-0 h-16 w-16"/>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
        MIS CHAT
      </h1>
   
      <div class="">
        <div class="text-sm text-gray-600 space-y-4">
          <p>
            ..............................Colocar acá la información correspondiente a tu pagina.....................
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  import navigation_left_blue from '/assets/icons/navigation_left_blue.svg'
</script>