// @flow
// @jsx h

import type {
  EntryItem
} from '../domain/model/EntryItem/EntryItem.js';

type Props = {
  entryItems: EntryItem[]
};

const {h} = require('preact');

const EntryDigestList = require('./EntryDigestList.js');

const TopPageContainer = (props: Props) => (
  <div>
    <EntryDigestList entryItems={props.entryItems} />
  </div>
);

module.exports = TopPageContainer;
