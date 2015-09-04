# grunt-angular-eha-fixtures

> Generates a fixture collections map

Turns a list of JSON files:

```shell
❯ tree fixtures
fixtures
└── my-collection.json
```

… into an Angular constant:

```js
angular.module('db', [])
  .constant('collections', {
    MY_COLLECTION: 'my-collection'
  });
```

## Usage

Add something like the following to your Gruntfile:

```js
ehaFixtures: {
  all: {
    options: {
      dest: '<%= yeoman.app %>/scripts/db.js'
    },
    files: [
      {
        expand: true,
        src: '<%= yeoman.app %>/scripts/fixtures/*.json'
      }
    ]
  }
}
```

… and run it:

```shell
❯ grunt ehaFixtures
```

## Options

* `dest`: path to write the Angular module (**required**)
* `moduleName`: Angular module name (default: `'db'`)

## Author

© 2015 Tom Vincent <tom.vincent@ehealthnigeria.org>

## License

Released under the Apache-2.0 license.
