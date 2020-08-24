export default {
  state: {
    allData: {},
    listarr: []
  },
  mutations: {
    saveall(state, val) {
      state.allData = val;
      state.listarr = state.allData.menuData;
    },
    delete(state, val) {
      var i;
      var j;
      var menudata = state.listarr;
      for (i = 0; i < menudata.length; i++) {
        for (j = 0; j < menudata[i].data.length; j++) {
          if (val == menudata[i].data[j].name) {
            state.listarr[i].data.splice(j, 1);
          }
        }
      }
    }
  }
};
