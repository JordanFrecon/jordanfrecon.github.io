---
layout: publication
title: Bilevel Optimization of Groupwise Penalties
authors: J. Frecon, S. Salzo, and M. Pontil
publication: Unpublished
year: 2020
doi:
type: unpublished
project: hyperparamOpt
---

Groupwise penalties are largely used in regularization-based inverse problems to enforce some group structure on the features to be learned. The most popular instance of such type penalties is notably encountered in the Group Lasso problem where the $\ell_{1,2}$ norm sparsity at the group level. However, most of existing methods require the group structure to be known a priori. In practice, this may be a too strong assumption, potentially hampering the effectiveness of the regularization method. To circumvent this issue, we present a method to estimate the group structure by means of a continuous bilevel optimization problem where the data is split into training and validation sets.