// This will be replaced when the following merge request is merged.
// See also: https://github.com/apollographql/apollo-link/pull/227

const {
  ApolloLink,
  Observable
} = require('apollo-link');
const {print} = require('graphql/language/printer');
const {graphql} = require('graphql');

class LocalLink extends ApolloLink {
  constructor(params) {
    super();
    this.schema = params.schema;
    this.rootValue = params.rootValue;
    this.context = params.context;
  }

  request(operation) {
    const request = {
      ...operation,
      'query': print(operation.query)
    };

    return new Observable(observer => {
      graphql(this.schema, request.query, this.rootValue, this.context, request.variables, request.operationName).
        then(data => {
          if (!observer.closed) {
            observer.next(data);
            observer.complete();
          }
          return null;
        }).
        catch(err => {
          if (!observer.closed) {
            observer.error(err);
          }
        });
    });
  }
}

module.exports = LocalLink;
