<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/top.jpg" width="100%" style="object-fit: cover" alt="top" />
      <h1 class="header-img-h1">WORKCATION</h1>
    </div>
    <div class="grid-center col-12" style="margin-bottom: 2rem">
      <div class="grid-center col-12" style="background: rgb(238, 238, 238 , 0.5);padding-top: 1rem">
        <div class="col-12" style="margin-bottom: 2rem">
          <h2 style="text-align: center;margin-top: 2rem">ABOUT</h2>
          <div style="text-align: center">概要</div>
        </div>
        <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
          <div class="grid col-12_sm-12" style="margin: auto;max-width: 768px">
            <p style="padding: 1rem 2rem">
              仕事の効率アップもリフレッシュも叶う宿泊体験をご用意しています。<br class="display-none-mobile">
              モバイルルーター、電動自転車などの各種レンタルも承っております。<br class="display-none-mobile">
              詳しくはお問合せください。
            </p>
          </div>
        </div>
      </div>
      <div class="grid-center col-12" style="background: rgb(238, 238, 238 , 0.5);padding-top: 1rem">
        <div class="col-12" style="margin-bottom: 2rem">
          <h2 style="text-align: center;margin-top: 2rem">CYCLE MAP</h2>
          <div style="text-align: center">サイクルマップ</div>
        </div>
        <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem">
          <div class="grid col-12_sm-12" style="margin: auto;max-width: 768px">
            <p style="padding: 1rem 2rem">
              息抜きにサイクリングを楽しめるように、レベル別に分けたサイクルワーケーションルートをご用意しました。是非、ご活用ください。
            </p>
          </div>
          <div class="col-12" style="max-width: 1024px;margin-bottom: 2rem">
            <iframe class="map-iframe" src="https://www.google.com/maps/d/embed?mid=1IlnhiwSFyB9fgM5KGgcEKmilF9LlhQ8v&z=13" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" title="map"></iframe>
            【初級】福島の街なかサイクルワーケーションルート
          </div>
          <div class="col-12" style="max-width: 1024px;margin-bottom: 2rem">
            <iframe class="map-iframe" src="https://www.google.com/maps/d/embed?mid=1gBUdchRbCFWQHsXbzhTF6ie82-1so7yt&z=12" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" title="map"></iframe>
            【中級】飯坂温泉サイクルワーケーションルート
          </div>
          <div class="col-12" style="max-width: 1024px;margin-bottom: 2rem">
            <iframe class="map-iframe" src="https://www.google.com/maps/d/embed?mid=14MO9evRQMDkjstkTSGbGOpAzB-xePN-9&z=12" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" title="map"></iframe>
            【中級】UFOの里サイクルワーケーションルート
          </div>
          <div class="col-12" style="max-width: 1024px;margin-bottom: 2rem">
            <iframe class="map-iframe" src="https://www.google.com/maps/d/embed?mid=1M8C3P4VYvol7Yxi54HhhgLlGdLHKepzP&z=11" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" title="map"></iframe>
            【上級】浄土平と温泉サイクルワーケーションルート
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: #333;
  font-weight: bold;
  margin-bottom: .3rem;
}
@media screen and (max-width: 768px) {
  .map-iframe {
    height: 375px;
  }
}

@media screen and (min-width: 769px) {
  .map-iframe {
    height: 520px;
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: "WORKCATION｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'WORKCATION｜La Union 福島（ラウニオン）' }
      ]
    }
  },
}
</script>