<script lang="ts" setup>
  import { VNavigationDrawer } from 'vuetify/components'
  import { ref, onMounted } from 'vue'
  import { signOut, onAuthStateChanged } from 'firebase/auth'
  import { auth } from '@/plugins/firebase'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const userEmail = ref('')

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        userEmail.value = user.email
      }
    })
  })

  const logout = async () => {
    try {
      await signOut(auth)
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }
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
      to="/"
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
      disabled
      title="2 Semestras"
    />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      disabled
      title="3 Semestras"
    />
    <v-list-item
      link
      prepend-icon="mdi-folder"
      disabled
      title="4 Semestras"
    />

    <template v-slot:append>
      <v-divider />
      <v-list-item
        v-if="userEmail"
        prepend-icon="mdi-account"
        :title="userEmail"
      />
      <v-list-item
        link
        prepend-icon="mdi-logout"
        title="Atsijungti"
        @click="logout"
      />
    </template>
  </v-navigation-drawer>
</template>
