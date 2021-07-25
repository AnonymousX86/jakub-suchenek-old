<template>
  <b-row id="programming">
    <b-col cols="12">
      <h1>Programming</h1>
      <p>I write mostly in Python and JavaScript.</p>
    </b-col>
    <b-col v-if="!projects.length" cols="12">
      <h2>Oops!</h2>
      <p>There are no projects at all.</p>
    </b-col>
    <b-col v-else cols="12">
      <h2 class="mb-3">My projects</h2>
      <b-row no-gutters>
        <b-col md="8" class="pr-md-3">
          <SingleProject
            v-for="(project, index) in projects"
            :key="index"
            :info="project"
          />
        </b-col>
        <b-col md="4">
          <b-img-lazy
            fluid-grow
            src="https://dummyimage.com/400x200/fa/00"
            blank-color="#777"
            alt="Dummy image"
            class="d-inline-block d-md-none"
          />
          <b-img-lazy
            fluid-grow
            src="https://dummyimage.com/400x800/fa/00"
            alt="Dummy image"
            class="d-none d-md-inline-block d-lg-none"
          />
          <b-img-lazy
            fluid-grow
            src="https://dummyimage.com/400x700/fa/00"
            alt="Dummy image"
            class="d-none d-lg-inline-block"
          />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"
import { Project } from "~/assets/interfaces/Custom"

export default Vue.extend({
  name: "Programming",
  data() {
    let projects: Project[] = []
    projects = [
      {
        name: "This portfolio",
        description: "You're currently browsing it!",
        technology: "Nuxt.js",
        icon: [ "fab", "vuejs" ],
      },
      {
        name: "Caesar cipher",
        description: "Most popular cipher system made online.",
        technology: "JavaScript",
        icon: [ "fab", "js" ],
      },
      {
        name: "Database generator",
        description:
          "School project about generating lots of data for SQL practice.",
        technology: "Vue.js + PHP",
        icon: [ "fab", "vuejs" ],
      },
    ]

    return {
      projects,
    }
  },
  head() {
    return {
      titleTemplate: "%s | Programming",
    }
  },
})
</script>

<style lang="scss" scoped></style>
