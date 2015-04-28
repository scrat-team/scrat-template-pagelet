<!-- Bottom Toolbar-->
{% if links %}
  <div class="toolbar">
    <div class="toolbar-inner">
      {% if links.previous %}
      <div class="left">
        <a href="/blog/{{links.previous.id}}" class="link" data-pagelets="layout.page" data-animation="slideRight">
          <span>上一篇</span>
        </a>
      </div>
      {% endif %}

      {% if links.next %}
      <div class="right">
        <a href="/blog/{{links.next.id}}" class="link" data-pagelets="layout.page"data-animation="slideLeft">
          <span>下一篇</span>
        </a>
      </div>
      {% endif %}
    </div>
  </div>
{% endif %}