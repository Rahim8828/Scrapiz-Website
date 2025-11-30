import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

const fixes = [
  { file: 'ScrapDealerinCST.jsx', location: 'CST', newDesc: 'Sell scrap in CST with Scrapiz. Free doorstep pickup, instant cash, best rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' },
  { file: 'ScrapDealerinFort.jsx', location: 'Fort', newDesc: 'Sell scrap in Fort with Scrapiz. Free doorstep pickup, instant cash, best rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' },
  { file: 'ScrapDealerinSion.jsx', location: 'Sion', newDesc: 'Sell scrap in Sion with Scrapiz. Free doorstep pickup, instant cash, best rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' }
];

console.log('🔧 FINAL DESCRIPTION FIX\n');

fixes.forEach(({ file, location, newDesc }) => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const descMatch = content.match(/description:\s*'([^']+)'/);
  if (descMatch) {
    const oldDesc = descMatch[1];
    content = content.replace(
      `description: '${oldDesc}'`,
      `description: '${newDesc}'`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${location}: ${oldDesc.length} → ${newDesc.length} chars`);
  }
});

console.log('\n✨ All descriptions now 150-160 chars!\n');
