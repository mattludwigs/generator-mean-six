var gulp = require("gulp"),
		babel = require("gulp-babel"),
		uglify = require("gulp-uglify"),
		ngAnnotate = require("gulp-ng-annotate"),
		browserify = require("browserify"),
		babelify = require("babelify"),
		source = require("vinyl-source-stream"),
		buffer = require("vinyl-buffer"),
		sass = require("gulp-sass"),
		nodemon = require("gulp-nodemon");

function makeBundle() {
	return browserify({
		entries: "./src/client/js/app.js",
		debug: true,
		transform: [babelify]
	});
}

gulp.task("build:server:dev", function () {
	gulp.src("./src/server/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("./out/server/"));
});

gulp.task("build:client:js:dev", function () {
	return makeBundle()
		.bundle()
		.pipe(source("./app.js"))
		.pipe(ngAnnotate())
		.pipe(buffer())
		.pipe(gulp.dest("./out/client/js/"));
});

gulp.task("build:lib", function () {
	gulp.src([
		"./node_modules/bootstrap/dist/css/bootstrap.min.css",
		"./node_modules/font-awesome/css/font-awesome.min.css",
		"./node_modules/angular/angular.min.js"
	])
		.pipe(gulp.dest("./out/client/lib"));
});

gulp.task("move:html", function () {
	gulp.src("./src/client/**/*.html")
		.pipe(gulp.dest("./out/client/"));
});

gulp.task("build:client:css", function () {
	gulp.src("./src/client/css/all.scss")
		.pipe(sass())
		.pipe(gulp.dest("./out/client/css"));
});

gulp.task("dev", [
	"move:html",
	"build:lib",
	"build:client:css",
	"build:server:dev",
	"build:client:js:dev"],

	function () {

		gulp.watch("./src/server/**/*.js", ["build:server:dev"]);
		gulp.watch("./src/client/js/**/*.js", ["build:client:js:dev"]);
		gulp.watch("./src/client/css/**/*.scss", ["build:client:css"]);
		gulp.watch("./src/client/**/*.html", ["move:html"]);

		nodemon({
			script: "./out/server/index.js"
		});

});

