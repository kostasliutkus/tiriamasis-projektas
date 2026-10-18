import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'
import '@mdi/font/css/materialdesignicons.css' // Ensure this line is present
import '../assets/fonts.css'
import 'vuetify/styles'

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'background': '#FAFAFA',
          'surface': '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#F4F4F5',
          'surface-variant': '#E4E4E7',
          'on-surface-variant': '#3F3F46',
          'primary': '#202024',
          'primary-darken-1': '#09090B',
          'secondary': '#52525B',
          'secondary-darken-1': '#3F3F46',
          'accent': '#3B82F6',
          'error': '#DC2626',
          'info': '#0EA5E9',
          'success': '#16A34A',
          'warning': '#D97706',
          'on-background': '#18181B',
          'on-surface': '#18181B',
          'on-primary': '#FAFAFA',
          'on-secondary': '#FFFFFF',
        },
        variables: {
          'border-color': '#18181B',
          'border-opacity': 0.1,
        },
      },
      dark: {
        dark: true,
       colors: {
          'background': '#09090B',
          'surface': '#18181B',
          'surface-bright': '#27272A',
          'surface-light': '#27272A',
          'surface-variant': '#3F3F46',
          'on-surface-variant': '#D4D4D8',
          'primary': '#FAFAFA',
          'primary-darken-1': '#E4E4E7',
          'secondary': '#A1A1AA',
          'secondary-darken-1': '#71717A',
          'accent': '#60A5FA',
          'error': '#F87171',
          'info': '#38BDF8',
          'success': '#4ADE80',
          'warning': '#FBBF24',
          'on-background': '#FAFAFA',
          'on-surface': '#FAFAFA',
          'on-primary': '#18181B',
          'on-secondary': '#18181B',
        },
        variables: {
          'border-color': '#FAFAFA',
          'border-opacity': 0.12,
        },
      },
    },
  },
  defaults: {
    global: {
      font: {
        family: 'Montserrat',
      },
    },
  },
})
