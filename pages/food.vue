<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/cafe1.jpg" width="1920" style="width: 100%;margin-bottom: 2rem;object-fit: cover" alt="top" />
      <h1 class="header-img-h1">FOOD</h1>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">CONCEPT</h2>
        <div style="text-align: center">コンセプト</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="col-6_sm-12" style="margin-bottom: 1rem">
          <nuxt-img src="/cafe2.jpg" width="704" style="width: 100%" alt="top" />
          <span>(カウンター9席、テーブル4台x2席、窓側12席、計29席)</span>
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 0 1rem">かつて世界を自転車で旅をしたオーナーが現地で食べ飲んだ世界のお料理とドリンクをご用意しております。<br>
奇抜な食べ物ではなく、みんなの知っている食材を少しだけエスニックに仕上げた料理を中心に作っていますので
初めての方にとってもできるだけ敷居が高くならないようにしています。<br>
福島では初の取り扱いとなるビールなどもご用意しました。
福島にいながらの異国体験や食を通じたコニュニケーションをお楽しみくださいませ。</p>
        </div>
      </div>
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2 col-12" style="text-align: center;margin-top: 2rem">OPENING HOUR</h2>
        <div class="col-12" style="text-align: center">営業時間</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12">
          <div class="grid col-12" style="padding: 2rem">
            <div class="col-12">
              <h3>ランチ</h3>
            </div>
            11:30 ~ 14:00
          </div>
        </div>
        <div class="grid col-6_sm-12">
          <div class="grid col-12" style="padding: 2rem">
            <div class="col-12">
              <h3>ディナー</h3>
            </div>
            16:00 ~ 22:00 （フードLO 21:00 , ドリンクLO 21:30）
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">MENU</h2>
        <div style="text-align: center">メニュー</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12" style="padding: .5rem">
          <img v-if="foodimg1 != undefined" :src="`${foodimg1.img.url}?w=1000`" style="width: 100%" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem"></p>
        </div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div v-for="e in foodimgs" v-bind:key="e.title" class="col-3_sm-6" style="padding: .5rem">
          <img :src="`${e.img.url}?w=400`" style="width: 100%">
          {{ e.name }}
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">OTHER</h2>
        <div style="text-align: center">その他</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        ※宿泊の方の2F飲食ご利用時間は、CAFEの利用時間と同じです。
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: "FOOD｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'FOOD｜La Union 福島（ラウニオン）' }
      ]
    }
  },
  data () {
    return {
      foodimg1: undefined,
      foodimgs: undefined,
      conceptimg: undefined,
    }
  },
  created(){
    axios
      .get(this.$config.VUE_APP_MICROCMS_URL + "food-imgs",{
        headers: { "X-API-KEY": this.$config.VUE_APP_MICROCMS_KEY},
        data: {}
    })
      .then(v => {
        this.foodimgs = v.data.contents.slice(0, -1);
        this.foodimg1 = v.data.contents.slice(-1)[0];
    });
  },
}
</script>
