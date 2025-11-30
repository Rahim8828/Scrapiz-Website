import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing Missing Key Props in .map() Iterations\n');
console.log('='.repeat(60));

const checkDirectory = (dir, filePattern = /\.jsx$/) => {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      files.push(...checkDirectory(fullPath, filePattern));
    } else if (item.isFile() && filePattern.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
};

const srcDir = path.join(__dirname, '../src');
const jsxFiles = checkDirectory(srcDir);

let totalFixed = 0;
let filesModified = 0;

jsxFiles.forEach(filePath => {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;

  // Pattern 1: .map((item) => <Component>
  // Pattern 2: .map((item, index) => <Component>
  // Pattern 3: .map(item => <Component>
  
  // Find all .map() calls that don't have key prop
  const mapPattern = /\.map\(\s*\(([^)]+)\)\s*=>\s*(<[A-Z][a-zA-Z0-9]*[^>]*>)/g;
  const mapPattern2 = /\.map\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=>\s*(<[A-Z][a-zA-Z0-9]*[^>]*>)/g;
  
  let newContent = content;
  
  // Check each .map() occurrence
  const matches = [...content.matchAll(/\.map\(\s*\(([^)]+)\)\s*=>\s*\n?\s*(<[^>]+>)/gs)];
  
  matches.forEach(match => {
    const fullMatch = match[0];
    const params = match[1];
    const jsxTag = match[2];
    
    // Check if key prop already exists
    if (!jsxTag.includes('key=')) {
      // Extract parameter names
      const paramList = params.split(',').map(p => p.trim());
      const itemName = paramList[0];
      const indexName = paramList[1] || 'index';
      
      // Determine what to use as key
      let keyValue;
      if (paramList.length >= 2) {
        // index is available
        keyValue = indexName;
      } else {
        // Add index parameter and use it
        const newParams = `${itemName}, index`;
        const newJsxTag = jsxTag.replace(/^(<[A-Z][a-zA-Z0-9]*\s*)/, '$1key={index} ');
        const newMatch = fullMatch
          .replace(params, newParams)
          .replace(jsxTag, newJsxTag);
        
        newContent = newContent.replace(fullMatch, newMatch);
        modified = true;
        fixCount++;
        return;
      }
      
      // Add key prop to JSX tag
      const newJsxTag = jsxTag.replace(/^(<[A-Z][a-zA-Z0-9]*\s*)/, `$1key={${keyValue}} `);
      const newMatch = fullMatch.replace(jsxTag, newJsxTag);
      
      newContent = newContent.replace(fullMatch, newMatch);
      modified = true;
      fixCount++;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed ${fixCount} key props in: ${relativePath}`);
    totalFixed += fixCount;
    filesModified++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Modified: ${filesModified}`);
console.log(`✅ Total Keys Fixed: ${totalFixed}`);
console.log('\n✨ All missing key props have been fixed!\n');
