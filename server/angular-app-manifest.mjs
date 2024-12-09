
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  assets: {
    'index.csr.html': {size: 627, hash: 'f0ef2fc832c8210f864cb9b95ecc53bf65b134b36f408e21659df0d8566de46c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '311af98df76d6691b0b2f53d82c3902bfe07792d5e0414075da50ce7c84bc409', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/projects/index.html': {size: 2148, hash: '51805b86c8bb835b719c53b30e169cdc31e1265b7939656e04d71f424877ddb6', text: () => import('./assets-chunks/portfolio_projects_index_html.mjs').then(m => m.default)},
    'portfolio/about/index.html': {size: 2052, hash: '7e2aed0440bf8b06585f7dd88edf91793601260e3c769597ce4cc3731a03cf12', text: () => import('./assets-chunks/portfolio_about_index_html.mjs').then(m => m.default)},
    'portfolio/contact/index.html': {size: 2308, hash: '9bbcd4b439a0961719528eb341fb3db4ae9520c4860c08b8cce7af087af79478', text: () => import('./assets-chunks/portfolio_contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 2120, hash: 'e05dc3db604303c2c760447e67a279df4b21bc0f01ef68f9f2cdf6a4a2049090', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-FNTF2VSL.css': {size: 256, hash: 'fwzVY1nCb5E', text: () => import('./assets-chunks/styles-FNTF2VSL_css.mjs').then(m => m.default)}
  },
};
