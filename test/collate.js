'use strict'

var test = require('tape')
var collate = require('../lib/collate')

test('collate', function (t) {
  var files = [
    {
      src: [
        '/some/path/deep-kick.json'
      ]
    },
    {
      src: [
        'tickySnare.json'
      ]
    },
    {
      src: [
        '/more/paths/tinny_hi_hat.json'
      ]
    }
  ]

  var expected = {
    DEEP_KICK: 'deep-kick',
    TICKY_SNARE: 'tickySnare',
    TINNY_HI_HAT: 'tinny_hi_hat'
  }

  var actual = collate(files)
  t.deepEqual(actual, expected)
  t.end()
})
