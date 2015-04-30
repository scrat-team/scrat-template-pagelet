<!-- Bottom Toolbar-->
{% if links %}
  <div class="toolbar">
    <div class="toolbar-inner">
      <div class="left">
        {% if links.previous %}
          <a href="/blog/{{links.previous.id}}" class="link" data-pagelets="layout.page.main" data-animation="slideRight">
            <span>上一篇</span>
          </a>
        {% endif %}
      </div>
      <div class="right">
        {% if links.next %}
          <a href="/blog/{{links.next.id}}" class="link" data-pagelets="layout.page.main" data-animation="slideLeft">
            <span>下一篇</span>
          </a>
        {% endif %}
      </div>
    </div>
  </div>
{% endif %}