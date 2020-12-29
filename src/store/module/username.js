const username = {
  // 存放数据
  state: {
    adminData: []
  },
  getter: {},
  mutations: {
    ADD_USERMUTATION(state,data){
      state.adminData.push(data)
    }
  },
  actions: {
    adduserAction({commit},data){
      commit('ADD_USERMUTATION',data)
    }
  }
}
export default username