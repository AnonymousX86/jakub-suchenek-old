<template>
  <b-container>
    <TheNavigation />
    <Nuxt keep-alive class="text-start" />
    <TheFooter />
  </b-container>
</template>

<script>
export default {
  layout: "default",
}
</script>

<style lang="scss">
@use "~assets/scss/colors";

body {
  background-color: colors.$light;
  color: #121212;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

h2:first-letter {
  font-weight: 900;
  color: colors.$primary;
}

h1 {
  font-weight: 900;
  letter-spacing: 0.2rem;
}

h2,
h3 {
  font-weight: 700;
  letter-spacing: 0.1rem;
}

h4,
h5,
b {
  font-weight: 600;
}
</style>
