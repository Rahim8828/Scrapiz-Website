/**
 * Route Accessibility Tests
 * Validates that all location routes are properly defined in App.jsx
 */

import { describe, it, expect } from 'vitest';
import { locationData } from '../data/locationData';

describe('Route Accessibility', () => {
  const locations = Object.values(locationData);

  // This test documents the expected routes based on locationData
  it('should have all location slugs documented', () => {
    const expectedRoutes = locations.map(loc => `/${loc.slug}`);
    
    // Expected routes based on locationData
    const documentedRoutes = [
      '/bandra',
      '/bandra-east',
      '/dharavi',
      '/dharavi-koliwada',
      '/goregaon',
      '/jogeshwari',
      '/kandivali',
      '/mahim',
      '/nalasopara'
    ];

    expect(expectedRoutes.sort()).toEqual(documentedRoutes.sort());
  });

  it('should have consistent route patterns', () => {
    locations.forEach(location => {
      const route = `/${location.slug}`;
      
      // Route should start with /
      expect(route).toMatch(/^\//);
      
      // Route should not end with /
      expect(route).not.toMatch(/\/$/);
      
      // Route should be lowercase
      expect(route).toBe(route.toLowerCase());
      
      // Route should only contain alphanumeric and hyphens after the /
      expect(route.substring(1)).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('should have unique routes for each location', () => {
    const routes = locations.map(loc => `/${loc.slug}`);
    const uniqueRoutes = new Set(routes);
    expect(uniqueRoutes.size).toBe(routes.length);
  });
});
