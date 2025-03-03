export default defineAppConfig({
  tabBar: {
    color: '#666666',
    selectedColor: '#4965f2',
    backgroundColor: '#fefefe',
    list: [
      {
        pagePath: 'pages/index/index',
        // iconPath: 'assets/tabbar/home.png',
        // selectedIconPath: 'assets/tabbar/home-selected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/profile/index',
        // iconPath: 'assets/tabbar/profile.png',
        // selectedIconPath: 'assets/tabbar/profile-selected.png',
        text: '我的',
      },
    ],
  },
  pages: [
    "pages/index/index", // 首页
    "pages/profile/index", // 我的
  ],
  subPackages: [
    {
      root: "pages/package-a",
      pages: [
        "login/index", //登录页
        "counter/index", // 计数页
      ],
    },
  ],
  window: {
    enablePullDownRefresh: true, // 默认开启下拉刷新
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "杭州数据交易所", // 默认导航栏标题
    navigationBarTextStyle: "black",
  },
  lazyCodeLoading: "requiredComponents"
});
