import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Complete Service Pages Color Fix\n');
console.log('='.repeat(60));

// Comprehensive color mappings to green
const colorReplacements = [
  // Yellow/Amber to Green
  { pattern: /from-yellow-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-yellow-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /bg-yellow-(\d+)/g, replacement: 'bg-green-$1' },
  { pattern: /text-yellow-(\d+)/g, replacement: 'text-green-$1' },
  { pattern: /border-yellow-(\d+)/g, replacement: 'border-green-$1' },
  { pattern: /ring-yellow-(\d+)/g, replacement: 'ring-green-$1' },
  { pattern: /hover:bg-yellow-(\d+)/g, replacement: 'hover:bg-green-$1' },
  
  // Teal/Cyan to Green
  { pattern: /from-teal-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-teal-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /from-cyan-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-cyan-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /bg-teal-(\d+)/g, replacement: 'bg-green-$1' },
  { pattern: /bg-cyan-(\d+)/g, replacement: 'bg-green-$1' },
  { pattern: /text-teal-(\d+)/g, replacement: 'text-green-$1' },
  { pattern: /text-cyan-(\d+)/g, replacement: 'text-green-$1' },
  { pattern: /border-teal-(\d+)/g, replacement: 'border-green-$1' },
  { pattern: /border-cyan-(\d+)/g, replacement: 'border-green-$1' },
  { pattern: /ring-teal-(\d+)/g, replacement: 'ring-green-$1' },
  { pattern: /ring-cyan-(\d+)/g, replacement: 'ring-green-$1' },
  
  // Red/Rose to Green
  { pattern: /from-red-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-red-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /from-rose-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-rose-(\d+)/g, replacement: 'to-green-$1' },
  
  // Orange to Green
  { pattern: /from-orange-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-orange-(\d+)/g, replacement: 'to-green-$1' },
  
  // Blue/Sky to Green
  { pattern: /from-blue-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-blue-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /from-sky-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-sky-(\d+)/g, replacement: 'to-green-$1' },
  
  // Purple/Violet to Green
  { pattern: /from-purple-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-purple-(\d+)/g, replacement: 'to-green-$1' },
  { pattern: /from-violet-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-violet-(\d+)/g, replacement: 'to-green-$1' },
  
  // Indigo to Green
  { pattern: /from-indigo-(\d+)/g, replacement: 'from-green-$1' },
  { pattern: /to-indigo-(\d+)/g, replacement: 'to-green-$1' },
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

console.log('\n🔄 Converting all colors to green theme...\n');

servicePages.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  let fileReplacements = 0;

  // Apply each color replacement
  colorReplacements.forEach(({ pattern, replacement }) => {
    const matches = content.match(pattern);
    
    if (matches) {
      content = content.replace(pattern, replacement);
      modified = true;
      fileReplacements += matches.length;
      totalReplacements += matches.length;
    }
  });

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${path.basename(filePath)} (${fileReplacements} replacements)`);
    filesModified++;
  } else {
    console.log(`✓  ${path.basename(filePath)} (already green)`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Files Modified: ${filesModified}`);
console.log(`✅ Total Replacements: ${totalReplacements}`);
console.log('\n✨ All service pages now use consistent green color palette!\n');
