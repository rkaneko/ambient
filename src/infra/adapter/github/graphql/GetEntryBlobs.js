/* eslint-disable */
// This file was automatically generated and should not be edited.
// See src/infra/adapter/github/graphql/GetEntryBlobs.graphql.
module.exports = `
query GetEntryBlobs($owner: String!, $name: String!, $expression: String = "refs/heads/master") {
  repository(owner: $owner, name: $name) {
    object(expression: $expression) {
      ... CommitEntryTree
    }
  }
}
`;

