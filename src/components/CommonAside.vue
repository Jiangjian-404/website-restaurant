<template>
  <el-menu default-active="/" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <h3 v-show="!isCollapse">后台管理系统</h3>
    <el-menu-item :index="item.path" v-for="item in asideMenu" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/backshoplist",
          name: "backshoplist",
          label: "商品列表",
          icon: "goods"
        }
      ]
    };
  },
  methods: {
    clickMenu(item) {
      this.$store.commit("selectMenu", item);
      this.$router.push({ name: item.name });
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-menu
  height 100%
  border none
  h3
    color: #ffffff;
    text-align: center;
    line-height: 48px;
.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 200px;
  min-height: 400px;
</style>
