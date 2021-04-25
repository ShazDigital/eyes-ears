module.exports = {
  siteMetadata: {
    title: "eyes-ears",
    siteUrl: "https://eyes-ears.herokuapp.com/"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: [`Whyte`, `Bogue`],
          urls: [`/fonts/fonts.css`]
        }
      }
    }
  ]
};
