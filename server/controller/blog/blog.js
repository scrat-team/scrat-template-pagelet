'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

module.exports = router;

router.get('/', function(req, res, next){
  var data = {
    name: '前端外刊评论',
    list: [
      {id: '', title: '', imgUrl: '', author:'' },
      {id: '', title: '', imgUrl: '', author:'' }
    ]
  };
  res.render('blog/list', data);
});

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  var data = {id: '', title: '', imgUrl: '', author:'' };
  res.render('blog/detail', data);
});
