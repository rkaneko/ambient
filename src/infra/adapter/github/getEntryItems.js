// @flow

import type {
  EntryItem
} from '../../../domain/model/EntryItem/EntryItem.js';

import gql from 'graphql-tag'; // Workaround for flow TODO CommonJS require

const client = require('./client.js');
const contentsTreeToEntryItems = require('./converter/contentsTreeToEntryItems.js');

const GetEntryBlobsQuery = require('./graphql/GetEntryBlobs.js');
const CommitEntryTreeFragment = require('./graphql/fragment/CommitEntryTree.js');
const EntryTreeFragment = require('./graphql/fragment/EntryTree.js');
const EntryBlobFragment = require('./graphql/fragment/EntryBlob.js');

const query = gql`
${GetEntryBlobsQuery}
${CommitEntryTreeFragment}
${EntryTreeFragment}
${EntryBlobFragment}
`;

function getEntryItems(owner: string, name: string, expression: string, graphqlClient: any = client): Promise<EntryItem[]> {
  const variables = {
    owner,
    name,
    expression
  };
  return graphqlClient.query({
    query,
    variables
  }).then(json => {
    const contentsTree = json.data.repository.object.tree.entries.find(entry => entry.name === 'contents');
    if (!contentsTree) {
      throw new Error('The \'contents\' directory doesn\'t exist.');
    }
    return contentsTreeToEntryItems(contentsTree);
  });
}

module.exports = getEntryItems;
