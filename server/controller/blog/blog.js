'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

var testData = require('./test-data.json');
var listData = JSON.parse(JSON.stringify(testData)).map(function(item){
  item.name = item.title;
  delete item.content;
  delete item.links;
  return item;
});

module.exports = router;

router.get('/', function(req, res, next){
  var offset = (req.query.page || 0) * 10;
  var data = {
    name: '最美应用 | 有价值的好应用',
    list: listData.slice(offset, offset + 10)
  };
  res.locals.title = data.name;
  res.render('blog/blog', data);
});

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  var data;
  for(var i = 0,len=testData.length; i<len; i++){
    if(testData[i].id == id){
      data = testData[i];
      data.name = data.title;
      break;
    }
  }
  if(data) {
    res.locals.title = data.name;
    res.render('blog/blog', data);
  }else{
    res.locals.title = '最美应用 | 有价值的好应用';
    res.status(404).send('No Found blog id=' + id);
  }
});

router.get('/img/:id', function(req, res, next){
  request({
    url: 'http://pic' + (Math.floor(Math.random()*10) % 3 +1) + '.zhimg.com/' + req.params.id
  }).pipe(res);
});
