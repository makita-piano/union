<template>
  <div class="grid col-12">
    <div class="col-12">
      <nuxt-img class="header-img" src="/top.jpg" width="1024px" style="width: 100%;margin-bottom: 1rem;object-fit: cover" alt="top" loading="lazy" />
    </div>
    <div class="col-12" style="padding: 1rem">
      <div class="top-box">
        旅行者と地元の方との接点。<br>福島がもつ素敵な体験のヒトトキを<br>ラユニオンから始めませんか。
      </div>
    </div>
    <div class="col-12">
      <div class="top-txt">
        <p class="c-txt">ラウニオンは最大8名まで泊まれるシェアルームなら、一人2,800円～泊まれます！！<br>
「集い」を意味する店名の当施設は、この福島という地に集まった旅人と地域を繋ぐ拠点として、カフェとゲストハウスを併設しています。<br>
「La Union」は、福島の街の入り口として、街と繋がりながら気軽に滞在できるゲストハウス／ホステルとして作りました。なんでも揃っているわけではないけれど、「La Union」から一歩街に出れば見つけられる。街と旅の思い出を繋ぐ拠点となれるような場所になるようにと、たくさんの想いを詰め込んで出来た皆さんの家です。<br>
もちろん、旅行に来た人だけではなく、地元の方のご利用も大歓迎です！日々の生活を充実させたい人、ちょっとだけ休みたい人、終電を逃してしまった人など、たくさんの人が当施設を活用してくれたら嬉しいです。</p>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 5rem;background: rgb(238, 238, 238 , 0.5)">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">ROOMS</h2>
        <div style="text-align: center">客室</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img src="/room1.jpg" width="496px" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">ドミトリー、プライベートルームから、お客様の旅のスタイルに合わせてお選び頂けます。シャワー、トイレは共同でのご利用となり、24時間利用可能です。</p>
          <div class="col-12">
            <NuxtLink to="/rooms" class="button">
              <span>詳しくみる</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-center col-12" style="margin-top: 2rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">RESTAURANT</h2>
        <div style="text-align: center">レストラン</div>
      </div>
      <div class="grid col-12" style="max-width: 1024px;padding: 0 1rem 2rem;">
        <div class="grid col-6_sm-12 cover-img">
          <nuxt-img src="/restaurant1.jpg" class="" width="496px" style="width: 100%;object-fit: cover" alt="top" loading="lazy" />
        </div>
        <div class="grid col-6_sm-12">
          <p style="padding: 2rem">朝7:30からブレックファーストをご利用頂けます。</p>
          <div class="col-12">
            <NuxtLink to="/restaurant" class="button">
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
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 class="ttl-h2" style="text-align: center;margin-top: 2rem">NEWS</h2>
        <div style="text-align: center">お知らせ</div>
        <div style="margin: 1.5rem 0 2rem 0;text-align: center">
          <iframe loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flaunifuku%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden;max-width: 90%" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div class="insta">
          <a href="https://www.instagram.com/launifuku/" target="_blank"  class="grid social">
            <div class="col-1 social-icon">
              <img class="" src="~assets/instagram.png" width="100%" alt="instagram-icon" loading="lazy">
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
  height: 3rem;
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
  margin: auto;
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
  font-size: 14px;
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

@media screen and (max-width: 768px) {
  .header-img {
    height: 300px;
  }
  .font-size-1-mobile {
    font-size: 1rem;
  }
}
@media screen and (min-width: 769px) {
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
}
</style>
