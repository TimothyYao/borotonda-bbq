<template>
  <nav>
    <h1>
      <router-link to="/">Brōtonda Korean BBQ</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/menu">Menu</router-link>
      </li>
      <li>
        <router-link to="/location">Hours &amp; Location</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

li {
  display: inline;
  padding: 0 30px;
  font-size: 15px;
  .router-link-active {
    color: rgba(80, 134, 81, 0.93);
    cursor: default;
  }
}

h1 {
  font-size: 25px;
}
</style>
