var path = require('path');
var engine = require('scrat-swig');
var merge = require('merge');

module.exports = function (options) {
  options.ext = options.ext || 'tpl';

  if(options.swig){
    engine.setDefaults(options.swig);
  }

  engine.middleware(options.scrat);

  function renderFile(pathName, locals) {
    return function (done) {
      engine.renderFile(pathName, locals, done);
    };
  }

  function *render(view, locals){
    // default extname
    var ext = path.extname(view);

    if (!ext) {
      ext = '.' + options.ext;
      view += ext;
    }

    // resolve
    view = path.resolve(options.root, view);

    var data = merge({flash: this.flash}, this.state, locals);

    var html = yield renderFile(view, data);
    if (!options.custom) {
      this.body = html;
    }
    return html;
  }

  return function *swigMiddleware(next){
    var pagelets = this.get('X-Pagelets');
    if(pagelets){
      this.set('Content-Type', 'application/json');
      //this.set('Cache-Control', 'no-cache, no-store');
      //this.set('Pragma', 'no-cache');
      //this.set('Expires', 0);

      this.state._pagelets = pagelets;
    }
    this.render = render;
    yield next;
  };
};