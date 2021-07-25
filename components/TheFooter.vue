<template>
  <b-row id="footer" class="no-gutters my-3 pt-3">
    <b-col md="6" class="text-start pb-3 pb-md-0">
      <span v-for="link in links" :key="link.id" class="me-4">
        <a :href="link.href">
          <!--suppress HtmlUnknownTag -->
          <font-awesome-icon :icon="link.icon" class="me-1" /> {{ link.name }}
        </a>
      </span>
    </b-col>
    <b-col md="6" class="text-end">
      <p>Made by: Jakub Suchenek</p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "TheFooter",
  data() {
    return {
      links: [
        {
          id: 1,
          name: "GitHub",
          href: "https://github.com/AnonymousX86",
          icon: [ "fab", "github" ],
        },
        {
          id: 2,
          name: "Instagram",
          href: "https://www.instagram.com/jakub.suchenek/",
          icon: [ "fab", "instagram" ],
        },
        {
          id: 3,
          name: "Ko-fi",
          href: "https://ko-fi.com/anonymousx86",
          icon: [ "fas", "coffee" ],
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@use "~assets/scss/colors";
@use "~assets/scss/hr-border" as border;

#footer {
  border-top: border.$dark-border;

  span {
    display: inline-block;
  }

  a {
    color: inherit;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: colors.$primary;
    }
  }
}

@media (prefers-color-scheme: dark) {
  #footer {
    border-top: border.$light-border;
  }
}
</style>
