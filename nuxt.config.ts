// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-og-image', 'nuxt-icon'],
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  ogImage: {
    debug: true
  },
  site: {
    url: 'http://localhost'
  }
});
