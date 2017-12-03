const test = require('ava');
const assertEntryItem = require('../../../../domain/model/EntryItem/assertEntryItem.js');

const GetEntryBlobs = require('../mock/GetEntryBlobs.json');

const contentsTreeToEntryItems = require('./contentsTreeToEntryItems.js');

test('Can convert contents tree to entry items.', t => {
  const contentsTree = GetEntryBlobs.data.repository.object.
    tree.entries.find(entry => entry.name === 'contents');

  t.true(typeof contentsTree === 'object');
  t.is(contentsTree.type, 'tree');

  const actual = contentsTreeToEntryItems(contentsTree);

  actual.forEach(entryItem => {
    t.notThrows(() => assertEntryItem(entryItem));
  });
});
