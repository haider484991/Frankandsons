/** @type {import('next-sitemap').IConfig} */
const { states, services } = require('./sitemap-data');

// Filter to only include California
const californiaState = states.find(state => state.id === 'california');
const statePages = californiaState ? [californiaState] : [];

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://frankandsonsexterminators.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/api/*', '/_next/*', '/static/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/404',
          '/500',
          '/api/*',
          '/_next/*',
          '/static/*',
          '/*?*',
        ],
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 
        path === '/' ? 'daily' :
        path.match(/\/california\/[^/]+\/[^/]+$/) ? 'monthly' :
        path.match(/\/california\/[^/]+$/) ? 'monthly' :
        path.match(/\/(about|contact|privacy-policy|termsandservices)$/) ? 'monthly' :
        path.match(/\/services\/[^/]+$/) ? 'monthly' :
        'weekly',
      priority: 
        path === '/' ? 1.0 :
        path.match(/\/california\/[^/]+\/[^/]+$/) ? 0.6 :
        path.match(/\/california\/[^/]+$/) ? 0.7 :
        path.match(/\/(about|contact)$/) ? 0.8 :
        path.match(/\/(privacy-policy|termsandservices)$/) ? 0.4 :
        path.match(/\/services\/[^/]+$/) ? 0.8 :
        0.5,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add static pages
    const staticPages = [
      { path: '/about', priority: 0.8 },
      { path: '/contact', priority: 0.8 },
      { path: '/privacy-policy', priority: 0.4 },
      { path: '/termsandservices', priority: 0.4 },
      { path: '/locations', priority: 0.7 },
    ];

    staticPages.forEach(page => {
      result.push({
        loc: page.path,
        changefreq: 'monthly',
        priority: page.priority,
      });
    });

    // Add service pages
    services.forEach(service => {
      result.push({
        loc: `/services/${service.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
      });
    });

    // Add California state page
    if (californiaState) {
      result.push({
        loc: `/california`,
        changefreq: 'monthly',
        priority: 0.8,
      });

      // Add service pages for each city
      californiaState.majorCities.forEach(city => {
        const citySlug = city.toLowerCase().replace(/\s+/g, '-');

        // Add service pages for each city
        services.forEach(service => {
          result.push({
            loc: `/california/${citySlug}-ca/${service.slug}`,
            changefreq: 'monthly',
            priority: 0.6,
          });
        });
      });
    }

    return result;
  },
};