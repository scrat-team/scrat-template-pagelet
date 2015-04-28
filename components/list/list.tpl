{% pagelet $id="list" class="list-block cards-list inset" %}
    {% for val in list %}
    <div class="card demo-card-header-pic">
        <a href="/blog/{{val.id}}"  data-pagelets="layout">
            <div style="background-image:url({{val.imgUrl}})" valign="bottom" class="card-header color-white no-border">

            </div>
            <div class="card-content">
                <div class="card-content-inner">
                    <h4>{{val.title}}</h4>
                    <p class="color-gray">{{val.publishedTime|date('Y-m-d')}}</p>
                    <p>{{ val.summary|striptags }}</p>
                </div>
            </div>
        </a>
    </div>
    {% endfor %}
{% endpagelet %}

{% require $id='loading' %}

{% script %}
    require('./list.js');
{% endscript %}