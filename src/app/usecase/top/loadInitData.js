// @flow

import type {
  EntryItem
} from '../../../domain/model/EntryItem/EntryItem.js';

const getEntryItems = require('../../../infra/adapter/github/getEntryItems.js');
const mockClient = require('../../../infra/adapter/github/mockClient.js'); // TODO replace

type TopPageData = {
  entryItems: EntryItem[]
};

async function loadInitData(): Promise<TopPageData> {
  const owner = 'rkaneko';
  const name = 'weblog';
  const expression = 'refs/heads/master';
  const entryItems = await getEntryItems(owner, name, expression, mockClient);
  return {entryItems};
}

module.exports = loadInitData;
