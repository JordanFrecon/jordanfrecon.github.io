---
title: Non-smooth non-convex optimization
tags: [Non-convex, Optimization]
style: fill
color: info
description: Presentation of efficient proximal solvers for non-convex optimization
comments: true
biblio: [2010_Attouch_H_j-mor_pam,2013_Bolte_J_j-mp_palmnnp, 2016_Pock_T_j-is_ipalm,2021_Driggs_D_arxiv_spring,2016_Reddi_J_p-nips_psmnnfso,2012_Sra_S_p-nips_snips,2017_Bonettini_S_j-ip_clbpgmno,2019_Peng_W_j-ota_npiagmlc,2019_Gao_X_j-go_gsipalmnop,2016_Reddi_S_p_allerton_sfmno]
---

> In progress. Upcoming: convergence results and comparisons


## 1. Constrained Smooth Optimization Problem

We consider peculiar optimization problems of the form

$$ \underset{x\in\Omega}{\mathrm{minimize}}\;  F(x) $$

where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure and where $$\Omega\subseteq\mathbb{R}^{m}$$ is convex and compact.

**SFW** {% include cite.html id="2016_Reddi_S_p_allerton_sfmno"%}.

## 2. Generic Optimization Problem

We consider the following generic optimization problem

$$ \underset{x\in\mathbb{R}^{m}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq J(x) + F(x) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure, and the function $$J$$ is a possibly non-smooth simple function.

**NIPS** {% include cite.html id="2012_Sra_S_p-nips_snips"%}. The *Nonconvex Inexact Proximal Splitting* method hinges on the splitting into smooth and nonsmooth parts..

$$ x_0\in\mathbb{R}^{m}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{k} J}\; \left( x_k - \gamma_{k} \nabla_x F(x_k) + \gamma_{k} e(x_k) \right)
    \end{array}\right.$$

**ProxSVRG** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}

**ProxSAGA** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}

**VMILAn** {% include cite.html id="2017_Bonettini_S_j-ip_clbpgmno"%}

**PIAG** {% include cite.html id="2019_Peng_W_j-ota_npiagmlc"%}

## 3. Block-Structured Optimization Problem

We consider the following block-structured optimization problem

$$ \underset{x\in\mathbb{R}^{m_1}, y\in\mathbb{R}^{m_2}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x,y) \triangleq J(x) + F(x,y) + R(y) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x,y)$$ has a finite-sum structure, and functions $$J$$ and $$R$$ are possibly non-smooth functions.


{% include definition.html title="Assumptions" content="Throughout this section, we consider the following assumptions.
- $$J\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ and $$R\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ are proper lower semi-continuous functions that are bounded from below. 
- $$F_i\colon \mathbb{R}^{m_1} \times \mathbb{R}^{m_2} \to \mathbb{R}$$ are finite-valued, differentiable and their gradients are $$M$$-Lipschitz continuous on bounded sets of $$\mathbb{R}^{m_1} \times \mathbb{R}^{m_2}$$.
- The objective $$\mathcal{L}$$ is bounded from below.
" %}

> No convexity assumption is imposed on any of the functions $$J$$, $$F_i$$, $$R$$. 


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
	
	
**iPALM** {% include cite.html id="2016_Pock_T_j-is_ipalm"%}.

$$ (x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\tilde{x}_{k} = x_k + \alpha_{1,k}( x_k - x_{k-1})\\
	\bar{x}_k = x_k + \beta_{1,k}(x_k - x_{k-1})\\
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \tilde{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,y_k) \right)\\
	\tilde{y}_{k} = y_k + \alpha_{2,k}( y_k - y_{k-1})\\
	\bar{y}_k = y_k + \beta_{2,k}(y_k - y_{k-1})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \tilde{y}_k - \gamma_{2,k} \nabla_y F(x_{k+1},\bar{y}_k) \right)
    \end{array}\right.$$
	
**GiPALM** {% include cite.html id="2019_Gao_X_j-go_gsipalmnop"%}. The *Gauss-Seidel type iPALM* ... 

$$ (\bar{x}_0,\bar{y}_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \bar{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,\bar{y}_k) \right)\\
	\bar{x}_{k+1} = x_{k+1} + \rho_{1,k}(x_{k+1} - x_{k})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \bar{y}_k - \gamma_{2,k} \nabla_y F(\bar{x}_{k+1},\bar{y}_k) \right)\\
	\bar{y}_{k+1} = y_{k+1} + \rho_{2,k}(y_{k+1} - y_{k})\\
    \end{array}\right.$$

**SPRING** {% include cite.html id="2021_Driggs_D_arxiv_spring"%}. The *Stochastic PRoximal alternatING linearized minimization* algorithm is a randomized version of PALM where the gradients are replaced by random estimates formed using the gradients estimated on mini-batches.

$$ (x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \tilde{\nabla}_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \tilde{\nabla}_y F(x_{k+1},y_k) \right)
    \end{array}\right.$$
