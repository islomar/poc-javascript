var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', () =>
  console.log('Hello world!')
);

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['hello', 'sass']);

gulp.task('watch', ['hello', 'sass'], () => {
  gulp.watch('app/scss/*.scss', ['scss']);  // Keep watching for any changes in SCSS files and rerun the css task when so
  gulp.watch('app/js/*.js', ['es6']);       // Keep Watching for any changes in JS files and rerun the es6 task when so
});