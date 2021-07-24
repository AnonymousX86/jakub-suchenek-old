<template>
  <b-row id="nav" class="no-gutters my-3 pb-3">
    <b-col v-for="link in links" :key="link.id" lg="4">
      <nuxt-link :to="'/' + link.to" class="link">
        <div>{{ link.name }}</div>
      </nuxt-link>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "TheNavigation",
  data() {
    return {
      links: [
        { id: 1, name: "Home", to: "" },
        { id: 2, name: "Programming", to: "programming" },
        { id: 3, name: "Photography", to: "photography" },
      ],
    }
  },
})
</script>

<style lang="sass" scoped>
@import "~assets/sass/colors"
@import "~assets/sass/hr-border"

#nav
  border-bottom: $dark-border

  .link
    display: block
    color: #cccccc
    text-decoration: none
    text-align: center

    & > div
      padding: 8px 0
      background-color: $dark
      transition: all 0.4s ease-in-out 0.04s

      &:hover
        text-shadow: 0 0 4px #cccccc
        transition-duration: 0.2s

    &.nuxt-link-exact-active > div
      background-color: $primary
      color: #121212
      &:hover
        text-shadow: none

@media (prefers-color-scheme: dark)
  #nav
    border-bottom: $light-border
</style>
