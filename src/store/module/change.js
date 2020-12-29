const change = {
  state: {
    isCollapse: sessionStorage.getItem('isCollapse')=== 'false' ? false : true
  },
  mutations: {
    change_collapse(state, isCollapse) {
      state.isCollapse = isCollapse 
    }
  },
  actions: {
    changeCollapse({commit}, isCollapse) {
      commit('change_collapse', isCollapse)
      sessionStorage.setItem('isCollapse', isCollapse)
    }
  },
}
export default change