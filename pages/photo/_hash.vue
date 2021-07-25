<template>
  <b-row no-gutters>
    <b-col cols="12">
      <b-img-lazy
        fluid-grow
        :src="`https://i.imgur.com/${hash}.webp`"
        alt="Image doesn't exist!"
        blank-color="#777777"
      />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  asyncData({ params }) {
    const hash = params.hash
    return { hash }
  },
})
</script>

<style lang="scss" scoped></style>
