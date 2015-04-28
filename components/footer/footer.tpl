<!-- Bottom Toolbar-->
<div class="toolbar">
  <div class="toolbar-inner">
    {% if links.previous %}
    <div class="left">
      <a href="/blog/{{links.previous.id}}" class="link" data-pagelets="layout">
        <span>上一篇</span>
      </a>
    </div>
    {% endif %}

    {% if links.next %}
    <div class="right">
      <a href="/blog/{{links.next.id}}" class="link" data-pagelets="layout">
        <span>下一篇</span>
      </a>
    </div>
    {% endif %}
  </div>
</div>