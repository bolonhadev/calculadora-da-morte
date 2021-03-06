module.exports = {
  siteMetadata: {
    title: `Calculadora da Morte`,
    description: `Quanto a corrupção mata? Com a Calculadora da Morte você pode ter uma estimativa.`,
    author: `@bolonhadev`,
    expVida: 76,
    salarioMinimo: 1045,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,400,700,800`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Calculadora da Morte`,
        short_name: `CalcMorte`,
        start_url: `/`,
        background_color: `#1f3253`,
        theme_color: `#1f3253`,
        display: `fullscreen`,
        icon: `static/assets/images/favicon.gif`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
