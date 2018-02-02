const test = require('ava');
const {h} = require('preact');

const mdToH = require('./mdToH.js');

test('Can convert markdown to preact vdom', t => {
  // Setup
  const markdown = `
Title goes here
===

# H1 goes here

- item1
- item2
- item3
`;

  const actual = mdToH(markdown, h);

  t.is(actual.nodeName, 'div');
  if (Array.isArray(actual.children)) {
    t.is(actual.children[0].nodeName, 'h1');
    t.is(actual.children[1], '\n');
    t.is(actual.children[2].nodeName, 'h1');
    t.is(actual.children[3], '\n');
    t.is(actual.children[4].nodeName, 'ul');
  }
});
