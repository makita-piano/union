<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide><nuxt-img class="header-img" src="/troom1.jpg" :width="img_w_header_img" style="width: 100%;object-fit: cover" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" src="/troom2.jpg" :width="img_w_header_img" style="width: 100%;object-fit: cover" loading="lazy" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" src="/troom3.jpg" :width="img_w_header_img" style="width: 100%;object-fit: cover" loading="lazy" alt="top" /><h1 class="header-img-h1">STAY</h1></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room2.jpg" :width="img_w_room_img" alt="top" style="width: 100%;object-fit: cover" />
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
                      6,200円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room3.jpg" :width="img_w_room_img" alt="top" style="width: 100%;object-fit: cover" />
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
                      5,900円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="grid col-12" style="max-width: 1024px;padding: 1rem;">
        <div class="grid col-12" style="background: rgb(238, 238, 238 , 0.5);padding: 1rem">
          <div class="grid col-6_sm-12">
            <nuxt-img src="/room4.jpg" :width="img_w_room_img" alt="top" style="width: 100%;object-fit: cover" />
          </div>
          <div class="col-6_sm-12">
            <div>
              <h3 style="border-bottom: 2px solid #333;margin: 1rem 2rem;padding: 0 0 .3rem 1rem;">ドミトリー</h3>
            </div>
            <p style="padding: 2rem">必要最低限の電源やスマホのワイヤレス充電をご利用いただけます。タオル・歯ブラシ付き。</p>
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
                      2,900円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2 font-size-1-8-mobile" style="text-align: center;margin-top: 2rem">Facilities common</h2>
        <div style="text-align: center">客室共通設備</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/shower.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          シャワー
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/toilet1.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          トイレ①
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/toilet2.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          トイレ②
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/wash_room.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          ウォッシュルーム
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/powder_room.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          パウダールーム
        </div>
        <div class="col-3_sm-6" style="padding: .5rem">
          <nuxt-img src="/amenities.jpg" :width="img_w_item_img" alt="top" style="width: 100%;object-fit: cover" />
          共有アメニティ
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2 font-size-1-8-mobile" style="text-align: center;margin-top: 2rem">Fee Table</h2>
        <div style="text-align: center">宿泊料金表</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <nuxt-img src="/fee_table.jpg" :width="img_w_fee_img" alt="top" style="width: 100%;object-fit: cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img_w_header_img: undefined,
      img_w_room_img: undefined,
      img_w_item_img: undefined,
      img_w_fee_img: undefined,
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
    }
  },
  mounted() {
    this.vw = window.innerWidth;
    if(this.vw > 768){
      this.img_w_room_img = 480
      this.img_w_fee_img = 1024
      this.img_w_item_img = 232
    }
    else{
      this.img_w_room_img = this.vw-64
      this.img_w_item_img = parseInt((this.vw-64)/2)
      this.img_w_fee_img = this.vw
    }
    this.img_w_header_img = this.vw;
    // console.log(process.env.KEY)
  },
}
</script>

<style>
@media screen and (max-width: 768px) {


  .font-size-1-8-mobile {
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 769px) {

}

</style>

