---
title: Non-smooth non-convex optimization
tags: [Non-convex, Optimization]
style: fill
color: info
description: Presentation of efficient proximal solvers for non-convex optimization
comments: true
biblio: [2010_Attouch_H_j-mor_pam,2013_Bolte_J_j-mp_palmnnp, 2021_Driggs_D_arxiv_spring]
---

> In progress


## 1. Optimization problem

We consider the following generic optimization problem

$$ \underset{x\in\mathbb{R}^{m_1}, y\in\mathbb{R}^{m_2}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x,y) \triangleq J(x) + F(x,y) + R(y) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x,y)$$ has a finite-sum structure, and functions $$J$$ and $$R$$ are possibly non-smooth functions



{% include definition.html title="Assumptions" content="Throughout this post, we consider the following assumptions.
- $$J\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ and $$R\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ are proper lower semi-continuous functions that are bounded from below. 
- $$F_i\colon \mathbb{R}^{m_1} \times \mathbb{R}^{m_2} \to \mathbb{R}$$ are finite-valued, differentiable and their gradients are $$M$$-Lipschitz continuous on bounded sets of $$\mathbb{R}^{m_1} \times \mathbb{R}^{m_2}$$.
- The objective $$\mathcal{L}$$ is bounded from below.
" %}

> No convexity assunption is imposed on any of the functions $$J$$, $$F_i$$, $$R$$. 


## 2. Full-batch Algorithms


**PAM** {% include cite.html id="2010_Attouch_H_j-mor_pam"%}. The *Proximal Alternating Minimization* method

$$ (x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \underset{x\in\mathbb{R}^{m_1}}{\mathrm{argmin}}\; \mathcal{L}(x,y_k) + \frac{1}{2\gamma_{1,k}} \| x - x_k \|^2\\
	y_{k+1} \in \underset{y\in\mathbb{R}^{m_2}}{\mathrm{argmin}}\; \mathcal{L}(x_{k+1},y) + \frac{1}{2\gamma_{2,k}} \| y - y_k \|^2
    \end{array}\right.$$

**PALM** {% include cite.html id="2013_Bolte_J_j-mp_palmnnp"%}. The *Proximal Alternating Linearized Minimization* method circumvent the limitation of PAM by replacing the subproblems with their proximal linearizations :

$$
\begin{align}
\mathcal{L}_{1,k}(x)&\triangleq F(x_k,y_k) + \nabla_x F(x_k,y_k)^
\top(x-x_k) + \frac{1}{2\gamma_{1,k}}\|x_k - x\|^2 + J(x)\\
\mathcal{L}_{2,k}(y)&\triangleq F(x_{k+1},y_k) + \nabla_y F(x_{k+1},y_k)^
\top(y-y_k) + \frac{1}{2\gamma_{2,k}}\|y_k - y\|^2 + R(y)
\end{align}
$$

This results in the following PALM's iterations:

$$ (x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \nabla_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \nabla_y F(x_{k+1},y_k) \right)
    \end{array}\right.$$

## Mini-batch Algorithms

**SPRING** {% include cite.html id="2021_Driggs_D_arxiv_spring"%}. The *Stochastic PRoximal alternatING linearized minimization* algorithm is a randomized version of PALM where the gradients are replaced by random estimates formed using the gradients estimated on mini-batches.

$$ (x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \tilde{\nabla}_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \tilde{\nabla}_y F(x_{k+1},y_k) \right)
    \end{array}\right.$$
