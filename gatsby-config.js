module.exports = {
  siteMetadata: {
    title: 'Shiboon | The first world’s dual meme coin',
    description: 'SHIBOON, the first dual meme coin: double the fun and earnings. Let the blockchain battle commence!',
    // eslint-disable-next-line n/no-path-concat
    image: `${__dirname}/src/images/og-image.png`,
    author: '@CyberScalper',
    siteUrl: 'https://shiboon.com/'
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-image',
    'gatsby-transformer-ffmpeg',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-lottie']
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // Directory with the strings JSON
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: ['en', 'de', 'it', 'jp', 'es'],
        // Default site language
        defaultLanguage: 'en',
        // Redirects to `/pt` in the route `/`
        redirect: false
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'shiboon-landing-page',
        short_name: 'Shiboon',
        start_url: '/',
        background_color: 'rgb(3 9 22)',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    }
  ]
}
