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
    <div v-if="img" class="facebook">
      <a href="https://www.facebook.com/launifuku/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" class="svg replaced-svg"><g transform="translate(0 0)"><path d="M-2505-5135a13.906,13.906,0,0,1-9.9-4.1,13.908,13.908,0,0,1-4.1-9.9,13.91,13.91,0,0,1,4.1-9.9,13.907,13.907,0,0,1,9.9-4.1,13.909,13.909,0,0,1,9.9,4.1,13.908,13.908,0,0,1,4.1,9.9,13.906,13.906,0,0,1-4.1,9.9A13.908,13.908,0,0,1-2505-5135Zm-2.073-14.026v8.433h3.178v-8.433h2.6l.5-3.146h-3.106v-.969a1.037,1.037,0,0,1,1-1.115h2.174v-3.212h-2.557v.012a3.859,3.859,0,0,0-3.034,1.195,3.961,3.961,0,0,0-.754,2.485h-.006v1.6h-2.109v3.146Z" transform="translate(2519 5163)" fill="#444"></path></g></svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img: false,
      text: '404 not found...',
    }
  },
  mounted() {
    this.img = true;
  }
}
</script>

<style>

</style>

<style scoped>
.notfound {
  height: 100vh;
  background-color: black;
  position: relative;
}
.main-img {
  background-image: url("~@/assets/union.png");
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
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
</style>