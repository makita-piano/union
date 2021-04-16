<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/top.jpg" width="100%" style="object-fit: cover" alt="top" />
      <h1 class="header-img-h1">ACCESS</h1>
    </div>
    <div class="grid-center col-12" style="margin-bottom: 2rem">
      <div class="col-12" style="max-width: 1024px">
        <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.4999683894707!2d140.46369284586743!3d37.75487349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a8529b5c4dd5d%3A0x175f72fc3d1ad3d!2zTGEgVW5pw7Nu!5e0!3m2!1sja!2sjp!4v1618127875630!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
      </div>
      <div class="grid-center col-12">
        <div class="col-12" style="max-width: 1024px;padding: .5rem">
          <h3>住所</h3>
          <span>
          TEL：024-572-5838<br>
          〒960-8041 福島県福島市大町1-12　2F･3F ウニオンビル<br>
          </span>
          <a href="https://goo.gl/maps/VB7pwCBj5uGkb2t5A" target="_blank" style="margin-bottom: .5rem">Google Map</a>

          <div class="col-12" style="max-width: 1024px;margin-top: .5rem">
            <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!4v1615541317644!6m8!1m7!1sMMruKOz8ELlaOIbW42E1Sw!2m2!1d37.75485069909205!2d140.4660539402539!3f307.17032539471097!4f12.996080817972327!5f0.7820865974627469" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
          </div>

          <h3 style="margin-top: 2rem">駐車場</h3>
          <span>
          駐車場はございません。近隣のコインパーキング（提携外）をご案内させて頂いております。
          </span>
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
      title: "ACCESS｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'ACCESS｜La Union 福島（ラウニオン）' }
      ]
    }
  },
}
</script>