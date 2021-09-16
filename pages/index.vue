<template>
  <div class="grid col-12">
    <div class="col-12">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="n in 5" :key="n">
            <nuxt-img class="header-img" width="1920" :src="'/top' + n + '.jpg'" alt="index-header-img" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>

    <div class="col-12" style="padding: 1rem">
      <div class="min-width-768">
        <a href="https://nowroom.jp/magazine/qxz-eolqsua4/?draft_key=hB_s3X06lG#hbbf310677c" target="_blank" style="text-decoration: none">
          <div class="grid banner">
            <svg class="col-4-middle svg text-white cursor-pointer hover:opacity-60 transform ease-out duration-200" fill="white" viewBox="0 0 68 25" width="90.66666666666666" xmlns="http://www.w3.org/2000/svg"><title>NOW ROOM</title><path d="M2.49296 16.5019C0.8846 14.6763 0.00201045 12.3509 0 9.94751C0 7.29218 1.04142 4.7968 2.93124 2.91527C4.82308 1.03574 7.33414 0 10.002 0C12.6679 0 15.1789 1.03574 17.0688 2.91527C18.9586 4.7948 20 7.29218 20 9.94751C20 11.1412 19.7829 12.3149 19.3667 13.4166L12.9714 6.99025C12.1753 6.19845 11.1218 5.76256 10.002 5.76256C8.88219 5.76256 7.82469 6.19845 7.03056 6.99025C6.23442 7.78205 5.79614 8.83179 5.79614 9.94551C5.79614 10.9513 6.16807 11.927 6.8456 12.6928L14.0973 19.915L10.008 24L2.49296 16.5019Z"></path><path d="M63.2085 24.0001L63.1986 20.518L64.9007 22.5477L66.5863 20.518L66.5499 24.0001H67.4042V18.3831L64.914 21.4381L62.2979 18.3831V24.0001H63.2085Z"></path><path d="M41.3571 18.895C39.9282 18.895 38.8083 20.0147 38.8083 21.4467C38.8083 22.8788 39.9282 24.0014 41.3571 24.0014C42.7919 24.0014 43.9147 22.8788 43.9147 21.4467C43.9118 20.0147 42.7889 18.895 41.3571 18.895ZM41.3571 23.2176C40.3501 23.2176 39.5896 22.4574 39.5896 21.4467C39.5896 20.4361 40.3501 19.6729 41.3571 19.6729C42.3819 19.6729 43.1246 20.4184 43.1246 21.4467C43.1216 22.4721 42.379 23.2176 41.3571 23.2176Z"></path><path d="M53.048 18.895C51.6196 18.895 50.5 20.0144 50.5 21.446C50.5 22.8777 51.6196 24 53.048 24C54.4824 24 55.605 22.8777 55.605 21.446C55.605 20.0144 54.4824 18.895 53.048 18.895ZM53.048 23.2164C52.0413 23.2164 51.281 22.4564 51.281 21.446C51.281 20.4357 52.0413 19.6727 53.048 19.6727C54.0726 19.6727 54.815 20.418 54.815 21.446C54.815 22.4712 54.0726 23.2164 53.048 23.2164Z"></path><path d="M31.231 23.9999L30.0525 21.8145H28.9058V23.9999H28.085V18.8936H29.979C31.0107 18.8936 31.9657 19.0685 31.9657 20.3466C31.9657 20.6491 31.8698 21.3815 30.9979 21.684L30.9276 21.7077L32.1701 23.9999H31.231ZM28.9058 21.0346H30.2665C31.017 21.0346 31.0969 20.5512 31.0969 20.3436C31.0969 19.8781 30.8318 19.6616 30.2665 19.6616H28.9058V21.0346Z"></path><path d="M29.9081 6.11725V13.8582H28.0852V1.33691L35.7592 10.018V2.17188H37.5821V14.7984L29.9081 6.11725Z"></path><path d="M35.9377 10.4958L28.2637 1.81152V13.6763H29.7265V5.63898L37.4005 14.3233V2.3533H35.9377V10.4958Z"></path><path d="M46.9454 14.0078C43.6215 14.0078 41.0178 11.3754 41.0178 8.01645C41.0178 4.66384 43.6215 2.03784 46.9454 2.03784C50.2789 2.03784 52.889 4.66384 52.889 8.01645C52.889 11.3754 50.2789 14.0078 46.9454 14.0078ZM46.9454 3.86074C44.6031 3.86074 42.8375 5.64859 42.8375 8.01645C42.8375 10.3843 44.6031 12.169 46.9454 12.169C49.3261 12.169 51.0534 10.4226 51.0534 8.01645C51.0534 5.60716 49.3261 3.86074 46.9454 3.86074Z"></path><path d="M46.9452 2.21631C43.7201 2.21631 41.1992 4.76264 41.1992 8.01645C41.1992 11.2766 43.7232 13.8262 46.9452 13.8262C50.1767 13.8262 52.7103 11.2735 52.7103 8.01645C52.7103 4.76264 50.1767 2.21631 46.9452 2.21631ZM46.9452 12.3506C44.5008 12.3506 42.6556 10.4863 42.6556 8.01645C42.6556 5.54343 44.5008 3.67909 46.9452 3.67909C49.431 3.67909 51.2348 5.502 51.2348 8.01645C51.2348 10.5277 49.431 12.3506 46.9452 12.3506Z"></path><path d="M61.1875 6.66842L58.5073 15.0595L54.4663 2.15577H56.3625L58.5232 9.08727L61.1875 1.02124L63.8931 9.07452L66.0124 2.15577H67.915L63.8549 15.0627L61.1875 6.66842Z"></path><path d="M66.1462 2.33752L63.8995 9.66419L61.1874 1.59497L58.52 9.68012L56.2318 2.33752H54.7117L58.5104 14.4605L61.1874 6.07256L63.8517 14.4636L67.6664 2.33752H66.1462Z"></path></svg>
            <div class="col-8-middle a-visited-decoration-none">中長期宿泊プラン掲載中！<br>地域留学を体験しませんか？</div>
          </div>
        </a>
      </div>
      <div class="top-box">
        ここは福島県福島市大町１丁目。<br>まちの接点となる福島の入口です。<br>ご旅行の方も地元の方も気軽に<br class="display-none-pc">集い、<br class="display-none-mobile">語らい、交わる場所を<br class="display-none-pc">ご用意しております。
      </div>
    </div>
    <div class="min-width-768" style="padding: 1rem">
      <div class="youtube">
        <iframe class="youtube-iframe" width="560" height="315" src="https://www.youtube.com/embed/i-4ejvb6xp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-12">
      <div class="top-txt">
        <p class="min-width-768 padding-0-05-pc">スペイン語で“集い”や“同盟”を意味する当施設は、誰もが気軽にご利用できる福島の拠点として<br class="display-none-mobile">お食事のできるカフェラウンジと宿泊のできるベッドルームを備えています。<br>
