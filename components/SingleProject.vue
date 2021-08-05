<template>
  <b-col cols="12" class="project py-1 ps-2 mb-3">
    <b-row no-gutters>
      <b-col cols="8">
        <h3 class="mb-1">{{ info.name }}</h3>
        <p class="text-muted mb-0">
          <!--suppress HtmlUnknownTag -->
          <font-awesome-icon :icon="info.icon" class="mr-1" />
          {{ info.technology }}
        </p>
        <p class="mb-1">{{ info.description }}</p>
      </b-col>
      <b-col class="mt-4">
        <b-button v-if="info.link" :href="info.link" class="rounded-pill px-4 w-100 github-link">
          <!--suppress HtmlUnknownTag -->
          <font-awesome-icon :icon="['fab', 'github']" class="mr-1" />
          Source code
        </b-button>
      </b-col>
    </b-row>
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

<style lang="scss" scoped>
@use "~assets/scss/colors";

.github-link {
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.project {
  border-left: solid colors.$accent 5px;
  background-color: #fafafa;
  color: #121212;

  &:hover {
    .github-link {
      opacity: 1;
    }
  }
}
</style>
