<template>
  <header>
    <div class="l_content">
      <i class="el-icon-location-information"></i>
      <span>广东财经大学海珠校区21栋</span>
    </div>
    <div class="r_content">
      <el-button type="text" @click="backHomePage">首页</el-button>
      <el-button type="text">购物车</el-button>
      <el-button type="text">收藏夹</el-button>
      <el-dropdown trigger="click" @command="handleCommand">
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="shopkeeper">商家登录</el-dropdown-item>
          <el-dropdown-item>顾客登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      if (command === "shopkeeper") {
        this.$router.push("/backlogin");
      }
    },
    backHomePage() {
      this.$router.push("/");
    }
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
    margin-left 15px
    i
      font-size 22px
    span
      margin-left 15px
  .r_content
    display flex
    align-items center
    margin-right 15px
    .el-button
      color black
      margin-right 15px
</style>
