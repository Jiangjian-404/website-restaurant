import Mock from "mockjs";
import homeApi from "./backhome.js";
import shopInfo from "./shopinfo.js";

//设置延时
Mock.setup({
  timeout: "200-2000"
});

//后台首页
Mock.mock(/\/home\/getData/, "get", homeApi.getHomeData);

//后台商品页
Mock.mock(/\/home\/getShopData/, "get", shopInfo.getshopData);

//首页
Mock.mock(/\/home\/getShopInfo/, "get", shopInfo.getshopData);

let userdata = [
  {
    username: "luoshifeng",
    password: "123456"
  },
  {
    username: "shouzhuab",
    password: "abcdef"
  }
];

//用户登录
Mock.mock(/\/checkUserData/, "post", options => {
  let username = JSON.parse(options.body).params.username;
  let password = JSON.parse(options.body).params.password;
  let success = false;
  userdata.findIndex(item => {
    if ((item.username === username) & (item.password === password)) {
      success = true;
    }
  });
  if (success) {
    return {
      status: 1,
      msg: "登陆成功"
    };
  } else {
    return {
      status: 0,
      msg: "用户名或密码错误"
    };
  }
});
