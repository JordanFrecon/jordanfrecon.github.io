---
name: Piecewise constant denoising
tools: [Potts model, Total-variation, Online denoising, Regularization parameter, Multivariate denoising]
image: /images/projects/piecewiseConstantDenoising_preview.png
description: Various contributions about piecewise constant denoising.
layout: project
keyword: piecewiseCstDenoising
---

Piecewise constant denoising, tightly related to change-point detection, is of considerable potential interest in numerous signal processing applications including, e.g., econometrics and biomedical analysis. Denoising the piecewise constant information has been addressed by several strategies, such as Cusum procedures or hierarchical Bayesian inference frameworks. Here, we focus on functional optimization formulations, involving either the L1-norm or the L0-pseudo-norm of the first differences of the signal, leading to the Total-variation (TV) and Potts models, respectively.


While these optimization methods yield low computational time, they require the selection of a regularization parameter, whose value significantly impacts the achieved solution, and whose automated selection remains an involved and challenging problem. In addition, it is well known and documented that the unique solution of the TV optimization problem can be reached by iterative fixed-point algorithms.

The purpose of this project is to
<li> devise an automatic and unsupervised selection of the regularization parameter
<li> develop an online algorithm for denoising multivariate data streams sharing the same change-points
