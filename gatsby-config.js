
module.exports = {
  siteMetadata: {
    title: 'KodeMonk',
    description: 'My place on Internet - A blog about software development, technology and all that kind of geeky stuff.',
    baseUrl: 'https://kodemonk.dev', // used to create absolute URLs for SEO
    siteUrl: 'https://kodemonk.dev',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          // respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5579019823454845`
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `KodeMonk`,
        short_name: `KodeMonk`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              // noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              // containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'vscode'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            }
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogposts',
        path: './src/content/blog/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogpostimages',
        path: './src/content/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
  ],
};
