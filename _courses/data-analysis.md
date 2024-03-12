---
title: Algorithms for Data Analysis
layout: course
shortid: datascience
description: A quick introduction to data analysis for engineers
institution: Télécom Saint-Etienne
program: Data Engineering Apprenticeship Engineer
year: 2nd year
hours: 24
year_post: 2022
---


> This course is inspired by the one written by [Charlotte Laclau](https://laclauc.github.io/index.html) who kindly granted me her source files. So far, I use the jupyter notebooks cowritten by [Charlotte Laclau](https://laclauc.github.io/index.html) and Julien Tissier. Note that it will change over the next few years according to feedback from students and teachers.

The present course aims to develop a solid understanding of various algorithms and techniques used for processing and analyzing data. This includes gaining proficiency in implementing and evaluating algorithms, selecting appropriate algorithms for specific tasks, understanding algorithmic complexity and efficiency, and applying algorithms to solve real-world data analysis problems. The goal is to equip students with the necessary knowledge and skills to effectively and efficiently analyze large datasets, extract valuable insights, and make data-driven decisions.


## <i class="fas fa-exclamation-triangle"></i> Prerequisites

It is necessary to have prior knowledge on both the fundamentals of mathematics (analysis, linear algebra, probability, statistics) and computer science. As such, it is advised to be proficient in
- Basic concepts of probability and statistical inference
- Vector manipulation and matrix multiplication
- Basics of calculus of variations
- Linear algebra (eigenvalue - eigenvector, hyperplane, projection, etc.)
- Python programming and vector manipulation using NumPy


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
- Lab1: First steps of data analysis | Video Games Sales (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab1-video-games-sales/lab1-video-games-sales.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 2.</b> Perform basics exploratory data analysis;
- Practical exercices on two use cases
<ol><li>Behaviours of a telecom operator's customers (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-1/1-telecom-client.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li><li>Video games sales (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-1/2-video-games-sales.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li></ol>---
<b>Session 3.</b> Apply your first supervised learning algorithms;
- Tutorial class on machine learning (<a href="https://jordan-frecon.com/courses/data-analysis/machine-learning"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>differences between AI and ML</li><li>distinction between supervised and unsupervised learning</li><li>training, validation and testing of ML models</li></ul>
- Tutorial class on simple supervised learning models (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part1"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>K neirest neighbors</li><li>Linear Regression</li><li>Ridge Regression</li></ul>
- Practical exercices (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/session-2/session-2.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 4.</b> Train and use simple supervised classification models;
- Tutorial class on simple supervised classification models (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part2"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Logistic Regression</li><li>Decision Trees</li></ul>
- Tutorial class on numerical optimization (<a href="https://jordan-frecon.com/courses/data-analysis/numerical-optimization"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Convex vs. nonconvex</li><li>Role and impact of the step-size</li></ul>
- Practical exercices
<ol><li>Toy examples (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/session-3/session-3.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li><li>Wine quality analysis (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-2/wine-quality.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li></ol>
---
<b>Session 5.</b> Master advanced supervised classification algorithms;
- Tutorial class on advanced supervised classification algorithms (<a href="https://jordan-frecon.com/courses/data-analysis/supervised-learning-part3"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>SVM</li><li>Neural Networks</li></ul>
- Practical exercices (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/session-4/session-4.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 6.</b> Discover unsupervised learning algorithms;
- Tutorial class on unsupervised learning (<a href="https://jordan-frecon.com/courses/data-analysis/unsupervised-learning"><i class="fas fa-chalkboard"></i> Slides</a>)<br>
- Practical exercices (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/session-5/session-5.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 7.</b> Apply unsupervised learning algorithms to predict digits;
- Practical exercice on one use case (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-3/digits-recognition.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
---
<b>Session 8.</b> Master data analysis algorithms;
- Practical exercices on two use cases
<ol><li>Determine if a mushroom is poisonous (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-4/1-poisonous-mushrooms.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li><li>Predict cell phone prices (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/use-cases-DA-4/2-phone-prices.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)</li></ol>
{% endcapture %}
{% include elements/accordion-test.html id="program-data-analysis-v2" %}

## <i class="fas fa-file-download"></i> Course Materials

{% capture list_items %}
Introduction,https://jordan-frecon.com/courses/data-analysis/introduction
Machine Learning,https://jordan-frecon.com/courses/data-analysis/machine-learning
Numerical Optimization,https://jordan-frecon.com/courses/data-analysis/numerical-optimization
Fundamental Supervised Models,https://jordan-frecon.com/courses/data-analysis/fundamental-supervised-models
Advanced Supervised Models,https://jordan-frecon.com/courses/data-analysis/advanced-supervised-models
Neural Networks,https://jordan-frecon.com/courses/data-analysis/neural-networks
Unsupervised Learning,https://jordan-frecon.com/courses/data-analysis/unsupervised-learning
{% endcapture %}
{% include elements/list.html title="Slides" %}



