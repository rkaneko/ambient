/* eslint-disable */
// This file was automatically generated and should not be edited.
// See src/infra/adapter/github/graphql/fragment/EntryLatestCommit.graphql.
module.exports = `
fragment EntryLatestCommit on Commit {
  history(first: 1, path: $path) {
    edges {
      cursor
      node {
        ... EntryCommit
      }
    }
  }
}
`;

