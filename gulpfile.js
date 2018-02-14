var gulp = require('gulp');
var markdown = require('gulp-markdown');
var rename = require('gulp-rename');
var wrapper = require('gulp-wrapper');

gulp.task('default', function () {
    return gulp.src('README.md')
        .pipe(markdown({gfm:true}))
        .pipe(wrapper({
            header: `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Center Anything</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="keywords" content=""/>
        <meta name="description" content="This is auto-generated by sublime-custom-insert"/>
        <meta name="revised" value="yanni4night,2018/02/14"/>
        <link rel="stylesheet" href="./index.css" />
        <style type="text/css">
        </style>
    </head>
    <body class="markdown-body">
`,
            footer: `
    </body>
</html>
`
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'));
});
