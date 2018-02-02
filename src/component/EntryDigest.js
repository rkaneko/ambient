// @flow
// @jsx h

import type {
  EntryItem
} from '../domain/model/EntryItem/EntryItem.js';

type Props = {
  entryItem: EntryItem;
};

const {h} = require('preact');

const entryDigestOf = require('../domain/model/EntryItem/entryDigestOf.js');

const EntryDigest = (props: Props) => {
  const {
    title,
    body
  } = entryDigestOf(props.entryItem);
  return (
    <article>
      <h2>{title}</h2>
      <div>avator, author name created at go here</div>
      <p>{body}</p>
      <div>Read more</div>
    </article>
  );
};

module.exports = EntryDigest;
