---
title: Algorithms for Data Analysis
layout: course
shortid: datascience
description: This is a short description of the data science course
institution: Télécom Saint-Etienne
program: Data Engineering Apprenticeship Engineer
year: 2nd year
hours: 24
---


> This course is inspired by the one written by [Charlotte Laclau](https://laclauc.github.io/index.html) who kindly granted me her source files. So far, I use the same jupyter notebooks. Note that it will evolve over the next few years according to feedback from students and teachers.

## <i class="fas fa-exclamation-triangle"></i> Prerequisites

It is necessary to have prior knowledge on both the fundamentals of mathematics (analysis, linear algebra, probability, statistics) and computer science. As such, it is advised to be proficient in
- the manipulation of vectors and matrix multplication
- probabilities distributions (common distributions, mean, variance, etc.)
- the basics of the calculus of variations


## <i class="fas fa-bookmark"></i> Educational Goals

This course is designed to provide a quick introduction to data analysis algorithms for data engineers. As such, it meets different educational objectives:
- Understand the differences between artificial intelligence and machine learning
- Know which model / algorithm to choose depending on the task
- Learn how to train, validate and test machine learning models
- Discover the basics of numerical optimization
- Master data analysis Python librairies
- Apply the most popular supervised learning algorithms (linear regression, SVM , decision trees, etc.)
- Use two unsupervised learning algorithms (K-means, PCA)

## <i class="fas fa-book"></i> Course Program

The course is given in 8 sessions of 3 hours each

{% capture accordion_items %}
<b>Session 1.</b> Introduction to data analysis with Python;
- Tutorial class on the concepts & librairies of data analysis (<a href="https://jordan-frecon.com/courses/data-analysis/introduction"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Numpy</li><li>Pandas</li><li>Scikit-learn</li></ul>
- Practical exercice (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/session-1/session-1.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 2.</b> Perform basics exploratory data analysis;
- Practical exercices on two use cases
<ol><li>Behaviours of a telecom operator's customers (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-1/1-telecom-client.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li><li>Video games sales (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-1/2-video-games-sales.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li></ol>
---
<b>Session 3.</b> Apply your first supervised learning algorithms;
- Tutorial class on machine learning (<a href="https://jordan-frecon.com/courses/data-analysis/machine-learning"><i class="fas fa-chalkboard"></i> Slides</a>)
	- differences between AI and ML
	- distinction between supervised and unsupervised learning
	- training, validation and testing of ML models
- Tutorial class on simple supervised learning models (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part1"><i class="fas fa-chalkboard"></i> Slides</a>)
	- K-NN
	- Linear Regression
	- Ridge Regression
- Practice exercices (jupyter notebook)
---
<b>Session 4.</b> Train and use simple supervised classification models;
- Tutorial class on simple supervised classification models (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part2"><i class="fas fa-chalkboard"></i> Slides</a>)
	- Logistic Regression
	- Decision Trees
- Tutorial class on numerical optimization (<a href="https://jordan-frecon.com/courses/data-analysis/numerical-optimization"><i class="fas fa-chalkboard"></i> Slides</a>)
	- Convex vs. nonconvex
	- Role and impact of the step-size
- Practical exercices
---
<b>Session 5.</b> Master advanced supervised classification algorithms;
- Tutorial class on advanced supervised classification algorithms (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part3"><i class="fas fa-chalkboard"></i> Slides</a>)
	- SVM
	- Neural Networks
- Practical exercices
---
<b>Session 6.</b> Discover unsupervised learning algorithms;
- Tutorial class on unsupervised learning (<a href="https://jordan-frecon.com/courses/data-analysis/unsupervised-learning"><i class="fas fa-chalkboard"></i> Slides</a>)
- Practical exercices
---
<b>Session 7.</b> Apply unsupervised learning algorithms to predict digits;
- Practical exercice
---
<b>Session 8.</b> Master data analysis algorithms;
{% endcapture %}
{% include elements/accordion-test.html id="program-data-analysis-v2" %}

## <i class="fas fa-file-download"></i> Course Materials

{% capture list_items %}
Data Analysis Librairies,https://jordan-frecon.com/courses/data-analysis/introduction
Introduction to Machine Learning,https://jordan-frecon.com/courses/data-analysis/machine-learning
Numerical Optimization,https://jordan-frecon.com/courses/data-analysis/numerical-optimization
Supervised Learning: Part 1,https://jordan-frecon.com/courses/data-analysis/supervised-learning-part1
Supervised Learning: Part 2,https://jordan-frecon.com/courses/data-analysis/supervised-learning-part2
Supervised Learning Part 3,https://jordan-frecon.com/courses/data-analysis/supervised-learning-part3
Unsupervised Learning,https://jordan-frecon.com/courses/data-analysis/unsupervised-learning
{% endcapture %}
{% include elements/list.html title="Slides" %}



