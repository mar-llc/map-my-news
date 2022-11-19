const gulp = require('gulp');
const gap = require('gulp-append-prepend');

gulp.task('licenses', async () => {
  // this is to add Mar LLC licenses in the production mode for the minified js
  gulp
    .src('build/static/js/*chunk.js', { base: './' })
    .pipe(
      gap.prependText(`/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Mar LLC (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Mar LLC

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Mar LLC licenses in the production mode for the minified html
  gulp
    .src('build/index.html', { base: './' })
    .pipe(
      gap.prependText(`<!--

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Mar LLC (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Mar LLC

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Mar LLC licenses in the production mode for the minified css
  gulp
    .src('build/static/css/*chunk.css', { base: './' })
    .pipe(
      gap.prependText(`/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Mar LLC (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Mar LLC

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));
});
