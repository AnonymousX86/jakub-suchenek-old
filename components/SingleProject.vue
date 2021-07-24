<template>
  <b-col cols="12" class="project py-1 ps-2 mb-3">
    <h3 class="mb-1">{{ info.name }}</h3>
    <p class="text-muted mb-0">
      <!--suppress HtmlUnknownTag -->
      <font-awesome-icon :icon="info.icon" class="me-1" />
      {{ info.technology }}
    </p>
    <p class="mb-1">{{ info.description }}</p>
    <b-button v-if="info.link" :href="info.link" class="rounded-pill px-4">
      <!--suppress HtmlUnknownTag -->
      <font-awesome-icon :icon="['fas', 'external-link-alt']" class="me-1" />
      Check out
    </b-button>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue"
import { Project } from "~/assets/interfaces/Custom"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "SingleProject",
  props: {
    info: {
      type: Object as () => Project,
      default() {
        return {
          name: "Empty",
          description:
            "This is representation of an empty project. Probably something went wring during rendering.",
          technology: "Unknown",
          icon: [ "far", "question-circle" ],
        }
      },
    },
  },
})
</script>

<style lang="sass" scoped>
@import "~assets/sass/colors"

.project
  border-left: solid $accent 5px
  background-color: #fafafa
  color: #121212
</style>
