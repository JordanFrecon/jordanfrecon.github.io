---
layout: page
permalink: /news/
---


# Past News
{% assign news_list = site.news | sort: "date" | reverse %}

<ul>
{% for news in news_list %}
<li><b>{{ news.date | date: '%-d %B, %Y'}}:</b> {{ news.info }}</li>
{% endfor %}
</ul>
