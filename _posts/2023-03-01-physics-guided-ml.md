---
title: Physics-Guided Machine Learning
tags: [Neural Network, PDE]
style: fill
color: info
description: Should be hidden
comments: true
hidden: true
biblio: [2018_Raissi_M_j-cp_pinns]
---

**PINNs** {% include cite.html id="2018_Raissi_M_j-cp_pinns"%}. This paper first introduced the concept of *Physics-Informed Neural Networks* (PINNs).
A neural network $f_\theta$, with parameters $\theta$, is used to learn the mapping $[x,t]\to u([x,t])$. The parameters $\theta$ are trained so that three conditions are met:
- The PDE is satisfied on some given spatial-temporal points, called *collocation points*.
- The boundary conditions are satisfied
- The initial conditions are satisfied 
