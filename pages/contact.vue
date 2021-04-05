<template>
  <div class="grid col-12">
    <div class="col-12 header-img-div">
      <nuxt-img class="header-img" src="/top.jpg" width="100%" style="margin-bottom: 2rem;object-fit: cover" alt="top" />
      <h1 class="header-img-h1">CONTACT</h1>
    </div>

    <div class="col-12" style="margin: 1.5rem 0 2rem 0;text-align: center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsZt96dsWrQ5yAnvPz6McYwaxukKd5k07FOBiRmv9uGH0juA/viewform?embedded=true" class="iframe" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .iframe{
    width: 100%;
    height: 600px;
  }
}

@media (min-width: 769px) {
  .iframe{
    width: 70%;
    height: 1500px;
  }
}
</style>