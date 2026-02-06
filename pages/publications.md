---
layout: page
title: Publications
permalink: /publications/
weight: 5
---

> Ad blockers may prevent the display of publications

{% assign publications = site.publications | sort: "year" | reverse %}


<div>
<input type="checkbox" id="toggle" class="toggleCheckbox" />
<div class="hcentered">
<label for="toggle" class="toggleContainer">
  <div>By Year</div>   
  <div>By Type</div>
</label>
</div>


<div id="toggleText">

<div class="byYear">

{% assign sorted = publications | sort: 'year' | reverse %}
{% assign by_year = sorted | group_by: 'year' %}

{% for group in by_year %}
  <h2><b>{{ group.name }}</b></h2>
  <ol>
    {% for publication in group.items %}
      <li>
        <div class="publication-item">
          <div class="publication-title">{{ publication.title }}</div>
          <div class="publication-authors">{{ publication.authors }}</div>
          <div class="publication-info">
            <i>{{ publication.publication }}</i>, {{ publication.year }}
          </div>
        </div>
        <div class="publication-links">
          <a href="{{ publication.url }}"><i class="fas fa-link"></i> Article Page</a>
          {% if publication.type == 'preprint' %}
            {% unless publication.nopdf %}
              &nbsp;&nbsp;<a href="/download/{{ publication.slug }}.pdf"><i class="far fa-file-pdf"></i> PDF</a>
            {% endunless %}
            {% unless publication.nobib %}
              &nbsp;&nbsp;<a href="#" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()">
                <i class="fas fa-quote-left"></i> BibTeX
              </a>
            {% endunless %}
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ol>
{% endfor %}



</div>


<div class="byType">

<h2><b>Upcoming</b></h2>
<ol>
{% for publication in publications %}
 {% if publication.type == 'unpublished' or publication.type == 'preprint' %}
 <li>
 <div class="publication-item">
   <div class="publication-title">
     {{ publication.title }}
   </div>
   <div class="publication-authors">
     {{ publication.authors }}
   </div>
   <div class="publication-info">
	 <i>{{ publication.publication }}</i>, {{ publication.year}}
   </div>
 </div>
 <div class="publication-links">
   <a href="{{publication.url}}"><i class="fas fa-link"></i> Article Page</a>{% if publication.type == 'preprint' %}&nbsp;&nbsp;
   {% if publication.nopdf == False %}
   <a href="/download/{{ publication.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   {% endif %}
   {% if publication.nobib == False %}
   <a href="#" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()"><i class="fas fa-quote-left"></i> BibTeX</a>{% endif %}
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>



<h2><b>International Conferences</b></h2>
<ol>
{% for publication in publications %}
 {% if publication.type == 'conference' %}
 <li>
 <div class="publication-item">
   <div class="publication-title">
     {{ publication.title }}
   </div>
   <div class="publication-authors">
     {{ publication.authors }}
   </div>
   <div class="publication-info">
	 <i>{{ publication.publication }}</i>, {{ publication.year}}
   </div>
 </div>
 <div class="publication-links">
   <a href="{{publication.url}}"><i class="fas fa-link"></i> Article Page</a>&nbsp;&nbsp;
   <a href="/download/{{ publication.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   <a href="javascript:void(0)" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   {% if publication.spotlight %}
   <a href="{{ publication.spotlight }}"><i class="fas fa-video"></i> Spotlight</a>&nbsp;&nbsp;
   {% endif %}
   {% if publication.toolbox %}
   <a href="{{ publication.toolbox }}"><i class="fab fa-github"></i> Toolbox</a>&nbsp;&nbsp;
   {% endif %}
 </div>
 <div class="answer" id="{{ publication.slug }}"><p><iframe src="/download/{{ publication.slug}}.txt" scrolling='yes' width="100%" frameborder='0'></iframe></p></div>
 </li>
 {% endif %}
{% endfor %}
</ol>

<h2><b>International Journals</b></h2>
<ol>
{% for publication in publications %}
 {% if publication.type == 'journal' %}
 <li>
 <div class="publication-item">
   <div class="publication-title">
     {{ publication.title }}
   </div>
   <div class="publication-authors">
     {{ publication.authors }}
   </div>
   <div class="publication-info">
	 <i>{{ publication.publication }}</i>, {{ publication.year}}
   </div>
 </div>
 <div class="publication-links">
   <a href="{{publication.url}}"><i class="fas fa-link"></i> Article Page</a>&nbsp;&nbsp;
   <a href="/download/{{ publication.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   <a href="javascript:void(0)" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   {% if publication.toolbox %}
   <a href="{{ publication.toolbox }}"><i class="fab fa-github"></i> Toolbox</a>&nbsp;&nbsp;
   {% endif %}
 </div>
 <div class="answer" id="{{ publication.slug }}"><p><iframe src="/download/{{ publication.slug}}.txt" scrolling='yes' width="100%" frameborder='0'></iframe></p></div>
 </li>
 {% endif %}
{% endfor %}
</ol>

<h2><b>Workshops and National Conferences</b></h2>
<ol>
{% for publication in publications %}
 {% if publication.type == 'workshop' %}
 <li>
 <div class="publication-item">
   <div class="publication-title">
     {{ publication.title }}
   </div>
   <div class="publication-authors">
     {{ publication.authors }}
   </div>
   <div class="publication-info">
	 <i>{{ publication.publication }}</i>, {{ publication.year}}
   </div>
 </div>
 <div class="publication-links">
   <a href="{{publication.url}}"><i class="fas fa-link"></i> Article Page</a>&nbsp;&nbsp;
   <a href="/download/{{ publication.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   {% if publication.nobib == False %}
   <a href="javascript:void(0)" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   {% endif %}
   {% if publication.toolbox %}
   <a href="{{ publication.toolbox }}"><i class="fab fa-github"></i> Toolbox</a>&nbsp;&nbsp;
   {% endif %}
 </div>
 <div class="answer" id="{{ publication.slug }}"><p><iframe src="/download/{{ publication.slug}}.txt" scrolling='yes' width="100%" frameborder='0'></iframe></p></div>
 </li>
 {% endif %}
{% endfor %}
</ol>

<h2><b>Thesis</b></h2>
<ol>
{% for publication in publications %}
 {% if publication.type == 'thesis' %}
 <li>
 <div class="publication-item">
   <div class="publication-title">
     {{ publication.title }}
   </div>
   <div class="publication-authors">
     {{ publication.authors }}
   </div>
   <div class="publication-info">
	 <i>{{ publication.publication }}</i>, {{ publication.year}}
   </div>
 </div>
 <div class="publication-links">
   <a href="{{publication.url}}"><i class="fas fa-link"></i> Article Page</a>&nbsp;&nbsp;
   <a href="/download/{{ publication.slug}}.pdf"><i class="far fa-file-pdf"></i> PDF</a>&nbsp;&nbsp;
   <a href="javascript:void(0)" onClick="ShowAndHide('{{ publication.slug }}');event.preventDefault()"><i class="fas fa-quote-left"></i> BibTeX</a>&nbsp;&nbsp;
   {% if publication.toolbox %}
   <a href="{{ publication.toolbox }}"><i class="fab fa-github"></i> Toolbox</a>&nbsp;&nbsp;
   {% endif %}
 </div>
 <div class="answer" id="{{ publication.slug }}"><p><iframe src="/download/{{ publication.slug}}.txt" scrolling='yes' width="100%" frameborder='0'></iframe></p></div>
 </li>
 {% endif %}
{% endfor %}
</ol>

</div>
</div>
