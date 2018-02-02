const test = require('ava');

const assertEntryItem = require('../../../domain/model/EntryItem/assertEntryItem.js');

const mockClient = require('./mockClient.js');

const getEntryItems = require('./getEntryItems.js');

test.serial('Can get entry items.', async t => {
  const owner = 'rkaneko';
  const name = 'weblog';
  const expression = 'refs/heads/master';

  const actual = await getEntryItems(owner, name, expression, mockClient);

  actual.forEach(entryItem => {
    t.notThrows(() => assertEntryItem(entryItem));
  });
});
