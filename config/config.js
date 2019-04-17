/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
var src = './src/'
var dest = './dist/src'

module.exports = {
  css: {
    all: src + '/css/**/*.css', // 所有scss
    src: src + '/css/*.css', // 需要编译的scss
    dest: dest + '/css' // 输出目录
  },
  images: {
    src: src + '/images/**/*.{png,jpg,gif,ico}',
    dest: dest + '/images'
  },
  js: {
    src: src + '/js/**/*',
    dest: dest + '/js',
    rev: dest + '/rev/js'
  },
  html: {
    src: './**/**/*.html',
    dest: './dist'
  },
  controllerJs: {
    src: './views/**/*.js',
    dest: './dist/views'
  },
  clean: {
    src: dest
  },
  rev: {
    revJson: dest + '/rev/**/*.json',
    src: '*.html', // root index.html
    dest: ''
  }
}
