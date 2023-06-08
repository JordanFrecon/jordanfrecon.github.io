---
layout: publication
title: Relax and Penalize - a New Bilevel Approach to Mixed-Binary Hyperparameter Optimization
authors: M. De Santis, J. Frecon, F. Rinaldo, S. Salzo and M. Schmidt
publication: Under review
year: 2023
doi:
image: True
type: unpublished
project: hyperparamOpt
---


In recent years, bilevel approaches have become very popular to efficiently estimate high-dimensional hyperparameters of machine learning models. However, to date, binary parameters are handled by *continuous relaxation and rounding* strategies, which could lead to inconsistent solutions. In this context, we tackle the challenging optimization of mixed-binary hyperparameters by resorting to an equivalent continuous bilevel reformulation based on an appropriate penalty term. We propose an algorithmic framework that, under suitable assumptions, is guaranteed to provide mixed-binary solutions. Moreover, the generality of the method allows to safely use existing continuous bilevel solvers within the proposed framework. We evaluate the performance of our approach for a specific machine learning problem, i.e., the estimation of the group-sparsity structure in regression problems. Reported results clearly show that our method outperforms state-of-the-art approaches based on *relaxation and rounding*.
