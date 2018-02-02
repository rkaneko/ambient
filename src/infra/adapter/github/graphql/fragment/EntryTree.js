/* eslint-disable */
// This file was automatically generated and should not be edited.
// See src/infra/adapter/github/graphql/fragment/EntryTree.graphql.
module.exports = `
fragment EntryTree on Tree {
  entries {
    type
    name
    object {
      __typename
      ... on Tree {
        entries {
          type
          name
          object {
            __typename
            ... on Tree {
              entries {
                type
                name
                object {
                  __typename
                  ... on Tree {
                    entries {
                      type
                      name
                      object {
                        __typename
                        ... on Tree {
                          entries {
                            type
                            name
                            object {
                              __typename
                              ... EntryBlob
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

