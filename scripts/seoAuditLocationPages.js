import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationPagesDir = path.join(__dirname, '../src/Extra Location pages ');
const files = fs.readdirSync(locationPagesDir).filter(file => file.endsWith('.jsx'));

console.log('🔍 SEO AUDIT FOR LOCATION PAGES\n');
console.log(`Analyzing ${files.length} location pages...\n`);

const issues = [];
const warnings = [];
const passed = [];

files.forEach(file => {
  const filePath = path.join(locationPagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const locationMatch = content.match(/name:\s*'([^']+)'/);
  const locationName = locationMatch ? locationMatch[1] : 'Unknown';
  
  console.log(`\n📄 ${file} (${locationName})`);
  console.log('─'.repeat(60));
  
  // 1. Check H1 Title
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (h1Match) {
    const h1Content = h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (h1Content.includes('#1 Scrap Dealer in')) {
      console.log('✅ H1 Title: Good - "#1 Scrap Dealer in [Location]"');
      passed.push(`${locationName}: H1 Title`);
    } else {
      console.log(`⚠️  H1 Title: "${h1Content}"`);
      warnings.push(`${locationName}: H1 might need optimization`);
    }
  } else {
    console.log('❌ H1 Title: NOT FOUND');
    issues.push(`${locationName}: Missing H1`);
  }
  
  // 2. Check Meta Title
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    const title = titleMatch[1];
    const titleLength = title.length;
    if (titleLength >= 50 && titleLength <= 60) {
      console.log(`✅ Meta Title: ${titleLength} chars (Optimal)`);
      passed.push(`${locationName}: Meta Title Length`);
    } else if (titleLength < 50) {
      console.log(`⚠️  Meta Title: ${titleLength} chars (Too short, aim for 50-60)`);
      warnings.push(`${locationName}: Title too short (${titleLength} chars)`);
    } else {
      console.log(`⚠️  Meta Title: ${titleLength} chars (Too long, max 60)`);
      warnings.push(`${locationName}: Title too long (${titleLength} chars)`);
    }
  } else {
    console.log('❌ Meta Title: NOT FOUND');
    issues.push(`${locationName}: Missing Meta Title`);
  }
  
  // 3. Check Meta Description
  const descMatch = content.match(/description:\s*'([^']+)'/);
  if (descMatch) {
    const desc = descMatch[1];
    const descLength = desc.length;
    if (descLength >= 150 && descLength <= 160) {
      console.log(`✅ Meta Description: ${descLength} chars (Optimal)`);
      passed.push(`${locationName}: Meta Description Length`);
    } else if (descLength < 150) {
      console.log(`⚠️  Meta Description: ${descLength} chars (Too short, aim for 150-160)`);
      warnings.push(`${locationName}: Description too short (${descLength} chars)`);
    } else {
      console.log(`⚠️  Meta Description: ${descLength} chars (Too long, max 160)`);
      warnings.push(`${locationName}: Description too long (${descLength} chars)`);
    }
  } else {
    console.log('❌ Meta Description: NOT FOUND');
    issues.push(`${locationName}: Missing Meta Description`);
  }
  
  // 4. Check Canonical URL
  if (content.includes('rel="canonical"')) {
    console.log('✅ Canonical URL: Present');
    passed.push(`${locationName}: Canonical URL`);
  } else {
    console.log('❌ Canonical URL: NOT FOUND');
    issues.push(`${locationName}: Missing Canonical URL`);
  }
  
  // 5. Check Schema Markup
  if (content.includes('application/ld+json')) {
    console.log('✅ Schema Markup: Present');
    passed.push(`${locationName}: Schema Markup`);
  } else {
    console.log('❌ Schema Markup: NOT FOUND');
    issues.push(`${locationName}: Missing Schema Markup`);
  }
  
  // 6. Check FAQ Section
  const faqCount = (content.match(/question:/g) || []).length;
  if (faqCount >= 8) {
    console.log(`✅ FAQ Section: ${faqCount} questions (Good)`);
    passed.push(`${locationName}: FAQ Section`);
  } else if (faqCount > 0) {
    console.log(`⚠️  FAQ Section: ${faqCount} questions (Consider adding more)`);
    warnings.push(`${locationName}: Only ${faqCount} FAQs`);
  } else {
    console.log('❌ FAQ Section: NOT FOUND');
    issues.push(`${locationName}: Missing FAQ Section`);
  }
  
  // 7. Check Phone Number
  if (content.includes('8828700630')) {
    console.log('✅ Phone Number: Present');
    passed.push(`${locationName}: Phone Number`);
  } else {
    console.log('❌ Phone Number: NOT FOUND');
    issues.push(`${locationName}: Missing Phone Number`);
  }
  
  // 8. Check CTA Buttons
  const ctaCount = (content.match(/Call:|WhatsApp|Book Free Pickup/g) || []).length;
  if (ctaCount >= 3) {
    console.log(`✅ CTA Buttons: ${ctaCount} found (Good)`);
    passed.push(`${locationName}: CTA Buttons`);
  } else {
    console.log(`⚠️  CTA Buttons: ${ctaCount} found (Consider adding more)`);
    warnings.push(`${locationName}: Only ${ctaCount} CTAs`);
  }
  
  // 9. Check Mobile Responsiveness Classes
  if (content.includes('sm:') && content.includes('md:') && content.includes('lg:')) {
    console.log('✅ Mobile Responsive: Tailwind breakpoints present');
    passed.push(`${locationName}: Mobile Responsive`);
  } else {
    console.log('⚠️  Mobile Responsive: Limited breakpoints');
    warnings.push(`${locationName}: Check mobile responsiveness`);
  }
  
  // 10. Check Keywords in Content
  const hasKeywords = content.includes('scrap dealer') && 
                      content.includes('free pickup') && 
                      content.includes('best rates');
  if (hasKeywords) {
    console.log('✅ SEO Keywords: Primary keywords present');
    passed.push(`${locationName}: SEO Keywords`);
  } else {
    console.log('⚠️  SEO Keywords: Some keywords missing');
    warnings.push(`${locationName}: Check keyword optimization`);
  }
});

// Summary Report
console.log('\n\n' + '='.repeat(60));
console.log('📊 SEO AUDIT SUMMARY');
console.log('='.repeat(60));

console.log(`\n✅ Passed Checks: ${passed.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`❌ Critical Issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n❌ CRITICAL ISSUES TO FIX:');
  issues.forEach(issue => console.log(`   - ${issue}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS (Consider Fixing):');
  warnings.forEach(warning => console.log(`   - ${warning}`));
}

console.log('\n' + '='.repeat(60));

// H1 Title Analysis
console.log('\n📝 H1 TITLE ANALYSIS');
console.log('─'.repeat(60));
console.log('Current Format: "#1 Scrap Dealer in [Location]"');
console.log('\n✅ SEO Benefits:');
console.log('   • Includes ranking signal "#1" for authority');
console.log('   • Primary keyword "Scrap Dealer" at start');
console.log('   • Location-specific for local SEO');
console.log('   • Clear and descriptive');
console.log('\n💡 Recommendation: KEEP CURRENT FORMAT');
console.log('   The "#1" prefix is good for:');
console.log('   - Building trust and authority');
console.log('   - Standing out in search results');
console.log('   - Local SEO optimization');
console.log('   - User click-through rate');

console.log('\n✨ Audit Complete!\n');
