<template>
  <header>
    <div class="l_content">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r_content">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link"> <img :src="userImg" class="userimg" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu,
      img: state => state.tab.img
    })
  },
  data() {
    return {
      userImg: require("../assets/images/user-default.png")
    };
  },
  methods: {
    collapseMenu() {
      this.$store.commit("collapseMenu");
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("/");
      }
    }
  },
  created() {
    setTimeout(() => {
      this.userImg = this.img;
    }, 2000);
  }
};
</script>

<style lang="stylus" scoped>
header
  display flex
  height 100%
  align-items center
  justify-content space-between
  .l_content
    display flex
    align-items center
    .el-button
      margin-right 25px
  .r_content
    .userimg
      width 45px
      height 45px
      border-radius:50%
</style>

<style lang="stylus">
.el-breadcrumb__item
  .el-breadcrumb__inner
    color: #666666;
    font-weight: normal;
  &:last-child
    .el-breadcrumb__inner
      color: #fff;
</style>
