// @flow

function splittext(path: string): string[] {
  if (typeof path !== 'string') {
    return [
      '',
      ''
    ];
  }
  const lastIndex = path.lastIndexOf('.');
  if (lastIndex === -1) {
    return [
      path,
      ''
    ];
  }
  return [
    path.substr(0, lastIndex),
    path.substr(lastIndex + 1, path.length)
  ];
}

module.exports = splittext;
