/**
 * type : 1 父菜单 2 菜单可点击跳转路由 3 其他路由 不显示在左侧菜单
 * id : 唯一标识符 ， 字符串String name 左测菜单名称
 */

const menus = [
  {
    name: "首页",
    id: "0",
    type: 2,
    path: "/main/welcome",
    icon: "HomeFilled",
  },

 {
    name:"unocss",
    id:"12",
    type:2,
    icon:"HomeFilled",
    path:"/main/unocss/unocss"
  },

 {
    name:"vitest",
    id:"71",
    type:2,
    icon:"HomeFilled",
    path:"/main/vitest/vitest"
  },
];
export { menus };
