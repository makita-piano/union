<template>
  <div class="grid col-12">
    <div class="col-12">
      <img src="~assets/top.png" width="100%" style="margin-bottom: 2rem" alt="top">
    </div>
    <div class="col-8_sm-12" style="padding: 3rem">
その地域と深くつながること。
そこから生まれる素敵な経験を
ユニオンは大切にします。
    </div>
    <div class="grid col-12">
      <h2 class="col-12">多様性・好奇心・創造力。<br>秋葉原のエネルギーから生み出される文化体験</h2>
      <div class="col-12">
        DIVERSITY | CURIOSITY | CREATIVITY
      </div>
      <p class="col-12">
多様性・好奇心・創造力に溢れた街、秋葉原で体験の核となるのは「音楽とアートと食」。
クオリティの高い音響設備を活かした客室内外の体験、気鋭の現代アートによって彩られる洗練された空間、
そして日本の旬の食材を味わうことのできるレストラン等を通じてお客様のスタイルに合わせた寛ぎを生み出します。
街の文化と感性に触れる、客室に留まらないホテルの愉しみ方をご提案してまいります。
      </p>
    </div>
    <div class="grid col-12">
      <div class="col-12">
        <h2 style="text-align: center">ROOMS</h2>
        <p style="text-align: center">客室</p>
      </div>
      <div class="grid col-4_sm-12">
        <img src="~assets/room.png" width="100%" style="margin-bottom: 2rem" alt="top">
      </div>
      <div class="grid col-8_sm-12">
ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。
      </div>
    </div>
    <div class="grid col-12">
      <div class="col-12">
        <h2 style="text-align: center">RESTAURANT</h2>
        <div style="text-align: center">レストラン</div>
      </div>
      <div class="grid col-8_sm-12">
        <div class="col-12">
『スパニッシュイタリアン』をテーマに独自のセンスを融合させたオールデイダイニングです。旬の国産食材が織りなすメニューを、日本のものづくりの粋を感じるグラスや食器に添えてご提供します。カジュアルなバーゾーン、活気あるオープンキッチンが覗くレストランゾーンで構成された空間では、食事を共有する精神が根付くスペインバルの温かみに触れられるでしょう。心躍る音楽とともに豊かな時間をお過ごしください。
        </div>
        <div class="col-12">
          <ul class="p-top_section_tableSP">
          <li>BREAKFAST : 7:00-10:00 </li>
          <li>LUNCH : 11:30-14:30</li>
          <li>CAFE : 14:30-18:00</li>
          <li>DINNER : 18:00-23:00<span>(22:00 L.O)</span></li>
          </ul>
        </div>
      </div>
      <div class="grid col-4_sm-12">
        <img src="~assets/room.png" width="100%" style="margin-bottom: 2rem" alt="top">
      </div>
    </div>
    <div class="grid col-12">
      <div class="col-12">
        <h2 style="text-align: center">NEWS</h2>
        <div style="text-align: center">お知らせ</div>
      </div>
      <div class="grid col-12">
        <ul>
          <li class="grid" style="padding: .5rem 1rem">
            <div style="display: inline">
              2020.12.14
            </div>
            <div class="oshirase_tag" style="display: inline">
              お知らせ
            </div>
            <div class="col-12">
              <a>
                レストランの営業短縮について
              </a>
            </div>
          </li>
          <li class="grid" style="padding: .5rem 1rem">
            <div style="display: inline">
              2020.12.14
            </div>
            <div class="oshirase_tag" style="display: inline">
              お知らせ
            </div>
            <div class="col-12">
              <a>
                レストランの営業短縮について
              </a>
            </div>
          </li>
        </ul>
        <div>
          See MORE
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
</style>
