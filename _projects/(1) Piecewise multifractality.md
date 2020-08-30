---
name: Piecewise Multifractality
tools: [Multifractal, Segmentation]
image: https://jordanfrecon.github.io/images/piecewiseMF.png
description: This project deals with the case where the scale invariance properties are inhomogenous in time or in space.
---

# Piecewise Multifractality Project

The classical formulation of the multifractal formalism relies on the assumption that the multifractal properties of the process of interest are homogeneous. However, in many scenarios, it might happen that they could vary in time or in space. For instance, one faces this situation when dealing with the analysis of satellite photographs having both textures of clouds and snow.

![preview](https://jordanfrecon.github.io/images/piecewiseMF.png)

The originality of this project is to i) consider the study of inhomogeneous scale invariance as a joint problem of detection/segmentation and ii) propose a formulation through the minimisation of a vectorial functionals build ...



## Related Publications
{% assign publications = site.publications | sort: "year" | reverse %}

<ol>
{% for pub in publications %}
 {% if pub.project == 'piecewiseMF' %}
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


<p class="text-center">
{% include elements/button.html link="https://github.com/YoussefRaafatNasry/portfolYOU" text="Learn More" %}
</p>