# npm-package-select
> Select files inside node_modules/ reading a configuration file.

This module allows the selection of certain files of a `npm-package`.
It can be used with [gulp](https://www.npmjs.com/package/gulp) to copy distribution files of packages to any destination you want.
A configuration file is used to specify all needed sources.

## Install

```
$ npm install --save-dev npm-package-select
```

## Usage
> Make sure that all configured packages are installed. `npm-package-select`  cannot download a missing package.

1. Create a `npmconfig.json` specifying all needed files. The path of each file is relative to the corresponding npm-package.

  **Example** The compiled source of  [requirejs](https://www.npmjs.com/package/requirejs) is located in `bin/r.js`. If you want to use requirejs you have to use the mentioned path before.

  ```json
  {
    "js": [{
      "requirejs": {
        "files": ["bin/r.js"]
      }
    }],
    "css": [{
      "semantic-ui-css": {
        "files": ["semantic.css"]
      }
    }]
  }
  ```

  In this sample `js` and `css` represent **groups**. Groups give the possibility to copy the specified sources into different destination directories.

2. Create a gulp task to copy the selected files to copy them to any destination.

  ```ts
  import {Gulpclass, Task, SequenceTask} from 'gulpclass/Decorators';
  import * as gulp from 'gulp';

  // Initialize npm-package-select
  let NpmPackageSelect = require('npm-package-select');
  let selection        = new NpmPackageSelect('./npmconfig.json');

  @Gulpclass()
  export class Gulpfile {

    @Task('default', ['link'])
    default() { }

    @Task()
    link(done: Function) {

      // Read all groups of npmconfig.json
      selection.groups().forEach(group => {

        // Read all packages of a group
        group.packages.forEach(p => {

          // Pipe files of the package to a specified destination
          gulp.src(p.files)
              .pipe(gulp.dest(`./content/assets/${group.name}/${p.name}`));
        })
      });

      done();
    }
  }
  ```
  > This gulp task is written with [gulpclass](https://www.npmjs.com/package/gulpclass).
