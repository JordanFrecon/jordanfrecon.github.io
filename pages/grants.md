---
title: Grants
permalink: /grants/
---

<ul>
{% for g in site.grants %}
  <li>
    <a href="{{ g.url | relative_url }}">{{ g.title }}</a>
    — {{ g.funder }}, {{ g.start }}–{{ g.end }}
  </li>
{% endfor %}
</ul>

