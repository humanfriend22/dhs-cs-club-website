// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      GIT_COMMIT: process.env?.['NUXT_ENV_VERCEL_GIT_COMMIT_SHA'] || ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'dhs cs club',
      meta: [
        { name: 'description', content: 'The Dublin High School Computer Science Club — a Hack Club chapter for students who want to build software together. No prerequisite class, no dues.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/dhs-cs-logo.png' }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  fonts: {
    families: [
      { name: 'Space Mono', provider: 'google', weights: [400, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] }
    ]
  }
})
