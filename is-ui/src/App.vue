<script lang="ts" setup>
  import Nav from './components/NavigationComponent.vue'
</script>

<template>
  <v-app>
    <v-main>
      <Nav />
      <router-view />
    </v-main>
  </v-app>
</template>
