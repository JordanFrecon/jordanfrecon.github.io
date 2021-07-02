---
layout: default
permalink: /
---

{% include landing.html %}

<div class="newstitle"> Latest News:</div>
{% assign news_list = site.news | sort: "date" | reverse %}

<ul>
{% assign news_counter = 0 %}
{% for news in news_list %}
 {% if news_counter < 5 %}
  <li><b>{{ news.date | date: '%-d %B, %Y'}}:</b> {{ news.info }}</li>
  {% assign news_counter = news_counter | plus: 1 %}
 {% endif %}
{% endfor %}
</ul>
