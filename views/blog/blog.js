$(".page-content").on('scroll', function()
{
  pagelet.emit("scroll");
});

pagelet.on(pagelet.EVENT_LOAD_COMPLETED, function(){
  pagelet.emit("scroll");
  $(".page-content").on('scroll', function()
  {
  	pagelet.emit("scroll");
  });
});


//function animationDelegate(type, opt) {
//        pagelet.emit();
//
//        if (mode == "none") {
//            dom.innerHTML = html;
//        }
//        else {
//            var children = $(dom).children();
//            $(html).appendTo($(dom))[mode]("400", function(){
//                $(children).remove();
//                children = null;
//            });
//        }
//    }

function getDomByPagelets(pagelets) {
  if (typeof(pagelets) == "string") {
    pagelets = pagelets.split(",")
  }

  if (pagelets && pagelets.length == 1) {
    return $("[data-pagelet-id='" + pagelets[0] + "']");
  }
  return null;
}

pagelet.on(pagelet.EVENT_BEFORE_LOAD, function(param){
  var html = '<span id="loading" style="position:fixed; width:42px; height:42px; left:50%; top: 50%; marign:-21px 0 0 -21px;" class="preloader"></span>';
  $("#loading").remove();
  $(".view").append(html);
});

var $cache;
pagelet.on(pagelet.EVENT_BEFORE_INSERT_HTML, function(param) {
  var dom = getDomByPagelets(param.options.pagelets);
  if (dom) {
    $cache = $(dom).children().clone().addClass("fake");
  }
});

pagelet.on(pagelet.EVENT_AFTER_INSERT_HTML, function(param) {
  var dom = getDomByPagelets(param.options.pagelets);
  if (dom) {
    $("#loading").remove();
    var ani = param.options.animation;
    var $children = $(dom).children();

    if ($cache) {
      $cache.prependTo(dom).fadeOut(500, function(){
        $(this).remove();
      });
      $cache = null;
    }

    $children[ani != "none" ? ani : "show"](400);
  }
});