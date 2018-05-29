var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');






var paths = {
  sass: {
    src: './scss/**/*.{scss,sass}',
    dest: './',
    opts: {

    }
  },
    js: {
    src: './js/**/*.js',
    dest: './',
    opts: {

    }
  },
  dirs: {base: "./"}

};

// ---------------------------------------------- Gulp Tasks
gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream());
});


gulp.task('js', function () {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
});

// ------------------------------------ Gulp Testing Message
gulp.task('message', function(){
  console.log('It works!!');
});

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});
gulp.task('watch:js', function () {
  gulp.watch(paths.js.src, gulp.series('js'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles', 'watch:js')
));



gulp.task('ws', function(cb) {
  browserSync({
    server: {
      baseDir: paths.dirs.base
    },
    port: 3000,
    notify: false,
    open: false
  }, cb);

  gulp.watch("./*.html").on('change', browserSync.reload);
});


// -------------------------------------------- Default task
gulp.task('default', gulp.series('sass', 
  gulp.parallel('message', 'watch', 'ws')
));