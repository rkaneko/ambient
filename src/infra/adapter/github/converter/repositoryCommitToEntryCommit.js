// @flow

import type {
  EntryCommit
} from '../../../../domain/model/EntryCommit/EntryCommit.js';
import type {
  GetEntryCommitQuery
} from '../operation-result-types.flow.js';

const assert = require('assert');

function repositoryCommitToEntryCommit(data: GetEntryCommitQuery): EntryCommit {
  if (!data.repository ||
    !data.repository.object ||
    !data.repository.object.history ||
    !data.repository.object.history.edges ||
    typeof data.repository.object.history.edges.map !== 'function') {
    throw new Error('EntryCommit is invalid.');
  }
  const entryCommits = data.repository.object.history.edges.map(edge => {
    if (!edge || !edge.node) {
      throw new Error('EntryCommit is invalid.');
    }
    const {
      id,
      author,
      committedDate
    } = edge.node;
    if (!author || !author.user) {
      throw new Error('EntryCommit is invalid.');
    }
    return {
      id,
      'collaboratorId': author.user.id,
      committedDate
    };
  });
  assert(entryCommits.length === 1);
  return entryCommits[0];
}

module.exports = repositoryCommitToEntryCommit;
