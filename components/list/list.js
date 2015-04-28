require("../utils/img-lazyload/img-lazyload.js");

loading_lock = false;
loaded_page = 1;

pagelet.on("scroll", function(){
  var target = $(".page-content")[0];
  var total_height = target.scrollHeight
  var scroll_height = target.scrollTop
  var screen_height = window.innerHeight
  var nearBottom = screen_height + scroll_height >= total_height - 50; //50换缓冲


  if(!loading_lock // 非加载中状态
    && nearBottom // 靠近底部
    && history.state && !/[/]blog[/]/gi.test(history.state.url)) // 列表才做
  {
    loading_lock = true;
    $(".infinite-scroll-preloader").show();

    pagelet.load({
      url : "/blog?page=" + (loaded_page + 1),
      pagelets : ["layout.page.main.list"],
      replace : true,
      success : function(data, done){
        loaded_page++;
        loading_lock = false;
        $(".cards-list").append(data.html["layout.page.main.list"]);
        $(".infinite-scroll-preloader").hide();

        done();
      }
    });
  }
});
