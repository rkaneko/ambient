const test = require('ava');

const increment = require('./blahblah.js');

test.serial('Increment number', t => {
  const actual = increment(1);

  t.is(actual, 2);
});
