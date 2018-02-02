/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type GetEntryBlobsQueryVariables = {|
  owner: string,
  name: string,
  expression?: ?string,
|};

export type GetEntryBlobsQuery = {|
  // Lookup a given repository by the owner and repository name.
  repository: ? {|
    // A Git object in the repository
    object: ?( {
        // Commit's root Tree
        tree: {|
          __typename: string,
          // A list of tree entries.
          entries: ? Array< {|
            // Entry file type.
            type: string,
            // Entry file name.
            name: string,
            // Entry file object.
            object: ?( {
                __typename: "Commit",
              } | {
                __typename: "Tree",
                // A list of tree entries.
                entries: ? Array< {|
                  // Entry file type.
                  type: string,
                  // Entry file name.
                  name: string,
                  // Entry file object.
                  object: ?( {
                      __typename: "Commit",
                    } | {
                      __typename: "Tree",
                      // A list of tree entries.
                      entries: ? Array< {|
                        // Entry file type.
                        type: string,
                        // Entry file name.
                        name: string,
                        // Entry file object.
                        object: ?( {
                            __typename: "Commit",
                          } | {
                            __typename: "Tree",
                            // A list of tree entries.
                            entries: ? Array< {|
                              // Entry file type.
                              type: string,
                              // Entry file name.
                              name: string,
                              // Entry file object.
                              object: ?( {
                                  __typename: "Commit",
                                } | {
                                  __typename: "Tree",
                                  // A list of tree entries.
                                  entries: ? Array< {|
                                    // Entry file type.
                                    type: string,
                                    // Entry file name.
                                    name: string,
                                    // Entry file object.
                                    object: ?( {
                                        __typename: "Commit",
                                      } | {
                                        __typename: "Tree",
                                      } | {
                                        __typename: "Blob",
                                        // The HTTP URL for this Git object
                                        commitUrl: any,
                                        // UTF8 text data or null if the Blob is binary
                                        text: ?string,
                                      } | {
                                        __typename: "Tag",
                                      }
                                    ),
                                  |} >,
                                } | {
                                  __typename: "Blob",
                                } | {
                                  __typename: "Tag",
                                }
                              ),
                            |} >,
                          } | {
                            __typename: "Blob",
                          } | {
                            __typename: "Tag",
                          }
                        ),
                      |} >,
                    } | {
                      __typename: "Blob",
                    } | {
                      __typename: "Tag",
                    }
                  ),
                |} >,
              } | {
                __typename: "Blob",
              } | {
                __typename: "Tag",
              }
            ),
          |} >,
        |},
      } | {
      } | {
      } | {
      }
    ),
  |},
|};

export type GetEntryCommitQueryVariables = {|
  owner: string,
  name: string,
  expression?: ?string,
  path: string,
|};

export type GetEntryCommitQuery = {|
  // Lookup a given repository by the owner and repository name.
  repository: ? {|
    // A Git object in the repository
    object: ?( {
        // The linear commit history starting from (and including) this commit, in the same order as `git log`.
        history: {|
          edges: ? Array<? {|
            // A cursor for use in pagination.
            cursor: string,
            // The item at the end of the edge.
            node: ? {|
              id: string,
              // Authorship details of the commit.
              author: ? {|
                // The GitHub user corresponding to the email field. Null if no such user exists.
                user: ? {|
                  id: string,
                |},
              |},
              // The datetime when this commit was committed.
              committedDate: any,
            |},
          |} >,
        |},
      } | {
      } | {
      } | {
      }
    ),
  |},
|};

export type EntryBlobFragment = {|
  // The HTTP URL for this Git object
  commitUrl: any,
  // UTF8 text data or null if the Blob is binary
  text: ?string,
|};

