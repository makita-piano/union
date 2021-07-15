<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide><nuxt-img class="header-img" src="/troom1.jpg" width="1920" style="width: 100%;object-fit: cover" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" src="/troom2.jpg" width="1920" style="width: 100%;object-fit: cover" loading="lazy" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" src="/troom3.jpg" width="1920" style="width: 100%;object-fit: cover" loading="lazy" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room2.jpg" width="704" alt="top" style="width: 100%;object-fit: cover" />
          </div>
          <div class="col-6_sm-12">
            <div>
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">個室(ツインベッド)</h3>
            </div>
            <p style="padding: 2rem"><!--ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。--></p>
            <div style="padding: 0 2rem">
              <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
                <tbody>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      部屋数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      2室
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      受入人数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      2人
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      料金
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      6,200円～
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room3.jpg" width="704" alt="top" style="width: 100%;object-fit: cover" />
          </div>
          <div class="col-6_sm-12">
            <div>
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">個室(ダブルベッド)</h3>
            </div>
            <p style="padding: 2rem"><!--ホテルが新たにカルチャーとして発信する音楽を寛ぎながら体験できる客室空間。全室に音質にこだわったスピーカーを設置し、中でもデラックスツインルームでは高音質を誇る5社のスピーカーを採用。テレビではホテルオリジナル楽曲、映像作品の配信も行います。日本製のアメニティや備品等が作るシンプルで温かみのある空間で、クオリティの高いものづくりも実感していただけることでしょう。好奇心と洗練が共存するお部屋をご用意してお待ちしています。--></p>
            <div style="padding: 0 2rem">
              <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
                <tbody>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      部屋数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      2室
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      受入人数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      1~2人
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      料金
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      5,900円～
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="grid col-12" style="max-width: 1024px;padding: .5rem;background: rgb(238, 238, 238 , 0.5);">
          <div v-for="e in roomimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
            <img :src="e.img.url" width="352" alt="top" style="width: 100%;object-fit: cover" />
            {{ e.name }}
          </div>
        </div>
      </div>

      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room4.jpg" width="704" alt="top" style="width: 100%;object-fit: cover" />
          </div>
          <div class="col-6_sm-12">
            <div>
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">ドミトリー</h3>
            </div>
            <p style="padding: 2rem">必要最低限の電源やデスクライト、usb充電器(ケーブルはご用意ください)、スマホのワイヤレス充電をご利用いただけます。タオル・歯ブラシ付き。　</p>
            <div style="padding: 0 2rem">
              <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
                <tbody>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      部屋数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      1室
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      受入人数
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      1~8人
                    </td>
                  </tr>
                  <tr>
                    <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      料金
                    </th>
                    <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                      2,900円～
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="grid col-12" style="max-width: 1024px;padding: .5rem;background: rgb(238, 238, 238 , 0.5);">
          <div v-for="e in domitryimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
            <img :src="e.img.url" width="352" alt="top" style="width: 100%;object-fit: cover" />
            {{ e.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2 font-size-1-8-mobile" style="text-align: center;margin-top: 2rem">FACILITIES COMMON</h2>
        <div style="text-align: center">客室共通設備</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div v-for="e in facilitiesimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
          <img :src="e.img.url" width="352" alt="top" style="width: 100%;object-fit: cover" />
          {{ e.name }}
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2 font-size-1-8-mobile" style="text-align: center;margin-top: 2rem">FEE TABLE</h2>
        <div style="text-align: center">宿泊料金表</div>
      </div>
      <div class="grid-center col-12">
        <div class="col-12" style="width: 100%;max-width: 777px;padding: 0 1rem 2rem;">
          <nuxt-img src="/fee_table.jpg" width="777" alt="top" style="width: 100%;object-fit: cover" />
        </div>
      </div>
      <div class="grid-center col-12">
        <div class="grid col-12" style="width: 100%;max-width: 777px;padding: 0 1rem 2rem;">
          <h3 class="col-12" style="margin-bottom: 1rem">チェックインオプション</h3>
          <div class="width-80-pc" style="padding: 0 1rem">
            <div class="col-12" style="margin: .5rem 0">
              ※事前のご連絡が必要です。
            </div>
            <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
              <tbody>
                <tr>
                  <th colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    アーリーチェックイン
                  </th>
                </tr>
                <tr>
                  <td colspan="2" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    5:00 ~ 9:00
                  </td>
                  <td colspan="1" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    + 1泊分
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    夜行バス等にて早朝到着された方にオススメのプランです。<br>
                    ※ 前日に空室がある場合のみ<br>
                    ※ 就寝されている方がいらっしゃいますので、ご配慮をお願いします。ドライヤー利用は7:00より可能です。
                  </td>
                </tr>
              </tbody>
            </table>
            <table style="padding: 0 2rem;border-collapse: collapse;width: 100%;margin-top: 1rem">
              <tbody>
                <tr>
                  <th colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    レイトチェックイン
                  </th>
                </tr>
                <tr>
                  <td colspan="2" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    23:30 ~ 25:00
                  </td>
                  <td colspan="1" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    + 1,000円
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    終電を逃した方のご宿泊も歓迎しております。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="grid-center col-12">
        <div class="grid col-12" style="width: 100%;max-width: 777px;padding: 0 1rem 2rem;">
          <h3 class="col-12" style="margin-bottom: 1rem">朝食</h3>
          <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
            <p>事前予約制。ご予約時、もしくはチェックイン時にお伝えください。</p>
          </div>
          <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
            <div v-if="breakfastimg1 != undefined" class="grid col-6_sm-12" style="padding: .5rem">
              <img :src="breakfastimg1.img.url" width="100%" alt="top" style="width: 100%;object-fit: cover" />
              {{ breakfastimg1.name }}
            </div>
            <div class="col-6_sm-12" style="padding: .5rem">
              <h3>メニュー</h3>
            ・フレンチートーストorレシュティ<br>
            ・コーヒー<br>
            ・紅茶<br>
            ・サラダ
              <h3 style="margin-top: 1rem">料金</h3>
              660円
            </div>
            <div class="grid col-12">
              <div v-for="e in breakfastimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
                <img :src="e.img.url" width="352" alt="top" style="width: 100%;object-fit: cover" />
                {{ e.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12 bg-grey" style="margin-top: 5rem;padding-bottom: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">ATTENTIONS</h2>
        <div style="text-align: center">諸注意</div>
      </div>
      <div class="grid col-12 room-div" style="padding: 0 1rem;max-width: 777px;">
        <div class="grid col-12">
          <h3 class="col-12" style="margin-bottom: 1rem">キャンセル料について</h3>
          <div class="width-80-pc" style="padding: 0 1rem">
            <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
              <tbody>
                <tr>
                  <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    7日前 ~ 3日前
                  </th>
                  <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    宿泊料金の10%
                  </td>
                </tr>
                <tr>
                  <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    2日前
                  </th>
                  <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    宿泊料金の50%
                  </td>
                </tr>
                <tr>
                  <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    前日
                  </th>
                  <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    宿泊料金の80%
                  </td>
                </tr>
                <tr>
                  <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    当日
                  </th>
                  <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    宿泊料金の100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="col-12" style="margin: 3rem 0 1rem">宿泊について</h3>
          <div>
            <li>小学生未満まで添い寝可</li><br>
            <li>館内は全て禁煙です。喫煙が疑われた場合はお部屋のクリーニング代として３万円と交換に伴う実費を徴収することもございます。</li>
            <li>館内設備の破損、貸出品の紛失等は実費をご請求いたします。</li>
            <li>チェックアウト時間を超えてのご滞在は１時間につき1,000円、３時間以上の場合は一泊分をお支払いいただきます。</li>
            <li>自転車やバイクは階段下をご利用ください。ただし、1Fは月極駐車場となっておりますので、利用の妨げにならないようご注意ください。</li>
            <li>スポーツバイクなどは室内での保管も可能ですので、チェックイン時にお申し付けください。</li>
          </div>
          <h3 class="col-12" style="margin: 3rem 0 1rem">ご利用のお願い</h3>
          <li>古い建物をリノベーションしたおり、音が響きやすいため、他のお客様へ
          ご配慮していただきながら、ごゆっくりお過ごしくださいませ。</li><br>
          <li>ベッドリネンのご交換は3泊ごとに、ご希望の場合はお申し付けください。</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: "STAY｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'STAY｜La Union 福島（ラウニオン）' }
      ]
    }
  },
  data () {
    return {
      vw: undefined,
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
      },
      roomimgs:       undefined,
      domitryimgs:    undefined,
      facilitiesimgs: undefined,
      breakfastimgs:  undefined,
      breakfastimg1:  undefined,
    }
  },
  created(){
    axios
      .get(process.env.VUE_APP_MICROCMS_URL + "stay-imgs",{
        headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
        data: {}
    })
      .then(v => {
        this.roomimgs       = v.data.contents.filter((v) => v.type[0] === "個室");
        this.domitryimgs    = v.data.contents.filter((v) => v.type[0] === "ドミトリー");
        this.facilitiesimgs = v.data.contents.filter((v) => v.type[0] === "共通設備");
        this.breakfastimgs  = v.data.contents.filter((v) => v.type[0] === "朝食").slice(0, -1);
        this.breakfastimg1  = v.data.contents.filter((v) => v.type[0] === "朝食").slice(-1)[0];
    });
  },
}
</script>

<style scoped>
.width-80-pc{
  width: 100%;
}

@media screen and (max-width: 768px) {


  .font-size-1-8-mobile {
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 769px) {
  .width-80-pc{
    width: 80%;
  }

}

</style>

