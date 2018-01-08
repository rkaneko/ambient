// @flow

type HPragma = (nodeName: string, attrs: {[key: string]: string}, children: any[]) => any;

const toHAST = require('mdast-util-to-hast');
const toH = require('hast-to-hyperscript');

const mdToAst = require('./mdToAst.js');

function mdToH<H>(markdown: string, hPragma: HPragma): H {
  const mdast = mdToAst(markdown);
  const h = toH(hPragma, toHAST(mdast));
  return h;
}

module.exports = mdToH;
