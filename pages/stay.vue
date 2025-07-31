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
    <div class="min-width-768" style="padding: 1rem">
      <div class="youtube">
        <iframe class="youtube-iframe" width="560" height="315" src="https://www.youtube.com/embed/fHa8XtK2mZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        【館内案内】<br>予めご覧になっておくとチェックインがスムーズです
      </div>
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
            <p style="padding: 2rem">歯ブラシ、バスタオル、ヘアブラシ、ボディスポンジ、ひげ剃り、スリッパ込み</p>
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
                      6,200円～／1室
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
            <p style="padding: 2rem">歯ブラシ、バスタオル、ヘアブラシ、ボディスポンジ、スリッパ込み</p>
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
                      5,900円～／1室
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
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room4.jpg" width="704" alt="top" style="width: 100%;object-fit: cover" />
          </div>
          <div class="col-6_sm-12">
            <div>
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">ドミトリー</h3>
            </div>
            <p style="padding: 2rem">必要最低限の電源やデスクライト、usb充電器(ケーブルはご用意ください)、スマホのワイヤレス充電をご利用いただけます。バスタオル・歯ブラシ付き。　</p>
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
                      2,980円～／1ベッド
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="grid col-12" style="max-width: 1024px;padding: .5rem;background: rgb(238, 238, 238 , 0.5);">
          <div v-for="e in domitryimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
            <img :src="e.img.url" width="352" :alt="e.name" style="width: 100%;object-fit: cover" loading="lazy" />
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
          <img :src="`${e.img.url}?w=400`" width="352" :alt="e.name" style="width: 100%;object-fit: cover" loading="lazy" />
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
          <h3 class="col-12" style="margin-bottom: 1rem">オプション料金</h3>
          <table style="padding: 0 2rem;border-collapse: collapse;width: 100%;text-align: left">
            <tbody>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  歯ブラシ、レンタルフェイスタオル、ヘアブラシ、ボディスポンジ、ひげ剃り、スリッパ
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  各¥100
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタルバスタオル、レンタルパジャマ
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥200
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  洗濯機（乾燥機込み）
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥400
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  朝食（7:30～9:00）
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥660
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタルモバイルプロジェクター
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥1,000/1日
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタルPC
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥300/1時間
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタルキーボード
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  ¥300
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  湯たんぽ
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  無料
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  充電ケーブル
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  無料（¥1,000のデポジットをお預かりします）
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタルルーター(データ無制限)
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  1日/¥500
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  レンタサイクル（ヘルメット、ライト、鍵込み）
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  3時間　¥1,500 ／ 1日　 ¥3,000
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  湯たんぽ
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  無料
                </td>
              </tr>
              <tr>
                <th style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  エクストラベッド
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                  当日のドミトリー料金（3,000円を下回る場合は3,000円）
                </td>
              </tr>
            </tbody>
          </table>
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
                <tr>
                  <td colspan="2" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    13:00 ~ 16:00
                  </td>
                  <td colspan="1" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    + 1時間ごとに1,000円
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    お早目のチェックインにも対応いたします。<br>
                    不在の場合がございますので、事前にご連絡ください
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
          <h3 class="col-12" style="margin-bottom: 1rem">デイユース</h3>
          <div class="width-80-pc" style="padding: 0 1rem">
            <table style="padding: 0 2rem;border-collapse: collapse;width: 100%;margin-top: 1rem">
              <tbody>
                <tr>
                  <td colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    11:00～15：00
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    個室
                  </td>
                  <td colspan="1" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    当日料金から－¥1,500
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    ドミトリー
                  </td>
                  <td colspan="1" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    当日料金から－¥500
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style="border: 1px solid #000;padding: 1rem;border-collapse: collapse;width: auto">
                    前日～当日午前中までのご予約のみ。<br>
                    基本アメニティなし。シャワー利用なし。シャワー希望の場合タオル込¥300/1人
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
              <img :src="breakfastimg1.img.url" width="100%" :alt="breakfastimg1.name" style="width: 100%;object-fit: cover" loading="lazy" />
              {{ breakfastimg1.name }}
            </div>
            <div class="col-6_sm-12" style="padding: .5rem">
              <h3>メニュー</h3>
            ・フレンチートースト<br>
            ・コーヒーor紅茶<br>
            ・サラダ
              <h3 style="margin-top: 1rem">料金</h3>
              680円
            </div>
            <div class="grid col-12">
              <div v-for="e in breakfastimgs" v-bind:key="e.name" class="col-3_sm-6" style="padding: .5rem">
                <img :src="e.img.url" width="352" :alt="e.name" style="width: 100%;object-fit: cover" loading="lazy" />
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
          <div style="border: 3px solid #999;padding: .5rem;">
            チェックイン日の3日前より後のキャンセルは、
            宿泊予約料金の100%を申し受けます。５名様以上のご宿泊および繁忙期（4/24~5/08, 8/10~8/24,12/23~1/03）は１週間前より申し受けます。<br>
            また、無断不泊の場合も宿泊料金はご請求いたしますので、ご予定変更ございましたらお早めにご連絡いただきますようよろしくお願い申し上げます。
          </div>
          <h3 class="col-12" style="margin: 3rem 0 1rem">宿泊について</h3>
          <div>
            <li>小学生未満まで添い寝可</li><br>
            <li>館内は全て禁煙です。喫煙が疑われた場合はお部屋のクリーニング代として３万円と交換に伴う実費を徴収することもございます。</li>
            <li>館内設備の破損、貸出品の紛失等は実費をご請求いたします。</li>
            <li>チェックアウト時間を超えてのご滞在は１時間につき1,000円、３時間以上の場合は一泊分をお支払いいただきます。</li>
            <li>自転車やバイクは階段下をご利用ください。ただし、1Fは月極駐車場となっておりますので、利用の妨げにならないようご注意ください。</li>
            <li>スポーツバイクなどは室内での保管も可能ですので、チェックイン時にお申し付けください。</li>
            <li>ドミトリールーム、5名様以上のご予約の場合は事前にお知らせください。</li>
          </div>
          <h3 class="col-12" style="margin: 3rem 0 1rem">ご利用のお願い</h3>
          <li>古い建物をリノベーションしたおり、音が響きやすいため、他のお客様へ
          ご配慮していただきながら、ごゆっくりお過ごしくださいませ。</li><br>
           <li>23:00~05:00までのドライヤーの利用はご遠慮ください。</li><br>
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
  mounted(){
    axios
      .get(this.$config.VUE_APP_MICROCMS_URL + "stay-imgs",{
        headers: { "X-API-KEY": this.$config.VUE_APP_MICROCMS_KEY},
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
.min-width-768 {
  min-width: 100%;
}

.youtube {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  text-align: center;
  border: 1px solid #999;
}
.youtube-iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100% !important;
  height: 100% !important;
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
  .min-width-768 {
    margin: auto;
    width: 768px;
    min-width: auto;
  }
}

</style>

