---
layout: publication
title: Principled Backpropagation-Free Training via Layerwise Fenchel-Young Lifting
authors: D. Pinto-Suarez, J. Patracone and M. Sebban
publication: preprint
year: 2026
doi:
image: False
type: preprint
project: deepLearning
nopdf: True
nobib: True
---

Training neural networks is typically performed using backpropagation, which tightly couples layers and requires storing the full computational graph. In this work, we study lifted training approaches, where intermediate activations are treated as optimization variables, and show that their underlying structure admits an exact characterization. Specifically, we prove that the compositional structure of neural networks is equivalent to the vanishing of Fenchel-Young gaps induced by Legendre functions, providing a principled measure of deviation from the forward pass. This perspective reveals that lifted activations act as regularized predictors, inducing an implicit regularization effect that improves generalization in practice. Building on this foundation, we propose Lifty, a memory-efficient backpropagation-free training algorithm with closed-form updates supporting a broad class of monotone activations and convex regularizers. We further establish convergence guarantees, showing linear convergence to stationary points of the original training objective under mild assumptions.
