<template>
  <div class="grid col-12">
    <div class="col-12">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide><nuxt-img class="header-img" :width="img_w_header_img" src="/top1.jpg" style="object-fit: cover;width: 100%" alt="header-img" /></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" :width="img_w_header_img" src="/top2.jpg" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" /></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" :width="img_w_header_img" src="/top3.jpg" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" /></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" :width="img_w_header_img" src="/top4.jpg" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" /></swiper-slide>
          <swiper-slide><nuxt-img class="header-img" :width="img_w_header_img" src="/top5.jpg" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>


    <div class="col-12" style="padding: 1rem">
      <div class="top-box">
        ここは福島県福島市大町１丁目。<br>まちの接点となる福島の入口です。<br>ご旅行の方も地元の方も気軽に<br class="display-none-pc">集い、<br class="display-none-mobile">語らい、交わる場所を<br class="display-none-pc">ご用意しております。
      </div>
    </div>

    <div class="c-txt" style="padding: 1rem">
      <div class="youtube" style="text-align: center">
        <iframe class="youtube-iframe" width="560" height="315" src="https://www.youtube.com/embed/KORdM7jgVdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-12">
      <div class="top-txt">
        <p class="c-txt">スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として<br class="display-none-mobile">
お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています。<br>
<br>
築約50年、使われなくなって10年以上経っていたビルをセルフリノベーションで仕立てました。<br>
福島のまちのど真ん中から、まちの移り変わりを見届けてきた建物だからこそ持っている<br class="display-none-mobile">
味わいのある床や、どっしりと趣のある配電盤など残せるものはできる限り残しています。<br>
古い建物なので少しだけご不便をおかけしてしまうところもあるかもしれませんが、<br class="display-none-mobile">
その分、仲間が集い、語り合える広い空間があります。<br>
まちの方も、ご旅行の方も、老若男女、多くの方がそれぞれ思い思いの使い方ができる余白をぜひお楽しみくださいませ。</p>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 5rem;background: rgb(238, 238, 238 , 0.5)">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">STAY</h2>
        <div style="text-align: center">客室</div>
      </div>
      <div class="grid col-12 room-div" style="">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img class="room-1-img" src="/room1.jpg" :width="img_w_room_1_img" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ドミトリー、プライベートルームから、お客様の旅のスタイルに合わせてお選び頂けます。シャワー、トイレは共同でのご利用となり、24時間利用可能です。</p>
          <div class="col-12">
            <NuxtLink to="/stay" class="button">
              <span>詳しくみる</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">FOOD</h2>
        <div style="text-align: center">カフェ</div>
      </div>
      <div class="grid col-12 room-div">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img src="/cafe1.jpg" class="cafe-1-img" :width="img_w_room_1_img" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">一般の方もご利用いただけるカフェラウンジです。世界の料理やドリンクをご提供しております。
          </p>
          <div class="col-12">
            <NuxtLink to="/food" class="button">
              <span>詳しくみる</span>
            </NuxtLink>
          </div>
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
    <div class="grid-center col-12" style="margin-top: 5rem;background: rgb(238, 238, 238 , 0.5)">
      <div class="grid col-12" style="margin-bottom: 2rem;padding: 1rem">
        <h2 class="col-12 ttl-h2" style="text-align: center;margin-top: 2rem">NEWS</h2>
        <div class="col-12" style="text-align: center;margin-bottom: 2rem">お知らせ</div>
        <div class="col-8_md-6_sm-12 google-cal">
          <iframe src="https://calendar.google.com/calendar/embed?src=pf8bc69ocerhs347n01hfnrd8o%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="col-4_md-6_sm-12">
          <div class="fbook">
            <iframe loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flaunifuku%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden;max-width: 90%" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div class="insta">
            <a href="https://www.instagram.com/launifuku/" target="_blank"  class="grid social">
              <div class="col-1 social-icon">
                <nuxt-img class="" src="/instagram.png" width="48px" alt="instagram-icon" loading="lazy" />
              </div>
              <div class="col social-text">
                <div>Instagram</div>
                <div class="social-name">@launifuku</div>
              </div>
            </a>
            <p class="follow_me" data-heading="Follow Me！">
              Follow Me！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/css/swiper.css'
export default {


  beforeRouteEnter (to, from, next) {
    next()
  },
  data () {
    return {
      img_w_header_img : undefined,
      img_w_room_1_img : undefined,
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
      this.img_w_room_1_img = 512

    }
    else{
      this.img_w_room_1_img = this.vw-32
    }
    this.img_w_header_img = this.vw;
    // console.log(process.env.KEY)
  },
}
</script>

<style scoped>

.follow_me {
  font-size: .8rem;
  left: 60%;
  letter-spacing: .3rem;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-10%, -50%) skewY(-3deg);
}
.follow_me::before {
  animation: flicker 3s linear infinite;
  color: yellow;
  content: attr(data-heading);
  overflow: hidden;
  position: absolute;
  text-align: left;
  text-shadow: none;
  width: 100%;
  z-index: 5;
}

