const changePic = {
  state: {
    cutPicUrl: ''
  },
  getter: {},
  mutations: {
    ADD_PICMUTATION(state, data) {
      state.cutPicUrl = data
    }
  },
  actions: {
    addpicAction({commit},data){
      commit('ADD_PICMUTATION',data)
    }
  }
}
export default changePic