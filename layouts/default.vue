<template>
  <div class="page-contents">
    <Header />
    <div>
      <transition name="router-transition">
        <Nuxt />
      </transition>
    </div>
    <Footer />
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

<style>
/* gridlex */
[class*='grid-'] , [class^='grid'] {
  margin: 0;
}
[class*='col-'] , [class^='col'] {
  padding: 0;
}
html {
  box-sizing: border-box;
  color: #939597;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
  word-spacing: 1px;
  letter-spacing: 1px;
}

* , *::before , *::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.magic {
  font-family: 'Nunito', cursive;
}

h1 {
  color: white;
  font-family: 'Nunito', cursive;
  font-size: 2.5rem;
  font-weight: 100;
  letter-spacing: .1rem;
}

h2 {
  color: #333;
  font-family: 'Nunito', cursive;
  font-size: 2.5rem;
  font-weight: 100;
  letter-spacing: .1rem;
}

body {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijg2LjYiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgNjkuMjgyMDMyMzAyNzU1MSw4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDYwKSAiPjxyZWN0IGlkPSJwYXR0ZXJuLWJhY2tncm91bmQiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwxKSI+PC9yZWN0PiA8cGF0aCBmaWxsPSJyZ2JhKDEsIDg2LCAxNTUsMSkiIGQ9Ik02My4yMiA1Ni41IEw2Mi4zNSA1NyBMNjEuNDggNTYuNSBMNjEuNDggNTUuNSBMNjIuMzUgNTUgTDYzLjIyIDU1LjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFwYXR0ZXJuKSI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMSwgODYsIDE1NSwxKSIgZD0iTTM1LjUxIDcyLjUgTDM0LjY0IDczIEwzMy43NyA3Mi41IEwzMy43NyA3MS41IEwzNC42NCA3MSBMMzUuNTEgNzEuNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWx0ZXI9InVybCgjZmlsdGVyMXBhdHRlcm4pIj48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgxLCA4NiwgMTU1LDEpIiBkPSJNNy44IDU2LjUgTDYuOTMgNTcgTDYuMDYgNTYuNSBMNi4wNiA1NS41IEw2LjkzIDU1IEw3LjggNTUuNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWx0ZXI9InVybCgjZmlsdGVyMXBhdHRlcm4pIj48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgxLCA4NiwgMTU1LDEpIiBkPSJNNy44IDI0LjUgTDYuOTMgMjUgTDYuMDYgMjQuNSBMNi4wNiAyMy41IEw2LjkzIDIzIEw3LjggMjMuNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWx0ZXI9InVybCgjZmlsdGVyMXBhdHRlcm4pIj48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgxLCA4NiwgMTU1LDEpIiBkPSJNMzUuNTEgOC41IEwzNC42NCA5IEwzMy43NyA4LjUgTDMzLjc3IDcuNSBMMzQuNjQgNyBMMzUuNTEgNy41IHoiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbHRlcj0idXJsKCNmaWx0ZXIxcGF0dGVybikiPjwvcGF0aD48cGF0aCBmaWxsPSJyZ2JhKDEsIDg2LCAxNTUsMSkiIGQ9Ik02My4yMiAyNC41IEw2Mi4zNSAyNSBMNjEuNDggMjQuNSBMNjEuNDggMjMuNSBMNjIuMzUgMjMgTDYzLjIyIDIzLjUgeiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFwYXR0ZXJuKSI+PC9wYXRoPjxwYXRoIGZpbHRlcj0idXJsKCNmaWx0ZXIycGF0dGVybikiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwxKSIgZD0iTTM3LjI0IDQxLjUgTDM0LjY0IDQzIEwzMi4wNCA0MS41IEwzMi4wNCAzOC41IEwzNC42NCAzNyBMMzcuMjQgMzguNSB6IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9wYXR0ZXJuPiA8ZmlsdGVyIGlkPSJmaWx0ZXIxcGF0dGVybiI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIyIiBudW1PY3RhdmVzPSIyIiB0eXBlPSJmcmFjdGFsTm9pc2UiIHJlc3VsdD0icmVzdWx0MSI+PC9mZVR1cmJ1bGVuY2U+PGZlRGlzcGxhY2VtZW50TWFwIGluMj0icmVzdWx0MSIgc2NhbGU9IjIwIiByZXN1bHQ9InJlc3VsdDIiIHhDaGFubmVsU2VsZWN0b3I9IlIiIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlRGlzcGxhY2VtZW50TWFwPjxmZUNvbXBvc2l0ZSBpbjI9InJlc3VsdDIiIGluPSJTb3VyY2VHcmFwaGljIiBvcGVyYXRvcj0iYXRvcCIgcmVzdWx0PSJmYlNvdXJjZUdyYXBoaWMiPjwvZmVDb21wb3NpdGU+PC9maWx0ZXI+IDxmaWx0ZXIgaWQ9ImZpbHRlcjJwYXR0ZXJuIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjIiIG51bU9jdGF2ZXM9IjIiIHJlc3VsdD0icmVzdWx0MSIgdHlwZT0iZnJhY3RhbE5vaXNlIj48L2ZlVHVyYnVsZW5jZT48ZmVEaXNwbGFjZW1lbnRNYXAgaW4yPSJyZXN1bHQxIiBzY2FsZT0iMjAiIHJlc3VsdD0icmVzdWx0MiIgeENoYW5uZWxTZWxlY3Rvcj0iUiIgaW49IlNvdXJjZUdyYXBoaWMiPjwvZmVEaXNwbGFjZW1lbnRNYXA+PGZlQ29tcG9zaXRlIGluMj0icmVzdWx0MiIgaW49IlNvdXJjZUdyYXBoaWMiIG9wZXJhdG9yPSJhdG9wIiByZXN1bHQ9ImZiU291cmNlR3JhcGhpYyI+PC9mZUNvbXBvc2l0ZT48L2ZpbHRlcj48L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=);
}

.header-img-div {
  position: relative;
}

.header-img-h1 {
  color: white;
  left: 50%;
  letter-spacing: .3rem;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
}

.header-img {
  object-fit: cover;
  width: 100%;
}

.bg-grey {
  background: rgb(238, 238, 238 , .5);
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
  .header-img {
    height: 450px;
  }
}

@media screen and (max-width: 768px) {
  .display-none-mobile {
    display: none !important;
  }
  .header-img {
    height: 300px;
  }
}

.router-transition-enter-active {
  animation: fadeIn .5s ease-in;
}
@keyframes fadeIn {
  from {
    opacity: .8;
    transform: translateY(-3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.opening-enter-active {
  animation: fadeIns 2s ease-out;
}
@keyframes fadeIns {
  from {
    opacity: .3;
  }
  to {
    opacity: 1;
  }
}
</style>
