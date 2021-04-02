export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  components: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'La Union 福島（ラウニオン） | 福島市・ゲストハウス・カフェ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '福島市のゲストハウス＆カフェ「La Union 福島（ラウニオン」です。一泊2,800円から！「集い」を意味する当施設は、この福島という地に集まった旅人と地域を繋ぐ拠点として、カフェとゲストハウスを併設しています！' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'La Union 福島（ラウニオン）' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'La Union 福島（ラウニオン）' },
      { hid: 'og:description', property: 'og:description', content: '福島市のゲストハウス＆カフェ「La Union 福島（ラウニオン」です。一泊2,800円から！「集い」を意味する当施設は、この福島という地に集まった旅人と地域を繋ぐ拠点として、カフェとゲストハウスを併設しています！' },
      { hid: 'og:image', property: 'og:image', content: '/union.png' }
    ],
    link: [
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Sofia': true,
      'Unica+One': true,
      'Oxygen': true,
      'Nunito': true,
    },
    display: 'swap'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'G-LJQ1CYKTLQ',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://launion.page/'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/notfound.vue')
      })
    }
 },
}
