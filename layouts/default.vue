<template>
  <v-app :class="$route.name">
    <navbar :v-if="isNavbarVisible" />
    <v-main>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </v-main>
    <footer />

    <!-- <footer-main /> -->
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      noNavbar: [
        'login'
      ]
    }
  },
  computed: {
    isNavbarVisible(){
      return !this.noNavbar.includes(this.$route.name)
    }
  },
  mounted(){
    console.log('this.noNavbar = ', this.noNavbar)
    console.log('this.$route = ', this.$route)
  }
}
</script>