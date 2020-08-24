import Mock from "mockjs";

export default {
  getshopData: () => {
    return {
      code: 2000,
      shopData: [
        {
          img: require("../assets/images/shoplist/1.jpg"),
          name: "一品香柳州螺蛳粉",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "原味螺蛳粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋螺蛳粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "牛腩螺蛳粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "叉烧螺蛳粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "桂林米粉",
              data: [
                {
                  name: "原味桂林米粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "干捞桂林米粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "卤蛋桂林米粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "火腿肠桂林米粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "加菜",
              data: [
                {
                  name: "青菜",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "青菜",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "酸笋",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "笋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "花生",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "花生",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "煎蛋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料",
              data: [
                {
                  name: "菠萝啤",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "豆奶",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "水",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/2.jpg"),
          name: "手抓饼烤冷面",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "手抓饼+烤冷面+可乐",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "手抓饼+鸡蛋鸡柳",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "双蛋烤冷面+火腿肠",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋2个，火腿肠",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "1号套餐:手抓饼+烤冷面",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "手抓饼鸡蛋培根+烤冷面",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+热狗",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，热狗",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "烤冷面",
              data: [
                {
                  name: "烤冷面+鸡柳+芝士",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "冷面1张，鸡蛋1个，芝士",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+火腿肠+培根",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋一个，火腿肠，培根",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面 +金针菇",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "鸡蛋，金针菇，葱花",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+海草",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，海草",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "手抓饼",
              data: [
                {
                  name: "手抓饼全家福",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+培根+芝士",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+鸡柳+芝士",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+培根+芝士+牛扒",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料饮品",
              data: [
                {
                  name: "中杯雪碧",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "咸柠七",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/1.jpg"),
          name: "一品香柳州螺蛳粉",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "原味螺蛳粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋螺蛳粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "牛腩螺蛳粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "叉烧螺蛳粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "桂林米粉",
              data: [
                {
                  name: "原味桂林米粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "干捞桂林米粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "卤蛋桂林米粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "火腿肠桂林米粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "加菜",
              data: [
                {
                  name: "青菜",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "青菜",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "酸笋",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "笋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "花生",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "花生",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "煎蛋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料",
              data: [
                {
                  name: "菠萝啤",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "豆奶",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "水",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/2.jpg"),
          name: "手抓饼烤冷面",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "手抓饼+烤冷面+可乐",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "手抓饼+鸡蛋鸡柳",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "双蛋烤冷面+火腿肠",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋2个，火腿肠",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "1号套餐:手抓饼+烤冷面",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "手抓饼鸡蛋培根+烤冷面",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+热狗",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，热狗",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "烤冷面",
              data: [
                {
                  name: "烤冷面+鸡柳+芝士",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "冷面1张，鸡蛋1个，芝士",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+火腿肠+培根",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋一个，火腿肠，培根",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面 +金针菇",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "鸡蛋，金针菇，葱花",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+海草",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，海草",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "手抓饼",
              data: [
                {
                  name: "手抓饼全家福",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+培根+芝士",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+鸡柳+芝士",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+培根+芝士+牛扒",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料饮品",
              data: [
                {
                  name: "中杯雪碧",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "咸柠七",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/1.jpg"),
          name: "一品香柳州螺蛳粉",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "原味螺蛳粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋螺蛳粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "牛腩螺蛳粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "叉烧螺蛳粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "桂林米粉",
              data: [
                {
                  name: "原味桂林米粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "干捞桂林米粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "卤蛋桂林米粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "火腿肠桂林米粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "加菜",
              data: [
                {
                  name: "青菜",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "青菜",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "酸笋",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "笋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "花生",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "花生",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "煎蛋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料",
              data: [
                {
                  name: "菠萝啤",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "豆奶",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "水",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/2.jpg"),
          name: "手抓饼烤冷面",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "手抓饼+烤冷面+可乐",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "手抓饼+鸡蛋鸡柳",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "双蛋烤冷面+火腿肠",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋2个，火腿肠",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "1号套餐:手抓饼+烤冷面",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "手抓饼鸡蛋培根+烤冷面",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+热狗",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，热狗",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "烤冷面",
              data: [
                {
                  name: "烤冷面+鸡柳+芝士",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "冷面1张，鸡蛋1个，芝士",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+火腿肠+培根",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋一个，火腿肠，培根",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面 +金针菇",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "鸡蛋，金针菇，葱花",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+海草",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，海草",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "手抓饼",
              data: [
                {
                  name: "手抓饼全家福",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+培根+芝士",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+鸡柳+芝士",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+培根+芝士+牛扒",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料饮品",
              data: [
                {
                  name: "中杯雪碧",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "咸柠七",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/1.jpg"),
          name: "一品香柳州螺蛳粉",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "原味螺蛳粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋螺蛳粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "牛腩螺蛳粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "叉烧螺蛳粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "桂林米粉",
              data: [
                {
                  name: "原味桂林米粉",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "干捞桂林米粉",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "卤蛋桂林米粉",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "火腿肠桂林米粉",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "米粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "加菜",
              data: [
                {
                  name: "青菜",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "青菜",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "酸笋",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "笋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "花生",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "花生",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "煎蛋",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "煎蛋",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料",
              data: [
                {
                  name: "菠萝啤",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "豆奶",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "水",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        },
        {
          img: require("../assets/images/shoplist/2.jpg"),
          name: "手抓饼烤冷面",
          score: Mock.Random.float(3, 5, 1, 1),
          monthsale: Mock.Random.float(100, 1000, 0, 0),
          sendtime: Mock.Random.float(20, 70, 0, 0),
          distance: Mock.Random.float(500, 999, 0, 0),
          minsend: Mock.Random.float(15, 50, 0, 0),
          nightsend: Mock.Random.float(1, 5, 0, 0),
          firstde: Mock.Random.float(10, 20, 0, 0),
          actih: Mock.Random.float(50, 80, 0, 0),
          actid: Mock.Random.float(5, 10, 0, 0),
          menuData: [
            {
              label: "热销",
              data: [
                {
                  name: "手抓饼+烤冷面+可乐",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "手抓饼+鸡蛋鸡柳",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "双蛋烤冷面+火腿肠",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋2个，火腿肠",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "1号套餐:手抓饼+烤冷面",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "手抓饼鸡蛋培根+烤冷面",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+热狗",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，热狗",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "烤冷面",
              data: [
                {
                  name: "烤冷面+鸡柳+芝士",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "冷面1张，鸡蛋1个，芝士",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+火腿肠+培根",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "冷面1张，鸡蛋一个，火腿肠，培根",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面 +金针菇",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "鸡蛋，金针菇，葱花",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "烤冷面+海草",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "冷面1张，鸡蛋，海草",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "手抓饼",
              data: [
                {
                  name: "手抓饼全家福",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+培根+芝士",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+鸡蛋+鸡柳+芝士",
                  img: require("../assets/images/shoplist/3.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "手抓饼+培根+芝士+牛扒",
                  img: require("../assets/images/shoplist/4.jpg"),
                  material: "面粉",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            },
            {
              label: "饮料饮品",
              data: [
                {
                  name: "中杯雪碧",
                  img: require("../assets/images/shoplist/2.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                },
                {
                  name: "咸柠七",
                  img: require("../assets/images/shoplist/1.jpg"),
                  material: "其他",
                  monthsale: Mock.Random.float(0, 15, 0, 0),
                  price: Mock.Random.float(8, 25, 0, 0)
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
