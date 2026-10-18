import { ref, computed } from 'vue'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'
import { auth } from '@/plugins/firebase'

// Module-level state: shared by every component that calls useAuth()
const user = ref<User | null>(null)
const ready = ref(false)

let resolveReady!: () => void
export const authReady = new Promise<void>(resolve => (resolveReady = resolve))

onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
  ready.value = true
  resolveReady()
})

export function useAuth () {
  const isLoggedIn = computed(() => !!user.value)

  const logout = async () => {
    await signOut(auth)
  }

  return { user, isLoggedIn, ready, logout }
}