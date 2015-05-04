'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(options, app, PROD){
    return router;
};

router.all('/', function(req, res, next){
   res.redirect('/blog');
});

router.use('/blog', require('../controller/blog/blog'));