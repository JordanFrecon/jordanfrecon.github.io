---
name: Understanding Deep Learning
tools: [Neural networks, Variational inference]
image: https://jordanfrecon.github.io/images/deepLearning.jpg
description: Towards the unification of deep neural networks and variational models.
---


# Understanding Deep Learning
(soon...)



## Related Publications
{% assign publications = site.publications | sort: "year" | reverse %}

<ol>
{% for pub in publications %}
 {% if pub.project == 'deepLearning' %}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }},
   </div>
   <div class="pubtitle">
     {{ pub.title }},
   </div>
   <div class="pubinfo">
     {{ pub.publication }}, {{ pub.year}}.
   </div>
 </div>
 <div class="publinks">
   <a href="{{pub.url}}"><i class="fas fa-link"></i> Article Page</a>&nbsp;&nbsp;
   <a href="/download/{{ pub.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   <a href="/download/{{ pub.slug}}.bib"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   {% if pub.toolbox %}
   <a href="{{ pub.toolbox }}"><i class="fab fa-github"></i> Toolbox</a>&nbsp;&nbsp;
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>


