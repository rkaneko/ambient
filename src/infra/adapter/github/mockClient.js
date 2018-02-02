require('isomorphic-fetch');
const {ApolloClient} = require('apollo-client');
const {
  InMemoryCache,
  IntrospectionFragmentMatcher
} = require('apollo-cache-inmemory');

const LocalLink = require('../../graphql/LocalLink.js');

const mockSchema = require('./mockSchema.js');

const fragmentMatcher = new IntrospectionFragmentMatcher({
  'introspectionQueryResultData': {
    '__schema': {
      'types': [
        {
          'kind': 'INTERFACE',
          'name': 'GitObject',
          'possibleTypes': [
            {'name': 'Commit'},
            {'name': 'Tree'},
            {'name': 'Blob'},
            {'name': 'Tag'}
          ]
        }
      ]
    }
  }
});

const mockClient = new ApolloClient({
  'link': new LocalLink({'schema': mockSchema}),
  'cache': new InMemoryCache({fragmentMatcher})
});

module.exports = mockClient;
