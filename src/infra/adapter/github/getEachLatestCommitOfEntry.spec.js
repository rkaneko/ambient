const test = require('ava');

const mockClient = require('./mockClient.js');

const assertEntryCommit = require('../../../domain/model/EntryCommit/assertEntryCommit.js');

const getEachLatestCommitOfEntry = require('./getEachLatestCommitOfEntry.js');

test.serial('Can get each latest commit of entry.', async t => {
  const paths = ['contents/2016/12/17/notes_ui-router-for-react.md'];
  const options = {
    'owner': 'rkaneko',
    'name': 'weblog',
    'path': 'https://www.apollographql.com/docs/graphql-tools/resolvers.html'
  };
  const actual = await getEachLatestCommitOfEntry(paths, options, mockClient);
  Object.entries(actual).forEach(entry => {
    const [
      path,
      latestEntryCommit
    ] = entry;
    t.true(typeof path === 'string');
    t.notThrows(() => assertEntryCommit(latestEntryCommit));
  });
});
