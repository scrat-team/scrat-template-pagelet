{% extends '../layout/layout.tpl' %}
{% block body %}
<div class="views">
    <div class="view view-main">
        <div class="pages">

            <div class="page navbar-fixed navbar-through">
            {% require $id='header' %}

            {% require $id='main' %}

            {% require $id='footer' %}
            </div>
        </div>
    </div>
</div>

{% require $id='./zhuanlan.css' %}
{% endblock %}