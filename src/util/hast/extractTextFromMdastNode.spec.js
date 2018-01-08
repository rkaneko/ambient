const test = require('ava');

const extractTextFromMdastNode = require('./extractTextFromMdastNode.js');


test('Can extract text from mdast node', t => {
  const mdastNode = {
    'type': 'heading',
    'depth': 1,
    'children': [
      {
        'type': 'text',
        'value': 'Title ',
        'position': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 5
          }
        },
        'range': [
          0,
          5
        ],
        'raw': 'Title '
      },
      {
        'type': 'strong',
        'children': [
          {
            'type': 'text',
            'value': 'goes',
            'position': {
              'start': {
                'line': 1,
                'column': 7
              },
              'end': {
                'line': 1,
                'column': 11
              }
            },
            'range': [
              7,
              11
            ],
            'raw': 'goes'
          }
        ],
        'position': {
          'start': {
            'line': 1,
            'column': 5
          },
          'end': {
            'line': 1,
            'column': 13
          }
        },
        'range': [
          5,
          13
        ],
        'raw': '**goes**'
      },
      {
        'type': 'text',
        'value': ' here',
        'position': {
          'start': {
            'line': 1,
            'column': 13
          },
          'end': {
            'line': 1,
            'column': 18
          }
        },
        'range': [
          13,
          18
        ],
        'raw': ' here'
      }
    ],
    'position': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 2,
        'column': 3
      }
    },
    'range': [
      0,
      22
    ],
    'raw': 'Title **goes** here\n==='
  };
  const actual = extractTextFromMdastNode(mdastNode);

  t.is(actual, 'Title goes here');
});
