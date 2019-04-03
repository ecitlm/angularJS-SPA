/* global define */
define([], function () {
  return {
    routes: {
      'index': {
        url: '/index',
        templateUrl: '../../views/tpls/index.html',
        controller: 'ctrl.index',
        title: '首页',
        auth: false,
        dependencies: ['../../views/tpls/index']
      },
      'news': {
        url: '/news',
        templateUrl: '../../views/tpls/news.html',
        controller: 'ctrl.news',
        title: 'news页面',
        auth: false,
        dependencies: ['../../views/tpls/news']
      },
      'mine': {
        url: '/mine',
        templateUrl: '../../views/tpls/mine.html',
        controller: 'ctrl.mine',
        title: 'mine页面',
        auth: false,
        dependencies: ['../../views/tpls/mine']
      }
    }
  }
})
