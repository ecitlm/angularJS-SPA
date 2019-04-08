/* global define */
define([], function () {
  return {
    routes: {
      'index': {
        url: '/index',
        templateUrl: '../../views/tpls/index.html',
        controller: 'indexController',
        title: '首页',
        auth: false,
        dependencies: ['../../views/tpls/index']
      },
      'news': {
        url: '/news',
        templateUrl: '../../views/tpls/news.html',
        controller: 'newsController',
        title: 'news页面',
        auth: false,
        dependencies: ['../../views/tpls/news']
      },
      'mine': {
        url: '/mine',
        templateUrl: '../../views/tpls/mine.html',
        controller: 'mineController',
        title: 'mine页面',
        auth: false,
        dependencies: ['../../views/tpls/mine']
      }
    }
  }
})
