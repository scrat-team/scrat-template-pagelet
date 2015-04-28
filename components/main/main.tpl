{% pagelet $id="main" class="page-content index-main" %}
  {% if page404 %}
    {% require $id='404' %}
  {% elseif list %}
    <div class="index-list">
      {% require $id='list' %}
    </div>
  {% elseif id %}
    {% require $id='detail' %}
  {% endif %}
{% endpagelet %}