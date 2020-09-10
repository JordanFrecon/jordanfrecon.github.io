---
layout: publication
title: Unveiling Groups of Related Tasks in Multi-Tasks Learning
authors: J. Frecon, S. Salzo, and M. Pontil
publication: Unpublished
year: 2020
doi:
type: unpublished
project: hyperparamOpt
---

A common approach in multi-task learning is to encourage the tasks to share a low dimensional representation. This has led to the popular method of trace norm regularization, which has proved effective in many applications. In this paper, we extend this approach by allowing the tasks to partition into different groups, within which trace norm regularization is separately applied. We propose a continuous bilevel optimization framework to simultaneously identify groups of related tasks and learn a low dimensional representation within each group. Hinging on recent results on the derivative of generalized matrix functions, we devise a smooth approximation of the upper-level objective via a dual forward-backward algorithm with Bregman distances. This allows us to solve the bilevel problem by a gradient-based scheme. Numerical experiments on synthetic and benchmark datasets support the effectiveness of the proposed method.