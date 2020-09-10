---
layout: default
permalink: /
---

{% include landing.html %}

<div class="newstitle"> Latest News:</div>
{% assign news_list = site.news | sort: "date" | reverse %}

<ul>
{% for news in news_list %}
<li><b>{{ news.date | date: '%B, %Y'}}:</b> {{ news.info }}</li>
{% endfor %}
</ul>