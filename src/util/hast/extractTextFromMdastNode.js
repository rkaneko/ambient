// @flow

function extractTextFromMdastNode(node: any): string {
  if (typeof node !== 'object') {
    return '';
  }
  if (node.type === 'text') {
    return node.value;
  }
  if (Array.isArray(node.children)) {
    return node.children.reduce(
      (text, child) =>
        `${text}${extractTextFromMdastNode(child)}`
      , ''
    );
  }

  return '';
}

module.exports = extractTextFromMdastNode;
