<template>
  <div class="shopdetail">
    <div class="top">
      <el-card shadow="hover" :body-style="{ display: 'flex', padding: 0 }">
        <div class="detail">
          <div class="line_1">
            <p class="name">{{ allData.name }}</p>
          </div>
          <div class="line_2">
            <div class="line_left">
              <p class="fengniao">蜂鸟专送</p>
              <p class="sendtime">约{{ allData.sendtime }}分钟</p>
              <p class="monthsale">月售{{ allData.monthsale }}</p>
            </div>
          </div>
          <div class="line_3">
            <p class="minsend">起送￥{{ allData.minsend }}</p>
            <p class="nightsend">夜间配送￥{{ allData.nightsend }}</p>
          </div>
          <div class="line_4">
            <p class="firstde">首单减{{ allData.firstde }}</p>
            <p class="activity">{{ allData.actih }}减{{ allData.actid }}</p>
          </div>
        </div>
        <img :src="allData.img" />
      </el-card>
    </div>
    <div class="buttom">
      <div class="title">
        <span>点餐</span>
      </div>
      <div class="shoplist">
        <el-row>
          <el-col :span="4">
            <div class="menu">
              <el-menu default-active="热销">
                <el-menu-item :index="item.label" v-for="item in allData.menuData" :key="item.label" @click="clickMenu(item)">
                  <span slot="title">{{ item.label }}</span>
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="shop">
              <div class="shoptype">
                <span>{{ currMenu.label }}</span>
              </div>
              <div class="typelist">
                <el-card shadow="hover" :body-style="{ display: 'flex', padding: 0 }" v-for="item in currMenu.data" :key="item.name">
                  <img :src="item.img" />
                  <div class="typelistdetail">
                    <div class="line_1">
                      <p class="name">{{ item.name }}</p>
                    </div>
                    <div class="line_2">
                      <p class="material">主要原料:{{ item.material }}</p>
                    </div>
                    <div class="line_3">
                      <p class="monthsale">月售{{ item.monthsale }}</p>
                    </div>
                    <div class="line_4">
                      <p class="price">￥{{ item.price }}</p>
                      <i class="el-icon-circle-plus"></i>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allData() {
      return this.$store.state.shopdetail.shopIntroduce;
    }
  },
  data() {
    return {
      currMenu: {
        label: "热销"
      },
      shopListData: {
        img: require("../../assets/images/shoplist/1.jpg"),
        name: "一品香柳州螺蛳粉",
        score: 4.6,
        monthsale: 1232,
        sendtime: 48,
        distance: 710,
        minsend: 20,
        nightsend: 5,
        firstde: 15,
        actih: 50,
        actid: 3
      },
      asideMenu: [
        {
          name: "hotsale",
          label: "热销"
        },
        {
          name: "usermanager",
          label: "特色招牌"
        },
        {
          name: "rest",
          label: "小吃"
        },
        {
          name: "fruit",
          label: "水果"
        }
      ],
      hotSaleData: [
        {
          name: "炒米粉",
          img: require("../../assets/images/shoplist/2.jpg"),
          material: "米粉",
          monthsale: 4,
          price: 15
        },
        {
          name: "清蒸小龙虾",
          img: require("../../assets/images/shoplist/1.jpg"),
          material: "小龙虾",
          monthsale: 2,
          price: 45
        },
        {
          name: "炒面",
          img: require("../../assets/images/shoplist/3.jpg"),
          material: "挂面",
          monthsale: 4,
          price: 15
        },
        {
          name: "雪碧",
          img: require("../../assets/images/shoplist/4.jpg"),
          material: "雪碧",
          monthsale: 10,
          price: 5
        }
      ],
      menuDetail: []
    };
  },
  methods: {
    clickMenu(item) {
      this.currMenu = item;
    },
    searchhot() {
      var hotsaleindex = this.allData.menuData.findIndex(item => {
        if (item.label == "热销") {
          return true;
        }
      });
      this.currMenu = this.allData.menuData[hotsaleindex];
    }
  },
  created() {
    this.searchhot();
  }
};
</script>

<style lang="stylus" scoped>
.shopdetail
  display flex
  flex-direction column
  align-items center
  justify-content center
  .top
    width 65%
    .el-card
        margin 10px 0
        border-radius 15px
        img
          width 15%
          height 150px
          padding 5px
          margin 18px
          border-radius 25px
        .detail
          width 80%
          height 250px
          display flex
          flex-direction column
          .line_1
            height 25%
            display flex
            justify-content space-between
            align-items center
            .name
              color #333
              font-size 25px
              font-weight 700
              margin-left 15px
          .line_2
            height 25%
            display flex
            justify-content space-between
            align-items center
            .line_left
              display flex
              align-items center
              .fengniao
                margin-left 15px
                padding 5px
                background-color #0099FF
                color #0000CC
                border 1px solid white
                border-radius 8px
                font-size 17px
              .sendtime
                margin-left 20px
                font-size 19px
              .monthsale
                margin-left 20px
                font-size 19px
          .line_3
            height 25%
            display flex
            align-items center
            .minsend
              margin-left 15px
              font-size 19px
            .nightsend
              margin-left 20px
              font-size 19px
          .line_4
            height 25%
            display flex
            align-items center
            .firstde
              font-size 15px
              color #fff
              border 1px solid #ff6000
              border-radius 8px
              background-color #ff6000
              margin-left 15px
              padding 5px
            .activity
              font-size 15px
              border 1px solid #ff6000
              border-radius 8px
              background-color white
              margin-left 20px
              padding 5px
  .buttom
    width 65%
    .title
      margin-top 25px
      padding 15px 0
      background-color white
      span
        margin-left 20px
    .shoplist
      margin-top 10px
      .shop
        .shoptype
          padding 15px 0
          background-color white
          span
            margin-left 20px
        .typelist
          .el-card
            img
              width 15%
              height 75px
              margin 10px
              border-radius 8px
            .typelistdetail
              width 80%
              height 100px
              display flex
              flex-direction column
              .line_1
                height 25%
                display flex
                align-items center
                margin-left 10px
                font-size 17px
                font-weight 700
              .line_2
                height 25%
                display flex
                align-items center
                margin-left 10px
                font-size 15px
                color #666
              .line_3
                height 25%
                display flex
                align-items center
                margin-left 10px
                font-size 15px
                color #666
              .line_4
                height 25%
                display flex
                align-items center
                justify-content space-between
                .price
                  margin-left 10px
                  font-size 15px
                  color #ff6000
                i
                  font-size 22px
                  margin-right 15px
                  margin-bottom 5px
</style>
