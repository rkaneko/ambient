const test = require('ava');

const splitext = require('./splitext.js');

test('Can splitext.', t => {
  const specs = [
    {
      'args': {'path': 'foo.txt'},
      'expected': {
        'result': [
          'foo',
          'txt'
        ]
      }
    },
    {
      'args': {'path': 'foo'},
      'expected': {
        'result': [
          'foo',
          ''
        ]
      }
    }
  ];

  specs.forEach(spec => {
    const actual = splitext(spec.args.path);
    t.deepEqual(actual, spec.expected.result);
  });
});
