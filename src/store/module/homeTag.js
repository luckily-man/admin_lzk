const homeTag = {
  state: {
    currentMenu: [{path: '/welcome', title: 'welcome'}],
    tagMenu: [{path: '/welcome', title: '首页', type:''}],
    // localMeun: JSON.parse(localStorage.getItem('tag'))
  },
  mutations: {
    SELECT_MENU(state, val) {
      state.currentMenu = val
    },
    ADD_TAG(state, val) {
      state.tagMenu.push(val)
      localStorage.setItem('tag', JSON.stringify(state.tagmenu))
    },
  },
  actions: {
    selectMenu({commit},data){
      commit('SELECT_MENU',data)
    },
    addTag({commit}, data) {
      commit('ADD_TAG', data)
    },
  },
}
export default homeTag