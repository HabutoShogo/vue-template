const state = () => ({
  str: "test"
})

const mutations = {
  changeText (state) {
    state.str = "change";
  }
}


export default {
  namespaced: true,
  state,
  mutations
}