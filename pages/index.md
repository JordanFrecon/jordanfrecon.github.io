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
<li>Inria CR/ISFP: <em>Full time research position in our MALICE Inria project-team</em> (<a href="https://perso.univ-st-etienne.fr/sebbanma/">offer</a>)</li>
<li>Postdoc: <em>Modeling, optimization and transfer in physics-based machine learning</em> (<a href="/download/postdoc/2023-Postdoc-LabHC-PhysicsML.pdf">offer</a>)</li>
<li>PhD Thesis: <em>Toward frugal machine learning with physics-aware models</em> (<a href="/download/thesis/2024-Thesis-LabHC-FrugalPhysicsML.pdf">offer</a>)</li>
<li>Internship: <em>Discovering the laws of physics through the bilevel learning of neural operators</em> (<a href="/download/internship/2024-Internship-LabHC-Bilevel_PhysicsML.pdf">offer</a>)</li>
</ul>
</div>
