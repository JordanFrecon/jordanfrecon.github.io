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

In what follows, we distinguish cases wether the PDE describing the underlying is known or not.

**PINNs** {% include cite.html id="2018_Raissi_M_j-cp_pinns"%} <span class="badge badge-pill text-success border border-success">PDE known</span>. This paper first introduced the concept of *Physics-Informed Neural Networks* (PINNs).
A neural network $f_\theta$, with parameters $\theta$, is used to learn the mapping $[x,t]\to u([x,t])$. The parameters $\theta$ are trained so that three conditions are met:
- The PDE is satisfied
- The boundary conditions are satisfied 
- The initial conditions are satisfied
In practice, $\ell_2^2$ residuals are computed on some spatio-temporal points, hence leading to three terms to minimize $\mathcal{L}_{\rm PDE}$, $\mathcal{L}_{\rm BC}$ and $\mathcal{L}_{\rm IC}$
