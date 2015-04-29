{% extends '../layout/layout.tpl' %}
{% block body %}
<div class="views">
    <div class="view view-main">
        {% pagelet $id="page" class="pages" data-pagelet-id="layout.page"%}
            <div class="page navbar-fixed navbar-through">
                {% require $id='header' %}
                {% require $id='main' %}
                {% require $id='footer' %}
            </div>
        {% endpagelet %}
    </div>
</div>
{% require $id='./blog.css' %}
{% require $id='./blog.js' %}
{% endblock %}