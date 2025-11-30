import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

const fixes = [
  { file: 'ScrapDealerinCST.jsx', location: 'CST', newTitle: 'Scrap Buyer in CST Mumbai – Free Pickup & Best Price' },
  { file: 'ScrapDealerinFort.jsx', location: 'Fort', newTitle: 'Scrap Buyer in Fort Mumbai – Free Pickup & Best Price' },
  { file: 'ScrapDealerinSion.jsx', location: 'Sion', newTitle: 'Scrap Buyer in Sion Mumbai – Free Pickup & Best Price' },
  { file: 'ScrapDealerinDadarEast.jsx', location: 'Dadar East', newTitle: 'Scrap Buyer in Dadar East – Free Pickup & Best Price' },
  { file: 'ScrapDealerinDadarWest.jsx', location: 'Dadar West', newTitle: 'Scrap Buyer in Dadar West – Free Pickup & Best Price' },
  { file: 'ScrapDealerinGrantRoad.jsx', location: 'Grant Road', newTitle: 'Scrap Buyer in Grant Road – Free Pickup & Best Price' },
  { file: 'ScrapDealerinMaladEast.jsx', location: 'Malad East', newTitle: 'Scrap Buyer in Malad East – Free Pickup & Best Price' },
  { file: 'ScrapDealerinMaladWest.jsx', location: 'Malad West', newTitle: 'Scrap Buyer in Malad West – Free Pickup & Best Price' },
  { file: 'ScrapDealerinVidyavihar.jsx', location: 'Vidyavihar', newTitle: 'Scrap Buyer in Vidyavihar – Free Pickup & Best Price' },
  { file: 'ScrapDealerinLowerParel.jsx', location: 'Lower Parel', newTitle: 'Scrap Buyer in Lower Parel – Free Pickup & Best Price' }
];

console.log('🔧 FIXING TITLE LENGTHS TO 50-60 CHARS\n');

fixes.forEach(({ file, location, newTitle }) => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    const oldTitle = titleMatch[1];
    content = content.replace(
      `title: '${oldTitle}'`,
      `title: '${newTitle}'`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${location}: ${oldTitle.length} → ${newTitle.length} chars`);
  }
});

console.log('\n✨ All titles optimized to 50-60 chars!\n');
