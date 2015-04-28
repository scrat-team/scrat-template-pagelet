'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

module.exports = router;

router.get('/', function(req, res, next){
  request.get({
    url: 'http://zhuanlan.zhihu.com/api/columns/zuimei/posts',
    qs: {
      limit: 10,
      offset: (req.params.page || 0) * 10
    },
    json: true
  }, function(err, response, body){
    if(err){
      next(err);
    }else if(response.statusCode !== 200){
      res.status(response.statusCode).end(body);
    }else {
      var data = {
        name: body[0].column.name,
        list: body.map(function (item) {
          return {
            id: item.slug,
            title: item.title,
            imgUrl: replaceImage(item.titleImage),
            publishedTime: item.publishedTime,
            summary: replaceImage(item.summary)
          }
        })
      };
      res.render('blog/blog', data);
    }
  });
});

router.get('/img/:id', function(req, res, next){
  request({
    url: 'http://pic1.zhimg.com/' + req.params.id
  }).pipe(res);
});

router.get('/:id', function(req, res, next){
  request({
    url: 'http://zhuanlan.zhihu.com/api/columns/zuimei/posts/' + req.params.id,
    json: true
  }, function(err, response, body){
    if(err){
      next(err);
    }else if(response.statusCode !== 200){
      res.status(response.statusCode).end(body);
    }else {
      var meta = body.meta;
      var data = {
        id: body.slug,
        name: body.title,
        imgUrl: replaceImage(body.titleImage),
        publishedTime: body.publishedTime,
        content: replaceImage(body.content),
        links: {
          next: meta.next && {
            name: meta.next.title,
            id: meta.next.url.match(/(\d+)$/)[1]
          },
          previous: meta.previous && {
            name: meta.previous.title,
            id: meta.previous.url.match(/(\d+)$/)[1]
          }
        }
      };
      res.render('blog/blog', data);
    }
  });
});


function replaceImage(url){
  return url && url.replace(/http:\/\/pic\d+\.zhimg.com\//g, '/blog/img/');
}
