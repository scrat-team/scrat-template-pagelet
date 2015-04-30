function getDomByPagelets(pagelets) {
  if (typeof(pagelets) == "string") {
    pagelets = pagelets.split(",")
  }

  if (pagelets && pagelets.length == 1) {
    return $("[data-pagelet-id='" + pagelets[0] + "']");
  }
  return null;
}

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

    $children.css({
      "position":"absolute",
      "left" : 0,
      "top" : 0
    });
    debugger;
    $children[ani != "none" ? ani : "show"](400, function(){
      $children.css("position", "");
    });
  }
});

module.exports = (function(){

  return {
    transition : function() {

    }
  }
})();