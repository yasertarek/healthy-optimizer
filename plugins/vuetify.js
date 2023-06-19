// plugins/vuetify.js
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import colors from 'vuetify/lib/util/colors'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    aliases: {
      NavBtn: VBtn
    },
    defaults: {
      NavBtn: {
        class: 'nav-btn text-subtitle-1',
        variant: 'text'
      }
    },
    defaultAssets: {
      font: {
          family: 'Poppins',
          size: 16,
      },
  },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#33c353', // #E53935,
            "on-primary": 'white',
            secondary: colors.red.darken1, // #FFCDD2
          },
        },
        styles: { configFile: '../settings.scss' },
      },
    },
    ssr: false,
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
        },
      },
  })

  nuxtApp.vueApp.use(vuetify)
})
