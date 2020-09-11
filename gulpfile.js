const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browsers = require('browserslist');

const path = {
    initial: {
        style: 'src/assets/styles/**/*.sass'
    },
    build: {
        style: 'src/assets/build/styles/'
    }
}

const styles = () => {
    let plugins = [
        autoprefixer(),
        cssnano()
    ];

    return gulp.src(path.initial.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(path.build.style));
}

exports.styles = styles;

const watch = () => {
    gulp.watch(path.initial.style, gulp.series(styles));
}

exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(
        styles,
        watch
    )
)