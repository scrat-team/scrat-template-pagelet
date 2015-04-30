{% extends '../layout/layout.tpl' %}
{% block body %}
<div class="views">
    <div class="view view-main">
        {% pagelet $id="page" class="pages" data-pagelet-id="layout.page"%}
            <div class="page navbar-fixed navbar-through">
                {% require $id='header' %}

                {% pagelet $id="main" class="page-content index-main"  data-pagelet-id="layout.page.main"%}
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

                {% require $id='footer' %}
            </div>
        {% endpagelet %}
    </div>
</div>
{% require $id='./blog.css' %}
{% require $id='./blog.js' %}
{% endblock %}