export type CommitEntryTreeFragment = {|
  // Commit's root Tree
  tree: {|
    __typename: string,
    // A list of tree entries.
    entries: ? Array< {|
      // Entry file type.
      type: string,
      // Entry file name.
      name: string,
      // Entry file object.
      object: ?( {
          __typename: "Commit",
        } | {
          __typename: "Tree",
          // A list of tree entries.
          entries: ? Array< {|
            // Entry file type.
            type: string,
            // Entry file name.
            name: string,
            // Entry file object.
            object: ?( {
                __typename: "Commit",
              } | {
                __typename: "Tree",
                // A list of tree entries.
                entries: ? Array< {|
                  // Entry file type.
                  type: string,
                  // Entry file name.
                  name: string,
                  // Entry file object.
                  object: ?( {
                      __typename: "Commit",
                    } | {
                      __typename: "Tree",
                      // A list of tree entries.
                      entries: ? Array< {|
                        // Entry file type.
                        type: string,
                        // Entry file name.
                        name: string,
                        // Entry file object.
                        object: ?( {
                            __typename: "Commit",
                          } | {
                            __typename: "Tree",
                            // A list of tree entries.
                            entries: ? Array< {|
                              // Entry file type.
                              type: string,
                              // Entry file name.
                              name: string,
                              // Entry file object.
                              object: ?( {
                                  __typename: "Commit",
                                } | {
                                  __typename: "Tree",
                                } | {
                                  __typename: "Blob",
                                  // The HTTP URL for this Git object
                                  commitUrl: any,
                                  // UTF8 text data or null if the Blob is binary
                                  text: ?string,
                                } | {
                                  __typename: "Tag",
                                }
                              ),
                            |} >,
                          } | {
                            __typename: "Blob",
                          } | {
                            __typename: "Tag",
                          }
                        ),
                      |} >,
                    } | {
                      __typename: "Blob",
                    } | {
                      __typename: "Tag",
                    }
                  ),
                |} >,
              } | {
                __typename: "Blob",
              } | {
                __typename: "Tag",
              }
            ),
          |} >,
        } | {
          __typename: "Blob",
        } | {
          __typename: "Tag",
        }
      ),
    |} >,
  |},
|};

export type EntryCommitFragment = {|
  id: string,
  // Authorship details of the commit.
  author: ? {|
    // The GitHub user corresponding to the email field. Null if no such user exists.
    user: ? {|
      id: string,
    |},
  |},
  // The datetime when this commit was committed.
  committedDate: any,
|};

export type EntryLatestCommitFragment = {|
  // The linear commit history starting from (and including) this commit, in the same order as `git log`.
  history: {|
    edges: ? Array<? {|
      // A cursor for use in pagination.
      cursor: string,
      // The item at the end of the edge.
      node: ? {|
        id: string,
        // Authorship details of the commit.
        author: ? {|
          // The GitHub user corresponding to the email field. Null if no such user exists.
          user: ? {|
            id: string,
          |},
        |},
        // The datetime when this commit was committed.
        committedDate: any,
      |},
    |} >,
  |},
|};

export type EntryTreeFragment = {|
  // A list of tree entries.
  entries: ? Array< {|
    // Entry file type.
    type: string,
    // Entry file name.
    name: string,
    // Entry file object.
    object: ?( {
        __typename: "Commit",
      } | {
        __typename: "Tree",
        // A list of tree entries.
        entries: ? Array< {|
          // Entry file type.
          type: string,
          // Entry file name.
          name: string,
          // Entry file object.
          object: ?( {
              __typename: "Commit",
            } | {
              __typename: "Tree",
              // A list of tree entries.
              entries: ? Array< {|
                // Entry file type.
                type: string,
                // Entry file name.
                name: string,
                // Entry file object.
                object: ?( {
                    __typename: "Commit",
                  } | {
                    __typename: "Tree",
                    // A list of tree entries.
                    entries: ? Array< {|
                      // Entry file type.
                      type: string,
                      // Entry file name.
                      name: string,
                      // Entry file object.
                      object: ?( {
                          __typename: "Commit",
                        } | {
                          __typename: "Tree",
                          // A list of tree entries.
                          entries: ? Array< {|
                            // Entry file type.
                            type: string,
                            // Entry file name.
                            name: string,
                            // Entry file object.
                            object: ?( {
                                __typename: "Commit",
                              } | {
                                __typename: "Tree",
                              } | {
                                __typename: "Blob",
                                // The HTTP URL for this Git object
                                commitUrl: any,
                                // UTF8 text data or null if the Blob is binary
                                text: ?string,
                              } | {
                                __typename: "Tag",
                              }
                            ),
                          |} >,
                        } | {
                          __typename: "Blob",
                        } | {
                          __typename: "Tag",
                        }
                      ),
                    |} >,
                  } | {
                    __typename: "Blob",
                  } | {
                    __typename: "Tag",
                  }
                ),
              |} >,
            } | {
              __typename: "Blob",
            } | {
              __typename: "Tag",
            }
          ),
        |} >,
      } | {
        __typename: "Blob",
      } | {
        __typename: "Tag",
      }
    ),
  |} >,
|};

export type UserFragment = {|
  // The GitHub user corresponding to the email field. Null if no such user exists.
  user: ? {|
    id: string,
    // The username used to login.
    login: string,
    // The user's public profile name.
    name: ?string,
  |},
|};