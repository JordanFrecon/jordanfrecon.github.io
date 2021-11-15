---
title: Nonsmooth Nonconvex Composite Optimization
tags: [Nonconvex, Nonsmooth, Optimization]
style: fill
color: info
description: Presentation of efficient proximal solvers for nonconvex composite optimization
comments: true
biblio: [2010_Attouch_H_j-mor_pam,2013_Bolte_J_j-mp_palmnnp, 2016_Pock_T_j-is_ipalm,2021_Driggs_D_arxiv_spring,2016_Reddi_J_p-nips_psmnnfso,2012_Sra_S_p-nips_snips,2017_Bonettini_S_j-ip_clbpgmno,2019_Peng_W_j-ota_npiagmlc,2019_Gao_X_j-go_gsipalmnop,2019_Wang_Z_p-nips_spiderboost,2014_Xiao_L_j-jo_psgmpvr,2020_Pham_N_j-mlr_proxsarah]
---

> In progress. Upcoming: full sets of assumptions, convergence results and comparisons

**Notations**. Throughout this post, we denote by $$\gamma$$ the step-sizes.


## 1. Generic Optimization Problem

We consider the following generic optimization problem

$$ \underset{x\in\mathbb{R}^{m}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq J(x) + F(x) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure, and the function $$J$$ is a possibly non-smooth simple function.

**NIPS** {% include cite.html id="2012_Sra_S_p-nips_snips"%}. The *Nonconvex Inexact Proximal Splitting* method hinges on the splitting into smooth and nonsmooth parts..

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{k} J}\; \left( x_k - \gamma_{k} \nabla F(x_k) + \gamma_{k} e(x_k) \right)
    \end{array}\right.\end{array}$$

**ProxSVRG** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}. This algorithm is a nonconvex variant of the *Proximal Stochastic Variance Reduced Gradient* method devised in {% include cite.html id="2014_Xiao_L_j-jo_psgmpvr"%}. Note that ProxSVRG is not a
fully incremental algorithm since it requires calculation of the full gradient once per epoch.

$$ \begin{array}{l}\bar{x}_0 = x_0^{(M)}=x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	x_{k+1}^{(0)} = x_k^{(M)}\\
	g_{k+1} = \frac{1}{n}\sum_{i=1}^n \nabla F_i(\bar{x}_k)\\
		\text{for}\;m=0,1,\ldots,M-1\\[0.4ex]
    	\left\lfloor\begin{array}{l}
		\text{Uniformly pick batches } I_m \text{ (with replacement) of size } b\\
		\bar{g}_{k+1}^{(m)} = g_{k+1} + \frac{1}{b}\sum_{i_m\in I_m} \left( \nabla F_{i_m}(x_{k+1}^{(m)}) - \nabla F_{i_m}(\bar{x}_{k})\right)\\
		x_{k+1}^{(m+1)} = \mathrm{prox}_{\gamma J}\left( x_{k+1}^{(m)} - \gamma \bar{g}_{k+1}^{(m)}\right)
		\end{array}\right.\\
	\bar{x}_{k+1} = x_{k+1}^{(M)}
    \end{array}\right.\end{array}$$

**ProxSAGA** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}. 

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Uniformly pick batches } I_k \text{ and } J_k \text{ (with replacement) of size } b\\
	\bar{g}_k = \tilde{g}_k + \frac{1}{b}\sum_{i_k\in I_k} ( \nabla F_{i_k}(x_k) - \nabla F_{i_k}(\bar{x}_{k,i_k}))\\
	x_{k+1} \in \mathrm{prox}_{\gamma J}\; \left( x_k - \gamma \bar{g}_k\right)\\
	\bar{x}_{k+1,j}=x_{k} \text{ for } j\in J_k \text{ and } \bar{x}_{k,j} \text{ otherwise}\\
	\tilde{g}_{k+1} = \tilde{g}_k - \frac{1}{n} \sum_{j_k\in J_k} ( \nabla F_{j_k}(\bar{x}_{k,j_k}) - \nabla F_{j_k}(\bar{x}_{k+1,j_k}))
    \end{array}\right.\end{array}$$

**VMILAn** {% include cite.html id="2017_Bonettini_S_j-ip_clbpgmno"%}

**PIAG** {% include cite.html id="2019_Peng_W_j-ota_npiagmlc"%}

**Prox-SpiderBoost** {% include cite.html id="2019_Wang_Z_p-nips_spiderboost"%}.

**Prox-SARAH** {% include cite.html id="2020_Pham_N_j-mlr_proxsarah"%}.

## 2. Block-Structured Optimization Problem

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

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \underset{x\in\mathbb{R}^{m_1}}{\mathrm{argmin}}\; \mathcal{L}(x,y_k) + \frac{1}{2\gamma_{1,k}} \| x - x_k \|^2\\
	y_{k+1} \in \underset{y\in\mathbb{R}^{m_2}}{\mathrm{argmin}}\; \mathcal{L}(x_{k+1},y) + \frac{1}{2\gamma_{2,k}} \| y - y_k \|^2
    \end{array}\right.\end{array}$$

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

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \nabla_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \nabla_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$
	
	
**iPALM** {% include cite.html id="2016_Pock_T_j-is_ipalm"%}.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\tilde{x}_{k} = x_k + \alpha_{1,k}( x_k - x_{k-1})\\
	\bar{x}_k = x_k + \beta_{1,k}(x_k - x_{k-1})\\
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \tilde{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,y_k) \right)\\
	\tilde{y}_{k} = y_k + \alpha_{2,k}( y_k - y_{k-1})\\
	\bar{y}_k = y_k + \beta_{2,k}(y_k - y_{k-1})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \tilde{y}_k - \gamma_{2,k} \nabla_y F(x_{k+1},\bar{y}_k) \right)
    \end{array}\right.\end{array}$$
	
**GiPALM** {% include cite.html id="2019_Gao_X_j-go_gsipalmnop"%}. The *Gauss-Seidel type iPALM* ... 

$$ \begin{array}{l}(\bar{x}_0,\bar{y}_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \bar{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,\bar{y}_k) \right)\\
	\bar{x}_{k+1} = x_{k+1} + \rho_{1,k}(x_{k+1} - x_{k})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \bar{y}_k - \gamma_{2,k} \nabla_y F(\bar{x}_{k+1},\bar{y}_k) \right)\\
	\bar{y}_{k+1} = y_{k+1} + \rho_{2,k}(y_{k+1} - y_{k})\\
    \end{array}\right.\end{array}$$

**SPRING** {% include cite.html id="2021_Driggs_D_arxiv_spring"%}. The *Stochastic PRoximal alternatING linearized minimization* algorithm is a randomized version of PALM where the gradients are replaced by random estimates $$\tilde{\nabla} F$$ formed using the gradients estimated on mini-batches.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \tilde{\nabla}_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \tilde{\nabla}_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$
