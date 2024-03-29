export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'La Union 福島（ラウニオン） | 福島市・カフェ・ゲストハウス／ホステル',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'La Union 福島（ラウニオン）' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'La Union 福島（ラウニオン）' },
      { hid: 'og:description', property: 'og:description', content: 'スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています' },
      { hid: 'og:image', property: 'og:image', content: 'https://launion.page/union.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/swiper', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],

  googleFonts: {
    families: {
      'Noto+Sans+JP': [500, 700],
      'Nunito': true,
    },
    display: 'swap'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'G-LJQ1CYKTLQ',
  },

  /*
  ** @nuxtjs/pwa Configuration
  ** https://github.com/nuxt-community/pwa-module
  */
  manifest: {
    name: 'launion',
    lang: 'ja',
    short_name: 'launion',
    title: 'La Union 福島（ラウニオン） | 福島市・カフェ・ゲストハウス／ホステル',
    'og:title': 'La Union 福島（ラウニオン） | 福島市・カフェ・ゲストハウス／ホステル',
    description: 'スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています',
    'og:description': 'スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています',
    theme_color: '#02569B',
    background_color: '#02569B'
  },

  pwa: {
    icon: false // disables the icon module
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
      routes.forEach(route => {
        switch (route.name){
          case 'stay':
            route.meta = {index: 0}
            break
          case 'food':
            route.meta = {index: 1}
            break
          case 'plan':
            route.meta = {index: 2}
            break
          case 'workation':
            route.meta = {index: 3}
            break
          case 'unicoin':
            route.meta = {index: 4}
            break
          case 'access':
            route.meta = {index: 5}
            break
          case 'book':
            route.meta = {index: 6}
            break
          case 'contact':
            route.meta = {index: 7}
            break
        }
      })
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/notfound.vue')
      })
    }
  },
  publicRuntimeConfig: {
    VUE_APP_MICROCMS_URL: process.env.VUE_APP_MICROCMS_URL,
    VUE_APP_MICROCMS_KEY: process.env.VUE_APP_MICROCMS_KEY
  }
}
