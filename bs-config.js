'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');
var cors = require('cors');
var proxy = require('http-proxy-middleware');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  files: ['./**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: {
    baseDir: './',
    middleware: [
        {
            1: proxy('/api/v3/incidents', {
                target: 'https://victraffic-api.wd.com.au',
                changeOrigin: true   // for vhosted sites, changes host header to match to target's host
            }),
            2: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
        },
      cors(),
      log({ format: '%date %status %method %url' }),
      fallback({
        index: '/index.html',
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
      })
    ]
  }
};
