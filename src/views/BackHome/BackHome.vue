<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="user.userImg" alt="" />
          <div class="userinfo">
            <p class="name">{{ user.username }}</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="info">
          <p>上次登陆时间:<span>2020-07-07</span></p>
          <p>上次登陆地点:<span>广州</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:522px;margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="rtop">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart style="height:280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="rbuttom">
        <el-card shadow="hover">
          <echart style="height:260px" :chartData="echartData.user"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height:260px" :chartData="echartData.shop" :isAxisChart="false"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from "../../components/EChart";
export default {
  components: {
    Echart
  },
  data() {
    return {
      user: {
        userImg: require("../../assets/images/user-default.png"),
        username: ""
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ],
      tableData: [],
      tableLabel: {
        name: "商品类别",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        shop: {
          series: []
        }
      }
    };
  },
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then(res => {
        res = res.data;
        this.tableData = res.data.tableData;
        // 订单折线图
        const order = res.data.orderData;
        this.echartData.order.xData = order.date;
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(order.data[0]);
        // 第二步，循环添加数据
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: "line"
          });
        });
        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date);
        this.echartData.user.series.push({
          name: "新增用户",
          data: res.data.userData.map(item => item.new),
          type: "bar"
        });
        this.echartData.user.series.push({
          name: "活跃用户",
          data: res.data.userData.map(item => item.active),
          type: "bar",
          barGap: 0
        });
        // 视频饼图
        this.echartData.shop.series.push({
          data: res.data.shopData,
          type: "pie"
        });
      });
    },
    getBackShopData() {
      this.$http.get("/home/getShopData").then(res => {
        var index = res.data.shopData.findIndex(item => {
          if (item.name == "一品香柳州螺蛳粉") {
            return true;
          }
        });
        this.user.userImg = res.data.shopData[index].img;
        this.user.username = res.data.shopData[index].name;
        this.$store.commit("saveall", res.data.shopData[index]);
        this.$store.commit("sendImg", res.data.shopData[index].img);
      });
    }
  },
  created() {
    this.getTableData();
    this.getBackShopData();
  }
};
</script>

<style lang="stylus" scoped>
.home
  .user
    display flex
    align-items center
    padding-bottom 20px
    margin-bottom 20px
    border-bottom 1px solid #ccc
    img
      width 150px
      height 150px
      border-radius 50%
      margin-right 40px
    .userinfo
      .name
        font-size 22px
        margin-bottom 10px
      .access
        color #999
  .info
    p
      line-height 28px
      font-size 14px
      color #999
      span
        color #666
        margin-left 80px
  .rtop
    display flex
    flex-wrap wrap
    justify-content space-between
    .el-card
      width 32%
      margin-bottom 20px
    .icon
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    .detail
      margin-left 15px
      display flex
      flex-direction column
      justify-content center
      .num
        font-size: 30px;
        margin-bottom: 10px;
      .txt
        font-size: 14px;
        text-align: center;
        color: #999;
  .rbuttom
    display flex
    justify-content space-between
    .el-card
      width 48%
      margin-top 20px
</style>
