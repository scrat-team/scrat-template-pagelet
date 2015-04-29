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

pagelet.on(pagelet.EVENT_BEFORE_LOAD, function(opt){
  console.info("before_load", opt);
});

pagelet.on(pagelet.EVENT_BEFORE_INSERT_HTML, function(opt) {
  console.info("before_html", opt);
});