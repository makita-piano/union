<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <img class="header-img" src="~assets/room.png" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top">
      <h1 class="header-img-h1">ROOMS</h1>
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: #eee;padding: 1rem">
          <div class="grid col-6_sm-12">
            <img src="~assets/room.png" width="100%" alt="top">
          </div>
          <div class="grid col-6_sm-12">
            <div class="col-12">
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">type A</h3>
            </div>
            <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
            <div class="grid col-12" style="padding: 0 2rem">
              <div class="col-4" style="border: 1px solid #333;padding: .3rem;border-collapse: collapse;">
                受入人数
              </div>
              <div class="col-8" style="border: 1px solid #333;padding: .3rem;border-collapse: collapse;">
                2人
              </div>
              <div class="col-4" style="border: 1px solid #333;padding: .3rem;border-collapse: collapse;">
                料金
              </div>
              <div class="col-8" style="border: 1px solid #333;padding: .3rem;border-collapse: collapse;">
                2,500円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: #eee;padding: 1rem">
          <div class="grid col-6_sm-12">
            <img src="~assets/room.png" width="100%" alt="top">
          </div>
          <div class="grid col-6_sm-12">
            <div class="col-12">
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">type B</h3>
            </div>
            <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">Facilities common</h2>
        <div style="text-align: center">客室共通設備</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          シャワー
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          トイレ
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          エアコン
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          テレビ
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          無料wi-fi
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <img src="~assets/room.png" width="100%" alt="top">
          加湿空気清浄機
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.header-img-div {
  position: relative;
}

.header-img-h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  color: white;
  letter-spacing: .3rem;
}


@media screen and (max-width: 768px) {
  .header-img {
    height: 300px;
  }
}

@media screen and (min-width: 769px) {
  .header-img {
    height: 450px;
  }
}

</style>

