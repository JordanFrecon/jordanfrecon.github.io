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

<div class="danger-box-titled">
<span class="title">Open positions</span>
<ul>
<li>Inria CR/ISFP: <em>Full time research position in our MALICE Inria project-team</em> (<a href="https://labhc-malice.github.io/">offer</a>)</li>
</ul>
</div>
