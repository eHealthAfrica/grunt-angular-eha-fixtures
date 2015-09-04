'use strict'

var collate = require('../lib/collate')

module.exports = function (grunt) {
  function writeFixtures () {
    var options = this.options({
      dest: '',
      moduleName: 'db'
    })

    var collections = collate(this.files)

    if (options.dest) {
      grunt.config('ngconstant.fixtures', {
        options: {
          name: options.moduleName,
          dest: options.dest,
          values: {},
          constants: {}
        },
        constants: {
          collections: collections
        }
      })

      grunt.task.run('ngconstant:fixtures')
    }
  }

  grunt.loadNpmTasks('grunt-ng-constant')
  grunt.registerMultiTask('ehaFixtures', 'Write fixtures', writeFixtures)
}
