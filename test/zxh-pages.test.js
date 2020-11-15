const test = require('ava')
const zxhPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => zxhPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(zxhPages('w'), 'w@zce.me')
  t.is(zxhPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
