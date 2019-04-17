const gulp = require('gulp')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify')
const combiner = require('stream-combiner2')
const babel = require('gulp-babel')
const minifyCss = require('gulp-minify-css')
// const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const imagemin = require('gulp-imagemin')
const base64 = require('gulp-base64')
const gulpSync = require('gulp-sync')(gulp)
const config = require('./config/config')
// var concat = require('gulp-concat') // 合并文件 --合并只是放一起--压缩才会真正合并相同样式
const connect = require('gulp-connect')
const proxy = require('http-proxy-middleware')

/* 定义错误打印的方法 */
const handleError = function (err) {
  let colors = gutil.colors
  console.log('\n')
  gutil.log(colors.red('Error!'))
  gutil.log('fileName: ' + colors.red(err.fileName))
  gutil.log('lineNumber: ' + colors.red(err.lineNumber))
  gutil.log('message: ' + err.message)
  gutil.log('plugin: ' + colors.yellow(err.plugin))
}

//  打包src中 的JS
gulp.task('script', function () {
  let combined = combiner.obj([
    gulp.src(config.js.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    //.pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
    .pipe(connect.reload())
  ])
  combined.on('error', handleError) // 打印错误日志
})

// 打包views文件中的 JS
gulp.task('controllerJs', function () {
  let combined = combiner.obj([
    gulp.src(config.controllerJs.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.controllerJs.dest))
    .pipe(connect.reload())
  ])
  combined.on('error', handleError) // 打印错误日志
})

// minifyCss
gulp.task('css', function () {
  let combined = combiner.obj([
    gulp.src(config.css.src)
    .pipe(sass())
    .pipe(base64({
      maxImageSize: 4 * 1024 // bytes
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: false
    }))
    .pipe(minifyCss()) // 执行压缩
    .pipe(gulp.dest(config.css.dest)) // 将压缩的文件发布到新路
    .pipe(connect.reload())
  ])
  combined.on('error', handleError) // 打印错误日志
})

// 图片文件
gulp.task('images', function () {
  gulp.src(config.images.src)
    .pipe(imagemin({
      optimizationLevel: 5, // 类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, // 类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, // 类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true // 类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest(config.images.dest))
    .pipe(connect.reload())
})

// html
gulp.task('html', function () {
  gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
    .pipe(connect.reload())
})

gulp.task('clean', function (cb) {
  return gulp.src(['dist', 'rev'])
    .pipe(clean())
})

gulp.task('run', function () {
  connect.server({
    name: 'webServer',
    root: './dist',
    port: 9527,
    host: '0.0.0.0',
    livereload: true,
    middleware: function (connect, opt) {
      return [
        proxy('/api', {
          target: 'http://localhost:3000',
          changeOrigin: true
        })
      ]
    }
  })
  gulp.watch(config.css.src, ['css'])
  gulp.watch(config.js.src, ['script'])
  gulp.watch(config.images.src, ['images'])
  gulp.watch(config.html.src, ['html'])
})

gulp.task('default', gulpSync.async(['script', 'controllerJs', 'css', 'images', 'html']))
