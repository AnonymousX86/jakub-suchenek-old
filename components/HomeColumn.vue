<template>
  <b-col md="10" lg="4" offset-md="1" offset-lg="0">
    <h2 class="mb-4">{{ image.title }}</h2>
    <div :id="'img-container-' + image.id" class="img-container">
      <b-img-lazy
        :id="'home-img-' + image.id"
        fluid-grow
        :src="`https://i.imgur.com/${image.imageId}m.jpg`"
        :srcset="srcset.join(', ')"
        sizes="80vw"
        :alt="image.alt"
        blank-color="#777"
      />
    </div>
    <p class="mt-4">{{ image.text }}</p>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue"
import { HomeImage } from "~/assets/interfaces/Custom"
import { hashToSrcset } from "~/assets/functions"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "HomeImage",
  props: {
    image: {
      type: Object as () => HomeImage,
      default() {
        return {
          id: 0,
          title: "Error",
          photoId: "removed",
          alt: "No image found.",
          text: "During rendering and error occurred.",
        }
      },
    },
  },
  computed: {
    srcset(): string[] {
      return hashToSrcset(this.$props.image.imageId)
    },
  },
})
</script>

<style lang="scss" scoped>
@media (prefers-reduced-motion: no-preference) {
  .img-container {
    perspective: 30px;

    img {
      transition: transform 0.3s;
    }

    &:hover > img {
      transform: rotateY(-0.35deg);
    }
  }
}
</style>
