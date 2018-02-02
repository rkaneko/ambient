// @flow

import type {
  EntryItem
} from './EntryItem.js';

function assertEntryItem(entryItem: EntryItem): void {
  if (isValidFormatPath(entryItem.path) &&
    isValidCommitUrl(entryItem.commitUrl) &&
    isValidText(entryItem.text)) {
    return;
  }
  throw new Error('AssertError EntryItem.');
}

function isValidFormatPath(path: string): boolean {
  return (/^\d{4}\/\d{2}\/\d{2}\/.+$/).test(path);
}

function isValidCommitUrl(commitUrl): boolean {
  return (/^https:\/\/github.com\/.+$/).test(commitUrl);
}

function isValidText(text): boolean {
  return typeof text === 'string';
}

module.exports = assertEntryItem;
