import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗑️  Delete Old Images Script\n');
console.log('='.repeat(60));

const publicDir = path.join(__dirname, '../public');
const oldImages = [];

// Find old JPEG/PNG images (excluding favicon)
const allPublicFiles = fs.readdirSync(publicDir);
allPublicFiles.forEach(file => {
  if (/\.(jpeg|jpg|png)$/i.test(file) && file !== 'favicon.svg') {
    oldImages.push(file);
  }
});

console.log(`\nFound ${oldImages.length} old images to delete:\n`);

let deletedCount = 0;
let totalSizeSaved = 0;

oldImages.forEach(img => {
  const filePath = path.join(publicDir, img);
  
  try {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    fs.unlinkSync(filePath);
    console.log(`✅ Deleted: ${img} (${sizeKB} KB)`);
    
    deletedCount++;
    totalSizeSaved += stats.size;
  } catch (error) {
    console.log(`❌ Error deleting: ${img}`);
    console.log(`   ${error.message}`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 DELETION SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Deleted: ${deletedCount}`);
console.log(`✅ Space Saved: ${(totalSizeSaved / 1024).toFixed(2)} KB`);
console.log(`✅ Space Saved: ${(totalSizeSaved / 1024 / 1024).toFixed(2)} MB`);
console.log('\n✨ Old images deleted successfully!\n');
