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
<li>Internship: <em>Master's internship on Online Koopman Operator Learning (deadline: 08/11/2025) </em> (<a href="https://jordan-frecon.com/download/intership/2025-Intership-LabHC-Koopman.pdf">offer</a>)</li>
<li>Inria CR/ISFP: <em>Full time research position in our MALICE Inria project-team</em> (<a href="https://labhc-malice.github.io/">offer</a>)</li>
<li>Postdoc: <em>Unfolded proximal neural operators for inverse problems in imaging</em> (<a href="https://jordan-frecon.com/download/postdoc/2025-Postdoc-LabHC-proxima.pdf">offer</a>)</li>
</ul>
</div>

<div class="logos">
  <img src="{{ '/images/logos/inria.png' | relative_url }}" alt="Inria logo">
  <img src="{{ '/images/logos/labhc.png' | relative_url }}" alt="LabHC logo">
</div>

