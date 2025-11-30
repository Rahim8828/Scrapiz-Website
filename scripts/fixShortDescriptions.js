import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

// Pages that need description fixes
const pagesToFix = [
  { file: 'ScrapDealerinCST.jsx', location: 'CST' },
  { file: 'ScrapDealerinFort.jsx', location: 'Fort' },
  { file: 'ScrapDealerinSion.jsx', location: 'Sion' }
];

console.log('🔧 FIXING SHORT DESCRIPTIONS\n');

pagesToFix.forEach(({ file, location }) => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const descMatch = content.match(/description:\s*'([^']+)'/);
  
  if (descMatch) {
    const currentDesc = descMatch[1];
    const descLength = currentDesc.length;
    
    if (descLength < 150) {
      // Add phone number CTA
      const newDesc = currentDesc + ' Call 8828700630!';
      
      content = content.replace(
        `description: '${currentDesc}'`,
        `description: '${newDesc}'`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${location}: ${descLength} → ${newDesc.length} chars`);
    }
  }
});

console.log('\n✨ Short descriptions fixed!\n');
