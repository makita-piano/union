<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <img class="header-img" src="~assets/room.png" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top">
      <h1 class="header-img-h1">ROOMS</h1>	
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 768px;padding: 0 1rem 2rem;">
        <p>
ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
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

