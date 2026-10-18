<script lang="ts" setup>
  import FooterComponent from './components/FooterComponent.vue';
import Nav from './components/NavigationComponent.vue'
</script>

<template>
  <v-app>
    <v-main>
      
      <v-parallax
          cover
          height="100vh"
          src="@/assets/photos/main-2.jpg"
        >
        <Nav />
      <router-view />
      </v-parallax>
      <FooterComponent/>
    </v-main>
  </v-app>
</template>
