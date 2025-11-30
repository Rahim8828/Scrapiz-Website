#!/usr/bin/env node

/**
 * Schema Extraction Script
 * Extracts schema markup from location pages for validation
 * 
 * Usage:
 *   node scripts/extract-schema.js [location]
 *   node scripts/extract-schema.js bandra
 *   node scripts/extract-schema.js all
 */

import { locationData } from '../src/data/locationData.js';
import { generateLocationSchema } from '../src/utils/seoHelpers.js';
import fs from 'fs';
import path from 'path';

const locations = Object.keys(locationData);

function extractSchema(locationKey) {
  const location = locationData[locationKey];
  if (!location) {
    console.error(`❌ Location "${locationKey}" not found`);
    return null;
  }

  const schema = generateLocationSchema(location);
  return schema;
}

function saveSchemaToFile(locationKey, schema) {
  const outputDir = path.join(process.cwd(), 'schema-output');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filename = path.join(outputDir, `${locationKey}-schema.json`);
  fs.writeFileSync(filename, JSON.stringify(schema, null, 2));
  
  return filename;
}

function validateSchemaStructure(schema) {
  const issues = [];
  
  // Check if @graph exists
  if (!schema['@graph']) {
    issues.push('Missing @graph structure');
    return issues;
  }

  const graph = schema['@graph'];
  
  // Check for LocalBusiness/RecyclingCenter
  const business = graph.find(item => item['@type'] === 'RecyclingCenter');
  if (!business) {
    issues.push('Missing RecyclingCenter schema');
  } else {
    // Validate required fields
    if (!business.name) issues.push('LocalBusiness: Missing name');
    if (!business.address) issues.push('LocalBusiness: Missing address');
    if (!business.telephone) issues.push('LocalBusiness: Missing telephone');
    if (!business.geo) issues.push('LocalBusiness: Missing geo coordinates');
    if (!business.openingHoursSpecification) issues.push('LocalBusiness: Missing opening hours');
  }

  // Check for Service schema
  const service = graph.find(item => item['@type'] === 'Service');
  if (!service) {
    issues.push('Missing Service schema');
  }

  // Check for FAQPage schema
  const faqPage = graph.find(item => item['@type'] === 'FAQPage');
  if (!faqPage) {
    issues.push('Missing FAQPage schema');
  } else {
    if (!faqPage.mainEntity || faqPage.mainEntity.length === 0) {
      issues.push('FAQPage: No FAQ items found');
    }
  }

  return issues;
}

function displaySchema(locationKey) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`📍 Location: ${locationKey.toUpperCase()}`);
  console.log(`${'='.repeat(80)}\n`);

  const schema = extractSchema(locationKey);
  if (!schema) return;

  // Validate structure
  const issues = validateSchemaStructure(schema);
  
  if (issues.length === 0) {
    console.log('✅ Schema structure validation: PASSED\n');
  } else {
    console.log('⚠️  Schema structure validation: ISSUES FOUND\n');
    issues.forEach(issue => console.log(`   - ${issue}`));
    console.log('');
  }

  // Save to file
  const filename = saveSchemaToFile(locationKey, schema);
  console.log(`💾 Schema saved to: ${filename}\n`);

  // Display schema types
  if (schema['@graph']) {
    console.log('📋 Schema Types Found:');
    schema['@graph'].forEach(item => {
      console.log(`   - ${item['@type']} (${item['@id']})`);
    });
    console.log('');
  }

  // Display JSON
  console.log('📄 Schema JSON:');
  console.log(JSON.stringify(schema, null, 2));
  console.log('');
}

function generateValidationReport() {
  console.log('\n' + '='.repeat(80));
  console.log('📊 SCHEMA VALIDATION REPORT');
  console.log('='.repeat(80) + '\n');

  const results = [];

  locations.forEach(locationKey => {
    const schema = extractSchema(locationKey);
    if (!schema) return;

    const issues = validateSchemaStructure(schema);
    results.push({
      location: locationKey,
      status: issues.length === 0 ? 'PASS' : 'ISSUES',
      issues: issues
    });
  });

  // Display summary
  console.log('Summary:');
  console.log(`Total Locations: ${results.length}`);
  console.log(`Passed: ${results.filter(r => r.status === 'PASS').length}`);
  console.log(`Issues: ${results.filter(r => r.status === 'ISSUES').length}`);
  console.log('');

  // Display details
  results.forEach(result => {
    const icon = result.status === 'PASS' ? '✅' : '⚠️';
    console.log(`${icon} ${result.location.padEnd(20)} ${result.status}`);
    if (result.issues.length > 0) {
      result.issues.forEach(issue => {
        console.log(`     - ${issue}`);
      });
    }
  });

  console.log('\n' + '='.repeat(80) + '\n');
}

// Main execution
const args = process.argv.slice(2);
const command = args[0] || 'all';

if (command === 'all') {
  generateValidationReport();
  console.log('💡 Tip: Run "node scripts/extract-schema.js <location>" to see detailed schema for a specific location');
  console.log('💡 Example: node scripts/extract-schema.js bandra\n');
} else if (command === 'report') {
  generateValidationReport();
} else if (locations.includes(command)) {
  displaySchema(command);
} else {
  console.error(`❌ Unknown location: ${command}`);
  console.log('\nAvailable locations:');
  locations.forEach(loc => console.log(`  - ${loc}`));
  console.log('\nUsage:');
  console.log('  node scripts/extract-schema.js [location|all|report]');
  process.exit(1);
}
