const MockGetEntryBlobs = require('./mock/GetEntryBlobs.json');
const MockGetEntryCommit = require('./mock/GetEntryCommit.json');

/**
 * @see {@link https://www.apollographql.com/docs/graphql-tools/resolvers.html}
 */
const mocks = {
  'URI': () => 'https://github.com/blahblah/mock',
  'Query': () => ({
    'repository': (obj, args, _, info) => {
      const operationName = info.operation.name.value;
      if (operationName === 'GetEntryBlobs') {
        return MockGetEntryBlobs.data.repository;
      } else if (operationName === 'GetEntryCommit') {
        return MockGetEntryCommit.data.repository;
      }
    }
  }),
  'GitObject': obj => {
    if (obj.type === 'tree') {
      return {'__typename': 'Tree'};
    } else if (obj.type === 'blob') {
      return {'__typename': 'Blob'};
    }
    if (obj.object.tree || obj.object.history) {
      return {'__typename': 'Commit'};
    }
    if (obj.entries) {
      return {'__typename': 'Tree'};
    } else if (obj.text) {
      return {'__typename': 'Blob'};
    } else if (obj.tagger) {
      return {'__typename': 'Tag'};
    }
    return {'__typename': 'GitObject'};
  }
};

module.exports = mocks;
