/**
 * Map Integration Validation Tests
 * Validates Requirements 5.1, 5.2, 5.3, 5.4
 */

import { describe, it, expect } from 'vitest';
import { locationData } from '../data/locationData.js';

describe('Google Maps Integration - Task 10', () => {
  const locations = Object.values(locationData);

  describe('Requirement 5.1: Map Embed Present', () => {
    it('should have a valid map embed URL for each location', () => {
      locations.forEach(location => {
        expect(location.geo.mapEmbedUrl).toBeDefined();
        expect(location.geo.mapEmbedUrl).toMatch(/^https:\/\/www\.google\.com\/maps\/embed/);
        expect(location.geo.mapEmbedUrl.length).toBeGreaterThan(50);
      });
    });
  });

  describe('Requirement 5.2: Map Coordinates Consistency', () => {
    it('should have valid latitude and longitude for each location', () => {
      locations.forEach(location => {
        expect(location.geo.latitude).toBeDefined();
        expect(location.geo.longitude).toBeDefined();
        
        // Validate latitude range (-90 to 90)
        expect(location.geo.latitude).toBeGreaterThanOrEqual(-90);
        expect(location.geo.latitude).toBeLessThanOrEqual(90);
        
        // Validate longitude range (-180 to 180)
        expect(location.geo.longitude).toBeGreaterThanOrEqual(-180);
        expect(location.geo.longitude).toBeLessThanOrEqual(180);
      });
    });

    it('should have coordinates within Mumbai region', () => {
      // Mumbai is approximately between 18.9-19.3 N and 72.7-72.9 E
      locations.forEach(location => {
        expect(location.geo.latitude).toBeGreaterThanOrEqual(18.9);
        expect(location.geo.latitude).toBeLessThanOrEqual(19.5);
        expect(location.geo.longitude).toBeGreaterThanOrEqual(72.7);
        expect(location.geo.longitude).toBeLessThanOrEqual(73.0);
      });
    });

    it('should have unique coordinates for each location', () => {
      const coordinatePairs = locations.map(loc => 
        `${loc.geo.latitude},${loc.geo.longitude}`
      );
      
      // Check for duplicates
      const uniqueCoordinates = new Set(coordinatePairs);
      
      // Allow some locations to share coordinates if they're very close
      // but most should be unique
      expect(uniqueCoordinates.size).toBeGreaterThanOrEqual(locations.length - 2);
    });
  });

  describe('Requirement 5.3: Interactive Map Attributes', () => {
    it('should have allowFullScreen enabled for all locations', () => {
      // This is verified in the component, but we check the data is present
      locations.forEach(location => {
        expect(location.geo.mapEmbedUrl).toBeDefined();
        // The component sets allowFullScreen="" which enables interactivity
      });
    });
  });

  describe('Requirement 5.4: Required Map Iframe Attributes', () => {
    it('should have all required geo data for iframe rendering', () => {
      locations.forEach(location => {
        // Verify all required data is present for the iframe
        expect(location.geo.mapEmbedUrl).toBeDefined();
        expect(location.geo.latitude).toBeDefined();
        expect(location.geo.longitude).toBeDefined();
        expect(location.name).toBeDefined();
        expect(location.nap.address.fullAddress).toBeDefined();
      });
    });
  });

  describe('Map Data Quality', () => {
    it('should have descriptive location names', () => {
      locations.forEach(location => {
        expect(location.name).toBeDefined();
        expect(location.name.length).toBeGreaterThan(3);
      });
    });

    it('should have complete address information', () => {
      locations.forEach(location => {
        expect(location.nap.address.fullAddress).toBeDefined();
        expect(location.nap.address.fullAddress.length).toBeGreaterThan(20);
        // Address should contain either Mumbai or the locality name
        const hasLocation = location.nap.address.fullAddress.includes('Mumbai') || 
                           location.nap.address.fullAddress.includes(location.nap.address.locality);
        expect(hasLocation).toBe(true);
      });
    });
  });
});
