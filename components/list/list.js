loading_lock = false;
loaded_page = 1;

$(".page-content").on("scroll", function(evt){
  var total_height = evt.target.scrollHeight
  var scroll_height = evt.target.scrollTop
  var screen_height = window.innerHeight
  var nearBottom = screen_height + scroll_height >= total_height - 50; //50换缓冲

  if(!loading_lock && nearBottom)
  {
    loading_lock = true;
    $(".infinite-scroll-preloader").show();

    pagelet.load({
      url : "/blog?page=" + (loaded_page + 1),
      pagelets : ["layout.main.list"],
      replace : true,
      success : function(data, done){
        loaded_page++;
        loading_lock = false;
        $(".cards-list").append(data.html["layout.main.list"]);
        $(".infinite-scroll-preloader").hide();

        done();
      }
    });
  }
});