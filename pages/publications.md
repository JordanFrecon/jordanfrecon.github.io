---
layout: page
title: Publications
permalink: /publications/
weight: 3
---



{% assign publications = site.publications | sort: "year" | reverse %}

# **International Journals**
{% for pub in publications %}
 {% if pub.work-type == 'journal' %}
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
   <a href="/download/{{ pub.slug}}.bib"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   <a href="{{pub.url}}"><i class="fas fa-link"></i> Project Page</a>
 </div>
 {% endif %}
{% endfor %}

# **International Conferences**
{% for pub in publications %}
 {% if pub.work-type == 'conference' %}
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
   <a href="/download/{{ pub.slug}}.bib"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   <a href="{{pub.url}}"><i class="fas fa-link"></i> Project Page</a>
 </div>
 {% endif %}
{% endfor %}