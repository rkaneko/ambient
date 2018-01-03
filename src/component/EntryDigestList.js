// @flow
// @jsx h

import type {
  EntryItem
} from '../domain/model/EntryItem/EntryItem.js';

type Props = {
  entryItems: EntryItem[];
};

const {h} = require('preact');

const EntryDigest = require('./EntryDigest.js');

const EntryDigestList = (props: Props) => (
  <ul>
    {
      props.entryItems.map((entryItem, index) => (
        <li key={index}>
          <EntryDigest entryItem={entryItem} />
        </li>
      ))
    }
  </ul>
);

module.exports = EntryDigestList;
