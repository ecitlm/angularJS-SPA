/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
var src = './src/'
var dest = './dist/src'

module.exports = {
  css: {
    src: src + '/css/*.*',
    dest: dest + '/css'
  },
  images: {
    src: src + '/images/**/*.{png,jpg,gif,ico}',
    dest: dest + '/images'
  },
  js: {
    src: src + '/js/**/*',
    dest: dest + '/js'
  },
  html: {
    src: './views/**/*.html',
    dest: './dist/views'
  },
  controllerJs: {
    src: './views/**/*.js',
    dest: './dist/views'
  },
  entryHtml: {
    src: './*.html',
    dest: './dist'
  },
  entryJs: {
    src: './main.js',
    dest: './dist'
  },

  clean: {
    src: dest
  }
}
