<template>
  <div class="grid-center col-12 notfound">
    <transition name="fade">
      <div v-if="img" class="grid col-12 main-img">
      </div>
    </transition>
    <div class="animation">
      <span
        v-for="(t, index) in text"
        :key="index"
        class="item"
        :style="{animationDelay: index*100+'ms'}"
        v-text="t"
        />
    </div>
    <div class="col-12 return_link">
      <NuxtLink to="/" class="button">
        <span>トップに戻る</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  layout: "notfound",

  data () {
    return {
      img: false,
      text: '404 not found...',
    }
  },
  mounted() {
    this.img = true;
  },
  head() {
    return {
      title: "NOTFOUND｜La Union 福島（ラウニオン）",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'NOTFOUND｜La Union 福島（ラウニオン）' }
      ]
    }
  },
}
</script>

<style scoped>
.button {
  display: block;
  position: relative;
  padding: 1.5rem;
  border-radius: .6rem;
  color: #939597;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: .1rem;
  transition: .5s;
  margin: auto;
  border: 1px solid #939597;
}
.notfound {
  height: 100vh;
  background-color: black;
  position: relative;
}
.main-img {
  background-image: url("/union.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right center;
  max-width: 500px;
}
.fade-enter-active,
.fade-leave-active {
  animation: img-fadein 3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes img-fadein {
  from {
    transform: translateY(-30px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in 3s cubic-bezier(0.22, 0.15, 0.25, 1.43) infinite backwards;
}
.animation {
  position: absolute;
  top: calc(50% + 8rem);
}
.facebook {
  position: absolute;
  top: calc(50% + 12rem);
  animation: img-fadein 3s ease-out;
}

.return_link {
  position: absolute;
  top: calc(50% + 15rem);
  animation: img-fadein 3s ease-out;
  color: #939597;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
</style>