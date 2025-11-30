import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🖼️  WebP Conversion Script\n');
console.log('='.repeat(60));

// Image mappings (old -> new)
const imageMappings = {
  '/Scrapiz-App-Screenshot.jpg': '/Scrapiz-App-Screenshot.webp',
  '/scrapiz-logo1.png': '/scrapiz-logo1.webp',
  '/Scrapiz-logo.png': '/Scrapiz-logo.webp',
  '/Scrapiz-Bandra.jpeg': '/Scrapiz-Bandra.webp',
  '/Scrapiz-Bandra-East.jpeg': '/Scrapiz-Bandra-East.webp',
  '/Scrapiz-Jogeshwari.jpeg': '/Scrapiz-Jogeshwari.webp',
  '/Scrapiz-Kandivali.jpeg': '/Scrapiz-Kandivali.webp',
  '/Scrapiz-Goregaon.jpeg': '/Scrapiz-Goregaon.webp',
  '/Scrapiz-Nalasopara.jpeg': '/Scrapiz-Nalasopara.webp',
  '/Scrapiz-dharavi.jpeg': '/Scrapiz-dharavi.webp',
  '/Dharavi-Koliwada.jpeg': '/Dharavi-Koliwada.webp',
  '/Mahim-West.jpeg': '/Mahim-West.webp',
  '/Shop-No-07-Dharavi.jpeg': '/Shop-No-07-Dharavi.webp',
  '/scrapiz-facility.jpeg': '/scrapiz-facility.webp',
  '/10 Reasons To Sell Your Scrap Online.jpeg': '/10 Reasons To Sell Your Scrap Online.webp',
  '/Reliable Scrap Buyer Near Me.jpeg': '/Reliable Scrap Buyer Near Me.webp',
  '/Sell My Unused Junk For Cash.jpeg': '/Sell My Unused Junk For Cash.webp',
  '/Sell Your Scrap Online In Mumbai.jpeg': '/Sell Your Scrap Online In Mumbai.webp',
  '/Selling Scrap Online With Scrapiz.jpeg': '/Selling Scrap Online With Scrapiz.webp',
  '/sell-scrap-online-in-Mumbai-Scrapiz.jpeg': '/sell-scrap-online-in-Mumbai-Scrapiz.webp',
};

const checkDirectory = (dir, filePattern = /\.(jsx|js)$/) => {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules' && item.name !== 'dist') {
      files.push(...checkDirectory(fullPath, filePattern));
    } else if (item.isFile() && filePattern.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
};

const srcDir = path.join(__dirname, '../src');
const allFiles = checkDirectory(srcDir);

let filesModified = 0;
let totalReplacements = 0;

console.log('\n🔄 Updating image references in code...\n');

allFiles.forEach(filePath => {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fileReplacements = 0;

  // Replace each image reference
  Object.entries(imageMappings).forEach(([oldPath, newPath]) => {
    const regex = new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    
    if (matches) {
      content = content.replace(regex, newPath);
      modified = true;
      fileReplacements += matches.length;
      totalReplacements += matches.length;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${relativePath} (${fileReplacements} replacements)`);
    filesModified++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 CODE UPDATE SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Modified: ${filesModified}`);
console.log(`✅ Total Replacements: ${totalReplacements}`);

// List old images to delete
console.log('\n' + '='.repeat(60));
console.log('🗑️  OLD IMAGES TO DELETE');
console.log('='.repeat(60));

const publicDir = path.join(__dirname, '../public');
const oldImages = [];

// Find old JPEG/PNG images (excluding favicon and robots)
const allPublicFiles = fs.readdirSync(publicDir);
allPublicFiles.forEach(file => {
  if (/\.(jpeg|jpg|png)$/i.test(file) && file !== 'favicon.svg') {
    oldImages.push(file);
  }
});

console.log(`\nFound ${oldImages.length} old images:\n`);
oldImages.forEach(img => {
  const filePath = path.join(publicDir, img);
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  console.log(`  - ${img} (${sizeKB} KB)`);
});

// Ask for confirmation (in actual use, you'd delete them)
console.log('\n⚠️  To delete old images, run:');
console.log('   node scripts/deleteOldImages.js\n');

console.log('='.repeat(60));
console.log('✨ WebP conversion complete!\n');
