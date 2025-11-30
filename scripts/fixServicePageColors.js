import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Service Pages Color Fix Script\n');
console.log('='.repeat(60));

// Color mappings: old color -> green
const colorMappings = [
  // Red to Green
  { old: 'bg-red-100', new: 'bg-green-100' },
  { old: 'bg-red-50', new: 'bg-green-50' },
  { old: 'text-red-600', new: 'text-green-600' },
  { old: 'text-red-700', new: 'text-green-700' },
  { old: 'text-red-800', new: 'text-green-800' },
  { old: 'border-red-500', new: 'border-green-500' },
  { old: 'border-red-600', new: 'border-green-600' },
  { old: 'hover:bg-red-200', new: 'hover:bg-green-200' },
  
  // Orange to Green
  { old: 'bg-orange-100', new: 'bg-green-100' },
  { old: 'bg-orange-50', new: 'bg-green-50' },
  { old: 'text-orange-600', new: 'text-green-600' },
  { old: 'text-orange-700', new: 'text-green-700' },
  { old: 'text-orange-800', new: 'text-green-800' },
  { old: 'border-orange-500', new: 'border-green-500' },
  { old: 'hover:bg-orange-200', new: 'hover:bg-green-200' },
  
  // Blue to Green
  { old: 'bg-blue-100', new: 'bg-green-100' },
  { old: 'bg-blue-50', new: 'bg-green-50' },
  { old: 'text-blue-600', new: 'text-green-600' },
  { old: 'text-blue-700', new: 'text-green-700' },
  { old: 'text-blue-800', new: 'text-green-800' },
  { old: 'border-blue-500', new: 'border-green-500' },
  { old: 'hover:bg-blue-200', new: 'hover:bg-green-200' },
  
  // Purple to Green
  { old: 'bg-purple-100', new: 'bg-green-100' },
  { old: 'bg-purple-50', new: 'bg-green-50' },
  { old: 'text-purple-600', new: 'text-green-600' },
  { old: 'text-purple-700', new: 'text-green-700' },
  { old: 'text-purple-800', new: 'text-green-800' },
  { old: 'border-purple-500', new: 'border-green-500' },
  { old: 'hover:bg-purple-200', new: 'hover:bg-green-200' },
  
  // Indigo to Green
  { old: 'bg-indigo-100', new: 'bg-green-100' },
  { old: 'bg-indigo-50', new: 'bg-green-50' },
  { old: 'text-indigo-600', new: 'text-green-600' },
  { old: 'text-indigo-700', new: 'text-green-700' },
  { old: 'text-indigo-800', new: 'text-green-800' },
  { old: 'border-indigo-500', new: 'border-green-500' },
  { old: 'hover:bg-indigo-200', new: 'hover:bg-green-200' },
  
  // Yellow to Green
  { old: 'bg-yellow-100', new: 'bg-green-100' },
  { old: 'bg-yellow-50', new: 'bg-green-50' },
  { old: 'text-yellow-600', new: 'text-green-600' },
  { old: 'text-yellow-700', new: 'text-green-700' },
  { old: 'text-yellow-800', new: 'text-green-800' },
  { old: 'border-yellow-500', new: 'border-green-500' },
  { old: 'hover:bg-yellow-200', new: 'hover:bg-green-200' },
];

const servicePages = [
  'src/pages/DemolitionServicePage.jsx',
  'src/pages/JunkRemovalServicePage.jsx',
  'src/pages/PaperShreddingPage.jsx',
  'src/pages/VehicleScrappingPage.jsx',
  'src/pages/DismantlingPage.jsx',
  'src/pages/ScrapCollectionPage.jsx',
  'src/pages/SocietyTieUpPage.jsx',
];

let filesModified = 0;
let totalReplacements = 0;

console.log('\n🔄 Updating service page colors...\n');

servicePages.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  let fileReplacements = 0;

  // Replace each color
  colorMappings.forEach(({ old, new: newColor }) => {
    const regex = new RegExp(old, 'g');
    const matches = content.match(regex);
    
    if (matches) {
      content = content.replace(regex, newColor);
      modified = true;
      fileReplacements += matches.length;
      totalReplacements += matches.length;
    }
  });

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${filePath} (${fileReplacements} replacements)`);
    filesModified++;
  } else {
    console.log(`✓  ${filePath} (already green)`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Modified: ${filesModified}`);
console.log(`✅ Total Color Replacements: ${totalReplacements}`);
console.log('\n✨ All service pages now use consistent green theme!\n');
