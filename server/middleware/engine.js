var engine = require('scrat-swig');
var render = require('koa-swig');
var swig = render.swig;

module.exports = function (options, app, PROD) {
  //scrat-swig tags
  options.tags = options.tags || {};
  var tagList = ['body', 'head', 'html', 'pagelet', 'require', 'script', 'uri', 'title', 'datalet'];
  tagList.forEach(function(item){
    options.tags[item] = require('scrat-swig/tags/' + item);
  });

  var Resource = require('scrat-swig/lib/resource');
  Resource.setRoot(options.scrat.root || process.cwd());
  if(typeof options.scrat.comboURI === 'function'){
    Resource.prototype.comboURI = options.scrat.comboURI;
  }
  if(options.scrat.logger){
    Resource.setLogger(options.scrat.logger);
  }
  var map = options.scrat.cacheMap ? Resource.loadOptions(options.scrat.map) : options.scrat.map;
  options.extensions = options.extensions || {};
  options.extensions['Resource'] = Resource;
  options.extensions['_map'] = map;

  app.context.render = render({
    root: options.root,
    ext: options.ext,
    filters: options.filters,
    tags: options.tags,
    extensions: options.extensions
  });

  if (options.swig) {
    swig.setDefaults(options.swig);
  }

  return function *swigMiddleware(next){
    var pagelets = this.header['X-Pagelets'];
    if(pagelets){
      this.set('Content-Type', 'application/json');
      //this.set('Cache-Control', 'no-cache, no-store');
      //this.set('Pragma', 'no-cache');
      //this.set('Expires', 0);
      this.state._pagelets = pagelets;
    }
    yield next;
  };
};