import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing location pages
const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

// Get all location page files
const files = fs.readdirSync(locationPagesDir).filter(file => file.endsWith('.jsx'));

console.log(`Fixing quote issues in ${files.length} location pages...\n`);

files.forEach(file => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract location name from the file
  const locationMatch = content.match(/name:\s*'([^']+)'/);
  if (!locationMatch) {
    console.log(`⚠️  Could not find location name in ${file}`);
    return;
  }
  
  const locationName = locationMatch[1];
  
  // The correct answer with proper escaping
  const correctAnswer = `Yes, Scrapiz provides 100% free doorstep pickup service anywhere in ${locationName}. We don't have a strict minimum quantity. However, for very small amounts, a nominal convenience fee of ₹60 might apply. For most household scrap accumulations (20-30 kg), the pickup is completely free. No hidden charges!`;
  
  // Find the first FAQ and replace its answer
  // More robust pattern that handles the entire FAQ object
  const faqPattern = new RegExp(
    `(\\{\\s*question:\\s*'Do you offer free scrap pickup in ${locationName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?',\\s*answer:\\s*')([^']*(?:'[^']*'[^']*)*?)('\\s*\\})`,
    's'
  );
  
  if (faqPattern.test(content)) {
    content = content.replace(faqPattern, `$1${correctAnswer}$3`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file} (${locationName})`);
  } else {
    console.log(`⚠️  FAQ pattern not found in ${file}`);
  }
});

console.log('\n✨ Quote fix complete!');
