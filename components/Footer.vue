<template>
  <footer style="background-color: #000;padding: 1.5rem;color: #939597">
    <div class="grid col-12">
      <div class="col-12 text-align-center-pc">
        TEL：024-572-5838<br class="display-none-pc"><span class="display-none-mobile">　／</span>
        〒111-1111<br class="display-none-pc">
        福島県福島市大町1－12　長谷川第2ビル
      </div>
    </div>
    <div class="grid col-12" style="color: #939597">
      <div class="col-12" style="text-align: center;margin-top: 1.5rem">
        <small>© 2021 La Unión</small>
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
</style>