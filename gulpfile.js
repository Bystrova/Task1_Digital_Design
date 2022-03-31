const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require("gulp-concat");

const styles = () => {
	return gulp.src("./scss/**/*.scss")
		.pipe(concat("style.scss"))
		.pipe(sass())
		.pipe(gulp.dest("./css"))
}

exports.styles = styles;

const watcher = () => {
	gulp.watch("scss/**/*.scss", gulp.series("styles"));
}

exports.watcher = watcher;