var gulp = require('gulp');
var sass = require('gulp-sass');
const tar  = require('gulp-tar');       // https://www.npmjs.com/package/gulp-tar
const gzip = require('gulp-gzip');      // https://www.npmjs.com/package/gulp-gzip

gulp.task('hello', () =>
  console.log('Hello world!')
);

gulp.task('sass', function(){
  return gulp.src('src/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', () =>
  gulp.src('dist/*')
    .pipe(tar('code.tar'))   // Pack all the files together
    .pipe(gzip())            // Compress the package using gzip
    .pipe(gulp.dest('.'))
);

gulp.task('default', ['hello', 'sass']);
gulp.task('deploy', ['hello', 'sass', 'compress']);

gulp.task('watch', ['hello', 'sass'], () => {
  gulp.watch('src/scss/*.scss', ['scss']);  // Keep watching for any changes in SCSS files and rerun the css task when so
  gulp.watch('src/js/*.js', ['es6']);       // Keep Watching for any changes in JS files and rerun the es6 task when so
});