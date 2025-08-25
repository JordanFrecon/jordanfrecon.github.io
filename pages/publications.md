---
layout: page
title: Publications
permalink: /publications/
weight: 2
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
</div>

<div id="toggleText">

<div class="byYear">

<ol>
{% for publication in publications %}
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
{% endfor %}
</ol>


</div>


<div class="byType">

# **Upcoming**
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



# **International Conferences**
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

# **International Journals**
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

# **Workshops and National Conferences**
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


# **Thesis**
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
