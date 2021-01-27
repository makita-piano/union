<template>
  <div class="page-contents">
    <g-header />
    <div>
      <Nuxt />
    </div>
    <g-footer />
  </div>
</template>

<script>
  import GHeader from '../components/Header'
  import GFooter from '../components/Footer'

  export default {
    components: {
      GHeader,
      GFooter
    },
    computed: {
      currentPageForCanonical() {
        return this.$route.path.slice(1)
      }
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
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
</style>
