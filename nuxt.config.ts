import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css', '~/assets/css/reset.css', '~/assets/scss/app.scss'],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      daumURL: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxtjs/eslint-module'],

  eslint: {
    // lintOnStart: false
  },

  vite: {
    plugins: [eslintPlugin()]
  }
});
