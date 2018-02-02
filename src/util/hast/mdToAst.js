// @flow

const unified = require('unified');
const markdownParser = require('remark-parse');

const mdParser = unified().use(markdownParser);

function mdToAst(markdown: string): any {
  return mdParser.parse(markdown);
}

module.exports = mdToAst;