<br>
築約50年、使われなくなって10年以上経っていたビルをセルフリノベーションで仕立てました。<br>
福島のまちのど真ん中から、まちの移り変わりを見届けてきた建物だからこそ持っている<br class="display-none-mobile">味わいのある床や、どっしりと趣のある配電盤など残せるものはできる限り残しています。<br>
古い建物なので少しだけご不便をおかけしてしまうところもあるかもしれませんが、<br class="display-none-mobile">その分、仲間が集い、語り合える広い空間があります。<br>
まちの方も、ご旅行の方も、老若男女、多くの方がそれぞれ思い思いの使い方ができる<br class="display-none-mobile">余白をぜひお楽しみくださいませ。</p>
      </div>
    </div>
    <div class="grid-center col-12 bg-grey" style="margin-top: 5rem;padding-bottom: 5rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">STAY</h2>
        <div style="text-align: center">客室</div>
      </div>
      <div class="grid col-12 room-div" style="padding: 0 1rem">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img class="room-1-img" src="/room1.jpg" width="736" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ドミトリー、 プライベートルームから、お客様の旅のスタイルに合わせてお選び頂けます。シャワー、トイレは共同でのご利用となり、24時間利用可能です。</p>
          <div class="col-12">
            <NuxtLink to="/stay" class="button">
              <span>詳しくみる</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">FOOD</h2>
        <div style="text-align: center">カフェ</div>
      </div>
      <div class="grid col-12 room-div" style="padding: 0 1rem">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img src="/cafe1.jpg" class="cafe-1-img" width="736" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
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
                <nuxt-img class="" src="/instagram.png" width="48" alt="instagram-icon" loading="lazy" />
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
  // import 'swiper/css/swiper.css'
export default {
  beforeRouteEnter (to, from, next) {
    next()
  },
  data () {
    return {
      img_w_header_img : undefined,
      img_w_room_1_img : "lg:" + 512 + "px",
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
  },

  created() {
    if(this.vw > 768){
      this.img_w_room_1_img = "lg:" + 512 + "px"
    }
    else{
      this.img_w_room_1_img = "lg:" + this.vw-32 + "px"
    }
    this.img_w_header_img = this.vw;
    // console.log(process.env.KEY)
  },
}
</script>

<style scoped>
.banner {
  background: #53ADD7;
  width: 100%;
  margin: auto;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  color: white;
  text-align: center;
}
.banner > div:link {
  text-decoration: none;
}
.svg {
  height: 32px;
}
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

.min-width-768 {
  min-width: 100%;
}

@media screen and (max-width: 768px) {
  .banner {
    font-size: .8rem;
  }
  .font-size-1-mobile {
    font-size: 1rem;
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

  .banner {
    width: 500px;
    padding: 2rem;
    
  }
  .svg {
    height: 48px;
  }
  .google-cal iframe {
    width: 100%;
    max-width: 800px;
    height: 600px;
  }
  .min-width-768 {
    margin: auto;
    width: 768px;
    min-width: auto;
  }
  .top-box {
    font-size: 17px;
    letter-spacing: .5em;
    line-height: 2.35;
    margin: 0 auto 1rem;
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
  .room-div {
    padding: 0 0rem 2rem;
  }
  .padding-0-05-pc {
    padding: 0 .5rem;
  }
}
</style>
