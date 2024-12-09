
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
    'index.csr.html': {size: 627, hash: '475c71e25fd33f8148c750dd5c54a111240d77e40e3c2007b29c5b6cf5320fe9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: 'd509be925d064484a448c94a773e4e9dc2081b2754381c089bc303da61cb088f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 2084, hash: 'ac037ec93f7fd1ea67963e9bf1db643e50bda4c82e0992ed4c8cfeff01fe6764', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'portfolio/about/index.html': {size: 2084, hash: 'ac037ec93f7fd1ea67963e9bf1db643e50bda4c82e0992ed4c8cfeff01fe6764', text: () => import('./assets-chunks/portfolio_about_index_html.mjs').then(m => m.default)},
    'portfolio/projects/index.html': {size: 2084, hash: 'ac037ec93f7fd1ea67963e9bf1db643e50bda4c82e0992ed4c8cfeff01fe6764', text: () => import('./assets-chunks/portfolio_projects_index_html.mjs').then(m => m.default)},
    'portfolio/contact/index.html': {size: 2084, hash: 'ac037ec93f7fd1ea67963e9bf1db643e50bda4c82e0992ed4c8cfeff01fe6764', text: () => import('./assets-chunks/portfolio_contact_index_html.mjs').then(m => m.default)},
    'styles-FNTF2VSL.css': {size: 256, hash: 'fwzVY1nCb5E', text: () => import('./assets-chunks/styles-FNTF2VSL_css.mjs').then(m => m.default)}
  },
};
