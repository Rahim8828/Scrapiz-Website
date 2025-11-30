#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Removing address sections from all location pages...\n');

// Get all ScrapDealer files
const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');
const files = fs.readdirSync(locationPagesDir).filter(file => 
  file.startsWith('ScrapDealerin') && file.endsWith('.jsx')
);

console.log(`📁 Found ${files.length} location pages\n`);

let updatedCount = 0;

files.forEach((file, index) => {
  console.log(`📄 Processing ${index + 1}/${files.length}: ${file}...`);
  
  const filePath = path.join(locationPagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove address field from locationData object
  content = content.replace(/address: '[^']*',?\n/g, '');
  
  // Remove address icon and section from contact information
  // Pattern 1: Remove the entire address div block
  content = content.replace(
    /<div className="flex items-start gap-3">\s*<MapPin className="w-6 h-6 text-green-600 flex-shrink-0" \/>\s*<div>\s*<strong className="text-gray-900">Address:<\/strong>\s*<p className="text-gray-700">\{locationData\.address\}<\/p>\s*<\/div>\s*<\/div>/g,
    ''
  );
  
  // Pattern 2: Remove from Quick Contact card
  content = content.replace(
    /<div className="flex items-start gap-4">\s*<div className="p-3 bg-white\/20 rounded-lg">\s*<MapPin className="w-6 h-6" \/>\s*<\/div>\s*<div>\s*<h3 className="font-semibold mb-1">Address<\/h3>\s*<p className="text-green-50">\{locationData\.address\}<\/p>\s*<\/div>\s*<\/div>/g,
    ''
  );
  
  // Write back the updated content
  fs.writeFileSync(filePath, content);
  updatedCount++;
  
  console.log(`✅ Updated: ${file}`);
});

console.log(`\n🎉 Successfully removed address sections from ${updatedCount} pages!`);
console.log('\n✅ All location pages now have:');
console.log('   - No address field in locationData');
console.log('   - No address icon/section in contact information');
console.log('   - Clean contact section with only Phone, Hours, and Email');
