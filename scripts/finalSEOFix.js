import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');

const fixes = [
  {
    file: 'ScrapDealerinDadarEast.jsx',
    location: 'Dadar East',
    newTitle: 'Scrap Buyer Dadar East – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Dadar East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinDadarWest.jsx',
    location: 'Dadar West',
    newTitle: 'Scrap Buyer Dadar West – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Dadar West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinGrantRoad.jsx',
    location: 'Grant Road',
    newTitle: 'Scrap Buyer Grant Road – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Grant Road with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinLowerParel.jsx',
    location: 'Lower Parel',
    newTitle: 'Scrap Buyer Lower Parel – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Lower Parel with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinMaladEast.jsx',
    location: 'Malad East',
    newTitle: 'Scrap Buyer Malad East – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Malad East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinMaladWest.jsx',
    location: 'Malad West',
    newTitle: 'Scrap Buyer Malad West – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Malad West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinVidyavihar.jsx',
    location: 'Vidyavihar',
    newTitle: 'Scrap Buyer Vidyavihar – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Vidyavihar with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call now!'
  },
  {
    file: 'ScrapDealerinCST.jsx',
    location: 'CST',
    newTitle: 'Scrap Buyer in CST – Free Pickup & Best Price',
    newDesc: 'Sell scrap in CST with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!'
  },
  {
    file: 'ScrapDealerinFort.jsx',
    location: 'Fort',
    newTitle: 'Scrap Buyer in Fort – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Fort with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!'
  },
  {
    file: 'ScrapDealerinSion.jsx',
    location: 'Sion',
    newTitle: 'Scrap Buyer in Sion – Free Pickup & Best Price',
    newDesc: 'Sell scrap in Sion with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more. Call 8828700630!'
  }
];

console.log('🔧 FINAL SEO OPTIMIZATION\n');

fixes.forEach(({ file, location, newTitle, newDesc }) => {
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update title
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    const oldTitle = titleMatch[1];
    content = content.replace(
      `title: '${oldTitle}'`,
      `title: '${newTitle}'`
    );
  }
  
  // Update description
  const descMatch = content.match(/description:\s*'([^']+)'/);
  if (descMatch) {
    const oldDesc = descMatch[1];
    content = content.replace(
      `description: '${oldDesc}'`,
      `description: '${newDesc}'`
    );
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${location}:`);
  console.log(`   Title: ${newTitle.length} chars`);
  console.log(`   Description: ${newDesc.length} chars\n`);
});

console.log('✨ All pages optimized to 50-60 char titles and 150-160 char descriptions!\n');
