<template>
  <div class="page-contents">
    <transition name="opening">
      <opening v-if="!this.$store.state.opening" class="opening" />
    </transition>
    <transition name="opening2">
      <div v-if="this.$store.state.opening">
        <g-header />
        <div>
          <transition name="router-transition">
            <Nuxt />
          </transition>
        </div>
        <g-footer />
      </div>
    </transition>
  </div>
</template>

<script>
  import GHeader from '../components/Header'
  import GFooter from '../components/Footer'
  import Opening from '../components/Opening'

  export default {
    components: {
      GHeader,
      GFooter,
      Opening
    },
    computed: {
      currentPageForCanonical() {
        return this.$route.path.slice(1)
      }
    },
    mounted() {
     this.$store.state.opening = true;
    },
    head() {
      return {
        link: [
          {
            rel: 'canonical',
            href: `https://launion.page/${this.currentPageForCanonical}`
          }
        ]
      }
    }
  }
</script>

<style>
/* gridlex */
[class*="grid-"], [class^="grid"] {
    margin: 0;
}
[class*="col-"], [class^="col"] {
    padding: 0;
}
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  color: #939597;
  font-style: normal;
  font-weight: 500;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

.magic {
  font-family: 'Yusei Magic', sans-serif;
}

h1 {
  font-family: 'Yusei Magic', sans-serif;
  color: white;
  font-family: 'Yusei Magic', sans-serif;
  letter-spacing: .1rem;
  font-weight: 100;
  font-size: 2.5rem;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  font-family: 'Yusei Magic', sans-serif;
  letter-spacing: .1rem;
  font-weight: 100;
}

@media screen and (min-width: 769px) {
  .display-none-pc {
    display: none !important;
  }
  body {
    font-size: 14px;
    letter-spacing: .2rem;
  }
  p {
    line-height: 3;
  }
}

@media screen and (max-width: 768px) {
  .display-none-mobile{
    display: none !important;
  }
}

.router-transition-enter-active {
  animation: fadeIn .5s ease-in;
  }
  @keyframes fadeIn {
  from {
    opacity: 0.8;
    transform: translateY(-3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.opening-leave-active {
  animation: fadeIns 2s ease-out 1s;
  }
  @keyframes fadeIns {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100vh);
    opacity: 0.5;
  }
}

.opening2-enter-active {
  animation: fadeInss 2s ease-out 1s;
  }
  @keyframes fadeInss {
  from {
    transform: translateY(0);
    opacity: 0.5;
  }
  to {
    transform: translateY(-100vh);
    opacity: 1;
  }
}
</style>
