<script lang="ts" setup>
  import { ref, onMounted,defineAsyncComponent, type Component } from 'vue'
  import { signOut, onAuthStateChanged } from 'firebase/auth'
  import { auth } from '@/plugins/firebase'
  import { useRouter } from 'vue-router'
  import { useAuth } from '@/composables/useAuth'
  import { useDisplay } from 'vuetify'

  const router = useRouter()
  const userEmail = ref('')
  const { user, isLoggedIn, logout } = useAuth()
  const { smAndDown } = useDisplay()

  const loggingOut = ref(false)

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        userEmail.value = user.email
      }
    })
  })

  const handleLogout = async () => {
    loggingOut.value = true
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      loggingOut.value = false
    }
  }

  interface TabItem {
    label: string
    component: Component
    disabled?: boolean
  }
  const items: TabItem[] = [
    {label: 'Pagrindinis', component: defineAsyncComponent(() => import('@/components/HomeComponent.vue')) },
    {label: '1 Semestras', component: defineAsyncComponent(() => import('@/components/semesters/Semester1.vue')), disabled: true},
    {label: '2 Semestras', component: defineAsyncComponent(() => import('@/components/semesters/Semester2.vue')), disabled: true},
    {label: '3 Semestras', component: defineAsyncComponent(() => import('@/components/semesters/Semester3.vue')), disabled: true},
    {label: '4 Semestras', component: defineAsyncComponent(() => import('@/components/semesters/Semester4.vue')), disabled: true},
  ]
  const tab = ref(items[0])


</script>
<template>
  <div v-if="isLoggedIn">
    <div class="nav-bar d-flex align-center px-2">
      <v-tabs
        v-model="tab"
        color="primary"
        class="flex-grow-1"
        show-arrows
      >
        <v-tab
          v-for="item in items"
          :key="item.label"
          :text="item.label"
          :value="item.label"
          :disabled="item.disabled"
          class="text-none"
        />
      </v-tabs>

      <div class="d-flex align-center ga-2 pl-2 flex-shrink-0">
        <v-chip
          v-if="user?.email && !smAndDown"
          prepend-icon="mdi-account-outline"
          variant="text"
          class="text-bold"
        >
          {{ user.email }}
        </v-chip>

        <v-btn
          v-if="!smAndDown"
          variant="outlined"
          rounded="lg"
          class="text-none"
          prepend-icon="mdi-logout"
          :loading="loggingOut"
          @click="handleLogout"
        >
          Atsijungti
        </v-btn>
        <v-btn
          v-else
          icon="mdi-logout"
          variant="text"
          aria-label="Atsijungti"
          :loading="loggingOut"
          @click="handleLogout"
        />
      </div>
    </div>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item.label"
        :value="item.label"
      >
        <div class="tab-content">
          <HomeComponent />
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>