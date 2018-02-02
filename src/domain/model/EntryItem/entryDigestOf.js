// @flow

import type {
  EntryItem
} from './EntryItem.js';

const extractTextFromMdastNode = require('../../../util/hast/extractTextFromMdastNode.js');
const mdToAst = require('../../../util/hast/mdToAst.js');

function entryDigestOf(entryItem: EntryItem): EntryDigest {
  const mdast = mdToAst(entryItem.text);
  const title = titleOf(mdast);
  const body = bodyOf(mdast);
  return {
    title,
    body
  };
}

function titleOf(mdast: any): string {
  if (!(isRoot(mdast) && hasChildren(mdast))) {
    return '';
  }

  const firstHeaderTypeNode = mdast.children.
    find(child => child.type === 'heading');
  if (typeof firstHeaderTypeNode === 'undefined') {
    return '';
  }
  return extractTextFromMdastNode(firstHeaderTypeNode);
}

function bodyOf(mdast: any): string {
  if (!(isRoot(mdast) && hasChildren(mdast))) {
    return '';
  }

  const bodyChildren = isFirstChildHeading(mdast)
    ? mdast.children.slice(1)
    : mdast.children;
  const body = bodyChildren.reduce(
    (text, child) =>
      `${text}${extractTextFromMdastNode(child)}`
    , ''
  );
  if (body.length < 300) {
    return body;
  }
  return `${body.slice(0, 300)}...`;
}

function isFirstChildHeading(mdast: any): boolean {
  const [firstChild] = mdast.children;
  return typeof firstChild === 'object' &&
    firstChild.type === 'heading';
}

function isRoot(mdast: any): boolean {
  return typeof mdast === 'object' &&
    mdast.type === 'root';
}

function hasChildren(mdast: any): boolean {
  return Array.isArray(mdast.children) && mdast.children.length > 0;
}

module.exports = entryDigestOf;

export type EntryDigest = {
  title: string,
  body: string
};
