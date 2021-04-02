const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["yyx", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
