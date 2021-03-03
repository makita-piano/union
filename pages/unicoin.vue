<template>
  <div class="grid col-12">
    <div class="col-12">
      <img class="header-img" src="~assets/top.png" width="100%" style="margin-bottom: 1rem;object-fit: cover" alt="top" loading="lazy">
    </div>
    <div class="grid-center col-12">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">ABOUT</h2>
        <div style="text-align: center">ユニコインとは</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
          <img src="~assets/room.png" class="room-img" width="100%" alt="top" loading="lazy">
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 5rem;background: rgb(238, 238, 238 , 0.5)">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">HOW TO USE</h2>
        <div style="text-align: center">使い方</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
          <img src="~assets/room.png" class="room-img" width="100%" alt="top" loading="lazy">
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
          <div class="col-12">
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">STORES</h2>
        <div style="text-align: center">対象店舗</div>
      </div>
      <div class="col-12" style="margin-bottom: 2rem">
        <NuxtLink to="/unicoin_map" class="button">
          <span>MAPから探す</span>
        </NuxtLink>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
          <img src="~assets/room.png" class="room-img" width="100%" alt="top" loading="lazy">
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
          <div class="col-12">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next()
  },
  mounted() {
    console.log(process.env.KEY)
  }
}
</script>
<style scoped>
.button {
  display: block;
  position: relative;
  background: #71C8AA;
  width: 80%;
  padding: 1.5rem;
  border-radius: .6rem;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: .1rem;
  transition: .5s;
  margin: auto;
  max-width: 13rem;
}
</style>