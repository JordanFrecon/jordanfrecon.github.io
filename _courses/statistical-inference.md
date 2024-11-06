---
title: Statistical Inference
layout: course
description: Design, implementation, and interpretation of statistical tests 
institution: Télécom Saint-Etienne
program: Data Engineering Apprenticeship Engineer
year: 2nd year
hours: 30
year_post: 2022
---

This course aims to estimate and draw conclusions about the characteristics of one or multiple populations based on samples. It introduces students to the design, implementation (using Python), and interpretation of various statistical tests to provide a foundation for selecting data analysis models.


## <i class="fas fa-exclamation-triangle"></i> Prerequisites

It is necessary to have prior knowledge in Probability. Therefore, it is advisable to have a solid understanding of the following:

- Elementary Probability concepts (expectation, variance, conditional expectation, etc.).
- Probability distributions (random variables and common distributions, e.g., normal, Bernoulli, etc.).
- Convergence of distributions (law of large numbers, central limit theorem, etc.).
- Descriptive and mathematical statistics (frequency distribution, probability distribution, probability density function, cumulative distribution function, etc.).


## <i class="fas fa-bookmark"></i> Educational Goals

This course is designed to provide a quick introduction to statistical inference for data engineers. As such, it meets different educational objectives:
- Understand the principles of statistical inference.
- Choose and apply statistical tests to real data.
- Interpret the result of a statistical test.
- Evaluate the reliability of a statistical test.
- Use Python to design a test.


## <i class="fas fa-book"></i> Course Program

The course is divided in multiple parts of varying length (each symbol <i class="fas fa-clock"></i> approximately corresponds to 1.5 hour)

{% capture accordion_items %}
<b>Part 1.</b> Introduction to statistical tests;
- Tutorial class on the concepts of statistical inference (<a href="https://jordan-frecon.com/courses/statistical-inference/introduction/"><i class="fas fa-chalkboard"></i> Slides</a>)
---
<b>Part 2.</b> First hands-on practice with statistical tests <i class="fas fa-clock"></i><i class="fas fa-clock"></i>;
- Tutorial exercices
---
<b>Part 3.</b> Statistical tests of conformity;
- Tutorial class on tests of conformity (<a href="https://jordan-frecon.com/courses/statistical-inference/tests-conformity/"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Principles of Mean, Variance, and Proportion Conformity Tests</li><li>Distributions: Student’s t-distribution, Chi-squared, Bernoulli</li></ul>
---
<b>Part 4.</b> Solving various conformity tests <i class="fas fa-clock"></i>;
- Tutorial exercices
---
<b>Part 5.</b> Homogeneity tests: theory and practice <i class="fas fa-clock"></i>;
- Tutorial class on tests of homogeneity (<a href="https://jordan-frecon.com/courses/statistical-inference/tests-homogeneity/"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Principles of Mean, Variance, and Proportion Homogeneity Tests</li><li>Distributions: Student’s t-distribution, Fisher</li><li>Tests: Fisher, Levene, Student, Welch</li></ul>
- Tutorial exercices
---
<b>Part 6.</b> Performing statistical tests in Python <i class="fas fa-clock"></i><i class="fas fa-clock"></i>;
- Lab exercise: The Italian Grand Prix (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=statistical-inference/monza/monza.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Descriptive statistics</li><li>Conformity tests</li><li>Data visualization</li></ul>
{% endcapture %}
{% include elements/accordion-test.html id="program-data-analysis-v2" %}


## <i class="fas fa-file-download"></i> Course Materials

{% capture list_items %}
Introduction, https://jordan-frecon.com/courses/statistical-inference/introduction/
Statistical Tests,https://jordan-frecon.com/courses/statistical-inference/statistical-tests/
Tests of Conformity,https://jordan-frecon.com/courses/statistical-inference/tests-conformity/
Tests of Homogeneity,https://jordan-frecon.com/courses/statistical-inference/tests-homogeneity/
Paired Samples Tests,https://jordan-frecon.com/courses/statistical-inference/paired-samples-tests/
Tests of Normality,https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=statistical-inference/normality-tests/normality-test.ipynb
Tests of Independence,https://jordan-frecon.com/courses/statistical-inference/independence-tests/ 
{% endcapture %}
{% include elements/list.html title="Slides" %}



