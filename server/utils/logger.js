var log4js = require('log4js');

module.exports = log4js;

log4js.configure({
  replaceConsole: true,
  appenders: [
    { type: 'console'}
  ],
  levels: {
    "[all]": "INFO",
    "router": "DEBUG"
  }
});