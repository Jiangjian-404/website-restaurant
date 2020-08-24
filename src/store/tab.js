// import Cookie from "js-cookie";
export default {
  state: {
    img: require("../assets/images/user-default.png"),
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home"
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
      } else {
        state.currentMenu = null;
      }
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    sendImg(state, val) {
      state.img = val;
    }
  }
};
