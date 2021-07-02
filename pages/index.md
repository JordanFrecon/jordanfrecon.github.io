---
layout: default
permalink: /
---

{% include landing.html %}

<div class="newstitle"> Latest News:</div>
{% assign news_list = site.news | sort: "date" | reverse %}

<ul>
{% for news in news_list %}
 {% increment news_counter %}
 {% if news_counter < 5 %}
  {{ <li><b>{{ news.date | date: '%-d %B, %Y'}}:</b> {{ news.info }}</li> }}
 {% endif %}
{% endfor %}
</ul>
