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
<li>Postdoc: <em>Optimization and physics-informed machine learning </em> (contact me)</li>
<li>Postdoc: <em>MSCA Fellowships </em> (see <a href="/https://www.inria.fr/sites/default/files/2026-02/Inria_hosting_offers_2026-Artificial_intelligence.pdf">offer 5</a>)</li>
<li>Inria CR/ISFP: <em>Full time research position in our MALICE Inria project-team</em> (<a href="https://labhc-malice.github.io/">offer</a>)</li>
</ul>
</div>

<div class="logos">
  <img src="{{ '/images/logos/inria.png' | relative_url }}" alt="Inria logo">
  <img src="{{ '/images/logos/labhc.png' | relative_url }}" alt="LabHC logo">
</div>

