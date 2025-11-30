# Schema Output Directory

This directory contains the extracted schema markup for all 9 location pages.

## Files

- `bandra-schema.json` - Schema for Bandra location
- `bandraEast-schema.json` - Schema for Bandra East location
- `dharavi-schema.json` - Schema for Dharavi location
- `dharaviKoliwada-schema.json` - Schema for Dharavi Koliwada location
- `goregaon-schema.json` - Schema for Goregaon location
- `jogeshwari-schema.json` - Schema for Jogeshwari location
- `kandivali-schema.json` - Schema for Kandivali location
- `mahim-schema.json` - Schema for Mahim location
- `nalasopara-schema.json` - Schema for Nalasopara location

## Usage

### Validate with Google Rich Results Test

1. Open https://search.google.com/test/rich-results
2. Click the "CODE" tab
3. Copy the content of any schema file (e.g., `bandra-schema.json`)
4. Paste into the test tool
5. Click "TEST CODE"
6. Review results and document in `SEO_VALIDATION_REPORT.md`

### Validate with Schema.org Validator

1. Open https://validator.schema.org/
2. Copy the content of any schema file
3. Paste into the validator
4. Review any warnings or suggestions

## Schema Structure

Each schema file contains a `@graph` with three schema types:

1. **RecyclingCenter** (LocalBusiness)
   - Business information (name, address, phone)
   - Geographic coordinates
   - Opening hours
   - Service area

2. **Service**
   - Service type and description
   - Provider reference
   - Offer catalog with scrap materials

3. **FAQPage**
   - Location-specific questions and answers
   - Minimum 5 FAQs per location

## Regenerating Schemas

To regenerate all schemas:

```bash
node scripts/extract-schema.js all
```

To regenerate a specific location:

```bash
node scripts/extract-schema.js bandra
```

## Notes

- These files are auto-generated from `src/data/locationData.js`
- Schema generation logic is in `src/utils/seoHelpers.js`
- All schemas should pass Google Rich Results Test without errors
- Keep these files updated when location data changes
