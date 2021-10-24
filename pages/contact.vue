<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/top1.jpg" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top" />
      <h1 class="header-img-h1">CONTACT</h1>
    </div>
    <div class="col-12" style="margin: 5rem 1.5rem 0 2rem 0;text-align: center;padding-top: 3rem">
      <div class="col-12" style="margin-bottom: 2rem">
        <h2 style="text-align: center;margin-top: 2rem">CONTACT</h2>
        <div style="text-align: center">お問合せ</div>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsZt96dsWrQ5yAnvPz6McYwaxukKd5k07FOBiRmv9uGH0juA/viewform?embedded=true" class="iframe" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
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
      title: "CONTACT｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'CONTACT｜La Union 福島（ラウニオン）' }
      ]
    }
  },
}
</script>