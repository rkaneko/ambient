// @flow

const isIso8601 = require('../../../util/isIso8601.js');

import type {
  EntryCommit
} from './EntryCommit.js';

function assertEntryCommit(entryCommit: EntryCommit): void {
  if (typeof entryCommit.id === 'string' &&
    isIso8601(entryCommit.committedDate) &&
    typeof entryCommit.collaboratorId === 'string') {
    return;
  }
  throw new Error('AssertError EntryCommit.');
}

module.exports = assertEntryCommit;
