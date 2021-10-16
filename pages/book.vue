<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/top1.jpg" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top" />
      <h1 class="header-img-h1">BOOK</h1>
    </div>
    <div class="col-12" style="margin: 0 0 2rem 0;text-align: center">
      <div class="grid-center min-width-768">
        <div class="col-12" style="margin-bottom: 2rem">
          <h2 style="text-align: center;margin-top: 2rem">BOOK</h2>
          <div style="text-align: center">宿泊予約</div>
        </div>
        <div class="grid-center col-12">
          <div class="col-6_sm-12" style="padding: 1rem">
            <a href="https://metro-booking-secure.jp/landing/YGX8Nw15Dnjmn5Ko-o40JbrxPnLrMd9km-1/" target="_blank" style="text-decoration: none">
              <nuxt-img src="/kenminwari.png" width="736" style="width: 100%" alt="top" loading="lazy" />
            </a>
          </div>
        </div>
        <div class="grid min-width-768" style="padding: 0 1rem">
          <a class="col-6_sm-12 reserve_btn" href="https://metro-booking-secure.jp/landing/YGX8Nw15Dnjmn5Ko-o40JbrxPnLrMd9km-1/" target="_blank" style="text-decoration: none">
            <div style="padding: 1.5rem">
              通常予約
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reserve_btn{
  background: #71C8AA;
  border-radius: .6rem;
  color: #FFF;
  display: block;
  font-weight: bold;
  letter-spacing: .1rem;
  margin: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: .5s;
}
.reserve_btn:hover{
  transform: translateY(-2px);
}

.min-width-768 {
  min-width: 100%;
}
@media (max-width: 768px) {
  .iframe{
    width: 100%;
    height: 600px;
  }
  .reserve_btn{
    width: 100%
  }
}
@media (min-width: 769px) {
  .iframe{
    width: 70%;
    height: 1500px;
  }
  .reserve_btn{
    width: 70%
  }
  .min-width-768 {
    margin: auto;
    width: 768px;
    min-width: auto;
  }       
}
</style>

<script>
export default {
  head() {
    return {
      title: "BOOK&CONTACT｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'BOOK&CONTACT｜La Union 福島（ラウニオン）' }
      ]
    }
  },
}
</script>