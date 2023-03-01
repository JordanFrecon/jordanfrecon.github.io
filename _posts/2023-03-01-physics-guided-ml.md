---
title: Physics-Guided Machine Learning
tags: [Neural Network, PDE]
style: fill
color: info
description: Should be hidden
comments: true
hidden: true
biblio: [2018_Raissi_M_j-cp_pinns, 2022-Kirchmeyer_M_p-icml_coda,2022-Kirchmeyer_M_p-icml_coda]
---

> Work in progress

In what follows, we distinguish two cases wether the PDE describing the underlying dynamic is known or not.

## 1. Models

**PINNs** {% include cite.html id="2018_Raissi_M_j-cp_pinns"%} <span class="badge badge-pill text-success border border-success">PDE-known</span>. This paper first introduced the concept of *Physics-Informed Neural Networks* (PINNs). Instead of resorting to numerical PDE solvers, the originality of this work is to train a neural network to predict the solution of a known PDE at any spatio-temporal point. More formally, it relies on a neural network $$f_\theta$$, with parameters $$\theta$$, whose goal is to map $$[x,t]$$ to the solution $$u([x,t])$$ of the PDE at $$[x,t]$$. The parameters $$\theta$$ are trained so that three conditions are met:
- The PDE is satisfied
- The boundary conditions (BC) are satisfied 
- The initial conditions (IC) are satisfied

In practice, $$\ell_2^2$$ residuals (i.e., MSEs) are computed on some pre-defined spatio-temporal points to quantify, to what extents, each of the condition is satisfied. As such, $$\theta$$ is found so that the sum of $$\mathcal{L}_{\rm PDE}$$, $$\mathcal{L}_{\rm BC}$$ and $$\mathcal{L}_{\rm IC}$$ is minimized

**FNO** {% include cite.html id="2021_Li_Z_p-iclr_fourier"%} <span class="badge badge-pill text-danger border border-danger">PDE-unknown</span>. *Fourier Neural Operators* (FNO)

## 2. Meta-Learning

**CoDA** {%include cite.html id="2022-Kirchmeyer_M_p-icml_coda"%} <span class="badge badge-pill text-danger border border-danger">PDE-unknown</span>. The *COntext-informed Dynamics Adaptation* (CoDA) method ...

<img class="post-img-themed" src="/images/posts/physics-ml/coda.png"/>
