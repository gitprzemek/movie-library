var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function() {
    return gulp.src("./scripts/main.js")
    .pipe(babel({
        presets: ["es2017"]
    }))
    .pipe(gulp.dest("./script"))

});
// gulp.task("default", ["es6"], function() {
//     gulp.watch("./scripts/main.js", ["es6"])
// });

// var gulp = require("gulp");
// var babel = require("gulp-babel");

// gulp.task("default", function () {
//   return gulp.src("./scripts/main.js")
//     .pipe(babel({
//         presets: ["@babel/preset-es2017"]
//     }))
//     .pipe(gulp.dest("./script"));
// });