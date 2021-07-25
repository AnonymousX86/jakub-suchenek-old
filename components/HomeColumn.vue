<template>
  <b-col md="10" lg="4" offset-md="1" offset-lg="0">
    <h2 class="mb-4">{{ image.title }}</h2>
    <div :id="'img-container-' + image.id" class="img-container">
      <b-img-lazy
        :id="'home-img-' + image.id"
        fluid-grow
        :src="image.link"
        :alt="image.alt"
        blank-color="#777"
      />
    </div>
    <p class="mt-4">{{ image.text }}</p>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue"
import { HomeImage } from "~/assets/interfaces/Custom"

// noinspection JSUnusedGlobalSymbols
export default Vue.extend({
  name: "HomeImage",
  props: {
    image: {
      type: Object as () => HomeImage,
      default() {
        return {
          id: 0,
          title: "Error",
          link: "https://dummyimage.com/600x600/ccc/000&text=Dummy+image",
          alt: "No image found.",
          text: "During rendering and error occurred.",
        }
      },
    },
  },
  mounted() {
    const { id } = this.$props.image
    const container = document.getElementById("img-container-" + id)
    const innerImage = document.getElementById("home-img-" + id)

    const onMouseEnterHandler = function (event: MouseEvent) {
      update(event)
    }

    const onMouseLeaveHandler = function () {
      if (!innerImage) return
      innerImage.style.transform = "none"
    }

    const onMouseMoveHandler = function (event: MouseEvent) {
      if (isTimeToUpdate()) update(event)
    }

    if (container) {
      container.onmouseenter = onMouseEnterHandler
      container.onmouseleave = onMouseLeaveHandler
      container.onmousemove = onMouseMoveHandler
    }

    let counter = 0
    const updateRate = 10
    const isTimeToUpdate = function () {
      return counter++ % updateRate === 0
    }

    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(event: MouseEvent) {
        this.x = event.clientX - this._x
        this.y = (event.clientY - this._y) * -1
      },
      setOrigin(e: HTMLElement | null) {
        if (!e) return
        this._x = e.getBoundingClientRect().left + Math.floor(e.offsetWidth / 2)
        this._y = e.getBoundingClientRect().bottom + Math.floor(e.offsetHeight)
      },
    }

    mouse.setOrigin(container)

    const update = function (event: MouseEvent) {
      if (!innerImage) return
      mouse.updatePosition(event)
      updateTransformStyle(
        (mouse.y / innerImage.offsetHeight).toFixed(2),
        (mouse.x / innerImage.offsetWidth).toFixed(2)
      )
    }

    const updateTransformStyle = function (
      x: number | string,
      y: number | string
    ) {
      if (!innerImage) return
      innerImage.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"
    }
  },
})
</script>

<style lang="sass" scoped>
.img-container
  perspective: 30px

  img
    transition: transform 0.3s
</style>
