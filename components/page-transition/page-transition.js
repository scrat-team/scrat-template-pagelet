
module.exports = (function(){
  var $cache = null;
  var $compare = null;

  return {
    init : function($dom) {
      $compare = $dom;

      $dom.children().css({
        "position":"absolute",
        //"width" : "100%",
        //"margin" : "0",
        "background-color" : "#efeff4"
      });

      $cache = $dom.children().clone().addClass("fake");
    },
    start : function($dom, animation) {
      if ($compare.selector != $dom.selector) {
        console.error("not the same!");
        return;
      }

      if (!animation || animation=="none") {
        return;
      }
      // 滚动到顶部
      $(".page-content").scrollTop(0);

      var $children = $dom.children();

      if ($cache) {
        $cache.prependTo($dom).fadeOut(200, function(){
          $(this).remove();
        });
        $cache = null;
      }

      $children.css({
        "position":"absolute",
      });

      $children[animation != "none" ? animation : "show"](400, function(){
        $children.css("position", "");
      });
    }
  }
})();