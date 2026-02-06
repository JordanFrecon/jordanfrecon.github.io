---
title: Grants
permalink: /grants/
---

<div class="grants-grid">
{% assign grants = site.grants | sort: "start" | reverse %}
{% for g in grants %}

  {%- assign role_lc = g.role | downcase | strip -%}
  {%- if role_lc == "pi" or role_lc contains "lead" -%}
    {%- assign grant_class = "grant--lead" -%}
  {%- elsif role_lc contains "co" -%}
    {%- assign grant_class = "grant--co" -%}
  {%- else -%}
    {%- assign grant_class = "grant--part" -%}
  {%- endif -%}

  {%- if g.external_url -%}
    {%- assign href = g.external_url -%}
  {%- else -%}
    {%- assign href = g.url | relative_url -%}
  {%- endif -%}

  <a class="grant-card {{ grant_class }}" href="{{ href }}">
    <div class="grant-body">
      <h3 class="grant-title">{{ g.title }}</h3>

      {% if g.subtitle %}
        <p class="grant-subtitle">{{ g.subtitle }}</p>
      {% endif %}

      <div class="grant-tags">
        {% if g.funder %}<span class="tag">{{ g.funder }}</span>{% endif %}
        {% if g.role %}<span class="tag">{{ g.role }}</span>{% endif %}
      </div>

      {% if g.co_leaders and g.co_leaders.size > 0 %}
        <div class="grant-meta">
          <span class="meta-label">
            {% if g.co_leaders.size == 1 %}Co-leader{% else %}Co-leaders{% endif %}
          </span>
          <span class="meta-value">{{ g.co_leaders | join: ", " }}</span>
        </div>
      {% endif %}

      {% if g.partners and g.partners.size > 0 %}
        <div class="grant-meta">
          <span class="meta-label">Partners</span>
          <span class="meta-value">{{ g.partners | join: ", " }}</span>
        </div>
      {% endif %}

      {% if g.excerpt %}
        <p class="grant-desc">{{ g.excerpt | strip_html }}</p>
      {% elsif g.description %}
        <p class="grant-desc">{{ g.description | strip_html }}</p>
      {% endif %}
    </div>

    <div class="grant-footer">
      <span>{{ g.start }}{% if g.end %}–{{ g.end }}{% endif %}</span>
      {% if g.amount %}<span>{{ g.amount }}</span>{% endif %}
    </div>
  </a>

{% endfor %}
</div>

