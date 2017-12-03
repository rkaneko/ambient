// @flow

import type {
  EntryCommit
} from '../../../domain/model/EntryCommit/EntryCommit.js';

import gql from 'graphql-tag';

const client = require('./client.js');
const repositoryCommitToEntryCommit = require('./converter/repositoryCommitToEntryCommit.js');

const GetEntryCommitQuery = require('./graphql/GetEntryCommit.js');
const EntryLatestCommitFragment = require('./graphql/fragment/EntryLatestCommit.js');
const EntryCommitFragment = require('./graphql/fragment/EntryCommit.js');

const query = gql`
${GetEntryCommitQuery}
${EntryLatestCommitFragment}
${EntryCommitFragment}
`;

type EntryCommitOptions = {
  owner: string,
  name: string,
  expression?: string,
};

const defaultOptions = {'expression': 'refs/heads/master'};

type PathLatestCommit = {
  [path: string]: EntryCommit,
};

function getEachLatestCommitOfEntry(
  paths: string[],
  options: EntryCommitOptions,
  graphqlClient: any = client
): Promise<PathLatestCommit> {
  const promisifiedPathEntryCommits = paths.map(path => fetchLatestEntryCommitOf(path, options, graphqlClient));
  return Promise.all(promisifiedPathEntryCommits).then(pathEntryCommits =>
    pathEntryCommits.reduce((eachLatestCommitOfEntry, pathEntryCommit) => {
      const {
        path,
        latestEntryCommit
      } = pathEntryCommit;
      eachLatestCommitOfEntry[path] = latestEntryCommit; // eslint-disable-line no-param-reassign
      return eachLatestCommitOfEntry;
    }, {}));
}

function fetchLatestEntryCommitOf(
  path: string,
  options: EntryCommitOptions,
  graphqlClient: any
): Promise<{ path: string, latestEntryCommit: EntryCommit }> {
  const {
    owner,
    name
  } = options;
  const expression = options.expression || defaultOptions.expression;
  const variables = {
    owner,
    name,
    expression,
    path
  };
  return graphqlClient.query({
    query,
    variables
  }).then(json => {
    const latestEntryCommit = repositoryCommitToEntryCommit(json.data);
    return {
      path,
      latestEntryCommit
    };
  });
}

module.exports = getEachLatestCommitOfEntry;
