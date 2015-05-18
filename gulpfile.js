var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglifyify = require('uglifyify');

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: ['./js/app.js'],
    debug: true,
    cache: {}, packageCache: {}
  });

  bundler.transform(reactify);

  var watcher = watchify(bundler);

  return watcher
  .on('update', function () {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle() // Create new bundle that uses the cache for high performance
      .pipe(source('./bundle.js'))
      .pipe(gulp.dest('./build'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  .bundle()
  .pipe(source('./bundle.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('lint', function () {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('compress', function () {
  var bundler = browserify({ debug: false })

  bundler
    .add('./build/bundle.js')
    .transform({ sourcemap: false }, 'uglifyify')
    .bundle()
    .pipe(source('./bundle.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify']);