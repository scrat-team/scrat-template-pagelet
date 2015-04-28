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
    var data = {
      name: body[0].column.name,
      list: body.map(function (item) {
        return {
          id: item.slug,
          title: item.title,
          imgUrl: item.titleImage,
          publishedTime: item.publishedTime,
          summary: item.summary
        }
      })
    };
    res.render('blog/list', data)
  });
});

router.get('/:id', function(req, res, next){
  request({
    url: 'http://zhuanlan.zhihu.com/api/columns/zuimei/posts/' + req.params.id,
    json: true
  }, function(err, response, body){
    var meta = body.meta;
    var data = {
      id: body.slug,
      name: body.title,
      imgUrl: body.titleImage,
      publishedTime: body.publishedTime,
      summary: body.summary,
      content: body.content,
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
    res.render('blog/list', data)
  });
});
