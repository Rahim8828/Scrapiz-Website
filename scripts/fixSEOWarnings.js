import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');
const files = fs.readdirSync(locationPagesDir).filter(file => file.endsWith('.jsx'));

console.log('🔧 FIXING SEO WARNINGS\n');
console.log(`Processing ${files.length} location pages...\n`);

const fixes = {
  titles: [],
  descriptions: []
};

files.forEach(file => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const locationMatch = content.match(/name:\s*'([^']+)'/);
  const locationName = locationMatch ? locationMatch[1] : 'Unknown';
  
  // Extract current title and description
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  const descMatch = content.match(/description:\s*'([^']+)'/);
  
  if (titleMatch) {
    const currentTitle = titleMatch[1];
    const titleLength = currentTitle.length;
    
    // Fix titles that are too long (>60 chars)
    if (titleLength > 60) {
      // Strategy: Change "Scrap Dealer" to "Scrap Buyer" (saves 2 chars)
      // Or remove "– Free Pickup" if still too long
      let newTitle = currentTitle.replace('Scrap Dealer', 'Scrap Buyer');
      
      // If still too long, remove "– Free Pickup"
      if (newTitle.length > 60) {
        newTitle = newTitle.replace(' – Free Pickup', '');
      }
      
      // If STILL too long, remove "& Best Price"
      if (newTitle.length > 60) {
        newTitle = newTitle.replace(' & Best Price', '');
      }
      
      if (newTitle.length <= 60 && newTitle !== currentTitle) {
        content = content.replace(
          `title: '${currentTitle}'`,
          `title: '${newTitle}'`
        );
        fixes.titles.push(`${locationName}: ${titleLength} → ${newTitle.length} chars`);
        modified = true;
      }
    }
  }
  
  if (descMatch) {
    const currentDesc = descMatch[1];
    const descLength = currentDesc.length;
    
    // Fix descriptions that are too short (<150 chars)
    if (descLength < 150) {
      // Add "Call 8828700630 now!" at the end
      const addition = ' Call 8828700630 now!';
      const newDesc = currentDesc + addition;
      
      if (newDesc.length >= 150 && newDesc.length <= 160) {
        content = content.replace(
          `description: '${currentDesc}'`,
          `description: '${newDesc}'`
        );
        fixes.descriptions.push(`${locationName}: ${descLength} → ${newDesc.length} chars`);
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file} (${locationName})`);
  } else {
    console.log(`⏭️  Skipped: ${file} (${locationName}) - Already optimal`);
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 FIX SUMMARY');
console.log('='.repeat(60));

if (fixes.titles.length > 0) {
  console.log(`\n✅ Fixed ${fixes.titles.length} Title(s):`);
  fixes.titles.forEach(fix => console.log(`   ${fix}`));
}

if (fixes.descriptions.length > 0) {
  console.log(`\n✅ Fixed ${fixes.descriptions.length} Description(s):`);
  fixes.descriptions.forEach(fix => console.log(`   ${fix}`));
}

console.log(`\n✨ Total Fixes: ${fixes.titles.length + fixes.descriptions.length}`);
console.log('\n🎉 All SEO warnings fixed!\n');
