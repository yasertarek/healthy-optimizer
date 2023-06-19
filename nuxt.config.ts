import { resolve } from "path";
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: ['vuetify/lib/styles/main.sass', "~/assets/main.scss"],
    ssr: false,
    build: {
        transpile: ['vuetify'],
    },
    app: {
        head: {
            titleTemplate: 'Healthy optimizer - %s',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                },
            ]
        },
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    hooks: {
        'vite:extendConfig': (config) => {
          config.plugins.push(
            vuetify({
              styles: { configFile: resolve('./settings.scss') },
            })
          )
        }
      }
})
