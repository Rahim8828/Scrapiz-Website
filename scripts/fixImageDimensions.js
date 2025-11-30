import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🖼️  Fix Image Dimensions Script\n');
console.log('='.repeat(60));

// Common image dimensions (approximate)
const imageDimensions = {
  '/scrapiz-logo1.png': { width: 120, height: 96 },
  '/Scrapiz-App-Screenshot.jpg': { width: 300, height: 600 },
  '/favicon.svg': { width: 32, height: 32 },
  // Location images (approximate)
  'area.image': { width: 400, height: 300 },
  'item.beforeImage': { width: 600, height: 400 },
  'selectedImage.beforeImage': { width: 800, height: 600 },
};

const fixes = [
  {
    file: 'src/components/FloatingWhatsApp.jsx',
    oldStr: '<img src="/scrapiz-logo1.png" alt="Scrapiz" className="w-7 h-7 object-contain" loading="lazy" />',
    newStr: '<img src="/scrapiz-logo1.png" alt="Scrapiz" width="28" height="28" className="w-7 h-7 object-contain" loading="lazy" />'
  },
  {
    file: 'src/components/HeroSection.jsx',
    oldStr: '<img alt="Startup India Logo" className="h-8 sm:h-10 w-auto" src="https://horizons-cdn.hostinger.com/4ac3079d-8cee-4c39-b363-0d9dc8e58a65/3c8b5158057f3cfa9cb1ef802827f1dc.png" loading="lazy" />',
    newStr: '<img alt="Startup India Logo" width="120" height="40" className="h-8 sm:h-10 w-auto" src="https://horizons-cdn.hostinger.com/4ac3079d-8cee-4c39-b363-0d9dc8e58a65/3c8b5158057f3cfa9cb1ef802827f1dc.png" loading="lazy" />'
  },
  {
    file: 'src/components/AppPromotionSection.jsx',
    oldStr: `<img 
                  className="h-14 lg:h-16 w-auto rounded-xl" 
                  alt="Get it on Google Play"`,
    newStr: `<img 
                  width="150"
                  height="56"
                  className="h-14 lg:h-16 w-auto rounded-xl" 
                  alt="Get it on Google Play"`
  },
  {
    file: 'src/components/AppPromotionSection.jsx',
    oldStr: `<img 
                  className="h-14 lg:h-16 w-auto rounded-xl" 
                  alt="Download on the App Store"`,
    newStr: `<img 
                  width="150"
                  height="56"
                  className="h-14 lg:h-16 w-auto rounded-xl" 
                  alt="Download on the App Store"`
  },
  {
    file: 'src/components/AppPromotionSection.jsx',
    oldStr: `<img
                  src="/Scrapiz-App-Screenshot.jpg"
                  alt="Scrapiz App Interface - Schedule pickups and track earnings"`,
    newStr: `<img
                  src="/Scrapiz-App-Screenshot.jpg"
                  width="300"
                  height="600"
                  alt="Scrapiz App Interface - Schedule pickups and track earnings"`
  },
  {
    file: 'src/components/LocalAreaSection.jsx',
    oldStr: `<img
                  src={area.image}
                  alt={\`Scrap collection in \${area.name}\`}`,
    newStr: `<img
                  src={area.image}
                  width="400"
                  height="300"
                  alt={\`Scrap collection in \${area.name}\`}`
  },
  {
    file: 'src/components/WorkGallerySection.jsx',
    oldStr: `<img
                    src={item.beforeImage}
                    alt={item.title}`,
    newStr: `<img
                    src={item.beforeImage}
                    width="600"
                    height="400"
                    alt={item.title}`
  },
  {
    file: 'src/components/WorkGallerySection.jsx',
    oldStr: `<img
                src={selectedImage.beforeImage}
                alt={selectedImage.title}`,
    newStr: `<img
                src={selectedImage.beforeImage}
                width="800"
                height="600"
                alt={selectedImage.title}`
  }
];

let fixedCount = 0;
let failedCount = 0;

console.log('\n🔧 Applying fixes...\n');

fixes.forEach((fix, index) => {
  const filePath = path.join(__dirname, '..', fix.file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(fix.oldStr)) {
      content = content.replace(fix.oldStr, fix.newStr);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${fix.file}`);
      fixedCount++;
    } else {
      console.log(`⚠️  Pattern not found in: ${fix.file}`);
      failedCount++;
    }
  } catch (error) {
    console.log(`❌ Error fixing: ${fix.file}`);
    console.log(`   ${error.message}`);
    failedCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Fixed: ${fixedCount} files`);
console.log(`⚠️  Failed/Skipped: ${failedCount} files`);
console.log('\n✨ Image dimensions fix complete!\n');
