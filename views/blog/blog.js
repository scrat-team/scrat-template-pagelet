$(".page-content").on('scroll', function()
{
  pagelet.emit("scroll");
});

pagelet.on(pagelet.EVENT_LOAD_COMPLETED, function(){
  $(".page-content").on('scroll', function()
  {
  	pagelet.emit("scroll");
  });
});