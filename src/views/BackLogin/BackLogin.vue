<template>
  <el-container>
    <el-header></el-header>
    <el-main class="main">
      <div class="content">
        <h2>商家登录</h2>
        <h4>为你量身定制的餐饮管理左右手</h4>
        <div class="form">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">密码登录</el-menu-item>
            <el-menu-item index="2">手机登录</el-menu-item>
          </el-menu>
          <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
            <el-form-item>
              <el-input type="input" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="quesback">
            <h3>登录遇到问题？</h3>
            <el-button class="back" type="text" @click="backHomePage">返回首页</el-button>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$http.post("/checkUserData", { params: ruleForm }).then(res => {
        let msg = res.data.msg;
        if (res.data.status) {
          this.$router.push("/backmain");
        } else {
          this.$message({
            message: msg,
            center: true
          });
        }
      });
    },
    backHomePage() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  width: 100%
  height: 400px
  position: relative
  .content
    width: 350px
    height: 370px
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    margin: auto
    background-color: white

    h2
      text-align: center
      font-size: 25px
      margin-top: 20px
      margin-bottom: 15px

    h4
      text-align: center
      font-size: 12px
      color: #666
      margin-bottom: 15px

    .form
      width: 290px
      height: 230px
      position: absolute
      left: 0
      right: 0
      top: 25px
      bottom: 0
      margin: auto
      background-color: white

      .el-menu
        display: flex
        justify-content: center
        margin-bottom: 15px

      .el-form
        .el-button
          width: 100%

      .quesback
        display: flex
        align-items: center
        margin-top: -10px

        h3
          font-size: 10px
          color: #666

        .back
          margin-left: 10px
          font-size: 10px
          color: #666
</style>
