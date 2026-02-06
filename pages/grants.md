---
title: "Grants & Funded Projects"
permalink: /grants/
layout: archive
---

{% assign grants = site.grants | sort: "start" | reverse %}
{% for post in grants %}
  {% include archive-grant.html %}
{% endfor %}

