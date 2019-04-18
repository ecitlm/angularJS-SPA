/* global define */
define([], function () {
  'use strict'
  window.actCode = 'NGSPA_'
  return {
    set: function (key, value) {
      if (arguments.length < 2) throw new Error('arguments\'s length is less than two')
      var actCode = window.actCode || 'noActCode'
      var data = {}
      data['key'] = value
      console.log(window.userOpenId)
      window.sessionStorage.setItem(actCode + key, JSON.stringify(data))
    },
    get: function (key) {
      if (arguments.length < 1) throw new Error('arguments\'s length is less than one')
      var actCode = window.actCode || 'noActCode'
      var stringfyData = window.sessionStorage.getItem(actCode + key)
      if (stringfyData) {
        return JSON.parse(stringfyData)['key']
      } else {
        return null
      }
    },
    remove: function (key) {
      if (arguments.length < 1) throw new Error('arguments\'s length is less than one')
      var actCode = window.actCode || 'noActCode'
      window.localStorage.removeItem(actCode + key)
    }
  }
})
