<template>
  <b-col lg="6" xl="4">
    <div class="mb-4 px-3 image-wrapper">
      <b-img-lazy
        fluid-grow
        :src="`https://i.imgur.com/${photo.id}m.webp`"
        blank-color="#777"
        :alt="photo.description"
        :title="photo.description"
      />
      <p class="expand-icon">
        <nuxt-link :to="`/photo/${photo.id}`">
          <!--suppress HtmlUnknownTag -->
          <font-awesome-icon :icon="previewIcon" />
        </nuxt-link>
      </p>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue"
import { Photo } from "~/assets/interfaces/Custom"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "SinglePhoto",
  props: {
    photo: {
      type: Object as () => Photo,
      default() {
        return {
          id: "",
          description: "",
        }
      },
    },
  },
  data() {
    return {
      previewIcon: [ "fas", "expand" ],
    }
  },
})
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;

  &:hover > .expand-icon > a {
    transition-timing-function: ease-in;
    opacity: 0.5;
  }

  .expand-icon {
    font-size: 5rem;
    text-align: center;
    position: absolute;
    top: calc(50% - 60px);
    left: 0;
    display: inline-block;
    width: 100%;

    a {
      opacity: 0;
      color: #ffffff;
      transition: opacity 0.3s ease-out;

      &:hover {
        transition-timing-function: ease-in;
        opacity: 1;
      }
    }
  }
}
</style>
