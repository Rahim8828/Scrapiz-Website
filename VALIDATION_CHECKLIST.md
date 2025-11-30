# SEO Validation Checklist

## Quick Start Guide

This checklist helps you validate the schema markup for all 9 location pages using Google Rich Results Test.

---

## Prerequisites

- [ ] Development server is running (`npm run dev`)
- [ ] All location pages are accessible
- [ ] Browser with developer tools available
- [ ] Access to Google Rich Results Test (https://search.google.com/test/rich-results)

---

## Validation Steps

### Option 1: Using the Schema Extraction Script (Recommended)

1. **Extract all schemas:**
   ```bash
   node scripts/extract-schema.js all
   ```

2. **Extract specific location schema:**
   ```bash
   node scripts/extract-schema.js bandra
   ```

3. **Check the output:**
   - Schemas are saved to `schema-output/` directory
   - Review the validation report in the console
   - Fix any issues reported

4. **Test in Google Rich Results Test:**
   - Open https://search.google.com/test/rich-results
   - Click "CODE" tab
   - Copy schema from `schema-output/{location}-schema.json`
   - Paste and click "TEST CODE"
   - Document results in `SEO_VALIDATION_REPORT.md`

### Option 2: Manual Extraction from Browser

1. **Open location page** (e.g., http://localhost:5173/bandra)
2. **View page source** (Ctrl+U or Cmd+U)
3. **Find the schema markup:**
   - Search for `<script type="application/ld+json">`
   - Copy the entire JSON content
4. **Test in Google Rich Results Test:**
   - Open https://search.google.com/test/rich-results
   - Click "CODE" tab
   - Paste the schema JSON
   - Click "TEST CODE"
5. **Document results** in `SEO_VALIDATION_REPORT.md`

---

## Validation Checklist per Location

For each location, verify:

### Schema Structure
- [ ] `@context` is "https://schema.org"
- [ ] `@graph` array exists
- [ ] All three schema types present:
  - [ ] RecyclingCenter (LocalBusiness)
  - [ ] Service
  - [ ] FAQPage

### RecyclingCenter Schema
- [ ] `@type` is "RecyclingCenter"
- [ ] `@id` follows pattern: `https://www.scrapiz.in/{location}#business`
- [ ] `name` matches NAP data
- [ ] `description` is present and descriptive
- [ ] `image` URL is valid
- [ ] `address` object complete:
  - [ ] `streetAddress`
  - [ ] `addressLocality` (Mumbai)
  - [ ] `addressRegion` (Maharashtra)
  - [ ] `postalCode`
  - [ ] `addressCountry` (IN)
- [ ] `geo` coordinates present:
  - [ ] `latitude` (valid number)
  - [ ] `longitude` (valid number)
- [ ] `telephone` in format +91XXXXXXXXXX
- [ ] `email` is Contact@scrapiz.in
- [ ] `url` matches canonical URL
- [ ] `openingHoursSpecification` array with 7 days
- [ ] `priceRange` is present
- [ ] `areaServed` specifies the city

### Service Schema
- [ ] `@type` is "Service"
- [ ] `@id` follows pattern: `https://www.scrapiz.in/{location}#service`
- [ ] `serviceType` is "Scrap Collection and Recycling"
- [ ] `provider` references business @id
- [ ] `areaServed` specifies the location
- [ ] `hasOfferCatalog` present with items:
  - [ ] Iron & Steel Scrap Collection
  - [ ] Aluminum Scrap Collection
  - [ ] Copper Scrap Collection
  - [ ] E-Waste Collection

### FAQPage Schema
- [ ] `@type` is "FAQPage"
- [ ] `@id` follows pattern: `https://www.scrapiz.in/{location}#faq`
- [ ] `mainEntity` array exists
- [ ] Each FAQ has:
  - [ ] `@type` is "Question"
  - [ ] `name` (the question)
  - [ ] `acceptedAnswer` object with:
    - [ ] `@type` is "Answer"
    - [ ] `text` (the answer)
- [ ] At least 5 FAQs present

### Google Rich Results Test
- [ ] No errors (red indicators)
- [ ] No critical warnings
- [ ] All schema types recognized
- [ ] Preview displays correctly

---

## Location Validation Status

Track your progress:

- [ ] **Bandra** - `/bandra`
- [ ] **Bandra East** - `/bandra-east`
- [ ] **Dharavi** - `/dharavi`
- [ ] **Dharavi Koliwada** - `/dharavi-koliwada`
- [ ] **Goregaon** - `/goregaon`
- [ ] **Jogeshwari** - `/jogeshwari`
- [ ] **Kandivali** - `/kandivali`
- [ ] **Mahim** - `/mahim`
- [ ] **Nalasopara** - `/nalasopara`

---

## Common Issues and Solutions

### Issue: "Missing required field"
**Solution:** Check that all required fields in the schema are present and not empty.

### Issue: "Invalid date/time format"
**Solution:** Ensure opening hours follow the format "HH:MM AM/PM" (e.g., "9:00 AM").

### Issue: "Invalid URL"
**Solution:** Verify all URLs are absolute and properly formatted (https://...).

### Issue: "Coordinates out of range"
**Solution:** Latitude should be between -90 and 90, longitude between -180 and 180.

### Issue: "Duplicate @id"
**Solution:** Ensure each schema item has a unique @id within the @graph.

---

## After Validation

Once all locations pass validation:

1. **Update SEO_VALIDATION_REPORT.md:**
   - Mark each location as validated
   - Document any issues found and resolved
   - Add screenshots if needed

2. **Create summary:**
   - Total locations validated: 9
   - Total passed: [number]
   - Total issues found: [number]
   - Total issues resolved: [number]

3. **Next steps:**
   - Deploy to production
   - Update GMB listings with correct URLs
   - Monitor Google Search Console
   - Set up automated schema validation

---

## Resources

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **Schema.org LocalBusiness:** https://schema.org/LocalBusiness
- **Schema.org FAQPage:** https://schema.org/FAQPage
- **Google Search Central:** https://developers.google.com/search/docs/appearance/structured-data

---

## Notes

- Validation should be done before production deployment
- Re-validate after any schema changes
- Keep documentation updated
- Consider automated validation in CI/CD
