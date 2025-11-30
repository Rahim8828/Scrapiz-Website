# Implementation Plan

- [x] 1. Create centralized location data configuration
  - Create `src/data/locationData.js` file with complete data structure for all 9 locations
  - Include NAP data (business name, address, phone, email, hours) matching GMB listings exactly
  - Add geographic data (latitude, longitude, map embed URLs) for each location
  - Add unique content (hero titles, descriptions, landmarks, sub-areas) for each location
  - Add local keywords (primary and secondary) for each location
  - Add SEO metadata (title, description, keywords, canonical URL) for each location
  - Add location-specific FAQs for each location
  - Add image paths and alt text for each location
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 4.1, 4.2, 4.3_

- [x] 1.1 Write property test for unique content per location
  - **Property 1: Unique Content Per Location**
  - **Validates: Requirements 1.1, 1.4**

- [x] 1.2 Write property test for unique sub-areas per location
  - **Property 2: Unique Sub-Areas Per Location**
  - **Validates: Requirements 1.2**

- [x] 1.3 Write property test for landmarks in content
  - **Property 3: Landmarks Present in Content**
  - **Validates: Requirements 1.3**

- [x] 2. Create SEO utility functions
  - Create `src/utils/seoHelpers.js` file
  - Implement `generateLocationSchema()` function that creates comprehensive schema markup
  - Include LocalBusiness schema with all NAP data and coordinates
  - Include Service schema with service offerings
  - Include FAQPage schema when FAQs are present
  - Implement schema validation helper functions
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ]* 2.1 Write property test for complete LocalBusiness schema
  - **Property 4: Complete LocalBusiness Schema**
  - **Validates: Requirements 2.1**

- [ ]* 2.2 Write property test for FAQPage schema completeness
  - **Property 5: FAQPage Schema Completeness**
  - **Validates: Requirements 2.2**

- [ ]* 2.3 Write property test for Service schema presence
  - **Property 6: Service Schema Present**
  - **Validates: Requirements 2.3**

- [ ]* 2.4 Write property test for geographic coordinates in schema
  - **Property 7: Geographic Coordinates in Schema**
  - **Validates: Requirements 2.4**

- [x] 3. Create reusable location page components
  - Create `src/components/LocationHero.jsx` component
  - Create `src/components/LocationWhyChoose.jsx` component
  - Create `src/components/LocationContact.jsx` component
  - Create `src/components/LocationMap.jsx` component
  - Create `src/components/LocationFAQ.jsx` component
  - Create `src/components/LocationNearby.jsx` component
  - Each component should accept location data as props
  - Each component should render location-specific content from the data
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ]* 3.1 Write property test for complete page structure
  - **Property 28: Complete Page Structure**
  - **Validates: Requirements 9.1**

- [ ]* 3.2 Write property test for location-specific Why Choose Us
  - **Property 29: Location-Specific Why Choose Us**
  - **Validates: Requirements 9.2**

- [ ]* 3.3 Write property test for location-specific services
  - **Property 30: Location-Specific Services**
  - **Validates: Requirements 9.3**

- [ ]* 3.4 Write property test for location-specific FAQs
  - **Property 31: Location-Specific FAQs**
  - **Validates: Requirements 9.4**

- [ ]* 3.5 Write property test for multiple contact methods
  - **Property 32: Multiple Contact Methods**
  - **Validates: Requirements 9.5**

- [x] 4. Refactor Bandra location page
  - Update `src/pages/Bandra.jsx` to use centralized location data
  - Import location data from `locationData.js`
  - Replace hardcoded content with data-driven components
  - Use new reusable components (LocationHero, LocationWhyChoose, etc.)
  - Implement schema markup using `generateLocationSchema()`
  - Ensure NAP consistency throughout the page
  - Add nearby locations section with internal links
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.2, 7.3, 7.4_

- [ ]* 4.1 Write property test for NAP consistency - business name
  - **Property 17: NAP Consistency - Business Name**
  - **Validates: Requirements 6.1**

- [ ]* 4.2 Write property test for NAP consistency - address
  - **Property 18: NAP Consistency - Address**
  - **Validates: Requirements 6.2**

- [ ]* 4.3 Write property test for NAP consistency - phone
  - **Property 19: NAP Consistency - Phone**
  - **Validates: Requirements 6.3**

- [ ]* 4.4 Write property test for NAP consistency - hours
  - **Property 20: NAP Consistency - Hours**
  - **Validates: Requirements 6.4**

- [ ]* 4.5 Write property test for NAP schema consistency
  - **Property 21: NAP Schema Consistency**
  - **Validates: Requirements 6.5**

- [x] 5. Refactor BandraEast location page
  - Update `src/pages/BandraEast.jsx` to use centralized location data
  - Import location data from `locationData.js`
  - Replace hardcoded content with data-driven components
  - Use new reusable components
  - Implement schema markup
  - Ensure NAP consistency
  - Add nearby locations section
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.2, 7.3, 7.4_

- [x] 6. Refactor Dharavi location page
  - Update `src/pages/Dharavi.jsx` to use centralized location data
  - Import location data from `locationData.js`
  - Replace hardcoded content with data-driven components
  - Use new reusable components
  - Implement schema markup
  - Ensure NAP consistency
  - Add nearby locations section
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.2, 7.3, 7.4_

- [x] 7. Refactor Goregaon location page
  - Update `src/pages/Goregaon.jsx` to use centralized location data
  - Import location data from `locationData.js`
  - Replace hardcoded content with data-driven components
  - Use new reusable components
  - Implement schema markup
  - Ensure NAP consistency
  - Add nearby locations section
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.2, 7.3, 7.4_

