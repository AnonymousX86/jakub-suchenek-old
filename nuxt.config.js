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
      { name: "reply-to", content: "jakub.suchenek.25@gmail.com" },
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
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
  ],

  modules: [ "bootstrap-vue/nuxt", "@nuxtjs/axios" ],

  axios: {
    retry: true,
  },

  build: {},

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false,
    componentPlugins: ["LayoutPlugin"],
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

  fontawesome: {
    icons: {
      regular: ["faQuestionCircle"],
      solid: [ "faCoffee", "faExpand", "faSyncAlt", "faExternalLinkAlt" ],
      brands: [ "faGithub", "faInstagram", "faVuejs", "faJs" ],
    },
  },

  googleFonts: {
    families: { Montserrat: [ 400, 600, 700, 900 ]},
    display: "swap",
  },

  privateRuntimeConfig: {
    imgurClientId: process.env.IMGUR_CLIENT_ID || "none",
    imgurAlbumHash: process.env.IMGUR_ALBUM_HASH || "none",
  },

  publicRuntimeConfig: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "http://jakub-suchenek.herokuapp.com"
        : "http://localhost:3000",
  },
}
