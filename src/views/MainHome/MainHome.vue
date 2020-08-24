<template>
  <div class="main">
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item class="lsearch">
          <el-input type="input" v-model="formInline.shopname" placeholder="请输入商家或美食名称"></el-input>
        </el-form-item>
        <el-form-item class="rsearch">
          <el-button type="primary" @click="onSubmit"><i class="el-icon-search"></i></el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="block">
      <el-carousel height="250px">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img :src="item.image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="nav">
      <el-card shadow="hover" v-for="item in countData" :key="item.name">
        <img :src="item.img" />
        <div class="title">
          <p class="txt">{{ item.name }}</p>
        </div>
      </el-card>
    </div>
    <div class="shoplist">
      <div class="top">
        <i class="el-icon-s-shop"></i>
        <span>商家列表</span>
      </div>
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <li v-for="(item, index) in shopListData" class="list-item" :key="index" @click="toShopDetail(item)">
            <el-card shadow="hover" :body-style="{ display: 'flex', padding: 0 }">
              <img :src="item.img" />
              <div class="detail">
                <div class="line_1">
                  <p class="name">{{ item.name }}</p>
                  <i class="el-icon-more"></i>
                </div>
                <div class="line_2">
                  <div class="line_left">
                    <p class="score">{{ item.score }}分</p>
                    <p class="monthsale">月售{{ item.monthsale }}</p>
                  </div>
                  <div class="line_right">
                    <p class="sendtime">{{ item.sendtime }}分钟</p>
                    <p class="distance">{{ item.distance }}m</p>
                  </div>
                </div>
                <div class="line_3">
                  <p class="minsend">起送￥{{ item.minsend }}</p>
                  <p class="nightsend">夜间配送￥{{ item.nightsend }}</p>
                </div>
                <div class="line_4">
                  <p class="firstde">首单减{{ item.firstde }}</p>
                  <p class="activity">{{ item.actih }}减{{ item.actid }}</p>
                </div>
              </div>
            </el-card>
          </li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    noMore() {
      return this.count >= 5;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  data() {
    return {
      count: 0,
      loading: false,
      formInline: {
        shopname: ""
      },
      items: [
        {
          image: require("../../assets/images/nav/lunbo_1.jpg")
        },
        {
          image: require("../../assets/images/nav/lunbo_2.jpg")
        },
        {
          image: require("../../assets/images/nav/lunbo_3.jpg")
        },
        {
          image: require("../../assets/images/nav/lunbo_4.jpg")
        },
        {
          image: require("../../assets/images/nav/lunbo_5.jpg")
        },
        {
          image: require("../../assets/images/nav/lunbo_6.jpg")
        }
      ],
      countData: [
        {
          name: "甜品饮品",
          img: require("../../assets/images/nav/1.jpg")
        },
        {
          name: "商超便利",
          img: require("../../assets/images/nav/2.jpg")
        },
        {
          name: "美食",
          img: require("../../assets/images/nav/3.jpg")
        },
        {
          name: "简餐",
          img: require("../../assets/images/nav/4.jpg")
        },
        {
          name: "新店特惠",
          img: require("../../assets/images/nav/5.jpg")
        },
        {
          name: "准时达",
          img: require("../../assets/images/nav/6.jpg")
        },
        {
          name: "预订早餐",
          img: require("../../assets/images/nav/7.jpg")
        },
        {
          name: "土豪推荐",
          img: require("../../assets/images/nav/8.jpg")
        },
        {
          name: "夜宵",
          img: require("../../assets/images/nav/9.jpg")
        },
        {
          name: "烧烤海鲜",
          img: require("../../assets/images/nav/10.jpg")
        },
        {
          name: "深夜食堂",
          img: require("../../assets/images/nav/11.jpg")
        },
        {
          name: "品牌专送",
          img: require("../../assets/images/nav/12.jpg")
        }
      ],
      shopListData: [
        {
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
        {
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
        {
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
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 1;
        this.getMessage();
      }, 2000);
    },
    getMessage() {
      this.$http.get("/home/getShopInfo").then(res => {
        res = res.data;
        this.shopListData = this.shopListData.concat(res.shopData);
        this.loading = false;
      });
    },
    toShopDetail(item) {
      this.$store.commit("selectShop", item);
      this.$router.push("/shopdetail");
    },
    getShopInfo() {
      this.$http.get("/home/getShopInfo").then(res => {
        res = res.data;
        this.shopListData = res.shopData;
      });
    }
  },
  created() {
    this.getShopInfo();
  }
};
</script>

<style lang="stylus" scoped>
.main
  display flex
  flex-direction column
  align-items center
  justify-content center
  .search
    width 80%
    display flex
    align-items center
    justify-content center
    .el-form
      display flex
      align-items center
      justify-content center
      width 95%
      .lsearch
        width 90%
      .rsearch
        width 10%
  .block
    width 80%
    img
      width 100%
      height 100%
      border-radius 25px
  .nav
    width 80%
    display flex
    flex-wrap wrap
    justify-content space-between
    margin-top 25px
    .el-card
      width 25%
      img
        font-size: 30px
        width: 80px
        height: 80px
      .title
        display flex
        align-items center
        justify-content center
        .txt
          font-size: 14px
          text-align: center
          color: #999
          margin-bottom 15px
  .shoplist
    width 80%
    .top
      display flex
      margin-top 25px
      padding 15px 0
      background-color white
      i
        margin-left 15px
      span
        margin-left 15px
    .infinite-list-wrapper
      height 433px
      .el-card
        margin 10px 0
        img
          width 20%
          height 200px
          padding 5px
          border-radius 25px
        .detail
          width 80%
          height 200px
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
            i
              margin-right 15px
              font-size 25px
          .line_2
            height 25%
            display flex
            justify-content space-between
            align-items center
            .line_left
              display flex
              align-items center
              .score
                margin-left 15px
                color #ff6000
                font-size 19px
              .monthsale
                margin-left 20px
                font-size 19px
            .line_right
              display flex
              align-items center
              .sendtime
                margin-right 20px
                font-size 19px
              .distance
                margin-right 15px
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
</style>

<style lang="stylus">
.el-form--inline
  .el-form-item__content
    display flex
    align-items center
    justify-content center
    width 100%
.el-carousel__container
  margin-left 60px
  margin-right 100px
.nav
  .el-card__body
    display flex
    flex-direction column
    align-items center
    padding 0
</style>
