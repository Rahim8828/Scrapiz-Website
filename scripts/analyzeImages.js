import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🖼️  Image Analysis Script\n');
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

console.log('\n📊 Analyzing images in JSX files...\n');

let totalImages = 0;
let imagesWithoutDimensions = 0;
let imagesWithoutAlt = 0;
let imagesWithoutLazy = 0;
const imageIssues = [];

jsxFiles.forEach(filePath => {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all <img tags
  const imgMatches = [...content.matchAll(/<img([^>]*?)>/g)];
  
  imgMatches.forEach((match, index) => {
    totalImages++;
    const imgTag = match[0];
    const attributes = match[1];
    
    const issues = [];
    
    // Check for width and height
    if (!attributes.includes('width=') || !attributes.includes('height=')) {
      imagesWithoutDimensions++;
      issues.push('Missing width/height');
    }
    
    // Check for alt text
    if (!attributes.includes('alt=')) {
      imagesWithoutAlt++;
      issues.push('Missing alt text');
    }
    
    // Check for lazy loading
    if (!attributes.includes('loading=')) {
      imagesWithoutLazy++;
      issues.push('Missing loading="lazy"');
    }
    
    if (issues.length > 0) {
      imageIssues.push({
        file: relativePath,
        tag: imgTag.substring(0, 100) + '...',
        issues: issues
      });
    }
  });
});

console.log('='.repeat(60));
console.log('📊 IMAGE ANALYSIS SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Total Images Found: ${totalImages}`);
console.log(`⚠️  Images without dimensions: ${imagesWithoutDimensions}`);
console.log(`⚠️  Images without alt text: ${imagesWithoutAlt}`);
console.log(`⚠️  Images without lazy loading: ${imagesWithoutLazy}`);

if (imageIssues.length > 0) {
  console.log(`\n❌ Total Issues: ${imageIssues.length}\n`);
  
  // Show first 10 issues
  console.log('Top 10 Issues:\n');
  imageIssues.slice(0, 10).forEach((issue, i) => {
    console.log(`${i + 1}. ${issue.file}`);
    console.log(`   Issues: ${issue.issues.join(', ')}`);
    console.log(`   Tag: ${issue.tag}\n`);
  });
  
  if (imageIssues.length > 10) {
    console.log(`... and ${imageIssues.length - 10} more issues\n`);
  }
}

// Check public folder for image sizes
console.log('\n📁 Checking public folder images...\n');

const publicDir = path.join(__dirname, '../public');
const imageFiles = fs.readdirSync(publicDir).filter(f => 
  /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f)
);

console.log(`Found ${imageFiles.length} images in public folder:\n`);

imageFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  
  let status = '✅';
  if (stats.size > 500000) status = '❌'; // > 500KB
  else if (stats.size > 200000) status = '⚠️'; // > 200KB
  
  console.log(`${status} ${file}: ${sizeKB} KB`);
});

console.log('\n' + '='.repeat(60));
console.log('💡 RECOMMENDATIONS');
console.log('='.repeat(60));
console.log('\n1. Add width and height to all images');
console.log('2. Ensure all images have descriptive alt text');
console.log('3. Add loading="lazy" to all images');
console.log('4. Convert large images to WebP format');
console.log('5. Compress images > 200KB');
console.log('6. Use responsive images with srcset\n');
