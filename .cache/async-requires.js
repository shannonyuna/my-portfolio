// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-poo-sketch-js": () => import("/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/src/pages/poo/sketch.js" /* webpackChunkName: "component---src-pages-poo-sketch-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/shannonkoh/Desktop/shannon koh/coding/my-portfolio/.cache/data.json")

