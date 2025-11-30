import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

// Optimizations needed
const optimizations = {
  // Titles that are too short - add back something
  shortTitles: [
    { file: 'ScrapDealerinDadarEast.jsx', location: 'Dadar East', newTitle: 'Scrap Buyer in Dadar East – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinDadarWest.jsx', location: 'Dadar West', newTitle: 'Scrap Buyer in Dadar West – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinGrantRoad.jsx', location: 'Grant Road', newTitle: 'Scrap Buyer in Grant Road – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinLowerParel.jsx', location: 'Lower Parel', newTitle: 'Scrap Buyer in Lower Parel – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinMaladEast.jsx', location: 'Malad East', newTitle: 'Scrap Buyer in Malad East – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinMaladWest.jsx', location: 'Malad West', newTitle: 'Scrap Buyer in Malad West – Best Rates | Scrapiz' },
    { file: 'ScrapDealerinVidyavihar.jsx', location: 'Vidyavihar', newTitle: 'Scrap Buyer in Vidyavihar – Best Rates | Scrapiz' }
  ],
  
  // Descriptions that are too long - shorten
  longDescriptions: [
    { file: 'ScrapDealerinCST.jsx', location: 'CST' },
    { file: 'ScrapDealerinFort.jsx', location: 'Fort' },
    { file: 'ScrapDealerinSion.jsx', location: 'Sion' }
  ]
};

console.log('🔧 OPTIMIZING SEO META TAGS\n');

// Fix short titles
console.log('📝 Fixing Short Titles...');
optimizations.shortTitles.forEach(({ file, location, newTitle }) => {
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

// Fix long descriptions
console.log('\n📝 Fixing Long Descriptions...');
optimizations.longDescriptions.forEach(({ file, location }) => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const descMatch = content.match(/description:\s*'([^']+)'/);
  if (descMatch) {
    const oldDesc = descMatch[1];
    // Remove the " Call 8828700630!" we added
    const newDesc = oldDesc.replace(' Call 8828700630!', '');
    
    content = content.replace(
      `description: '${oldDesc}'`,
      `description: '${newDesc}'`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${location}: ${oldDesc.length} → ${newDesc.length} chars`);
  }
});

console.log('\n✨ SEO optimization complete!\n');
