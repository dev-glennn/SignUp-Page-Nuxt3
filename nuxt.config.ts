import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/reset.css', '~/assets/scss/app.scss'],
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/eslint-module'
  ],

  eslint: {
    // lintOnStart: false
  },

  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
