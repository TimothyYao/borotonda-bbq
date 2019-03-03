<template>
  <div id="app">
    <app-nav class="navbar"/>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import '@/assets/style/reset.css';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: { AppNav, AppFooter },
  data: () => ({
    hi: 'hi',
  }),
};
</script>

<style lang="scss">
#app {
  position: relative;
}

* {
  font-family: 'Alegreya Sans', sans-serif;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: 0.08em;
}

a {
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: black;
  }
}

body,
html {
  width: 100%;
}

main {
  width: 100%;
}

.navbar {
  position: absolute;
  top: 0;
  width: 100%;
}

.parallax {
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
  text-align: center;
}

@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}

.filter {
  background-color: #000;
  position: absolute;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -1;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
