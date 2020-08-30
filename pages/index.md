---
layout: default
permalink: /
---

{% include landing.html %}

<div class="newstitle"> Latest News:</div>
{% assign news_list = site.news | sort: "date" | reverse %}

<ul>
  {% for news in news_list %}
  <li><b>{{ news.date_string }}:</b> {{ news.info }}</li>
</ul>