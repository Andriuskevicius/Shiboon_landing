module.exports = {
  siteMetadata: {
    title: 'Shiboon',
    description: '',
    // eslint-disable-next-line n/no-path-concat
    image: `${__dirname}/src/images/token-1.png`,
    author: '@ErnestasAndriuskevicius',
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
        languages: ['ar', 'bg', 'cz', 'de', 'el', 'en', 'es', 'fr', 'hu', 'id', 'it', 'jp', 'kr', 'nl', 'pt', 'ro', 'ru', 'sk', 'tr', 'vn'],
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'rgb(3 9 22)',
        display: 'minimal-ui',
        icon: 'src/images/lucky-boo-favicon.jpg' // This path is relative to the root of the site.
      }
    }
  ]
}
