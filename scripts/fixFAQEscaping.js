import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing location pages
const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

// Get all location page files
const files = fs.readdirSync(locationPagesDir).filter(file => file.endsWith('.jsx'));

console.log(`Fixing apostrophe escaping in ${files.length} location pages...\n`);

files.forEach(file => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract location name
  const locationMatch = content.match(/name:\s*'([^']+)'/);
  if (!locationMatch) {
    console.log(`⚠️  Could not find location name in ${file}`);
    return;
  }
  
  const locationName = locationMatch[1];
  
  // Find and replace the problematic answer string
  // Look for the pattern with "don't" that's causing issues
  const problemPattern = new RegExp(
    `answer:\\s*'Yes, Scrapiz provides 100% free doorstep pickup service anywhere in ${locationName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\. We don't have a strict minimum quantity[^']*'`,
    'g'
  );
  
  // Replace with properly escaped version
  const fixedAnswer = `answer: 'Yes, Scrapiz provides 100% free doorstep pickup service anywhere in ${locationName}. We don\\'t have a strict minimum quantity. However, for very small amounts, a nominal convenience fee of ₹60 might apply. For most household scrap accumulations (20-30 kg), the pickup is completely free. No hidden charges!'`;
  
  if (problemPattern.test(content)) {
    content = content.replace(problemPattern, fixedAnswer);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file} (${locationName})`);
  } else {
    console.log(`⚠️  Pattern not found in ${file}`);
  }
});

console.log('\n✨ Escaping fix complete!');
