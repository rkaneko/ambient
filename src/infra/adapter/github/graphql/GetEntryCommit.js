/* eslint-disable */
// This file was automatically generated and should not be edited.
// See src/infra/adapter/github/graphql/GetEntryCommit.graphql.
module.exports = `
query GetEntryCommit($owner: String!, $name: String!, $expression: String = "refs/heads/master", $path: String!) {
  repository(owner: $owner, name: $name) {
    object(expression: $expression) {
      ... EntryLatestCommit
    }
  }
}
`;

