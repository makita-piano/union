<template>
  <div class="grid col-12">
    <div class="col-12">
      <img class="header-img" src="~assets/top.png" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top">
    </div>
    <div class="col-12" style="padding: 3rem">
      <div class="top-box">
その地域と深くつながること。<br>そこから生まれる素敵な経験を<br>ラウニオンは大切にします。
      </div>
    </div>
    <div class="col-12">
      <div class="top-txt">
        <h2>多様性・好奇心・創造力。<br>福島のエネルギーから生み出される文化体験</h2>
        <div class="top-txt-sub">DIVERSITY | CURIOSITY | CREATIVITY</div>
        <p class="c-txt">多様性・好奇心・創造力に溢れた街、福島で体験の核となるのは「音楽とアートと食」。<br class="u-hideSP">クオリティの高い音響設備を活かした客室内外の体験、気鋭の現代アートによって彩られる洗練された空間、<br class="u-hideSP">そして日本の旬の食材を味わうことのできるレストラン等を通じてお客様のスタイルに合わせた寛ぎを生み出します。 <br class="u-hideSP">街の文化と感性に触れる、客室に留まらないホテルの愉しみ方をご提案してまいります。</p>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 5rem;background: #eee">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">ROOMS</h2>
        <div style="text-align: center">客室</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
          <img src="~assets/room.png" width="100%" alt="top">
        </div>
        <div class="grid col-6_sm-12">
  <p style="padding: 2rem">ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。</p>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">RESTAURANT</h2>
        <div style="text-align: center">レストラン</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
  <p style="padding: 2rem">『スパニッシュイタリアン』をテーマに独自のセンスを融合させたオールデイダイニングです。旬の国産食材が織りなすメニューを、日本のものづくりの粋を感じるグラスや食器に添えてご提供します。カジュアルなバーゾーン、活気あるオープンキッチンが覗くレストランゾーンで構成された空間では、食事を共有する精神が根付くスペインバルの温かみに触れられるでしょう。心躍る音楽とともに豊かな時間をお過ごしください。</p>
        </div>
        <div class="grid col-6_sm-12">
          <img src="~assets/room.png" width="100%" alt="top">
        </div>
      </div>
    </div>
    <!--<div class="grid col-12 top-list" style="margin-top: 2rem">
      <ul class="js-moreCnt">
        <li>
        <a href="/">
        <div class="top-list-date">2020.12.14</div>
        <div class="top-list-category">お知らせ</div>
        <h3>レストランの営業時間短縮について</h3>
        </a>
        </li>
        <li>
        <a href="/">
        <div class="p-top_newsList_date">2020.11.12</div>
        <div class="p-top_newsList_category">お知らせ</div>
        <h3>レストランの臨時休業について</h3>
        </a>
        </li>
        <li>
        <a href="/">
        <div class="p-top_newsList_date">2020.10.26</div>
        <div class="p-top_newsList_category">お知らせ</div>
        <h3>「都内観光促進事業」（もっと楽しもう！TokyoTokyo）について</h3>
        </a>
        </li>
        </ul>
    </div>-->
    <div class="grid-center col-12" style="margin-top: 5rem;background: #eee">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">NEWS</h2>
        <div style="text-align: center">お知らせ</div>
        <div style="margin: 1.5rem 0 2rem 0;text-align: center">
          <iframe loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flaunifuku%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.KEY)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.top-box{
  background-color: #01569b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 175px;
  margin-bottom: 40px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 3.9px;
  line-height: 2.8;
  text-align: center;
}
.top-txt {
  padding: 1rem;
}
.top-txt h2 {
  color: #1e1f21;
  font-weight: 700;
  letter-spacing: .8px;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.63;
}

.top-txt div {
  font-family: TTNorms-Medium,sans-serif;
  color: #877b61;
  letter-spacing: .65px;
  font-size: 13px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
}

.top-txt p {
  color: #53565a;
  font-size: 12px;
  letter-spacing: .1em;
  line-height: 2.3;
  text-align: center;
}

.ttl-h2 {
  font-size: 34px;
  color: #1e1f21;
  text-transform: uppercase;
  font-family: TTNorms-Medium,sans-serif;
  letter-spacing: .05em;
}
.top-list ul {
  border-top: 1px solid #ccc;
}
.top-list-category {
  width: 80px;
  height: 20px;
  font-size: 10px;
  background-color: #53565a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
}

.top-list li a {
  border-bottom: 1px solid #ccc;
  padding: 16px 0 20px;
  color: #1e1f21;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  .top-box {
    width: 768px;
    height: 231px;
    margin: 0 auto 55px;
    font-size: 17px;
    line-height: 2.35;
    letter-spacing: .5em;
  }
  .top-txt h2 {
    font-size: 20px;
    margin-bottom: 15.5px;
    letter-spacing: .24em;
  }
  .top-txt p {
    font-size: 14px;
    line-height: 3;
  }
  .top-list-date {
    font-size: 16px;
    letter-spacing: .1em;
  }
  .top-list-category {
    margin-left: 25px;
  }
  .top-list li a {
    padding: 25px 20px 20px;
    background-position: right 20px center;
    transition: .2s ease;
  }
}
</style>
