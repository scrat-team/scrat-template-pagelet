require("../utils/img-lazyload/img-lazyload.js");

loading_lock = false;
loaded_page = 1;

pagelet.on("scroll", function(){
  var target = $(".page-content")[0];
  var total_height = target.scrollHeight
  var scroll_height = target.scrollTop
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

        var script = data.script.join("");
        console.error(script);
        script && eval(data.script.join(""));

        done();
      }
    });
  }
});
