<template>
  <nav>
    <h1>
      <router-link to="/">Brōtonda Korean BBQ</router-link>
    </h1>
    <ul class="top-nav">
      <li>
        <router-link to="/menu">Menu</router-link>
      </li>
      <li>
        <router-link to="/location">Hours &amp; Location</router-link>
      </li>
    </ul>
    <div class="hamburger" @click="menu = true">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="sidebar">
      <transition name="fade">
        <div class="overlay" @click="menu = false" v-if="menu"></div>
      </transition>
      <ul class="side-nav" :class="{ active: menu }">
        <li @click="menu = false">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="menu = false">
          <router-link to="/menu">Menu</router-link>
        </li>
        <li @click="menu = false">
          <router-link to="/location">Hours &amp; Location</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: false,
  }),
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.side-nav {
  position: fixed;
  background-color: black;
  height: 100vh;
  width: 80%;
  top: 0;
  right: 0;
  transform: translateX(100%);
  &.active {
    transform: translateX(0);
  }
  transition: transform 0.3s ease-in-out;

  li {
    padding: 30px 0;
    font-size: 15px;
    .router-link-exact-active {
      color: rgba(80, 134, 81, 0.93);
      cursor: default;
      &:visited {
        color: rgba(80, 134, 81, 0.93);
      }
    }
  }
}

nav {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 25px 80px;
  justify-content: space-between;
  z-index: 1000;
}

a {
  color: white;
  &:visited {
    color: white;
  }
  text-transform: uppercase;
  letter-spacing: 0.2em;
  &:hover {
    color: white;
    opacity: 0.7;
  }
}

.top-nav {
  li {
    display: inline;
    padding: 0 30px;
    font-size: 15px;
    .router-link-exact-active {
      color: rgba(80, 134, 81, 0.93);
      cursor: default;
      &:visited {
        color: rgba(80, 134, 81, 0.93);
      }
    }
  }
}

h1 {
  font-size: 25px;
}

.hamburger {
  display: none;
  &:hover {
    opacity: 0.7;
  }
}

.line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  border-radius: 3px;
}

@media only screen and (max-width: 800px) {
  .top-nav {
    display: none;
  }

  nav {
    padding: 25px 20px;
    text-align: center;
  }

  h1 {
    font-size: 20px;
  }

  .hamburger {
    display: block;
  }
}
</style>
