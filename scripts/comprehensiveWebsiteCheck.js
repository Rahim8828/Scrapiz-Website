import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 COMPREHENSIVE WEBSITE CHECK\n');
console.log('='.repeat(60));

const issues = [];
const warnings = [];
const passed = [];

// 1. Check all JSX files for common issues
console.log('\n📄 Checking JSX Files...\n');

const checkDirectory = (dir, filePattern = /\.jsx$/) => {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      files.push(...checkDirectory(fullPath, filePattern));
    } else if (item.isFile() && filePattern.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
};

const srcDir = path.join(__dirname, '../src');
const jsxFiles = checkDirectory(srcDir);

console.log(`Found ${jsxFiles.length} JSX files to check\n`);

let totalIssues = 0;

jsxFiles.forEach(filePath => {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for common issues
  const fileIssues = [];
  
  // 1. Check for console.log (should be removed in production)
  if (content.includes('console.log(') || content.includes('console.error(')) {
    fileIssues.push('Contains console statements');
  }
  
  // 2. Check for TODO comments
  if (content.includes('TODO') || content.includes('FIXME')) {
    fileIssues.push('Contains TODO/FIXME comments');
  }
  
  // 3. Check for unused imports (React)
  if (content.includes("import React") && !content.includes('React.')) {
    // This is actually OK for JSX, skip
  }
  
  // 4. Check for missing key props in maps (improved detection)
  // Look for .map() followed by JSX within next 200 characters
  const mapPattern = /\.map\([^)]+\)\s*=>\s*[\(\s]*(<[A-Z][^>]{0,200}>)/g;
  let match;
  while ((match = mapPattern.exec(content)) !== null) {
    const jsxPart = match[1];
    // Check if the JSX element has a key prop
    if (!jsxPart.includes('key=')) {
      fileIssues.push('Missing key prop in .map()');
    }
  }
  
  // 5. Check for hardcoded phone numbers (should use variable)
  const phoneMatches = content.match(/8828700630/g);
  if (phoneMatches && phoneMatches.length > 5) {
    // OK if used in multiple places
  }
  
  // 6. Check for proper closing tags
  const openTags = (content.match(/<[a-zA-Z][^>]*>/g) || []).length;
  const closeTags = (content.match(/<\/[a-zA-Z][^>]*>/g) || []).length;
  const selfClosing = (content.match(/<[a-zA-Z][^>]*\/>/g) || []).length;
  
  // Rough check (not perfect but catches major issues)
  if (Math.abs(openTags - closeTags - selfClosing) > 5) {
    fileIssues.push('Possible unclosed tags');
  }
  
  if (fileIssues.length > 0) {
    console.log(`⚠️  ${relativePath}:`);
    fileIssues.forEach(issue => console.log(`   - ${issue}`));
    totalIssues += fileIssues.length;
    warnings.push(`${relativePath}: ${fileIssues.join(', ')}`);
  }
});

console.log(`\n✅ JSX Check Complete: ${totalIssues} potential issues found\n`);

// 2. Check App.jsx for route configuration
console.log('🛣️  Checking Routes...\n');

const appPath = path.join(srcDir, 'App.jsx');
const appContent = fs.readFileSync(appPath, 'utf8');

// Count routes
const routeCount = (appContent.match(/<Route/g) || []).length;
console.log(`✅ Found ${routeCount} routes configured`);

// Check for 404 route
if (appContent.includes('path="*"') || appContent.includes('path=\'*\'')) {
  console.log('✅ 404 catch-all route present');
  passed.push('404 route configured');
} else {
  console.log('⚠️  No 404 catch-all route found');
  warnings.push('Missing 404 route');
}

// 3. Check for broken imports
console.log('\n📦 Checking Imports...\n');

