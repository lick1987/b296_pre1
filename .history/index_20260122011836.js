// 1. Read the contents of "script.js"
function readTextFile(filePath) {
  if (typeof Deno !== 'undefined' && typeof Deno.readTextFileSync === 'function') {
    return Deno.readTextFileSync(filePath);
  }

  const fs = require('node:fs');
  return fs.readFileSync(filePath, 'utf8');
}

function writeTextFile(filePath, contents) {
  if (typeof Deno !== 'undefined' && typeof Deno.writeTextFileSync === 'function') {
    Deno.writeTextFileSync(filePath, contents);
    return;
  }

  const fs = require('node:fs');
  fs.writeFileSync(filePath, contents, 'utf8');
}

const script = readTextFile('script.js');

const normalized = script.replace(/\r\n/g, '\n');
const hasTrailingNewline = normalized.endsWith('\n');
const lines = hasTrailingNewline ? normalized.slice(0, -1).split('\n') : normalized.split('\n');

const inlineCommentRegex = /^(?<before>.*\S)\s+\/\/(?<comment>.*)$/;

const maxBeforeLength = lines.reduce((max, line) => {
  const match = line.match(inlineCommentRegex);
  if (!match?.groups) return max;
  return Math.max(max, match.groups.before.length);
}, 0);

const aligned = lines
  .map((line) => {
    const match = line.match(inlineCommentRegex);
    if (!match?.groups) return line;

    const before = match.groups.before;
    const commentText = match.groups.comment.trimStart();
    const paddingSpaces = Math.max(2, maxBeforeLength - before.length + 2);

    return `${before}${' '.repeat(paddingSpaces)}//${commentText.length ? ` ${commentText}` : ''}`;
  })
  .join('\n') + (hasTrailingNewline ? '\n' : '');

if (aligned !== normalized) {
  writeTextFile('script.js', aligned);
}
