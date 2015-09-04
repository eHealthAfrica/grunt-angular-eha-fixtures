'use strict'

var path = require('path')
var constantCase = require('constant-case')

module.exports = function (files) {
  function pluckSrc (filePair) {
    return filePair.src[0]
  }

  function collate (object, src) {
    var basename = path.basename(src, '.json')
    var constant = constantCase(basename)
    object[constant] = basename
    return object
  }

  return files
    .map(pluckSrc)
    .reduce(collate, {})
}
