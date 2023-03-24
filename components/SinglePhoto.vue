<template>
  <b-col lg="6" xl="4" class="p-0 mb-0">
    <div class="image-wrapper">
      <b-img-lazy
        fluid-grow
        :src="`https://i.imgur.com/${photo.id}m.jpg`"
        :srcset="srcset.join(', ')"
        sizes="80vw"
        blank-color="#777"
        :alt="photo.description"
        :title="photo.description"
      />
      <p class="expand-icon">
        <nuxt-link :to="`/photo/${photo.id}`" />
      </p>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue"
import { Photo } from "~/assets/interfaces/Custom"
import { hashToSrcset } from "~/assets/functions"

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
  computed: {
    srcset(): string[] {
      return hashToSrcset(this.photo.id)
    }
  }
})
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  padding: 40px;

  img {
    box-shadow: 3px 3px 20px #121212;
  }

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

@media (prefers-color-scheme: dark) {
  .image-wrapper > img {
    box-shadow: 3px 3px 20px #000;
  }
}
</style>
