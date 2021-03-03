<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <img class="header-img" src="~assets/room.png" width="100%" style="object-fit: cover" alt="top">
      <h1 class="header-img-h1">ACCESS</h1>
    </div>
    <div class="grid-center col-12" style="margin-bottom: 2rem">
      <div class="col-12" style="max-width: 1024px">
        <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.500097162461!2d140.4637133153172!3d37.754870479763035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a85ceb6da8711%3A0xd8232e7b17b8f95d!2z44CSOTYwLTgwNDEg56aP5bO255yM56aP5bO25biC5aSn55S677yR4oiS77yR77ySIOmVt-iwt-W3neesrOS6jOODk-ODqw!5e0!3m2!1sja!2sjp!4v1612861256507!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
      </div>
      <div class="grid-center col-12">
        <div class="col-12" style="max-width: 1024px;padding: .5rem">
          <h3>住所</h3>
          <span>
          TEL：024-572-5838<br>
          〒960-8041 福島県福島市大町1－12　長谷川第2ビル<br>
          </span>
          <a href="https://goo.gl/maps/VB7pwCBj5uGkb2t5A" target="_blank">Google Map</a>

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