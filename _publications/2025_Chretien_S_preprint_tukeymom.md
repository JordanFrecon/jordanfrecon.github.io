---
layout: publication
title: Tukey-Median of Means-Gradients for Langevin Dynamics - a Robust Approach to Fitting Machine Learning Models
authors: S. Chrétien, B. Gao, J. Patracone, A.-R. Mezidi and O. Alata
publication: preprint
year: 2025
doi:
image: False
type: preprint
project: physics
nopdf: True
nobib: True
---

Median-of-Means (MoM) estimators have emerged as powerful tools for robust learning when data are corrupted by outliers or exhibit heavy-tailed distributions. However, in-corporating MoM principles to design robust loss functions typically renders the underlying optimization problem highly non-convex, posing significant challenges for the design of efficient, polynomial-time algorithms. In this work, we apply MoM principle at the gradient level using Tukey median to robustly estimate the uncorrupted gradient. More precisely, we propose a novel Tukey MoM-based variant of Stochastic Gradient Langevin Dynamics (TMoM-SGLD) which enjoys strong theoretical guarantees, including hitting-time bounds showing convergence to approximate stationary points of theunderlying uncorrupted loss. Contrary to prior MoM estimators, our results hold in broad non-convex settings, making TMoM-SGLD particularly relevant to modern machine learning tasks. Experiments on corrupted linear regression tasks demonstrate that, unlike prior approaches, TMoM-SGLD remains effective even under high levels of outlier contamination. Additionally, we further validate our approach on a deep learning task, showing its capabilities to robustly train neural networks.
