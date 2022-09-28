<template>
  <div>
    <header>
      <div class="grid display-none-mobile header-menu-pc">
        <div class="col-3">
          <NuxtLink to="/">
            <nuxt-img src="/union.png" width="378px" height="240px" style="margin-left: 1rem;vertical-align: middle;box-sizing: content-box;width: 189px;height: 120px" alt="union" />
          </NuxtLink>
        </div>
        <div class="grid col-9">
          <ul class="grid col-12" style="position: relative">
            <li class="col-middle">
              <NuxtLink to="/stay">
                STAY
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/food">
                FOOD
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/plan">
                PLAN
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/workation">
                WORKATION
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/unicoin">
                UNICOIN
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/access">
                ACCESS
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/book">
                BOOK
              </NuxtLink>
            </li>
            <li class="col-middle">
              <NuxtLink to="/contact">
                CONTACT
              </NuxtLink>
            </li>
            <transition appear name="header-transition" :style="navLeftStyle">
              <div v-if= 'navLeftSwitch == 1' class="header-nav-pointer" :style="navLeftStyle"></div>
            </transition>
            <transition name="header-transition" :style="navLeftStyle">
              <div v-if= 'navLeftSwitch == 2' class="header-nav-pointer" :style="navLeftStyle"></div>
            </transition>
          </ul>
        </div>
      </div>
      <nav class="grid menu-container display-none-pc">
        <div class="col" style="text-align: center">
          <NuxtLink to="/" id="home" style="z-index: 9999">
            <nuxt-img src="/union.png" width="252px" height="160px" style="vertical-align: middle;box-sizing: content-box;height: 5rem;width: auto;margin: auto;text-align: center;width: 126px;height: 80px" alt="union" />
          </NuxtLink>
        </div>
        <transition name="trans_slide">
          <ul class="menu" v-if="isMenuShow">
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/stay">STAY</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/food">FOOD</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/plan">PLAN</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/workation">WORKATION</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/unicoin">UNICOIN</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/access">ACCESS</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/book">BOOK</NuxtLink>
            </li>
            <li class="menu-item" v-on:click="menuShow">
              <NuxtLink to="/contact">CONTACT</NuxtLink>
            </li>
          </ul>
        </transition>
        <div class="menu-trigger" v-on:click="menuShow" v-bind:class='{active: isMenuShow}'>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span class="menu-text">{{menuText}}</span>
          </div>
        </div>
      </nav>
    </header>
    <div class="header-space display-none-pc">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-header',

    data() {
      return {
        isMenuShow: false,
        navLeftBefore: -1000,
        navLeftAfter: 30,
        navLeftShow: 'none',
        navLeftSwitch: 0,
      }
    },
    methods: {
      menuShow: function() {
        this.isMenuShow = !this.isMenuShow;
      }
    },
    mounted(){
      this.navLeftAfter = 100 / 8 * this.$route.meta.index + 100 / 16
      this.navLeftSwitch = 1
    },
    computed: {
      menuText: function() {
        if(this.isMenuShow){
          return "close";
        }else{
          return "menu";
        }
      },
      navLeftStyle() {
        return {
          '--navLeftBefore': this.navLeftBefore + "%",
          '--navLeftAfter': this.navLeftAfter + "%",
          '--navLeftShow':  this.$route.path == "/" || this.$route.path == "/terms" || this.$route.path == "/policy" || this.$route.path == "/outline"  ? 'none' : 'block'
        }
      }
    },
    watch: {
      $route(to, from) {
        this.navLeftBefore = this.navLeftAfter
        this.navLeftAfter = 100 / 8 * to.meta.index + 100 / 16
        this.navLeftBefore = from.name == "index" || from.name == "terms" || from.name == "policy" || from.name == "outline" ? this.navLeftAfter : this.navLeftBefore
        this.navLeftSwitch = this.navLeftSwitch == 1 ? 2 : 1
      },
    },
  }
</script>

