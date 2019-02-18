// Docsify Setup
window.$docsify = {
  name: 'aerobase-angular',
  repo: 'ssh://git@github.com/aerobase/aerobase-angular',
  auto2top: true,
  alias: {},
  coverpage: {
    '/': '_coverpage.md',
    '/pt/': '_coverpage.md'
  },
  onlyCover: false,
  executeScript: true,
  loadSidebar: true,
  loadNavbar: true,
  maxLevel: 4,
  subMaxLevel: 2,
  search: {
    noData: {
      '/': 'No results!',
      '/pt/': 'Nenhum resultado localizado!'
    },
    paths: 'auto',
    placeholder: {
      '/': 'Search',
      '/pt/': 'Pesquisar'
    }
  },
  formatUpdated: '{MM}/{DD} {HH}:{mm}',
  plugins: [],
  notFoundPage: {
    '/': '_404.md'
  }
};

// Service Worker Registration
if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('sw.js');
}
