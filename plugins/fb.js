import Vue from 'vue'

const vueFb = {}
vueFb.install = function install(Vue, options) {
  (function (d, s, id) {
    var js
    var fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))

  window.fbAsyncInit = () => {
    window.FB.init(options)
    Vue.FB = window.FB

    // ここでEventのSubscribeしておくと、ハンドリングがやりやすかったりします
    // FB.Event.subscribe ~
  }
  Vue.FB = undefined
}

Vue.use(vueFb, {
  appId: 103874421592721,
  autoLogAppEvents: true,
  xfbml: true, // ここをfalseにすると任意のタイミングでParseすることができます (表示)
  version:  'v10.0'
})