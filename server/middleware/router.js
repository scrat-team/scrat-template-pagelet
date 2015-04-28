'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(options, app, PROD){
    return router;
};

router.use('/blog', require('../controller/blog/blog'));