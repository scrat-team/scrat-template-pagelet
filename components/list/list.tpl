<div class="list-block media-list inset">
    <ul>
    {% for val in list %}
    <li>
        <a href="/blog/{{val.id}}" class="item-link item-content" data-pagelets="layout">
            <div class="item-media"><img src="{{val.imgUrl}}" width="44" height="44"></div>
            <div class="item-inner">
                <div class="item-title-row">
                    <div class="item-title">{{val.title}}</div>
                    <div class="item-after">{{val.publishedTime}}</div>
                </div>
                <!--<div class="item-subtitle">New messages from John Doe</div>-->
                <div class="item-text">
                    {{ val.summary|safe }}
                </div>
            </div>
        </a>
    </li>
    {% endfor %}
    </ul>
</div>
{% script %}
    {{JSON.stringify(list)}}
    require('./list.js');
{% endscript %}