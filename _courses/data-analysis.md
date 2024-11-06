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


> This course is partly inspired by the one written by [Charlotte Laclau](https://laclauc.github.io/index.html).

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

The course is given in 10 sessions of 1.5 or 3 hours (indicated by <i class="fas fa-clock"></i>)

{% capture accordion_items %}
<b>Session 1.</b> Data analysis with Python;
- Tutorial class on the concepts & librairies of data analysis (<a href="https://jordan-frecon.com/courses/data-analysis/introduction"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Data analysis; Types of data; Data representation</li><li>Differences between AI and ML</li><li>Python librairies: Numpy, Pandas, Scikit-learn</li></ul>
- Lab exercise: Video games sales (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab1-video-games-sales/lab1-video-games-sales.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Collecting and cleaning data</li><li>Exploratory data analysis</li><li>Data visualization</li></ul>
---
<b>Session 2.</b> Introduction to machine learning;
- Tutorial class on machine learning (<a href="https://jordan-frecon.com/courses/data-analysis/machine-learning"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Formal definition; Supervised learning; Unsupervised learning</li><li>What is learning; Hypothesis space; Generalization</li><li>Training, validating and testing models</li><li>Hyperparameters; Data splitting techniques; Regularization</li></ul>
---
<b>Session 3.</b> ML for non ML Practionners <i class="fas fa-clock"></i>;
Lab exercise: Diamonds market (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab2-diamonds-market/lab2-diamonds-market.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>1D linear regression</li><li>Link between statistics and ML</li><li>Grid-search algorithm</li></ul>
---
<b>Session 4.</b> Panorama of numerical optimization algorithms;
- Tutorial class on numerical optimization (<a href="https://jordan-frecon.com/courses/data-analysis/numerical-optimization"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Principle</li><li>Convex vs. nonconvex</li><li>Gradient descent; Impact of the step-size</li></ul>
- Presentations by students
<ul><li>Random search; SGD; Adam; BFGS; Coordinate descent; Linesearch</li><li>Newton's method; Genetic algorithm; Branch-and-bound algorithm</li></ul>
---
<b>Session 5.</b> Fundamental supervised models;
- Tutorial class on fundamental supervised models (<a href="https://jordan-frecon.com/courses/data-analysis/fundamental-supervised-models"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>K-nearest neighbors</li><li>Linear regression</li><li>Ridge regression</li></ul>
---
<b>Session 6.</b> Train and use simple supervised models to study penguins <i class="fas fa-clock"></i>;
- Lab exercise: Penguins of antartica (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab3-penguins-of-antarctica/lab3-penguins-of-antarctica.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Visualize meaningful features</li><li>Cross-validation; K-fold cross-validation</li><li>KNN Classification; Linear and KNN Regression</li></ul>
---
<b>Session 7.</b> Advanced supervised models;
- Tutorial class on advanced supervised models (<a href="https://jordan-frecon.com/courses/data-analysis/advanced-supervised-models"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Decision trees</li><li>Logistic regression (<a href="https://marimo.app/?mode=read&include-code=false&show-code=false&slug=vwwxcw"><i class="fas fa-sliders"></i> Animation</a>)</li><li>Support vector machine</li></ul>
---
<b>Session 8.</b> Forecast loan repayment success with supervised classification models <i class="fas fa-clock"></i>;
- Lab exercise: Loan prediction (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab4-loan-prediction/lab4-loan-prediction.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Model and visualize decision trees</li><li>Impact of the tree depth on the decision boundaries</li><li>Comparison with logistic regression and SVM</li></ul>
---
<b>Session 9.</b> Real-time camera classification using neural networks <i class="fas fa-clock"></i>;
- Tutorial class on neural networks (<a href="https://jordan-frecon.com/courses/data-analysis/neural-networks"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>Linear layers; Neurons; Activation function; Softmax layer</li><li>Backpropagation</li><li>Adversarial attacks</li></ul>
- Presentations by students
<ul><li>CNNs, RNNs, GNNs, GANs</li><li>Autoencoders; Attention mechanisms</li><li>Transfer learning; Interpretability; Ethical considerations</li></ul>
- Lab exercise: Live camera (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab5-live-camera/lab5-live-camera.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Train and evaluate multi-layer perceptrons</li><li>Prevent overfitting with early stopping</li><li>Hyperparameters and architecture search</li></ul>
---
<b>Session 10.</b> Apply unsupervised learning algorithms to predict digits <i class="fas fa-clock"></i>;
- Tutorial class on unsupervised learning (<a href="https://jordan-frecon.com/courses/data-analysis/unsupervised-learning"><i class="fas fa-chalkboard"></i> Slides</a>)
<ul><li>K-means</li><li>Principal component analysis</li></ul>
- Lab exercise: Digits recognition (<a href="https://jordan-frecon.com/jupyterlite/retro/notebooks/?path=data-analysis/lab6-digits-recognition/lab6-digits-recognition.ipynb"><i class="fab fa-python"></i> Jupyter notebook</a>)
<ul><li>Representing and clustering data in 2D</li><li>Choosing PCA components and K-means clusters</li></ul>
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



