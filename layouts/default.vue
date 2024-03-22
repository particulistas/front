<template>
    <div>
      <header>
        <h1>Header de Mi Sitio</h1>
        <nav>
          <ul>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/other/page1">Página 1</NuxtLink></li>
            <li><NuxtLink to="/other/page2">Página 2</NuxtLink></li>
          </ul>
        </nav>
      </header>
        <slot />
  
      <footer>
        <p>Footer de Mi Sitio © 2024</p>
      </footer>
    </div>
  </template>
  