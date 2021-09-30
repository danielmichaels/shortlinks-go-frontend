module.exports = {
  siteUrls: process.env.SITE_URL || "https://s.danielms.site",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: ['/api', '/settings', '/dashboard']
      }
    ],
  }
}
