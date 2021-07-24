export const state = () => ({
  photos: []
})

// noinspection JSUnusedGlobalSymbols
export const mutations = {
  add(state, photo) {
    state.photos.push(photo)
  }
}
