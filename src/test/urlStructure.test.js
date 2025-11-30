/**
 * URL Structure Consistency Tests
 * Validates that all location slugs follow consistent patterns
 * and canonical URLs are correctly configured
 */

import { describe, it, expect } from 'vitest';
import { locationData } from '../data/locationData';

describe('URL Structure Consistency', () => {
  const locations = Object.values(locationData);

  describe('Slug Pattern Validation', () => {
    it('should have all slugs in lowercase', () => {
      locations.forEach(location => {
        expect(location.slug).toBe(location.slug.toLowerCase());
      });
    });

    it('should have slugs with only alphanumeric characters and hyphens', () => {
      const validSlugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
      locations.forEach(location => {
        expect(location.slug).toMatch(validSlugPattern);
      });
    });

    it('should not have slugs starting or ending with hyphens', () => {
      locations.forEach(location => {
        expect(location.slug).not.toMatch(/^-/);
        expect(location.slug).not.toMatch(/-$/);
      });
    });

    it('should not have consecutive hyphens in slugs', () => {
      locations.forEach(location => {
        expect(location.slug).not.toMatch(/--/);
      });
    });

    it('should have unique slugs for each location', () => {
      const slugs = locations.map(loc => loc.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });
  });

  describe('Canonical URL Validation', () => {
    it('should have canonical URLs for all locations', () => {
      locations.forEach(location => {
        expect(location.seo.canonical).toBeDefined();
        expect(location.seo.canonical).toBeTruthy();
      });
    });

    it('should have canonical URLs matching the slug pattern', () => {
      locations.forEach(location => {
        const expectedUrl = `https://www.scrapiz.in/${location.slug}`;
        expect(location.seo.canonical).toBe(expectedUrl);
      });
    });

    it('should have canonical URLs with HTTPS protocol', () => {
      locations.forEach(location => {
        expect(location.seo.canonical).toMatch(/^https:\/\//);
      });
    });

    it('should have canonical URLs without trailing slashes', () => {
      locations.forEach(location => {
        expect(location.seo.canonical).not.toMatch(/\/$/);
      });
    });

    it('should have canonical URLs with correct domain', () => {
      locations.forEach(location => {
        expect(location.seo.canonical).toContain('scrapiz.in');
      });
    });
  });

  describe('ID and Slug Consistency', () => {
    it('should have matching id and slug for each location', () => {
      locations.forEach(location => {
        expect(location.id).toBe(location.slug);
      });
    });
  });

  describe('Route Accessibility', () => {
    it('should list all expected location routes', () => {
      const expectedSlugs = [
        'bandra',
        'bandra-east',
        'dharavi',
        'dharavi-koliwada',
        'goregaon',
        'jogeshwari',
        'kandivali',
        'mahim',
        'nalasopara'
      ];

      const actualSlugs = locations.map(loc => loc.slug).sort();
      expect(actualSlugs).toEqual(expectedSlugs.sort());
    });
  });
});