@keyframes flicker {
  0% , 19.999% , 22% , 62.999% , 64% , 64.999% , 70% , 100% {
    opacity: .99;
    text-shadow: -1px -1px 0 rgba(#FFF, .4), 1px -1px 0 rgba(#FFF, .4), -1px 1px 0 rgba(#FFF, .4), 1px 1px 0 rgba(#FFF, .4), 0 -2px 8px, 0 0 2px, 0 0 5px #FF7E00, 0 0 15px #F44, 0 0 2px #FF7E00, 0 2px 3px #000;
  }
  20% , 21.999% , 63% , 63.999% , 65% , 69.999% {
    opacity: .4;
    text-shadow: none;
  }
}
.social {
  text-decoration: none;
  margin-top: 1rem;
}
.social-text {
  color: white;
  padding-left: 3rem;
  padding-top: .7rem;
}
.social-name {
  font-size: .8rem;
  opacity: .5;
}
.social-icon > img {
  height: 48px;
  padding-left: 1.5rem;
  padding-top: 1rem;
  width: auto;
}
.insta {
  background: -webkit-linear-gradient(135deg, #427EFF 0%, #F13F79 70%) no-repeat;
  background:         linear-gradient(135deg, #427EFF 0%, #F13F79 70%) no-repeat;
  border-radius: 3rem;
  float: none;
  height: 4rem;
  position: relative;
  max-width: 340px;
  width: 90%;
}
.insta:before {
  background: -webkit-linear-gradient(15deg, #FFDB2C, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat;
  background:         linear-gradient(15deg, #FFDB2C, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat;
}
.button {
  background: #71C8AA;
  border-radius: .6rem;
  color: #FFF;
  display: block;
  font-weight: bold;
  letter-spacing: .1rem;
  margin: auto;
  padding: 1.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: .5s;
  width: 80%;
}

.button:before {
  background: #FFF;
  content: '';
  height: 2px;
  position: absolute;
  right: 12px;
  top: 46%;
  transform: rotate(45deg);
  width: 10px;
}

.button:after {
  background: #FFF;
  content: '';
  height: 2px;
  position: absolute;
  right: 12px;
  top: 54%;
  transform: rotate(-45deg);
  width: 10px;
}
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.youtube {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  text-align: center
}
.youtube-iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100% !important;
  height: 100% !important;
}

.google-cal {
  text-align: center;
  margin-bottom: 3rem;
}

.google-cal iframe {
  width: 600px;
  height:400px;
}

.title {
  color: #35495E;
  display: block;
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}


.top-box {
  align-items: center;
  color: #FFF;
  display: flex;
  font-size: 12px;
  height: 200px;
  justify-content: center;
  letter-spacing: 3.9px;
  line-height: 2.8;
  position: relative;
  text-align: center;
  border-radius: 240px 15px 100px 15px / 15px 200px 15px 185px;
  background: #01569B;
}

.top-txt {
  padding: 1rem;
}
.top-txt h2 {
  color: #1E1F21;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 1.63;
  margin-bottom: 10px;
  text-align: center;
}

.top-txt div {
  color: #877B61;
  font-family: TTNorms-Medium,sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .65px;
  margin-bottom: 20px;
  text-align: center;
}

.top-txt p {
  color: #53565A;
  line-height: 2.3;
}


.top-list ul {
  border-top: 1px solid #CCC;
}
.top-list-category {
  align-items: center;
  background-color: #53565A;
  color: #FFF;
  display: flex;
  font-size: 10px;
  height: 20px;
  justify-content: center;
  margin-left: 14px;
  width: 80px;
}

.top-list li a {
  align-items: center;
  border-bottom: 1px solid #CCC;
  color: #1E1F21;
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0 20px;
}

.cover-img {
	display: inline-block;
	position: relative;
}
.cover-img:after {
	position: absolute;
	display: block;
	content: "";
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
	transform: rotate(3deg); /* 回転させる */
	background: #fff;
	z-index: -1;
}

.room-div{
  max-width: 1024px;
  padding: 0 16px 2rem;
}

@media screen and (max-width: 768px) {
  .header-img {
    height: 300px;
  }
  .font-size-1-mobile {
    font-size: 1rem;
  }

  .c-txt {
    min-width: 100%;
  }

  .google-cal iframe {
    height:600px;
    max-width: 100%;
  }
  .fbook {
    text-align: center;
  }
  .insta {
    margin: auto;
  }
}
@media screen and (min-width: 769px) {

  .google-cal iframe {
    width: 100%;
    max-width: 800px;
    height: 600px;
  }
  .c-txt {
    margin: auto;
    width: 768px;
  }
  .header-img {
    height: 450px;
  }
  .top-box {
    font-size: 17px;
    letter-spacing: .5em;
    line-height: 2.35;
    margin: 0 auto 55px;
    width: 600px;
    height: 250px;
  }
  .top-txt h2 {
    font-size: 20px;
    letter-spacing: .24em;
    margin-bottom: 15.5px;
  }
  .top-txt p {
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
    background-position: right 20px center;
    padding: 25px 20px 20px;
    transition: .2s ease;
  }
  .room-div{
    padding: 0 0rem 2rem;
  }
}
</style>
