<template>
    <v-app :class="$route.name">
      <!-- <navbar /> -->
      <v-main>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </v-main>
  
      <!-- <footer-main /> -->
    </v-app>
  </template>
  
  <script>
    export default {
        name: 'landboard'
    }
  </script>