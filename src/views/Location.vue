<template>
  <div class="container">
    <div class="hero parallax">
      <div class="filter"></div>
      <h1>hours &amp; location</h1>
    </div>
    <article>
      <div class="info">
        <div class="col">
          <h2>Hours</h2>
          <p>
            <b>Monday</b>: 6pm-9pm
          </p>
          <p>Please call if you need help getting in</p>
        </div>
        <div class="col">
          <h2>Location</h2>
          <p>8370 Greensboro Drive #412
            <br>McLean, VA 22013
          </p>
          <p>
            Go to the gate on the left when arriving and
            let them know you're a guest for building 4 unit 412.
            The guard should give you a pass. Park anywhere.
          </p>
        </div>
        <div class="col">
          <h2>Contact</h2>
          <p>
            <b>Phone</b>: 540.326.5542
          </p>
        </div>
      </div>
      <div class="gmap">
        <iframe
          src="https://maps.google.com/maps?q=8370%20greensboro%20drive&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://static1.squarespace.com/static/57d4a32abe65946651a13a1a/t/58637f86bebafb318da13388/1482919182830/_MG_9704.png');
  height: 500px;
}

.info {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

h1 {
  padding-top: 100px;
  color: white;
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 0.08em;
}

h2 {
  font-size: 20px;
  padding: 0 0 20px;
}

p {
  font-size: 16px;
  padding: 12px 0;
}

article {
  margin: 100px auto;
  width: 750px;
}
.gmap {
  margin: 0 auto;
  width: 100%;
  height: 50vh;
  background-image: grey;
}

iframe {
  width: 100%;
  height: 100%;
}

.col {
  flex: 1 0 0;
  padding-bottom: 40px;
}

@media only screen and (max-width: 800px) {
  .info {
    display: block;
  }

  article {
    margin-top: 50px;
    width: 100%;
    padding: 0 30px;
  }
}
</style>
