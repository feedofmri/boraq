/**
 * Run this script ONCE to rename portfolio folders:
 *   "Case Study #1" → "Case-Study-1"
 *
 * Usage: node rename-portfolio-folders.js
 */
const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'src', 'assets', 'Portfolio');

fs.readdirSync(portfolioDir).forEach((name) => {
  const fullPath = path.join(portfolioDir, name);
  if (!fs.statSync(fullPath).isDirectory()) return;
  // "Case Study #12" → "Case-Study-12"
  const newName = name.replace(/\s+/g, '-').replace(/#/g, '');
  if (newName !== name) {
    const newPath = path.join(portfolioDir, newName);
    fs.renameSync(fullPath, newPath);
    console.log(`✓ ${name} → ${newName}`);
  }
});

console.log('\nDone! All folders renamed.');

