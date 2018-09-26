const gulp = require('gulp');
const uglify = require('gulp-uglify');
global.base = __dirname

gulp.task('uglify',function(){
    return gulp.src(base+'/src/test.js')
        .pipe(uglify())
        .pipe(gulp.dest(base+'/dist'))
});
//
//
// gulp.task('hello',()=>{
//    return console.log('hello');
// });
//
//
// gulp.task('world',['hello'],()=>{
//     return console.log('world');
// });
//
//
gulp.task('default',['uglify']);
