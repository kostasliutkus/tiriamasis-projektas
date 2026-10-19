<script lang="ts" setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, ALLOWED_EMAILS } from '@/plugins/firebase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const login = async () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Prašome įvesti el. paštą ir slaptažodį'
    return
  }

  // Check if email is in allowed list
  if (!ALLOWED_EMAILS.includes(email.value)) {
    error.value = 'Neturite prieigos prie šios sistemos'
    return
  }

  loading.value = true

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (err: any) {
    console.error('Login error:', err)

    if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
      error.value = 'Neteisingas el. paštas arba slaptažodis'
    } else if (err.code === 'auth/too-many-requests') {
      error.value = 'Per daug bandymų. Prašome pabandyti vėliau'
    } else {
      error.value = 'Įvyko klaida. Prašome pabandyti dar kartą'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container fluid class="fill-height" max-height="100vh">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="10" class="pa-4">
          <v-card-title class="text-h4 text-center mb-4">
            Prisijungimas
          </v-card-title>

          <v-card-subtitle class="text-center mb-6">
            Įveskite savo prisijungimo duomenis
          </v-card-subtitle>

          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="El. paštas"
                type="email"
                prepend-icon="mdi-email"
                variant="outlined"
                class="mb-4"
                :disabled="loading"
              />

              <v-text-field
                v-model="password"
                label="Slaptažodis"
                type="password"
                prepend-icon="mdi-lock"
                variant="outlined"
                class="mb-4"
                :disabled="loading"
              />

              <v-alert
                v-if="error"
                type="error"
                variant="tonal"
                class="mb-4"
              >
                {{ error }}
              </v-alert>

              <v-btn
                type="submit"
                color="primary"
                block
                size="large"
                :loading="loading"
              >
                Prisijungti
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
