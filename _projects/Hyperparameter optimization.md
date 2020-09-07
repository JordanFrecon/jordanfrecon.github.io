---
name: Hyperparameter Optimization
tools: [Bilevel optimization, Nonsmooth, Bregman]
image: /images/projects/hyperparamOpt_preview.png
description: This project aims at optimizing the hyperparameters of models learned by minimizing nonsmooth functionals
layout: project
keyword: hyperparamOpt
--- 


![preview](/images/projects/hyperparamOpt_space.png)

{:.image-caption}
*Image Credit: Franceschi, L., et al. "Bilevel programming for hyperparameter optimization and meta-learning." (2018).*



With recent technological advances, high-dimensional datasets have become massively widespread in numerous applications ranging from social sciences to computational biology. In addition, in many statistical problems, the number of unknown parameters can be significantly larger than the number of data samples, thus leading to underdetermined and computationally intractable problems. In order to select the relevant parameters, a lot of work has been devoted to sparsity-inducing norms, thus resulting in non-smooth optimization problems. Note that since these problems are nonsmooth, the corresponding solvers are usually nonsmooth as well.

Besides the design efficient solvers, these models also require to tune many (sometimes thousands) hyperparameters whose value strongly affect the quality of the solution. As such, a simple grid search quickly becomes out of hand.


The principal contributions of this project are i) the design of smooth algorithms for non-smooth optimization problems and ii) the formulation of the hyperparameter learning problem as a continuous bilevel optimization problem where:
<li> the lower-level problem computes the solution given the hyper-parameters
<li> the upper-level problem aims at tuning the hyperparameters so that the lower-level solution is optimal in some sense (e.g., lower validation error, sparser representation)

