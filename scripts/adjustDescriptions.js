import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

const fixes = [
  { file: 'ScrapDealerinDadarEast.jsx', location: 'Dadar East', newDesc: 'Sell scrap in Dadar East with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinDadarWest.jsx', location: 'Dadar West', newDesc: 'Sell scrap in Dadar West with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinGrantRoad.jsx', location: 'Grant Road', newDesc: 'Sell scrap in Grant Road with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinLowerParel.jsx', location: 'Lower Parel', newDesc: 'Sell scrap in Lower Parel with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinMaladEast.jsx', location: 'Malad East', newDesc: 'Sell scrap in Malad East with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinMaladWest.jsx', location: 'Malad West', newDesc: 'Sell scrap in Malad West with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinVidyavihar.jsx', location: 'Vidyavihar', newDesc: 'Sell scrap in Vidyavihar with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal, e-waste, AC, copper, furniture & more. Call now!' },
  { file: 'ScrapDealerinCST.jsx', location: 'CST', newDesc: 'Sell scrap in CST with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' },
  { file: 'ScrapDealerinFort.jsx', location: 'Fort', newDesc: 'Sell scrap in Fort with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' },
  { file: 'ScrapDealerinSion.jsx', location: 'Sion', newDesc: 'Sell scrap in Sion with Scrapiz. Free doorstep pickup, instant cash, best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!' }
];

console.log('🔧 ADJUSTING DESCRIPTIONS TO 150-160 CHARS\n');

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

console.log('\n✨ Descriptions optimized!\n');
