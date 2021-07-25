<template>
  <b-row id="photography">
    <b-col cols="12" class="mb-2">
      <h1>Photography</h1>
      <p>
        Currently I'm using my phone <b>Xiaomi Mi A3</b> as camera. Here you can
        view my recent photos.
      </p>
      <b-alert variant="info" :show="true" class="d-md-none">
        <h5>Where's original?</h5>
        <p>Touch a photo to see it in original size.</p>
      </b-alert>
    </b-col>
    <b-col v-if="$fetchState.pending" cols="12">
      <h2>Loading, please wait...</h2>
    </b-col>
    <b-col v-else-if="$fetchState.error" cols="12">
      <h2>Error {{ res.status }}</h2>
      <p>
        <b>Service currently unavailable</b>, try refreshing page in a few
        minutes.
      </p>
      <b-button :href="$config.baseUrl + $route.path">
        <!--suppress HtmlUnknownTag -->
        <font-awesome-icon :icon="refreshIcon" class="me-1" />
        Refresh now
      </b-button>
    </b-col>
    <SinglePhoto
      v-for="(photo, index) in photos"
      v-else-if="photos.length"
      :key="index"
      :photo="photo"
    />
    <b-col v-else cols="12">
      <h2>Error {{ res.number }}</h2>
      <p>{{ res.message }}, try refreshing page in a few minutes.</p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"
import { ImgurResponseData } from "~/assets/interfaces/Imgur"
import { Photo } from "~/assets/interfaces/Custom"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "Photography",
  data() {
    return {
      refreshIcon: [ "fas", "sync-alt" ],
      res: null,
    }
  },
  async fetch() {
    const res = await this.$axios
      .$get(
        `https://api.imgur.com/3/album/${this.$config.imgurAlbumHash}/images`,
        {
          headers: { Authorization: `Client-ID ${this.$config.imgurClientId}` },
        }
      )
      .catch((res: Response) => res)
    if (res.status === 200) {
      if (res.data) {
        res.data.forEach((el: ImgurResponseData) => {
          const photo: Photo = {
            description: el.description,
            link: el.link,
            thumbnail: `https://i.imgur.com/${el.id}m.webp`,
            width: el.width,
            height: el.height,
          }
          this.addPhoto(photo)
        })
      }
    }
    this.res = res
  },
  head() {
    return {
      titleTemplate: "%s | Photography",
    }
  },
  computed: {
    photos(): Photo[] {
      return this.$store.state.photography.photos
    },
  },
  methods: {
    addPhoto(photo: Photo): void {
      this.$store.commit("photography/add", photo)
    },
  },
})
</script>

<style lang="scss" scoped></style>
