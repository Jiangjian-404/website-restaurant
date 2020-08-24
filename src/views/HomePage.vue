<template>
  <el-container>
    <el-header>
      <HomeHeader></HomeHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
export default {
  components: {
    HomeHeader
  }
};
</script>

<style lang="stylus" scoped></style>
