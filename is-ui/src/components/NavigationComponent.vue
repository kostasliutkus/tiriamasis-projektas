<script lang="ts" setup>
  import { VNavigationDrawer } from 'vuetify/components'
</script>
<template>
  <v-navigation-drawer
    color="secondary"
    expand-on-hover
    permanent
    rail
  >
    <v-list-item
      link
      prepend-icon="mdi-home"
      title="Pagrindinis"
    />
    <v-divider />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      title="1 Semestras"
    />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      title="2 Semestras"
    />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      title="3 Semestras"
    />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      title="4 Semestras"
    />
  </v-navigation-drawer>
</template>
