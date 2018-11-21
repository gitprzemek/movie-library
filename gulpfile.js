
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('./scripts/main.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest('./script'))
);
// gulp.task("default", ["es6"], function() {
//     gulp.watch("./scripts/main.js", ["es6"])
// });

