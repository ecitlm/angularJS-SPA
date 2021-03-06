define([], function () {
  return {
    routes: {
      index: {
        url: '/index?id&name',
        templateUrl: 'views/index/index.html',
        controller: 'IndexController',
        title: '首页',
        auth: false,
        dependencies: 'views/index/index'
      },
      news: {
        url: '/news',
        templateUrl: 'views/news/news.html',
        controller: 'NewsController',
        title: 'news页面',
        auth: false,
        dependencies: 'views/news/news'
      },
      mine: {
        url: '/mine',
        templateUrl: 'views/mine/mine.html',
        controller: 'MineController',
        title: 'mine页面',
        auth: true,
        dependencies: 'views/mine/mine'
      },
      directive: {
        url: '/directive',
        templateUrl: 'views/common/directive.html',
        controller: 'DirectiveController',
        title: '指令以及组件',
        auth: true,
        dependencies: 'views/common/directive.js'
      }
    }
  };
});
