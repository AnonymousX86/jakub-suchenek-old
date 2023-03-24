export default {
  head: {
    title: "Jakub Suchenek portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Jakub Suchenek" },
      { name: "owner", content: "Jakub Suchenek" },
      { name: "copyright", content: "Jakub Suchenek" },
      { name: "reply-to", content: "jakub.suchenek.25@gmail.com" },
      { name: "application-name", content: "Jakub Suchenek portfolio" },
      {
        hid: "description",
        name: "description",
        content:
          "Hello world! I'm Kuba, programmer and photographer. Check out my new portfolio, where I will be posting my new projects and photos.",
      },
      { name: "theme-color", content: "#3AAFA9" },
      { name: "color-scheme", content: "dark light" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "shortcut icon",
        type: "image/png",
        href: "/icon-x192.png",
        sizes: "192x192",
      },
      { rel: "apple-touch-icon", href: "/icon-x180.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://i.imgur.com", crossorigin: true },
      { rel: "dns-prefetch", href: "https://i.imgur.com", crossorigin: true },
    ],
  },

  css: ["@/assets/scss/custom.scss"],

  loading: {
    color: "#3AAFA9",
    height: "5px",
  },

  loadingIndicator: {
    name: "circle",
    color: "#3AAFA9",
    background: "#CCCCCC",
  },

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: [ "bootstrap-vue/nuxt", "@nuxtjs/axios" ],

  axios: {
    retry: { retries: 5 },
  },

  build: {
    babel: {
      compact: true,
    },
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false,
    componentPlugins: [],
    components: [
      "BContainer",
      "BRow",
      "BCol",
      "BButton",
      "BAlert",
      "BImgLazy",
      "BLink",
    ],
    directivePlugins: [],
    directives: [],
  },

  privateRuntimeConfig: {
    imgurClientId: process.env.IMGUR_CLIENT_ID || "none",
    imgurAlbumHash: process.env.IMGUR_ALBUM_HASH || "none",
  },

  publicRuntimeConfig: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://jakub-suchenek.herokuapp.com"
        : "http://localhost:3000",
  },
}
