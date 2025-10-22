/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { auth } from '@/plugins/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Authentication guard
let isAuthReady = false
let currentUser: any = null

onAuthStateChanged(auth, (user) => {
  currentUser = user
  isAuthReady = true
})

router.beforeEach((to, from, next) => {
  // Wait for auth to be ready
  if (!isAuthReady) {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      currentUser = user
      isAuthReady = true
      unsubscribe()
      checkAuth()
    })
    return
  }

  checkAuth()

  function checkAuth() {
    const requiresAuth = to.path !== '/login'

    if (requiresAuth && !currentUser) {
      next('/login')
    } else if (to.path === '/login' && currentUser) {
      next('/')
    } else {
      next()
    }
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
