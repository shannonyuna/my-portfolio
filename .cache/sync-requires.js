const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/index.js"))),
  "component---src-pages-more-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/more.js"))),
  "component---src-pages-poo-sketch-js": hot(preferDefault(require("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/poo/sketch.js")))
}

