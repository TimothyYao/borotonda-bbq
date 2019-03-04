<template>
  <div class="container">
    <div class="hero parallax">
      <div class="filter"></div>
      <div class="title">
        <h1>Brōtonda</h1>
        <h2>korean barbeque</h2>
      </div>
    </div>
    <article>
      <h3>Your next meal destination</h3>
      <h4>Savor the classic flavors of traditional Korean BBQ in a sleek, modern setting.</h4>
      <p>RSVP please</p>
      <p class="time">
        <b>Monday</b>: 6pm-9pm
      </p>
      <p>8370 Greensboro Drive #412, McLean, VA 22103</p>
      <p class="phone">540.326.5542</p>
    </article>
    <section>
      <div class="parallax menu">
        <div class="filter"></div>
      </div>
      <div class="text">
        <div class="eat">
          <h1>Let's Eat</h1>
          <router-link to="/menu">View our menu</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  padding: 100px 0 150px 0;
  h3 {
    font-size: 50px;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
  h4 {
    font-size: 18px;
    padding-bottom: 20px;
  }
}

.time {
  padding: 20px;
}

.phone {
  padding: 20px;
}

section {
  position: relative;

  .text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .eat {
      h1 {
        text-transform: uppercase;
        letter-spacing: 0;
        font-weight: 400;
        font-size: 70px;
        margin-bottom: 20px;
      }
      a {
        color: white;
        font-size: 18px;
        text-transform: uppercase;
        border: 1px solid white;
        padding: 18px;
        border-radius: 30px;
        &:hover {
          color: black;
          background-color: white;
        }
      }
    }
  }
}

.menu {
  height: 100vh;
  background-image: url('https://i.ytimg.com/vi/KF5ykCgn41Q/maxresdefault.jpg');
  color: white;
}

.hero {
  height: 100vh;
  background-image: url('https://scontent-iad3-1.cdninstagram.com/vp/b71dd42bbf5870a3ca92c3f18416bb99/5D18ABB7/t51.2885-15/e35/12749927_456637474542467_44250591_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com');
  h1,
  h2 {
    color: white;
  }
}

article {
  text-align: center;
}

h1,
h2 {
  letter-spacing: 0.11em;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

h1 {
  font-size: 150px;
  padding-bottom: 30px;
}
h2 {
  font-size: 70px;
}

@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}

@media only screen and (max-width: 800px) {
  .hero {
    h1 {
      font-size: 64px;
    }
    h2 {
      font-size: 36px;
    }
  }
}
</style>
