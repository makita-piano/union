export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'union',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '『ユニオン』をテーマに独自のセンスを融合させたオールデイダイニングです。旬の国産食材が織りなすメニューを、日本のものづくりの粋を感じるグラスや食器に添えてご提供します。カジュアルなバーゾーン、活気あるオープンキッチンが覗くレストランゾーンで構成された空間では、食事を共有する精神が根付く温かみに触れられるでしょう。心躍る音楽とともに豊かな時間をお過ごしください。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'union' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'union' },
      { hid: 'og:description', property: 'og:description', content: '『ユニオン』をテーマに独自のセンスを融合させたオールデイダイニングです。旬の国産食材が織りなすメニューを、日本のものづくりの粋を感じるグラスや食器に添えてご提供します。カジュアルなバーゾーン、活気あるオープンキッチンが覗くレストランゾーンで構成された空間では、食事を共有する精神が根付く温かみに触れられるでしょう。心躍る音楽とともに豊かな時間をお過ごしください。' },
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
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://cjmtokyo.com'
  },
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }]
}
