<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <h3>管理中心</h3>
        <el-menu-item index="item.name" v-for="item in asideMenu" :key="item.name" @click="clickMenu(item)">
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: left; font-size: 12px">
        <el-button type="primary">新建商品</el-button>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="name" label="商品名称" width="140"> </el-table-column>
          <el-table-column prop="type" label="商品分类" width="120"> </el-table-column>
          <el-table-column prop="price" label="商品价格"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  computed: {
    listarr() {
      return this.$store.state.backshoplist.listarr;
    }
  },
  data() {
    return {
      addData: {
        name: "抹茶唤相思",
        type: "甜品",
        price: 20
      },
      tableData: [],
      asideMenu: [
        {
          name: "shopmanager",
          label: "商品管理"
        },
        {
          name: "usermanager",
          label: "用户管理"
        }
      ]
    };
  },
  methods: {
    getShopData() {
      var i;
      var j;
      var temp = [];
      var menudata = this.listarr;
      for (i = 0; i < menudata.length; i++) {
        for (j = 0; j < menudata[i].data.length; j++) {
          var add = {
            name: "豆奶",
            type: "饮料",
            price: 15
          };
          add.name = menudata[i].data[j].name;
          add.type = menudata[i].label;
          add.price = menudata[i].data[j].price;
          temp.push(add);
        }
      }
      this.tableData = temp;
    },
    handleEdit() {},
    handleDelete(val) {
      this.$store.commit("delete", this.tableData[val].name);
      this.getShopData();
    }
  },
  created() {
    this.getShopData();
  }
};
</script>

<style lang="stylus" scoped>
.el-aside
  color #333
  .el-menu
    h3
      color #666
      text-align center
      line-height 48px
    .el-menu-item
      text-align center
.el-header
  background-color #B3C0D1
  color #333
  line-height 60px
</style>
