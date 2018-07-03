module.exports = {
  siteMetadata: {
    title: 'Siqi Zhu: Input / Output',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: 'gatsby-source-filesystem',
  		options: {
  			name: `src`,
  			path: `${__dirname}/src/`
  		}
  	},
  	{
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              showCaptions: true
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-copy-linked-files'
  ],
}
