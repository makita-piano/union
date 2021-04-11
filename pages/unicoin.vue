<template>
  <div class="grid col-12">
    <div class="col-12">
      <nuxt-img class="header-img" src="/unicoin_top.jpg" width="100%" style="object-fit: cover" alt="top" loading="lazy" />
    </div>
    <div class="grid-center col-12" style="background: rgb(238, 238, 238 , 0.5);padding-top: 1rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">ABOUT</h2>
        <div style="text-align: center">ウニコインとは</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="col-12" style="text-align: center">
          <nuxt-img src="/unicoin.jpg" class="room-img" alt="unicoin" loading="lazy" />
        </div>
        <div class="grid col-12_sm-12" style="margin: auto;max-width: 768px">
          <div class="col-12" style="text-align: center;padding: 1rem">【まちで使えるWELCOMEコイン】</div>
          <p style="padding: 1rem 2rem">
La Unionでは宿泊される方にウェルカムドリンクとして使えるウニコインを差し上げます。<br>
ウニコインは自店の飲食フロアで使えるだけでなく、近隣の人気飲食店でもご利用いただけます。<br>
ウニコインが旅行者にとって福島の接点となるように、地元の人にとっては今まで気になっていたけど行ったことがなかったお店に行くきっかけになるように、近隣飲食店にとってはドリンクと一緒に食事も頼んでもらえることで売上に貢献できるようにしていきます。<br>
ウニコインに有効期限はなく、今回の滞在で使用できなかった場合は次回お使いいただくことも可能で、２枚で当店の朝食と引き換えることができるようにするなどポイントカードのような機能も持たせています。<br>
コインのデザインは、かつて福島盆地が水に埋もれた湖で、信夫山がぽっこりと浮かぶ島だった頃、吾妻おろしの風が水を吹き飛ばし、今の福島が生まれた、風が「吹く島」に基づく、福島の原風景をイメージして作りました。</p>
        </div>
      </div>
    </div>
    <div class="grid-center col-12">
      <div class="col-12">
        <h2 class="background-unicoin" style="text-align: center;padding: 3rem 0">HOW TO USE</h2>
      </div>
      <div class="grid col-12" style="margin: auto;max-width: 768px;padding: 0 1rem 2rem;">
        <div class="col-12_sm-12">
          <p style="padding: 1rem 2rem">ラユニオンでお渡ししたコインを、下記対象店舗でご注文時にご提示ください。コインと引き換えにウェルカムドリンクを一杯サービスいたします。
          </p>
          <div class="col-12">
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="padding-bottom: 3rem;background: rgb(238, 238, 238 , 0.5)">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">STORES</h2>
        <div style="text-align: center">対象店舗</div>
      </div>
      <div class="col-12" style="max-width: 1024px">
        <iframe class="map-iframe" src="https://www.google.com/maps/d/u/1/embed?mid=163WuP6T-NUkaG13gTFsbQOXmfISG2yWv&ll=37.75613383203582%2C140.46407889692142&z=16" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
      </div>
      <div class="col-12" style="text-align: center">
        <a href="/FUKUSHIMA_WELCOME_MAP.pdf">【PDF】FUKUSHIMA_WELCOME_MAP<br class="display-none-pc">(更新：2020/03/09)</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.button {
  background: #71C8AA;
  border-radius: .6rem;
  color: #FFF;
  display: block;
  font-weight: bold;
  letter-spacing: .1rem;
  margin: auto;
  max-width: 13rem;
  padding: 1.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: .5s;
  width: 80%;
}

.background-unicoin {
  background-image: url("/unicoin_background.jpg");
  background-color:rgba(255,255,255,0.9);
  background-blend-mode:lighten;
  background-repeat: no-repeat;
  background-position: 50% 5%;
  background-size: 300px auto;
}
h3 {
  color: #333;
  font-weight: bold;
  margin-bottom: .3rem;

}
.map-iframe {
  height: 375px;
}


@media screen and (min-width: 769px) {
  .map-iframe {
    height: 520px;
  }
}

</style>