
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  assets: {
    'index.csr.html': {size: 617, hash: '51d73400256785a2c094d67b5c998fdcd66128ec0fb0169f074e17589172c5e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'cd38cae0d27bb8875edf829a0b00a56aac046275c2ac59ca895a3eb3a2e98919', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2070, hash: '483e7ba2c0df552850d9f4a2b3d5e3eef6ef5251d4c0824bf25038b70849a3aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2258, hash: 'ed9ecc9f38969361d947e590e9d6912e8ac17da80fe3cb31cbd4ad4429340d68', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2002, hash: '0a99fb113118d90766610d95b1347135f4ae38aeb781579dc59f74291fac50fa', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 2098, hash: '18350181c39f9b9a41f4b4e789c72dc3f1a39a887ae0e3b3d0e6a3f010ceb82f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-FNTF2VSL.css': {size: 256, hash: 'fwzVY1nCb5E', text: () => import('./assets-chunks/styles-FNTF2VSL_css.mjs').then(m => m.default)}
  },
};
