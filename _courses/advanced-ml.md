---
title: Advanced Machine Learning
layout: course
description: (Work in progress)
institution: Jean Monnet University
program: Machine Learning and Data Mining
year: Msc 2
hours: 9
year_post: 2024
---

## <i class="fas fa-book"></i> Course Program

Each year, one of the following programs is taught.

{% capture accordion_items %}
<b>Program 1.</b> Proximal Splitting Algorithms;
- Tutorial class (<a href="https://jordan-frecon.com/courses/mldm-advanced-ml/proximal-splitting-algorithms"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Introduction to non-smooth optimization</li><li>First-order algorithms (gradient descent, subgradient descent, proximal algorithm)</li><li>Fenchel duality</li><li>Proximal splitting algorithms (forward-backward, Douglas-Rachford, primal-dual, proximal ADMM)</li></ul>
- Lab exercise: Introduction to proximal splitting algorithms (<a href="https://jordan-frecon.com/jupyterlite/lab?path=mldm-advanced-ml%2F1-proximal-optimization%2FTD_proximal_splitting_algorithms.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Feature selection with Lasso</li><li>Piecewise constant denoising</li></ul>
---
<b>Program 2.</b> Adversarial Machine Learning;
- Tutorial class (<a href="https://jordan-frecon.com/courses/mldm-advanced-ml/adversarial-ml"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Principle; Specific and universal attacks; Transferability; Defense mechanisms</li><li>Optimization problem</li><li>Applications</li></ul>
- Lab exercise: Introduction to adversarial ML (<a href="http://jordan-frecon.com/jupyterlite/lab?path=mldm-advanced-ml%2F2-adversarial-ml%2Fadversarial-learning.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>FGSM attack</li><li>Adversarial retraining</li></ul>
{% endcapture %}
{% include elements/accordion-test.html id="program-adversarial-ml" %}



