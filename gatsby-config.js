module.exports = {
  siteMetadata: {
    title: "Aysans Portfolio",
  },
  plugins: [
    {
    resolve: `gatsby-plugin-postcss`,
    options: {
        postCssPlugins: [require("tailwindcss")],
        },
    }
  ],
};
