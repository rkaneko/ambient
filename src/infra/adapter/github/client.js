const {ApolloClient} = require('apollo-client');
const {HttpLink} = require('apollo-link-http');
const {InMemoryCache} = require('apollo-cache-inmemory');


const client = new ApolloClient({
  'link': new HttpLink({'uri': 'https://api.github.com/graphql'}),
  'cache': new InMemoryCache()
});

module.exports = client;
