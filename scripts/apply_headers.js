const fs = require('fs');
const path = require('path');

const HEADER = `/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */
`;

const TARGET_EXTENSIONS = ['.ts', '.tsx', '.sol', '.js'];
const IGNORE_DIRS = ['node_modules', '.next', 'dist', 'out', 'coverage', 'artifacts', 'cache'];

function hasHeader(content) {
  return content.includes('Licensed under the Business Source License 1.1');
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has header
  if (hasHeader(content)) {
    return;
  }

  // Handle shebang or directives like "use client"
  let newContent = content;
  const lines = content.split('\n');
  let insertIndex = 0;

  // Keep constraints/pragmas at top
  if (lines[0].startsWith('#!') || lines[0].includes('use client') || lines[0].startsWith('pragma') || lines[0].startsWith('// SPDX')) {
      insertIndex = 1;
      // If second line is empty, insert after it
      if (lines[1] && lines[1].trim() === '') {
          insertIndex = 2;
      }
  }

  // Insert header
  const finalContent = [
    ...lines.slice(0, insertIndex),
    insertIndex > 0 ? '\n' + HEADER : HEADER,
    ...lines.slice(insertIndex)
  ].join('\n');

  fs.writeFileSync(filePath, finalContent);
  console.log(`Updated: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(file)) {
        walkDir(fullPath);
      }
    } else {
      const ext = path.extname(file);
      if (TARGET_EXTENSIONS.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

// Execute
const ROOT_DIRS = [
  path.join(__dirname, '../apps/web'),
  path.join(__dirname, '../apps/contracts')
];

console.log('Applying BSL 1.1 Headers...');
ROOT_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  } else {
    console.warn(`Directory not found: ${dir}`);
  }
});
console.log('Done.');
