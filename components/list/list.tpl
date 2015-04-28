<div class="list-block cards-list">
    <ul>
    {% for val in list %}
    <li class="card">
        <a href="/blog/{{val.id}}"  data-pagelets="layout">
            <div class="card-header">
                <div class="facebook-avatar"></div>
                <div class="facebook-name">{{val.title}}</div>
                <div class="facebook-date">{{val.publishedTime|date('Y-m-d')}}</div>
            </div>
            <div class="card-content">
                <div class="card-content-inner">
                    <img src="{{val.imgUrl}}">
                    {{ val.summary|striptags }}
                </div>
            </div>
            <!--<div class="card-footer">-->
            <!--<a href="#" class="link">Like</a>-->
            <!--<a href="#" class="link">Comment</a>-->
            <!--<a href="#" class="link">Share</a>-->
            <!--</div>-->
        </a>
    </li>
    {% endfor %}
    </ul>
</div>
{% script %}
    {{JSON.stringify(list)}}
    require('./list.js');
{% endscript %}