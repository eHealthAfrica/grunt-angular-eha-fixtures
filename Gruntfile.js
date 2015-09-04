'use strict'

module.exports = function (grunt) {
  grunt.initConfig({
    ehaFixtures: {
      test: {
        options: {
          dest: 'test/output/db.js'
        },
        files: [
          {
            expand: true,
            src: 'test/fixtures/*.json'
          }
        ]
      }
    }
  })

  grunt.loadTasks('tasks')
}
