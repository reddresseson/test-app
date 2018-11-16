var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('build', function() {
    return gulp.src(['src/utils.js', 'src/app.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('build'));
})