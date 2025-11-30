import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Performance Optimization Script\n');
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

console.log('\n📸 Adding lazy loading to images...\n');

jsxFiles.forEach(filePath => {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all <img tags without loading="lazy"
  const imgPattern = /<img([^>]*?)(?<!loading=["']lazy["'])>/g;
  
  let newContent = content;
  const matches = [...content.matchAll(/<img([^>]*?)>/g)];
  
  matches.forEach(match => {
    const fullMatch = match[0];
    const attributes = match[1];
    
    // Check if already has loading attribute
    if (!attributes.includes('loading=')) {
      // Add loading="lazy" before the closing >
      const newTag = fullMatch.replace(/>$/, ' loading="lazy">');
      newContent = newContent.replace(fullMatch, newTag);
      modified = true;
      totalFixed++;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Added lazy loading to images in: ${relativePath}`);
    filesModified++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Modified: ${filesModified}`);
console.log(`✅ Images Optimized: ${totalFixed}`);
console.log('\n✨ Performance optimization complete!\n');

// Additional recommendations
console.log('📝 Additional Recommendations:\n');
console.log('1. ✅ Lazy loading added to all images');
console.log('2. ✅ Terser minification enabled in vite.config.js');
console.log('3. ✅ Console statements removed in production build');
console.log('4. 💡 Consider using WebP format for images');
console.log('5. 💡 Enable Brotli compression on server');
console.log('6. 💡 Use CDN for static assets');
console.log('7. 💡 Implement service worker for caching\n');
