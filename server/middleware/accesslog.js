var morgan = require('koa-morgan');
var moment = require('moment');

morgan.token('moment', function(req, res){
  return moment().format('MM-DD HH:mm:ss')
});

module.exports = function (options) {
  var format = options.format || ':remote-addr - :remote-user [:moment] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
  return morgan.middleware(format, options);
};