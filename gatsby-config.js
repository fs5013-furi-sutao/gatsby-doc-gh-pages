module.exports = {
  pathPrefix: "/how-to-make-gatsby-doc-gh-pages",
  siteMetadata: {
    siteTitle: `Gatsby を使ったドキュメントサイトの作成方法`,
    defaultTitle: `Gatsby を使ったドキュメントサイトの作成方法`,
    siteTitleShort: `Gatsby を使ったドキュメントサイトの作成方法`,
    siteDescription: `Gatsby を使って GitHub Pages に Docs サイトを作成する方法`,
    siteUrl: `https://fs5013-furi-sutao.github.io/how-to-make-gatsby-doc-gh-pages/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/how-to-make-gatsby-doc-gh-pages/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
