// @flow
// @jsx h

import type {
  EntryItem
} from '../domain/model/EntryItem/EntryItem.js';

type Props = {
  entryItem: EntryItem;
};

const {h} = require('preact');

const EntryDigest = (props: Props) => ( // eslint-disable-line no-unused-vars
  <article>
    <h2>Title goes here</h2>
    <div>avator, author name created at go here</div>
    <p>body goes here</p>
    <div>Read more goes here</div>
  </article>
);

module.exports = EntryDigest;
