var pageLoading = require("components/loading/page");

function dispatchScroll() {
  pagelet.emit("scroll");
  $(".page-content").on('scroll', function()
  {
    pagelet.emit("scroll");
  });
}
// 跑一次
dispatchScroll();


pagelet.on(pagelet.EVENT_LOAD_COMPLETED, function(opt){
  // 页面loading隐藏
  pageLoading.hide();

  dispatchScroll();
});

pagelet.on(pagelet.EVENT_BEFORE_LOAD, function(opt){
  if (opt.options.url.indexOf("page=") < 0) {
    // 启用页面loading
    pageLoading.show();
  }
});