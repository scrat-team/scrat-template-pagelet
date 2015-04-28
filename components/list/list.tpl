<div class="list-block cards-list inset">
    {% for val in list %}
    <div class="card demo-card-header-pic">
        <a href="/blog/{{val.id}}"  data-pagelets="layout">
            <div style="background-image:url({{val.imgUrl}})" valign="bottom" class="card-header color-white no-border">
                {{val.title}}
            </div>
            <div class="card-content">
                <div class="card-content-inner">
                    <p class="color-gray">{{val.publishedTime|date('Y-m-d')}}</p>
                    <p>{{ val.summary|striptags }}</p>
                </div>
            </div>
            <!--<div class="card-footer">-->
            <!--<a href="#" class="link">Like</a>-->
            <!--<a href="#" class="link">Comment</a>-->
            <!--<a href="#" class="link">Share</a>-->
            <!--</div>-->
        </a>
    </div>
    {% endfor %}
</div>
{% script %}
    {{JSON.stringify(list)}}
    require('./list.js');
{% endscript %}