<style scoped>
:root {
  --navLeftBefore: 0%;
  --navLeftAfter: 30%;
  --navLeftShow: none;
}
.header-space {
  margin-top: 5rem;
}
.trans_slide-enter-active {
    transition: opacity .5s;
}
.trans_slide-enter {
    opacity: 0;
}

header {
  background-color: #000;
  position: relative;
  z-index: 999;
}
header a{
  text-decoration: none;
  color: white;
  font-size: .8rem;
}

.header-menu-pc li {
  text-align: center;
}
.menu{
    padding-bottom: .5rem;
    z-index: 999;
    display: block;
}
.menu > div{
    border-right: .5px solid #999;
    text-align: center;
}
.menu > div > a > div:nth-child(1){
    color: white;
    font-size: 1.3rem;
}
.menu > div > a > div:nth-child(2){
    color: white;
    font-size: .8rem;
}
.menu > li{
    border-right: .5px solid #999;
    text-align: center;
}
.menu > li > a > div:nth-child(1){
    color: white;
    font-size: 1.3rem;
}
.menu > li > a > div:nth-child(2){
    color: white;
    font-size: .8rem;
}
.menu-trigger {
    display: block;
    width: 64px;
    height: 64px;
    vertical-align: middle;
    cursor: pointer;
    right: .5rem;
    z-index: 999;
    border-radius: 32px;
    position: absolute;
    margin: .7rem 0 0 auto;
    top: 0;
}
.menu-trigger span {
    display: inline-block;
    box-sizing: border-box;
    position: absolute;
    left: 14px;
    width: 36px;
    height: 1px;
    background-color: white;
    transition: all .5s;
    z-index: 10;
}

.menu-trigger.active span {
    background-color: white;
}

.menu-trigger span:nth-of-type(1) {
    top: 15px;
}
.menu-trigger.active span:nth-of-type(1) {
    transform: translateY(12px) rotate(-45deg);
}
.menu-trigger span:nth-of-type(2) {
    top: 23px;
}
.menu-trigger.active span:nth-of-type(2) {
    opacity: 0;
}
.menu-trigger span:nth-of-type(3) {
    top: 31px
}
.menu-trigger.active span:nth-of-type(3) {
    transform: translateY(-5px) rotate(45deg);
}

.menu-trigger span:nth-of-type(4) {
    color: white;
    left: 13px;
    top: 34px;
    font-size: .8rem;
    background-color: black;
    z-index: 3;
}
.menu-trigger.active span:nth-of-type(4) {
    left: 15px;
    top: 38px;
}
.menu-container {
    margin: 0;
    width: 100%;
    top: 0;
    z-index: 999;
}
.menu-container .menu {
    border: 1px solid #ccc;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu-container .menu .menu-item {
    background-color: black;
    flex: 1;
}
.menu-container .menu .menu-item a {
    border-right: 1px solid #ccc;
    color: white;
    display: block;
    padding: 1.5rem 0;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2rem;
}
.menu-container .menu .menu-item:last-child a {
    border-right: none;
}

.header-nav-pointer {
  left: calc(var(--navLeftAfter) - 5px);
  display: var(--navLeftShow);
  width: 5px;
  height: 5px;
  background: #03569B;
  transform: rotate(45deg);
  position: absolute;
  bottom: 10%;
}

@media screen and (max-width: 768px) {
    .menu-container .menu{
        width: 100%;
    }
    .menu-container .menu .menu-trigger{
        display: inline-block;
    }

    .menu-container .menu .menu-item a {
        border-bottom: .1px solid #ccc;
        border-right: none;
    }
    .menu-container .menu .menu-item:last-child a {
        border-bottom: none;
    }
    header {
      width: 100vw;
      position: fixed;
      top: 0;
    }
}

/* animation */
.header-transition-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    display: var(--navLeftShow);
    left: calc(var(--navLeftBefore) - 5px);
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    display: var(--navLeftShow);
    left: calc(var(--navLeftAfter) - 5px);
    transform: rotate(45deg);
  }
}
</style>