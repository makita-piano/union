<template>
  <div class="page-contents">
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>

  export default {
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
