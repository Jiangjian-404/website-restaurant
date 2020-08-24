import Mock from "mockjs";

// 图表数据
let List = [];
export default {
  getHomeData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          甜品: Mock.Random.float(100, 8000, 0, 2),
          主食: Mock.Random.float(100, 8000, 0, 2),
          小吃: Mock.Random.float(100, 8000, 0, 2),
          饮料: Mock.Random.float(100, 8000, 0, 2),
          套餐: Mock.Random.float(100, 8000, 0, 2),
          水果: Mock.Random.float(100, 8000, 0, 2)
        })
      );
    }
    return {
      code: 20000,
      data: {
        // 饼图
        shopData: [
          {
            name: "甜品",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "主食",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "小吃",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "饮料",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "套餐",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "水果",
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: "周一",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周二",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周三",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周四",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周五",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周六",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周日",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: ["20191001", "20191002", "20191003", "20191004", "20191005", "20191006", "20191007"],
          data: List
        },
        tableData: [
          {
            name: "甜品",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "主食",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "小吃",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "饮料",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "套餐",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "水果",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    };
  }
};
