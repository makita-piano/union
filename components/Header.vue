<template>
  <header>
    <div class="grid display-none-mobile header-menu-pc">
      <div class="col-4">
        <NuxtLink to="/">
          <img src="~assets/union.png" width="auto" height="120px" style="margin-left: 1rem;vertical-align: middle;box-sizing: content-box" alt="union">
        </NuxtLink>
      </div>
      <div class="grid col-8">
        <ul class="grid col-12">
          <li class="col-middle">
            <NuxtLink to="/rooms">
              ROOMS
            </NuxtLink>
          </li>
          <li class="col-middle">
            <NuxtLink to="/restaurant">
              RESTAURANT
            </NuxtLink>
          </li>
          <li class="col-middle">
            <NuxtLink to="/access">
              ACCESS
            </NuxtLink>
          </li>
          <li class="col-middle">
            <NuxtLink to="/contact">
              CONTACT
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <nav class="grid menu-container display-none-pc">
      <transition name="trans_slide">
        <ul class="menu" v-if="isMenuShow">
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/rooms">ROOMS</NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/restaurant">RESTAURANT</NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/access">ACCESS</NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/contact">CONTACT</NuxtLink>
          </li>
        </ul>
      </transition>
      <div class="col" style="text-align: center">
        <NuxtLink to="/" id="home" style="z-index: 9999">
          <img src="~assets/union.png" style="vertical-align: middle;box-sizing: content-box;height: 5rem;width: auto;margin: auto;text-align: center;" alt="union">
        </NuxtLink>
      </div>
      <div class="menu-trigger" v-on:click="menuShow" v-bind:class='{active: isMenuShow}'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span class="menu-text">{{menuText}}</span>
        </div>
      </div>
    </nav>
    <div v-if="isMenuShow" style="padding: 70px"></div>
  </header>
</template>

<script>
  export default {
    name: 'g-header',

    data() {
      return {
        isMenuShow: false
      }
    },

    methods: {
      menuShow: function() {
        this.isMenuShow = !this.isMenuShow;
      }
    },
    computed: {
      menuText: function() {
        if(this.isMenuShow){
          return "close";
        }else{
          return "menu";
        }
      }
    }
  }
</script>

<style scoped>
.trans_slide-enter-active, .trans_slide-leave-active {
    transition: opacity .5s;
}
.trans_slide-enter, .trans_slide-leave-to {
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
    position: fixed;
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
    margin: 2.5% 0 0 auto;
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
    left: 16px;
    top: 34px;
    font-size: .8rem;
    background-color: black;
    z-index: 3;
}
.menu-trigger.active span:nth-of-type(4) {
    left: 16.5px;
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
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;
}
.menu-container .menu .menu-item:last-child a {
    border-right: none;
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
}
</style>