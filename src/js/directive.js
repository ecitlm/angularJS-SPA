/* global define */
define(['app'], function (app) {
  app.directive('test', function () {
    return {
      restrict: 'AECM',
      replace: true,
      template: function (elements, attrs) {
        var html = ''
        html += '<div>' + attrs.name + '</div>'
        return html
      }
    }
  })
})
