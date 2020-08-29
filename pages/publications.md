---
layout: page
title: Publications
permalink: /publications/
weight: 3
---

# **List of Publications**

{% assign publications = site.publications | sort: "year" | reverse %}
{% for pub in publications %}
<div class="pubitem">
  <div class="pubauthors">
    {{ pub.authors }}
  </div>
  <div class="pubtitle">
    {{ pub.title }}
  </div>
  <div class="pubinfo">
    {{ pub.publication }}, {{ pub.year}}
  </div>
</div>
<div class="publinks">
  <a href="/download/{{ pub.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
  <a href="/download/{{ pub.slug}}.bib"><i class="far fa-quote-left"></i> Bibtex</a>&nbsp;&nbsp;
  <a href="{{pub.url}}"><i class="fas fa-link"></i> Project Page</a>
</div>
{% endfor %}