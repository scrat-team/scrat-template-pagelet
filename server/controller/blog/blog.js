var router = require('koa-router')();
var request = require('request');

var testData = require('./test-data.json');
var listData = JSON.parse(JSON.stringify(testData)).map(function(item){
  item.name = item.title;
  delete item.content;
  delete item.links;
  return item;
});

module.exports = router;


//router.prefix('/blog');

router.get('/blog', function *blogList(next){
  var offset = (this.query.page || 0) * 10;
  var data = {
    name: '最美应用 | 有价值的好应用',
    list: listData.slice(offset, offset + 10)
  };
  this.state.title = data.name;
  yield this.render('blog/blog', data);
});

router.get('/blog/:id', function *blogDetail(next){
  var id = this.params.id;
  var data;
  for(var i = 0,len = testData.length; i < len; i++){
    if(testData[i].id == id){
      data = testData[i];
      data.name = data.title;
      break;
    }
  }
  if(data) {
    data.name = data.title;
    this.state.title = data.name;
    yield this.render('blog/blog', data);
  }else{
    this.state.title = '最美应用 | 有价值的好应用';
    this.status = 404;
    this.body = 'No Found blog id=' + id;
  }
});

router.get('/blog/img/:id', function *blogImgProxy(next){
  var url = 'http://pic' + (Math.floor(Math.random()*10) % 3 +1) + '.zhimg.com/' + this.params.id;
  this.body = request({
    url: url
  });
});
