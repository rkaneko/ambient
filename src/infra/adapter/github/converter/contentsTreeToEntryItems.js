// @flow

import type {
  EntryItem
} from '../../../../domain/model/EntryItem/EntryItem.js';

const assert = require('assert');

const splitext = require('../../../file/splitext.js');

function contentsTreeToEntryItems(contentsTree: any): EntryItem[] {
  assert(contentsTree.type === 'tree');
  assert(contentsTree.name === 'contents');

  return contentsTree.object.entries.reduce((entryItems, yearTree) => {
    assert(yearTree.type === 'tree');
    assert(/^\d{4}$/.test(yearTree.name));

    const thisYearEntryItems = yearTree.object.entries.reduce((accYearEntryItems, monthTree) => {
      assert(monthTree.type === 'tree');
      assert(/^\d{2}$/.test(monthTree.name));

      const thisMonthEntryItems = monthTree.object.entries.reduce((accMonthEntryItems, dayTree) => {
        assert(dayTree.type === 'tree');
        assert(/^\d{2}$/.test(dayTree.name));

        const thisDayEntryItems = dayTree.object.entries.reduce((accDayEntryItems, maybeEntryEntry) => {
          const [
            basename,
            ext
          ] = splitext(maybeEntryEntry.name);
          const isSupportedEntryExt = ext === 'md';
          if (!(maybeEntryEntry.type === 'blob' && isSupportedEntryExt)) {
            return accDayEntryItems;
          }
          const path = [
            yearTree.name,
            monthTree.name,
            dayTree.name,
            basename
          ].join('/');
          const {commitUrl, text} = maybeEntryEntry.object;
          const dayEntryItem = {
            path,
            commitUrl,
            text
          };
          accDayEntryItems.push(dayEntryItem);
          return accDayEntryItems;
        }, []);
        return accMonthEntryItems.concat(thisDayEntryItems);
      }, []);
      return accYearEntryItems.concat(thisMonthEntryItems);
    }, entryItems);
    return entryItems.concat(thisYearEntryItems);
  }, []);
}

module.exports = contentsTreeToEntryItems;
