'use strict';

var path = require('path');
var koa = require('koa');
var mount = require('koa-mount');
var app = module.exports = koa();

var meta = require('../package.json');
var root = path.resolve(__dirname, '../').replace(/\/+$/, '');

//set env for uae
if(process.env['UAE_MODE'] === 'PROD'){
  app.env = 'production';
}else if(process.env['UAE_MODE'] === 'DEV'){
  app.env = 'development';
}
var PROD = (app.env || '').toLocaleLowerCase() === 'production';

app.name = meta.name;
app.proxy = true;
app.meta = meta;
app.port = process.env['PORT'] || 5000;
app.logger = console;
app.root = root;

process.on('uncaughtException', function (err) {
  (app.logger || console).error('Uncaught exception:\n', err.stack);
});

var middleware = {
  accesslog: {

  },
  combo: {
    root: root + '/public',
    cache: PROD && {maxAge: 1000 * 60 * 60 * 24}
  },
  //proxy: {
  //  target: 'http://cors-api-host'
  //},
  static: {
    root: root + '/public',
    maxAge: PROD ? Infinity : 0
  },

  engine: {
    root: root + '/views',
    ext: 'tpl',
    scrat: {
      map: root + '/config/map.json',
      cacheMap: PROD,
      logger: console
    },
    swig: {
      cache: PROD ? 'memory' : false
    }
  },
  //error: {},
  router: {
  }
};

for (var key in middleware) {
  if (middleware.hasOwnProperty(key)) {
    Object.defineProperty(middleware, key, {
      value: require('./middleware/' + key)(middleware[key], app, PROD),
      enumerable: true
    });
  }
}

//app.use(compress()); //Use gzip in nginx, instead of in nodejs.
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());
app.use(mount('/co', middleware.combo));
//app.use('/public', middleware.static, middleware.error);
app.use(mount('/public', middleware.static));
app.use(middleware.accesslog);
//// app.use('/api/*', middleware.proxy);
app.use(middleware.engine);
//app.use(middleware.router.routes());

app.use(require('./controller/blog/blog').routes())
//for (var mountPath in middleware.router){
//  if(middleware.router.hasOwnProperty(mountPath)){
//    var router = middleware.router[mountPath];
//    app.use(mount(mountPath, router));
//  }
//}

//middleware.router.mount(app);
//app.use(middleware.error);

if (require.main === module) {
  app.listen(app.port, function () {
    console.log('[%s] %s server listening on port %d', app.env.toUpperCase(), app.name, app.port);
  });
}