let brokenImports = 0;
jsxFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  
  // Find all relative imports
  const importMatches = content.match(/from ['"]\.\.?\/[^'"]+['"]/g);
  if (importMatches) {
    importMatches.forEach(imp => {
      const importPath = imp.match(/from ['"]([^'"]+)['"]/)[1];
      const fullImportPath = path.resolve(path.dirname(filePath), importPath);
      
      // Check if file exists (try with and without extensions)
      const extensions = ['', '.js', '.jsx', '.ts', '.tsx'];
      let exists = false;
      
      for (const ext of extensions) {
        if (fs.existsSync(fullImportPath + ext)) {
          exists = true;
          break;
        }
      }
      
      if (!exists && !importPath.includes('node_modules')) {
        console.log(`❌ ${relativePath}: Broken import ${importPath}`);
        brokenImports++;
        issues.push(`${relativePath}: Broken import ${importPath}`);
      }
    });
  }
});

if (brokenImports === 0) {
  console.log('✅ All imports look good');
  passed.push('All imports valid');
} else {
  console.log(`❌ Found ${brokenImports} broken imports`);
}

// 4. Check package.json
console.log('\n📦 Checking package.json...\n');

const packagePath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

console.log(`✅ Project: ${packageJson.name}`);
console.log(`✅ Version: ${packageJson.version}`);
console.log(`✅ Dependencies: ${Object.keys(packageJson.dependencies || {}).length}`);
console.log(`✅ Dev Dependencies: ${Object.keys(packageJson.devDependencies || {}).length}`);

// Check for essential dependencies
const essentialDeps = ['react', 'react-dom', 'react-router-dom'];
essentialDeps.forEach(dep => {
  if (packageJson.dependencies[dep]) {
    console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    passed.push(`${dep} installed`);
  } else {
    console.log(`❌ Missing: ${dep}`);
    issues.push(`Missing dependency: ${dep}`);
  }
});

// 5. Check for duplicate files
console.log('\n🔍 Checking for Duplicates...\n');

const fileHashes = new Map();
jsxFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  if (fileHashes.has(fileName)) {
    fileHashes.get(fileName).push(filePath);
  } else {
    fileHashes.set(fileName, [filePath]);
  }
});

let duplicates = 0;
fileHashes.forEach((paths, fileName) => {
  if (paths.length > 1) {
    console.log(`⚠️  Duplicate filename: ${fileName}`);
    paths.forEach(p => console.log(`   - ${path.relative(path.join(__dirname, '..'), p)}`));
    duplicates++;
    warnings.push(`Duplicate filename: ${fileName}`);
  }
});

if (duplicates === 0) {
  console.log('✅ No duplicate filenames found');
  passed.push('No duplicate files');
}

// 6. Check public folder
console.log('\n📁 Checking Public Assets...\n');

const publicDir = path.join(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  console.log(`✅ Found ${publicFiles.length} files in public folder`);
  
  // Check for essential files
  const essentialPublic = ['robots.txt', 'sitemap.xml'];
  essentialPublic.forEach(file => {
    if (publicFiles.includes(file)) {
      console.log(`✅ ${file} present`);
      passed.push(`${file} exists`);
    } else {
      console.log(`⚠️  ${file} missing`);
      warnings.push(`Missing ${file}`);
    }
  });
} else {
  console.log('❌ Public folder not found');
  issues.push('Public folder missing');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 WEBSITE CHECK SUMMARY');
console.log('='.repeat(60));

console.log(`\n✅ Passed: ${passed.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`❌ Critical Issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n❌ CRITICAL ISSUES:');
  issues.forEach(issue => console.log(`   - ${issue}`));
}

if (warnings.length > 0 && warnings.length <= 10) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(warning => console.log(`   - ${warning}`));
} else if (warnings.length > 10) {
  console.log(`\n⚠️  ${warnings.length} warnings found (mostly minor)`);
}

console.log('\n' + '='.repeat(60));

if (issues.length === 0) {
  console.log('\n✨ Website looks good! No critical bugs found.\n');
} else {
  console.log('\n⚠️  Please fix critical issues before deployment.\n');
}
