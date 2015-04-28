<div class="navbar">
  <div class="navbar-inner">
    {% if id %}
    <div class="left">
      <a href="/blog" class="link" data-pagelets="layout.page" data-insert-type="replace" data-animation="slideRight"><!-- data-insert-type="replace" -->
        <i class="icon icon-back"></i>
        <span>返回</span>
      </a>
    </div>
    {% endif %}
    <div class="center">{{ name }}</div>
    <div class="right">
      <a href="#" class="link">
        <i class="icon icon-bars"></i>
        <!--<span>Menu</span>-->
      </a>
    </div>
  </div>
</div>