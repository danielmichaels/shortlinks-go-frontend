module.exports = {
  siteUrls: process.env.DOMAIN_NAME || 'https://tars.run',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
  }
}
