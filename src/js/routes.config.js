/* global define */
define([], function () {
  return {
    routes: {
      'index': {
        url: '/index?id',
        templateUrl: 'views/index/index.html',
        controller: 'IndexController',
        title: '首页',
        auth: false,
        dependencies: ['views/index/index']
      },
      'news': {
        url: '/news',
        templateUrl: 'views/news/news.html',
        controller: 'NewsController',
        title: 'news页面',
        auth: false,
        dependencies: ['views/news/news']
      },
      'mine': {
        url: '/mine',
        templateUrl: 'views/mine/mine.html',
        controller: 'MineController',
        title: 'mine页面',
        auth: true,
        dependencies: ['views/mine/mine']
      }
    }
  }
})
