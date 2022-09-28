<template>
  <footer style="background-color: #000;padding: 1.5rem;color: #939597">
    <div class="grid-center col-12">
      <div class="grid col-12" style="max-width: 1024px;text-align: center;margin-bottom: 1rem">
        <div class="col-4_sm-6">
          <NuxtLink to="/outline">会社概要</NuxtLink>
        </div>
        <div class="col-4_sm-6">
          <NuxtLink to="/terms">宿泊約款</NuxtLink>
        </div>
        <div class="col-4_sm-6">
          <NuxtLink to="/policy">個人情報保護方針</NuxtLink>
        </div>
      </div>
      <div class="col-12 text-align-center-pc">
        TEL：024-572-5838<br class="display-none-pc"><span class="display-none-mobile">　／</span>
        〒960-8041<br class="display-none-pc">
        福島県福島市大町1－12　長谷川第2ビル
      </div>
    </div>
    <div class="grid col-12" style="color: #939597">
      <div class="col-12" style="text-align: center;margin-top: 1.5rem">
        <small>© 2021- La Unión</small>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'g-footer'
  }
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .text-align-center-pc {
    text-align: center
  }
}
a {
  color: white;
  font-size: .8rem;
}
</style>