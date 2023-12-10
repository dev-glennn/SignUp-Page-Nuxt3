import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/SignUp-Page-Nuxt3/',
    buildAssetsDir: 'assets'
  },

  css: ['@/assets/css/tailwind.css', '@/assets/css/reset.css', '@/assets/scss/app.scss'],
  devtools: { enabled: false },

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
    lintOnStart: false
  },

  vite: {
    plugins: [eslintPlugin()]
  }
});
