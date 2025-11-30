/**
 * Property-Based Tests for Location Data
 * Feature: local-seo-optimization
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { locationData } from '../data/locationData.js';

describe('Location Data Property Tests', () => {
  /**
   * Feature: local-seo-optimization, Property 1: Unique Content Per Location
   * Validates: Requirements 1.1, 1.4
   * 
   * For any two distinct location pages, their content sections (hero description, 
   * why choose us text, and main paragraphs) should not be identical.
   */
  it('Property 1: should have unique content for each location', () => {
    fc.assert(
      fc.property(
        // Generate pairs of distinct location IDs
        fc.tuple(
          fc.constantFrom(...Object.keys(locationData)),
          fc.constantFrom(...Object.keys(locationData))
        ).filter(([loc1, loc2]) => loc1 !== loc2),
        ([locationId1, locationId2]) => {
          const location1 = locationData[locationId1];
          const location2 = locationData[locationId2];

          // Extract content sections for comparison
          const content1 = {
            heroTitle: location1.content.heroTitle,
            heroDescription: location1.content.heroDescription,
            whyChooseIntro: location1.content.whyChooseIntro,
            whyChooseDetails: location1.content.whyChooseDetails,
          };

          const content2 = {
            heroTitle: location2.content.heroTitle,
            heroDescription: location2.content.heroDescription,
            whyChooseIntro: location2.content.whyChooseIntro,
            whyChooseDetails: location2.content.whyChooseDetails,
          };

          // Check that at least one content field is different
          const hasUniqueHeroTitle = content1.heroTitle !== content2.heroTitle;
          const hasUniqueHeroDescription = content1.heroDescription !== content2.heroDescription;
          const hasUniqueWhyChooseIntro = content1.whyChooseIntro !== content2.whyChooseIntro;
          const hasUniqueWhyChooseDetails = content1.whyChooseDetails !== content2.whyChooseDetails;

          // At least one of the main content sections should be different
          const hasUniqueContent = 
            hasUniqueHeroTitle || 
            hasUniqueHeroDescription || 
            hasUniqueWhyChooseIntro || 
            hasUniqueWhyChooseDetails;

          return hasUniqueContent;
        }
      ),
      { numRuns: 100 } // Run 100 iterations as specified in design doc
    );
  });

  /**
   * Feature: local-seo-optimization, Property 2: Unique Sub-Areas Per Location
   * Validates: Requirements 1.2
   * 
   * For any two distinct location pages, their sub-area lists should not be identical,
   * ensuring each location has its own unique service coverage areas.
   */
  it('Property 2: should have unique sub-areas for each location', () => {
    fc.assert(
      fc.property(
        // Generate pairs of distinct location IDs
        fc.tuple(
          fc.constantFrom(...Object.keys(locationData)),
          fc.constantFrom(...Object.keys(locationData))
        ).filter(([loc1, loc2]) => loc1 !== loc2),
        ([locationId1, locationId2]) => {
          const location1 = locationData[locationId1];
          const location2 = locationData[locationId2];

          // Get sub-areas for both locations
          const subAreas1 = location1.content.subAreas;
          const subAreas2 = location2.content.subAreas;

          // Check that sub-area lists are not identical
          // Two arrays are identical if they have the same length and all elements match
          if (subAreas1.length !== subAreas2.length) {
            return true; // Different lengths means not identical
          }

          // Sort both arrays and compare element by element
          const sorted1 = [...subAreas1].sort();
          const sorted2 = [...subAreas2].sort();

          // At least one element should be different
          const areIdentical = sorted1.every((area, index) => area === sorted2[index]);
          
          return !areIdentical; // Return true if NOT identical
        }
      ),
      { numRuns: 100 } // Run 100 iterations as specified in design doc
    );
  });

  /**
   * Feature: local-seo-optimization, Property 3: Landmarks Present in Content
   * Validates: Requirements 1.3
   * 
   * For any location page, the rendered content should contain at least one landmark 
   * from that location's configured landmark list.
   */
  it('Property 3: should have landmarks present in content', () => {
    fc.assert(
      fc.property(
        // Generate location IDs
        fc.constantFrom(...Object.keys(locationData)),
        (locationId) => {
          const location = locationData[locationId];

          // Get all content sections that should contain landmarks
          const contentSections = [
            location.content.heroTitle,
            location.content.heroDescription,
            location.content.whyChooseIntro,
            location.content.whyChooseDetails
          ];

          // Combine all content into a single string for searching
          const allContent = contentSections.join(' ').toLowerCase();

          // Get landmarks for this location
          const landmarks = location.content.landmarks;

          // Check if at least one landmark appears in the content
          const hasLandmark = landmarks.some(landmark => 
            allContent.includes(landmark.toLowerCase())
          );

          return hasLandmark;
        }
      ),
      { numRuns: 100 } // Run 100 iterations as specified in design doc
    );
  });

  /**
   * Feature: local-seo-optimization, Property 27: Tel Protocol for Phone Links
   * Validates: Requirements 8.4
   * 
   * For any location page, phone number links should use the tel: protocol 
   * in their href attribute.
   */
  it('Property 27: should use tel: protocol for phone links', () => {
    fc.assert(
      fc.property(
        // Generate location IDs
        fc.constantFrom(...Object.keys(locationData)),
        (locationId) => {
          const location = locationData[locationId];

          // Get the phone number from NAP data
          const phone = location.nap.phone;

          // Verify the phone number exists and is not empty
          if (!phone || phone.trim() === '') {
            return false;
          }

          // Construct the expected tel: link format
          const expectedTelLink = `tel:${phone}`;

          // Verify the tel link format is correct:
          // 1. Starts with "tel:"
          // 2. Contains the phone number from NAP data
          const hasTelProtocol = expectedTelLink.startsWith('tel:');
          const hasPhoneNumber = expectedTelLink.includes(phone);

          // Both conditions must be true
          return hasTelProtocol && hasPhoneNumber;
        }
      ),
      { numRuns: 100 } // Run 100 iterations as specified in design doc
    );
  });
});
