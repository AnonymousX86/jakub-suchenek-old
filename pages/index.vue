<template>
  <b-row id="home">
    <b-col cols="12">
      <h1>Hello world!</h1>
    </b-col>

    <b-col cols="12" class="mb-3">
      <p>I'm <b>Kuba</b>, programmer and photographer.</p>
    </b-col>

    <HomeColumn v-for="(image, index) in images" :key="index" :image="image" />
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"
import { HomeImage } from "~/assets/interfaces/Custom"

export default Vue.extend({
  name: "Home",
  data() {
    let images: HomeImage[] = []
    // noinspection SpellCheckingInspection
    images = [
      {
        id: 1,
        title: "Me",
        imageId: "MIjOtmp",
        alt: "Author's selfie",
        text: "I'm young man with many interests. As you can see, biggest are programming and photography. I'm interested in more things, but these two are the easiest to show to the World.",
      },
      {
        id: 2,
        title: "Mind",
        imageId: "l7aWcEX",
        alt: "Coding",
        text: "In mid-school I've started to make my own, small BAT scripts. But that was to little for me. So I've decided to learn at first C++, then PHP, Python and JavaScript.",
      },
      {
        id: 3,
        title: "Mine",
        imageId: "95nNQHT",
        alt: "Photo of three strawberries",
        text: "Everyone love to look at beautiful photos. So I'm taking my own and I'm trying to make them as perfect as possible. I hope my photos will convince someone that the World itself is beautiful,",
      },
    ]
    return {
      images,
    }
  },
})
</script>

<style lang="scss" scoped></style>
