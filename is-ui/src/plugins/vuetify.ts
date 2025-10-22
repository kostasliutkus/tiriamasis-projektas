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
          'primary': '#f8e960ff',
          'secondary': '#a77d5b',
          'accent': '#8BC34A',
          'error': '#FF5252',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FB8C00',
          'background': '#FFFFFF',
          'surface': '#F5F5F5',
          'primary-darken-1': '#3B8C3B',
          'secondary-darken-1': '#E6A800',
          'on-primary': '#000000',
          'on-secondary': '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': '#2E7D32',
          'secondary': '#FFA000',
          'accent': '#689F38',
          'error': '#D32F2F',
          'info': '#1976D2',
          'success': '#388E3C',
          'warning': '#F57C00',
          'background': '#121212',
          'surface': '#1E1E1E',
          'primary-darken-1': '#1B5E20',
          'secondary-darken-1': '#FF8F00',
          'on-primary': '#FFFFFF',
          'on-secondary': '#000000',
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