- [x] 8. Refactor remaining location pages (Jogeshwari, Kandivali, Mahim, DharaviKoliwada, Nalasopara)
  - Update each location page to use centralized location data
  - Import location data from `locationData.js`
  - Replace hardcoded content with data-driven components
  - Use new reusable components
  - Implement schema markup
  - Ensure NAP consistency
  - Add nearby locations section for each
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 7.2, 7.3, 7.4_

- [ ]* 8.1 Write property test for nearby locations present
  - **Property 22: Nearby Locations Present**
  - **Validates: Requirements 7.2**

- [ ]* 8.2 Write property test for nearby locations count
  - **Property 23: Nearby Locations Count**
  - **Validates: Requirements 7.3**

- [ ]* 8.3 Write property test for descriptive link anchor text
  - **Property 24: Descriptive Link Anchor Text**
  - **Validates: Requirements 7.4**

- [x] 9. Optimize location pages for local keywords
  - Review each location's content to ensure primary keyword is in H1
  - Ensure secondary keywords are in H2 and H3 headings
  - Naturally incorporate keyword variations in body content
  - Verify each location has 8-12 unique keyword variations
  - Maintain natural language flow (no keyword stuffing)
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ]* 9.1 Write property test for primary keyword in H1
  - **Property 9: Primary Keyword in H1**
  - **Validates: Requirements 4.1**

- [ ]* 9.2 Write property test for secondary keywords in subheadings
  - **Property 10: Secondary Keywords in Subheadings**
  - **Validates: Requirements 4.2**

- [ ]* 9.3 Write property test for keywords in body content
  - **Property 11: Keywords in Body Content**
  - **Validates: Requirements 4.3**

- [ ]* 9.4 Write property test for minimum keyword variety
  - **Property 12: Minimum Keyword Variety**
  - **Validates: Requirements 4.4**

- [x] 10. Enhance Google Maps integration
  - Verify each location's map embed URL is correct
  - Ensure map coordinates match GMB listings
  - Add proper iframe attributes (width, height, loading, referrerPolicy)
  - Ensure maps are interactive (no restrictive attributes)
  - Test map functionality on mobile devices
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ]* 10.1 Write property test for map embed present
  - **Property 13: Map Embed Present**
  - **Validates: Requirements 5.1**

- [ ]* 10.2 Write property test for map coordinates consistency
  - **Property 14: Map Coordinates Consistency**
  - **Validates: Requirements 5.2**

- [ ]* 10.3 Write property test for interactive map attributes
  - **Property 15: Interactive Map Attributes**
  - **Validates: Requirements 5.3**

- [ ]* 10.4 Write property test for required map iframe attributes
  - **Property 16: Required Map Iframe Attributes**
  - **Validates: Requirements 5.4**

- [x] 11. Update main Locations page
  - Update `src/pages/Locations.jsx` to list all 9 locations
  - Display location cards with images, addresses, and phone numbers
  - Add clickable links to each location page
  - Use descriptive anchor text including location names
  - Ensure proper grid layout for desktop and mobile
  - _Requirements: 7.1, 7.4_

- [x] 12. Update Footer component with location links
  - Update `src/components/Footer.jsx` to include all 9 location links
  - Add a "Our Locations" section in the footer
  - Use descriptive anchor text for each location link
  - Ensure links are properly styled and accessible
  - _Requirements: 7.5_

- [ ]* 12.1 Write property test for footer location links
  - **Property 25: Footer Location Links**
  - **Validates: Requirements 7.5**

- [x] 13. Optimize images and performance
  - Add loading="lazy" attribute to all location images
  - Ensure images are in optimized formats (WebP where supported)
  - Verify image alt text is descriptive and includes location names
  - Test image loading performance
  - _Requirements: 8.3_

- [ ]* 13.1 Write property test for lazy loading images
  - **Property 26: Lazy Loading Images**
  - **Validates: Requirements 8.3**

- [x] 14. Ensure mobile-friendly contact links
  - Verify all phone number links use tel: protocol
  - Verify all WhatsApp links use correct wa.me format
  - Verify all email links use mailto: protocol
  - Test that links trigger appropriate apps on mobile devices
  - _Requirements: 8.4_

- [x] 14.1 Write property test for tel protocol in phone links
  - **Property 27: Tel Protocol for Phone Links**
  - **Validates: Requirements 8.4**

- [x] 15. Verify URL structure consistency
  - Ensure all location slugs follow consistent pattern (lowercase, hyphenated)
  - Verify canonical URLs are correctly set for each location
  - Update routing in `src/App.jsx` if needed
  - Test that all location URLs are accessible
  - _Requirements: 3.3_

- [ ]* 15.1 Write property test for consistent URL structure
  - **Property 8: Consistent URL Structure**
  - **Validates: Requirements 3.3**

- [x] 16. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 17. Manual SEO validation
  - Run each location page through Google Rich Results Test
  - Verify structured data is recognized without errors
  - Check for any schema validation warnings
  - Document any issues found
  - _Requirements: 2.5_

- [x] 18. Create GMB update documentation
  - Create a document listing all 9 GMB locations
  - Include the correct website URL for each GMB listing
  - Provide instructions for updating GMB website field
  - Verify one-to-one mapping between GMB and website pages
  - _Requirements: 3.1, 3.2, 3.4_
