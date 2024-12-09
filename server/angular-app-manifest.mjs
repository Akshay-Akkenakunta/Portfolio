
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  }
],
  assets: {
    'index.csr.html': {size: 627, hash: 'aa88e7c9f9970252a8c4f857b20c2474224285bbb18cb2c6dc84a1cf8e4f5bf1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: 'baf4efbf1469862e376b3b9ebab9ae5f937fb5fd2f84d8bc8beb1567d68f5ab7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Portfolio/projects/index.html': {size: 2084, hash: 'b1d418bc9ea2e6f4bedf85542dfe5c0a1a277069ccb446181258fb449bd4d423', text: () => import('./assets-chunks/Portfolio_projects_index_html.mjs').then(m => m.default)},
    'Portfolio/index.html': {size: 2084, hash: 'b1d418bc9ea2e6f4bedf85542dfe5c0a1a277069ccb446181258fb449bd4d423', text: () => import('./assets-chunks/Portfolio_index_html.mjs').then(m => m.default)},
    'Portfolio/about/index.html': {size: 2084, hash: 'b1d418bc9ea2e6f4bedf85542dfe5c0a1a277069ccb446181258fb449bd4d423', text: () => import('./assets-chunks/Portfolio_about_index_html.mjs').then(m => m.default)},
    'Portfolio/contact/index.html': {size: 2084, hash: 'b1d418bc9ea2e6f4bedf85542dfe5c0a1a277069ccb446181258fb449bd4d423', text: () => import('./assets-chunks/Portfolio_contact_index_html.mjs').then(m => m.default)},
    'styles-FNTF2VSL.css': {size: 256, hash: 'fwzVY1nCb5E', text: () => import('./assets-chunks/styles-FNTF2VSL_css.mjs').then(m => m.default)}
  },
};
