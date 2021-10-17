const {withSentryConfig} = require('@sentry/nextjs');

const moduleExports = {
  // Your existing module.exports
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_URL: process.env.SENTRY_URL,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    PROD_URL: process.env.PROD_URL,
    SITE_URL: process.env.SITE_URL
  }
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
