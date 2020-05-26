define(['app', 'axios'], function (app, axios) {
  app.service('$api', function () {
    var instance = axios.create({
      timeout: 60 * 1000
    });

    // 拦截器配置，用户token鉴权
    instance.interceptors.request.use(
      function (config) {
        config.headers.authorization = 'xxxxxx';
        return config;
      },
      function (error) {
        console.log('请求出错了...', error);
        return Promise.reject(error);
      }
    );

    // response拦截
    instance.interceptors.response.use(
      function (response) {
        // store.dispatch('hideLoading')
        console.log(response);
        if (response.status === 200) {
          return response.data;
        } else {
          var err = new Error();
          err.response = response;
          return Promise.reject(err);
        }
      },
      function (error) {
        console.log('%c 响应报错:', 'color:red', error.response);
        return Promise.reject(error);
      }
    );

    var httpRequest = function (url) {
      var data =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new Promise(function (resolve, reject) {
        instance
          .post(url, data)
          .then(function (res) {
            resolve(res);
          })
          .catch(function (error) {
            reject(error);
            console.log(error);
          });
      });
    };
    return {
      getNews: function () {
        // var data =
        //   arguments.length > 0 && arguments[0] !== undefined
        //     ? arguments[0]
        //     : {};
        return httpRequest.apply(
          undefined,
          ['http://www.runoob.com/try/angularjs/data/sites.php'].concat(
            Array.prototype.slice.call(arguments)
          )
        );
      }
    };
  });
});
