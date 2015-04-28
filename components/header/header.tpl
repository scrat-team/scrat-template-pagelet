<div class="navbar">
  <div class="navbar-inner">
    {% if id %}
    <div class="left">
      <a href="javascript:history.back();" class="link" data-pagelets="layout">
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