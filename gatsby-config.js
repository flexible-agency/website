const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: "Flexible Agency",
    description: "We build tools and libraries for developers.",
    author: "@tschoffelen",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-L9H91W81GR",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Flexible Agency",
        short_name: "Flexible Agency",
        start_url: "/",
        lang: "en",
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.gray["900"],
        display: "minimal-ui",
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")(tailwindConfig),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production"
            ? [require("cssnano")]
            : []),
        ],
      },
    },
  ],
};
