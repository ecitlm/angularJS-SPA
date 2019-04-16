/* global define */
define(['app'], function (app) {
  app.filter('test', function () {
    return function (params) {
      return params + 'filter运行成功 '
    }
  })
})
